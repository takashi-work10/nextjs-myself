// app/api/contact/route.ts
import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db";
import Contact from "@/models/Contact";
import { sendContactNotification } from "@/lib/mailer"; // 先ほどのメール送信関数をインポート

export async function POST(request: Request) {
  try {
    await connectToDatabase();

    const body = await request.json();
    const { name, email, message } = body;
    
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "すべての項目（お名前、メールアドレス、メッセージ）が必要です。" },
        { status: 400 }
      );
    }

    // データベースに保存
    const newContact = await Contact.create({ name, email, message });

    // 管理者への通知メール送信（非同期で実行）
    sendContactNotification({ name, email, message })
      .then(() => console.log("通知メール送信成功"))
      .catch((err) => console.error("通知メール送信失敗", err));

    return NextResponse.json(
      { message: "お問い合わせが正常に送信されました。", data: newContact },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing contact request:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
