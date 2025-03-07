// lib/mailer.ts
import nodemailer from "nodemailer";

// nodemailer のトランスポーターを作成（環境変数を利用する場合）
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,         // 例: smtp.gmail.com
  port: Number(process.env.EMAIL_PORT),   // 例: 587
  secure: false,                          // TLS が必要なら true に変更
  auth: {
    user: process.env.EMAIL_USER,         // 例: your-email@gmail.com
    pass: process.env.EMAIL_PASS,         // 例: あなたのパスワードまたはアプリパスワード
  },
});

// 管理者（takashi.yamada0606@gmail.com）に通知メールを送信する関数
export async function sendContactNotification({
  name,
  email,
  message,
}: {
  name: string;
  email: string;
  message: string;
}) {
  const mailOptions = {
    from: '"お問い合わせ" <no-reply@example.com>',
    to: "takashi.yamada0606@gmail.com", // 管理者のメールアドレスを直接指定
    subject: "新しいお問い合わせを受信しました",
    text: `お名前: ${name}\nメール: ${email}\nメッセージ: ${message}`,
    // html: "<p>HTML形式で内容を表示する場合</p>",
  };

  return transporter.sendMail(mailOptions);
}
