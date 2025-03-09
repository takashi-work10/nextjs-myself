"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Box, Button } from "@mui/material";
import axios, { AxiosResponse } from "axios";
import QuestionItem from "../components/QuestionItem";
import { questions } from "../constants/questions";
import { useDiagnosis } from "../hooks/useDiagnosis";
import { useMutation } from "@tanstack/react-query";

// 送信するデータの型定義
type DiagnosisPayload = {
  pattern: string;
  answers: (number | null)[];
};

// APIから返ってくる診断結果の型定義
type DiagnosisResult = {
  pattern: string;
  answers: number[];
};

export default function Diagnosis() {
  const router = useRouter();
  const { answers, questionRefs, handleChange, pattern } = useDiagnosis(16);

  // React QueryのuseMutationを具体的な返り値の型に変更
  const mutation = useMutation<
    AxiosResponse<DiagnosisResult>, // TData: 具体的な診断結果の型
    Error,                          // TError
    DiagnosisPayload                // TVariables: 送信するpayloadの型
  >({
    mutationFn: (payload: DiagnosisPayload) =>
      axios.post("/api/saveDiagnosis", payload, {
        headers: { "Content-Type": "application/json" },
      }),
    onSuccess: () => {
      router.push("/result");
    },
    onError: (error) => {
      console.error("送信エラー:", error);
    },
  });

  // 送信処理
  const handleSubmit = (): void => {
    if (answers.some((answer) => answer === null)) {
      alert("すべての質問に回答してください");
      return;
    }
    const payload: DiagnosisPayload = { pattern, answers };
    mutation.mutate(payload);
  };

  return (
    <Box
      style={{
        textAlign: "center",
        background: "linear-gradient(135deg, #FFDEE9 0%, #B5FFFC 100%)",
        minHeight: "100vh",
        fontFamily: "'Comic Sans MS', cursive, sans-serif",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          background: "#fff",
          borderRadius: "20px",
          boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
          margin: "auto",
          maxWidth: { xs: "100%", sm: "80%", md: "70%" },
          padding: { xs: "20px", sm: "30px", md: "40px" },
        }}
      >
        <Box component="ul" sx={{ listStyle: "none", margin: 0, padding: 0, textAlign: "left" }}>
          {questions.map((question, i) => (
            <QuestionItem
              key={i}
              question={question}
              index={i}
              answer={answers[i]}
              onAnswerChange={handleChange}
              forwardRef={(el) => {
                questionRefs.current[i] = el;
              }}
              style={{ margin: "0 auto", textAlign: "center" }}
            />
          ))}
        </Box>
        <Box sx={{ margin: "30px 0", textAlign: "center" }}>
          <Button
            variant="contained"
            onClick={handleSubmit}
            disabled={mutation.status === "pending"}
            sx={{ fontSize: "30px", backgroundColor: "#CF9FFF", color: "#fff" }}
          >
            {mutation.status === "pending" ? "送信中..." : "結果を見る→"}
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
