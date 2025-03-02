"use client";

import React, { useState }  from "react";
import { useRouter } from "next/navigation";
import { Box, Button } from "@mui/material";
import axios from "axios";
import QuestionItem from "../components/QuestionItem";
import { questions } from "../constants/questions";
import { useDiagnosis } from "../hooks/useDiagnosis";

export default function Diagnosis() {
    const router = useRouter()
    const { answers, questionRefs, handleChange, pattern } = useDiagnosis(16);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (): Promise<void> => {
      if (answers.some((answer) => answer === null)) {
        alert("すべての質問に回答してください");
        return;
      }
      setIsLoading(true);
      const payload = { pattern, answers };
      try {
        await axios.post("/api/saveDiagnosis", payload, {
          headers: { "Content-Type": "application/json" },
        });
        router.push("/result");
      } catch (error) {
        console.error("送信エラー:", error);
        setIsLoading(false);
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
          <Box sx={{margin: "30px 0" }}>
            <Button variant="contained" onClick={handleSubmit} disabled={isLoading} sx={{ fontSize: "30px", backgroundColor: "#CF9FFF", color: "#fff"}}>
              {isLoading ? "送信中..." : "結果を見る→"}
            </Button>
          </Box>
        </Box>
      </Box>  
    )
}