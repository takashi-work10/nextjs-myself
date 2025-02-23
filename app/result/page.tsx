"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Button from "@mui/material/Button";
import axios from "axios";

interface DiagnosisResult {
  pattern: string;
  answers: number[];
}

interface PatternDetail {
  intro: string;
  title: string;
  description: string[];
  recommended:  (string | React.ReactNode)[];
}

// パターンごとの詳細オブジェクト
const patternDetails: Record<string, PatternDetail> = {
  A: {
    intro: "楽しいのが一番！",
    title: "ゲーム＆映画フリークタイプ",
    description: [
      "好きなゲームはとことんやり込む。",
      "映画やYouTube動画も『知らない英語でも面白そう！』と興味津々。",
      "ゲームの中の英語が読めたらもっと勝てるかも！と好奇心旺盛。"
    ],
    recommended: [
      "スイッチの英語設定でゲームプレイ！操作画面やセリフを英語モードにして、英語を話しながら遊ぶと伸びていく。",
      "例えば、スプラトゥーン、フォートナイトを使って英語でゲームをしてみよう！",
      <>
      自分に最適な勉強法、1週間のスケジュールを詳しく知りたい人はログインしたら、より詳細が見れます →
      <Link
        href="/login"
        style={{ color: "#FF6F91", textDecoration: "underline" }}
      >
        ログインする
      </Link>
    </>
  
    ]
  },
  B: {
    intro: "どんどん進めていこう！",
    title: "真面目コツコツ！英検一直線タイプ",
    description: [
      "目標があると、毎日コツコツ続けるのが苦にならない。",
      "過去問や問題集でのトレーニングを重ねるほうが安心するタイプ。",
    ],
    recommended: [
      "英検過去問や問題集をフル活用し、計画的に学習時間を確保。",
      "覚えた単語や熟語を数値化して進捗を見える化するとモチベーションが続きやすい。",
      <>
      自分に最適な勉強法、1週間のスケジュールを詳しく知りたい人はログインしたら、より詳細が見れます →
      <Link
        href="/login"
        style={{ color: "#FF6F91", textDecoration: "underline" }}
      >
        ログインする
      </Link>
    </>
    ]
  },
  C: {
    intro: "実践で学んでいく！",
    title: "友だちとワイワイ！コミュ力アップタイプ",
    description: [
      "友だちと一緒にいると楽しく、英語も会話を通じて覚えたい。",
      "誰かとゲーム感覚で学ぶと本領発揮。",
    ],
    recommended: [
      "グループレッスンやオンライン英会話で、ロールプレイや英語ゲームに挑戦。",
      "友だち同士で簡単な英語チャットを試みたり、英語しりとりなどで語彙を増やす。",
      "自分に最適な勉強法、1週間のスケジュールを詳しく知りたい人はログインしたら、より詳細が見れます→",
    ]
  },
  D: {
    intro: "焦らず自分のペースで！",
    title: "おうちまったり＋親子でサポートタイプ",
    description: [
      "落ち着いた環境で、親子一緒にコツコツと学びたい。",
      "自分のペースを大事にしつつ、家族のフォローを受けられるのが嬉しい。",
    ],
    recommended: [
      "英語絵本の読み聞かせやタブレット学習など、家で取り組みやすい教材を活用。",
      "保護者と一緒に学習計画を立てるとスムーズ。",
      <>
      自分に最適な勉強法、1週間のスケジュールを詳しく知りたい人はログインしたら、より詳細が見れます →
      <Link
        href="/login"
        style={{ color: "#FF6F91", textDecoration: "underline" }}
      >
        ログインする
      </Link>
    </>
    ]
  }
};

export default function ResultPage() {
  const [result, setResult] = useState<DiagnosisResult | null>(null);

  useEffect(() => {
    async function fetchResult() {
      try {
        const res = await axios.get("/api/saveDiagnosis");
        console.log("取得したデータ:", res.data);
        setResult(res.data);
      } catch (error) {
        console.error("結果の取得に失敗しました:", error);
      }
    }
    fetchResult();
  }, []);

  if (!result) {
    return <div style={{ padding: "20px" }}>結果を読み込み中…</div>;
  }

  const currentPattern = patternDetails[result.pattern];
  if (!currentPattern) {
    return <div>診断パターンが見つかりませんでした。</div>;
  }

  return (
    <div style={{
      padding: "20px",
      textAlign: "center",
      background: "linear-gradient(135deg, #FFDEE9 0%, #B5FFFC 100%)",
      minHeight: "100vh",
      fontFamily: "'Comic Sans MS', cursive, sans-serif"
    }}>
      <div style={{
        background: "#fff",
        borderRadius: "20px",
        boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
        margin: "auto",
        maxWidth: "600px",
        padding: "30px"
      }}>
        <h1 style={{ color: "#FF6F91", fontSize: "28px" }}>{currentPattern.intro}</h1>
        <h2 style={{ color: "#FF9671", fontSize: "24px", marginBottom: "20px" }}>{currentPattern.title}</h2>

        <div style={{ textAlign: "left", marginBottom: "20px" }}>
          <h3 style={{ color: "#FFC75F", fontSize: "20px" }}>こんな子かも…</h3>
          <ul style={{ listStyle: "disc", marginLeft: "20px" }}>
            {currentPattern.description.map((desc, index) => (
              <li key={index} style={{ marginBottom: "10px" }}>{desc}</li>
            ))}
          </ul>
        </div>

        <div style={{ textAlign: "left", marginBottom: "20px" }}>
          <h3 style={{ color: "#6B5B95", fontSize: "20px" }}>おすすめ学習スタイル</h3>
          <ul style={{ listStyle: "circle", marginLeft: "20px" }}>
            {currentPattern.recommended.map((rec, index) => (
              <li key={index} style={{ marginBottom: "10px" }}>{rec}</li>
            ))}
          </ul>
        </div>

        <div style={{ marginTop: "30px" }}>
          <Link href="/">
            <Button
              variant="contained"
              sx={{
                fontSize: "20px",
                backgroundColor: "#9CD1FF",
                color: "#fff",
                padding: "10px 20px",
                borderRadius: "30px"
              }}
            >
              ホームに戻る
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
