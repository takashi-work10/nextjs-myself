// my-notification-app/socket-server.ts
import * as dotenv from "dotenv";
dotenv.config({ path: ".env.local" }); // プロジェクトルートの .env.local から環境変数を読み込む

import { createServer } from "http";
import { Server } from "socket.io";
import { connectToDatabase } from "../lib/db"; // DB接続関数（lib/db.ts）
import Notification from "../models/Notification"; // 通知専用モデル（models/Notification.ts）

const httpServer = createServer();
const io = new Server(httpServer, {
  cors: { origin: "*" } // すべてのオリジンからの接続を許可
});

// ユーザーIDと socketID の対応を管理するマップ
const userSocketMap = new Map<string, string[]>();

io.on("connection", (socket) => {
  console.log("新しいユーザーが接続:", socket.id);

  // クライアントから「register」イベントでユーザーIDを受け取る
  socket.on("register", (userId: string) => {
    if (userSocketMap.has(userId)) {
      userSocketMap.get(userId)?.push(socket.id);
    } else {
      userSocketMap.set(userId, [socket.id]);
    }
    console.log(`ユーザー ${userId} が socket ${socket.id} として登録されました`);
  });

  // 通知送信要求を受け取る（postId を含む）
  socket.on("sendNotification", async (data: { receiverId: string; message: string; postId: string }) => {
    console.log("通知送信要求:", data);
    try {
      // DBに接続して通知データを保存
      await connectToDatabase();
      // 型エラー回避のため any としてキャスト
      const savedNotification = await (Notification as any).create({
        receiver: data.receiverId,
        message: data.message,
        postId: data.postId,
      });
      console.log("通知DBに保存:", savedNotification);
    } catch (error) {
      console.error("通知保存エラー:", error);
    }
    
    const receiverSocketIds = userSocketMap.get(data.receiverId);
    if (receiverSocketIds && receiverSocketIds.length > 0) {
      receiverSocketIds.forEach((socketId) => {
        io.to(socketId).emit("receiveNotification", { message: data.message, postId: data.postId });
      });
    } else {
      console.log(`ユーザー ${data.receiverId} の接続が見つかりません`);
    }
  });

  socket.on("disconnect", () => {
    console.log("ユーザーが切断:", socket.id);
    // 切断した socket.id を各ユーザーの登録情報から削除
    for (const [userId, socketIds] of userSocketMap.entries()) {
      const updatedSocketIds = socketIds.filter((id) => id !== socket.id);
      if (updatedSocketIds.length > 0) {
        userSocketMap.set(userId, updatedSocketIds);
      } else {
        userSocketMap.delete(userId);
      }
    }
  });
});

httpServer.listen(3001, () => {
  console.log("通知サーバーはポート3001で動いています");
});
