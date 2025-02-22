"use client";

import React, { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Box, Button, FormControl, FormLabel, Radio, RadioGroup, SvgIcon, Typography } from "@mui/material";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import axios from "axios";

// 質問のリスト
const questions: string[] = [
  // 1～4: ゲーム＆映画フリークタイプ
  "Q1: 好きなゲームなら、英語モードで遊んでみたい。",
  "Q2: いつも見ているアニメや映画を、英語で観てみるのはわくわくする。",
  "Q3: ゲームで見かける英語の単語は、「これ何だろう？」とすぐ調べたくなる。",
  "Q4: 問題集より、ゲームや映画など“楽しみながら英語に触れる”ほうが好き。",

  // 5～8: 真面目コツコツ！英検一直線タイプ
  "Q5: 目標があると、毎日コツコツ続けるのは苦にならない。",
  "Q6: 過去問や問題集でのトレーニングを、しっかり積み重ねるほうが安心する。",
  "Q7: 覚えた単語やフレーズの数を記録して、増えていくのを見るのが嬉しい。",
  "Q8: 毎日どのくらい勉強したかをチェックできると、やる気がアップする。",

  // 9～12: 友だちとワイワイ！コミュ力アップタイプ
  "Q9: 友だちやクラスメイトと一緒に勉強すると、やる気が出て楽しい。",
  "Q10: 英語を話すとき、間違えても「みんなで笑い合いながら覚えていきたい」と思う。",
  "Q11: 教室やオンラインで英語ゲームをするほうが、自主勉強よりも性に合っている。",
  "Q12: 英語は「会話しながら自然に覚えたい」と感じる。",

  // 13～16: おうちまったり＋親子でサポートタイプ
  "Q13: おうちで家族と一緒に勉強していると落ち着いて取り組める。",
  "Q14: 自分のペースで学習を進めたいので、家でじっくりやるほうが合う。",
  "Q15: 保護者や家庭教師にそばでサポートしてもらうと、理解しやすくて助かる。",
  "Q16: 英会話スクールに通うより、家でコツコツ取り組むほうが安心できる。",
];

// 各ラジオボタンのオプション
interface RatingOption {
  value: string;
  size: number;
  color: string;
}

const defaultRatingOptions: RatingOption[] = [
  { value: "1", size: 70, color: "#a0ff8d" },
  { value: "2", size: 60, color: "#a0ff8d" },
  { value: "3", size: 50, color: "#a0ff8d" },
  { value: "4", size: 40, color: "#D3D3D3" },
  { value: "5", size: 50, color: "#d18dff" },
  { value: "6", size: 60, color: "#d18dff" },
  { value: "7", size: 70, color: "#d18dff" },
];

// Radioボタンを作るコンポーネント
interface RadioRatingProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  options?: RatingOption[];
}

const RadioRating: React.FC<RadioRatingProps> = ({
  value,
  onChange,
  name,
  options = defaultRatingOptions,
}) => {
  return (
    <RadioGroup row name={name} value={value || ""} onChange={onChange} >
      {options.map((option) => (
        <Radio
          key={option.value}
          value={option.value}
          icon={
            <RadioButtonUncheckedIcon
              sx={{ fontSize: { xs: option.size * 0.4, sm: option.size * 0.7, md: option.size * 1.1 }, color: option.color }}
            />
          }
          checkedIcon={
            <SvgIcon sx={{ fontSize: { xs: option.size * 0.4, sm: option.size * 0.7, md: option.size * 1.1 }, color: option.color, fill: option.color }}>
              <circle cx="12" cy="12" r="10" />
              <path d="M8 12l3 3 6-6" stroke="white" strokeWidth="2" fill="none" />
            </SvgIcon>
          }
        />
      ))}
    </RadioGroup>
  );
};

// 各質問のレイアウトを作るコンポーネント
interface QuestionItemProps {
  question: string;
  index: number;
  answer: number | null;
  onAnswerChange: (index: number, e: React.ChangeEvent<HTMLInputElement>) => void;
  forwardRef: (element: HTMLLIElement | null) => void;
  style?: React.CSSProperties;
}

const QuestionItem: React.FC<QuestionItemProps> = ({
  question,
  index,
  answer,
  onAnswerChange,
  forwardRef,
  style,
}) => {
  return (
    <Box
      component="li"
      ref={forwardRef}
      sx={{
        borderBottom: "1px solid #ccc",
        my: { xs: 3, sm: 4 },
        margin: "40px 0",
        opacity: answer !== null ? 0.4 : 1,
        color: answer !== null ? "gray" : "inherit",
        transition: "all 0.3s ease",
        padding: "10px",
        p: { xs: 2, sm: 3 },
        borderRadius: "4px",
        ...style,
      }}
    >
      <FormControl component="fieldset">
        <FormLabel component="legend" sx={{ fontWeight: "bold", fontSize: { xs: "18px", sm: "21px" } }}>
          {question}
        </FormLabel>
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center",flexWrap: "nowrap", mt: 1,}}>
          <Box>
            <Typography variant="body2" sx={{ mr: "8px", color: "#a0ff8d", fontWeight: "bold" }}>
              賛成する
            </Typography>
          </Box>
          <Box>
            <RadioRating
              name={`q${index + 1}`}
              value={answer !== null ? answer.toString() : ""}
              onChange={(e) => onAnswerChange(index, e)}
            />
          </Box>
          <Box>
            <Typography variant="body2" sx={{ ml: "8px", color: "#d18dff", fontWeight: "bold" }}>
              反対する
            </Typography>
          </Box>
        </Box>
      </FormControl>
    </Box>
  );
};

export default function Diagnosis() {
    const router = useRouter()
    const [answers, setAnswers] = useState<(number | null)[]>(Array(16).fill(null));

    //スクロールをするために使うref
    const questionRefs = useRef<(HTMLLIElement | null)[]>([]);

    // ラジオボタンの選択値を state に保存する関数
    const updateAnswer = (index: number, value: number): void => {
      setAnswers((prev) => {
        const newAnswers = [...prev];
        newAnswers[index] = value;
        return newAnswers;
      });
    };

    // 次の質問へスクロールする関数
    const scrollToNextQuestion = (currentIndex: number): void => {
      const nextIndex = currentIndex + 1;
      if (nextIndex < answers.length && questionRefs.current[nextIndex]) {
        const topPosition =
          questionRefs.current[nextIndex]!.getBoundingClientRect().top +
          window.scrollY -
          60;
        window.scrollTo({ top: topPosition, behavior: "smooth" });
      }
    };

    const handleChange = (index: number, e: React.ChangeEvent<HTMLInputElement>): void => {
      const selectedValue = Number(e.target.value);
      updateAnswer(index, selectedValue);
      scrollToNextQuestion(index);
    };

    const groups = Array.from({ length: 4 }, (_, i) =>
      answers.slice(i * 4, i * 4 + 4).reduce<number>((sum, value) => sum + (value ?? 0), 0)
    );
    

    const highestScore = Math.max(...groups);
    const highestGroup = groups.indexOf(highestScore);
    const pattern = ["A", "B", "C", "D"][highestGroup];

    const handleSubmit = async (): Promise<void> => {
      console.log("送信前の answers:", answers);
      if (answers.some((answer) => answer === null)) {
        alert("すべての質問に回答してください");
        return;
      }
  
      const payload = { pattern, answers };
      try {
        await axios.post("/api/saveDiagnosis", payload, {
          headers: { "Content-Type": "application/json" },
        });
        router.push("/result");
      } catch (error) {
        console.error("送信エラー:", error);
      }
    };

    return(
        <Box  style={{
          textAlign: "center",
          background: "linear-gradient(135deg, #FFDEE9 0%, #B5FFFC 100%)",
          minHeight: "100vh",
          fontFamily: "'Comic Sans MS', cursive, sans-serif",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}>
          <Box sx={{
            background: "#fff",
            borderRadius: "20px",
            boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
            width: "100%",
            margin: "auto",
            maxWidth: { xs: "80%", sm: "80%", md: "80%" },
            padding: { xs: "20px", sm: "30px", md: "40px" },
      }}>
            <Box component="ul" sx={{listStyle: "none", margin: 0, padding: 0, textAlign: "left"}}>
              {questions.map((question, i) =>
                  <QuestionItem
                  key={i}
                  question={question}
                  index={i}
                  answer={answers[i]}
                  onAnswerChange={handleChange}
                  forwardRef={(el) => {
                    questionRefs.current[i] = el;
                }}
                  style={{margin: "0 auto", textAlign: "center"}}
                />
              )}
              </Box>
          <Box>
            <Button variant="contained" onClick={handleSubmit} sx={{ fontSize: "30px", backgroundColor: "#CF9FFF", color: "#fff", margin: "30px 0" }}>
                結果を見る→
            </Button>
          </Box>
        </Box>
          </Box>  
    )
}