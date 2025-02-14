"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer
      style={{
        padding: "10px",           // 余白（内側の隙間）を作ります
        backgroundColor: "#eee",   // 背景色を薄いグレーにします
        textAlign: "center",       // 中央揃えにします
        marginTop: "20px",         // 上側に少し空きを作ります（ページとの間隔）
      }}
    >
      <p>© 2025 My Next.js App</p>
      <nav>
        {/* フッターにもリンクを追加できます */}
        <Link href="/">ホーム</Link>
        {" | "}
        <Link href="/contact">お問い合わせ</Link>
      </nav>
    </footer>
  );
}
