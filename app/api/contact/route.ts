import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db";
import Contact from "@/models/Contact";

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

    return NextResponse.json(
      { message: "お問い合わせが正常に送信されました。", data: newContact },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing contact request:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
