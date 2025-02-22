"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        padding: "15px 20px",
        background: "linear-gradient(135deg, #f6d365 0%, #fda085 100%)",
        borderBottomLeftRadius: "20px",
        borderBottomRightRadius: "20px",
        boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
        zIndex: 1000,
      }}
    >
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* 左側：ホームリンク */}
        <div>
          <Link
            href="/"
            style={{
              color: "#fff",
              fontWeight: "bold",
              textDecoration: "none",
              fontSize: "1.2rem",
            }}
          >
            ホーム
          </Link>
        </div>
        {/* 右側：お問い合わせ、ログインリンク */}
        <div>
          <Link
            href="/contact"
            style={{
              color: "#fff",
              fontWeight: "bold",
              textDecoration: "none",
              marginRight: "10px",
              fontSize: "1.1rem",
            }}
          >
            お問い合わせ
          </Link>
          <Link
            href="/login"
            style={{
              color: "#fff",
              fontWeight: "bold",
              textDecoration: "none",
              fontSize: "1.1rem",
            }}
          >
            ログイン
          </Link>
        </div>
      </nav>
    </header>
  );
}
