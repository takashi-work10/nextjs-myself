"use client";

import { useState } from "react";
import Button from '@mui/material/Button';

export default function ContactPage() {
  // それぞれの入力欄の値を管理するための箱を用意します
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  // 送信後に表示するメッセージを入れる箱
  const [status, setStatus] = useState("");

  // フォームを送信したときに動く関数です
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // ページがリロードされるのを防ぎます

    // ここでは、入力された内容をコンソールに表示するだけです
    // 実際はここでサーバーにデータを送る処理を追加できます
    console.log({ name, email, message });

    // 送信が成功したと見なして、成功メッセージを表示します
    setStatus("お問い合わせありがとうございました！");

    // 入力欄を空にします
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px", height: "100%" }}>
      <h1 style={{marginTop: "50px"}}>お問い合わせ</h1>
      <form onSubmit={handleSubmit}>
        {/* お名前の入力欄 */}
        <div style={{ marginBottom: "10px" }}>
          <label>お名前：</label>
          <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{ border: "solid 1px #ccc", width: "100%", padding: "8px", marginTop: "5px" }}
              required
            />
        </div>
        {/* メールアドレスの入力欄 */}
        <div style={{ marginBottom: "10px" }}>
          <label>
            メールアドレス：
          </label>
          <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ border: "solid 1px #ccc", width: "100%", padding: "8px", marginTop: "5px" }}
              required
            />
        </div>
        {/* メッセージの入力欄 */}
        <div style={{ marginBottom: "10px" }}>
          <label>
            メッセージ：
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              style={{ border: "solid 1px #ccc", width: "100%", padding: "8px", marginTop: "5px" }}
              rows={5}
              required
            />
          </label>
        </div>
        <Button variant="contained" type="submit" style={{ padding: "10px 20px" }}>
          送信
        </Button>
      </form>
      {/* 送信後のメッセージを表示 */}
      {status && <p style={{ color: "green", marginTop: "20px" }}>{status}</p>}
    </div>
  );
}
