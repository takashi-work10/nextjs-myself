"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Button from "@mui/material/Button";

export default function ResultPage() {
  const [result, setResult] = useState<any>(null);

  useEffect(() => {
    async function fetchResult() {
      try {
        const res = await fetch("/api/saveDiagnosis", { method: "GET" });
        if (!res.ok) {
          throw new Error("APIからの応答が良くありません: " + res.status);
        }
        const data = await res.json();
        console.log("取得したデータ:", data);  // デバッグ用
        setResult(data);
      } catch (error) {
        console.error("結果の取得に失敗しました:", error);
      }
    }
    fetchResult();
  }, []);

  if (!result) {
    return <div style={{ padding: "20px" }}>結果を読み込み中…</div>;
  }

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>診断結果</h1>
      <p>パターン: {result.pattern}</p>
      <p>回答: {result.answers.join(", ")}</p>
      <Link href="/">
        <Button
          variant="contained"
          sx={{ fontSize: "20px", marginTop: "20px", backgroundColor: "#CF9FFF", color: "#fff" }}
        >
          ホームに戻る
        </Button>
      </Link>
    </div>
  );
}
