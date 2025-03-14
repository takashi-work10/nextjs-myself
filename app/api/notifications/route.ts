// app/api/notifications/route.ts
import { NextResponse } from "next/server";
import { connectToDatabase } from "../../../lib/db"; // db.ts からインポート（パスはプロジェクト構成に合わせて調整）
import Notification from "../../../models/Notification"; // 通知専用モデルをインポート（パスを確認してください）

export async function POST(request: Request) {
  // データベースに接続
  await connectToDatabase();

  // リクエストから通知データを取得
  const data = await request.json();

  try {
    // 通知データをDBに保存
    const notification = await Notification.create(data);
    return NextResponse.json(notification, { status: 201 });
  } catch (error) {
    console.error("通知保存エラー:", error);
    return NextResponse.json({ error: "通知保存エラー" }, { status: 500 });
  }
}
