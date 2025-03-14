// models/Notification.ts
import mongoose from "mongoose";

const NotificationSchema = new mongoose.Schema({
  receiver: { type: String, required: true },  // 通知を受け取るユーザーのID
  message: { type: String, required: true },   // 通知メッセージ
  postId: { type: String, required: true },      // 対象の投稿ID
  read: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Notification || mongoose.model("Notification", NotificationSchema);
