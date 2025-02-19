"use client"

import React from "react";
import {useRef, useState} from "react";
import {useRouter} from "next/navigation"
import Button from '@mui/material/Button'
import Radio from "@mui/material/Radio"
import RadioGroup from "@mui/material/RadioGroup"
import FormControl from "@mui/material/FormControl"
import FormLabel from "@mui/material/FormLabel"
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked"
import { SvgIcon} from '@mui/material'
import axios from 'axios';

const questions: string[] = [
  "Q1: 将来のことを考えると、理由もなく不安に襲われることがある。",
  "Q2: 未来に何が起こるか分からないと、夜も眠れなくなる。",
  "Q3: 自分の存在や人生の意味について、ふと疑問に思うことがある。",
  "Q4: もし最悪のことが起こったら…と常に考えてしまう。",
  "Q5: 人前で話すとき、体が固まってしまうほど緊張する。",
  "Q6: ちょっとした他人の言葉や態度で、自分の価値を疑ってしまう。",
  "Q7: 他人からの批判や否定的なコメントを、長い時間引きずってしまう。",
  "Q8: 初対面の人と話すと、何を言っていいか分からなくなる。",
  "Q9: 何事も100%完璧にしなければ気持ちが落ち着かない。",
  "Q10: 一度のミスで、自分の能力に強い不安を感じる。",
  "Q11: 体のちょっとした違和感でも、すぐに大病を疑ってしまう。",
  "Q12: 検査で『問題なし』と言われても、安心できず不安になる。",
  "Q13: 過去の辛い経験がふとよみがえると、心が乱れてしまう。",
  "Q14: 毎日の忙しさやプレッシャーで、常に心に重荷を感じる。",
  "Q15: 仕事や勉強の締め切りが近づくと、強い不安に襲われる。",
  "Q16: 些細な出来事で、過去の嫌な記憶が一気に蘇ることがある。",
];

export default function Diagnosis() {
    const [answers, setAnswers] = useState<(number | null)[]>(Array(16).fill(null));

    //スクロールをするために使うref
    const questionRefs = useRef<(HTMLLIElement | null)[]>([]);

    // ラジオボタンの選択値を state に保存する関数
    const updateAnswer = (index: number, value: number) => {
      setAnswers((prev) => {
        const newAnswers = [...prev];
        newAnswers[index] = value;
        return newAnswers;
      });
    };

    // 次の質問へスクロールする関数
    const scrollToNextQuestion = (currentIndex: number) => {
      const nextIndex = currentIndex + 1;
      if (nextIndex < answers.length && questionRefs.current[nextIndex]) {
        const topPosition =
          questionRefs.current[nextIndex]!.getBoundingClientRect().top +
          window.scrollY -
          60;
        window.scrollTo({ top: topPosition, behavior: "smooth" });
      }
    };

    const handleChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
      const selectedValue = Number(e.target.value);
      updateAnswer(index, selectedValue);
      scrollToNextQuestion(index);
    };
  
    const router = useRouter()

    const groups = Array.from({ length: 4 }, (_, i) =>
      answers.slice(i * 4, i * 4 + 4).reduce<number>((sum, value) => sum + (value ?? 0), 0)
    );
    

    const highestScore = Math.max(...groups);
    const highestGroup = groups.indexOf(highestScore);
    const pattern = ["A", "B", "C", "D"][highestGroup];

    const handleSubmit = async (): Promise<void> => {
      console.log("送信前の answersArray:", answers);
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
        <div style={{marginTop: "20px",   display: "flex", flexDirection: "column", alignItems: "center",}}>
            <ul>
              {questions.map((question, i) =>
                <li 
                  key={i} 
                  ref={(el) => {questionRefs.current[i] = el}}
                  style={{
                    borderBottom: "1px solid #ccc", 
                    margin: "40px 0", 
                    opacity: answers[i] !== null ? 0.4 : 1, 
                    color: answers[i] !== null ? "gray" : "inherit", 
                    transition: "all 0.3s ease", padding: "10px", 
                    borderRadius: "4px"
                  }}
                    >
                  <FormControl component="fieldset">
                    <FormLabel component="legend" sx={{fontWeight: "bold", fontSize: "21px"}}>
                      {question}
                    </FormLabel>
                      <div style={{display: "flex"}}>
                        <div style={{alignSelf: "center"}}>
                          <p>賛成する</p>
                        </div>
                        <RadioGroup row name={`q${i+1}`} value={answers[i] !== null ? answers[i].toString() : ""} onChange={e => handleChange(i, e)}>
                          <Radio icon={<RadioButtonUncheckedIcon sx={{ fontSize: 70, color: "#a0ff8d" }} />} checkedIcon={<SvgIcon sx={{fontSize: 70, color: "#a0ff8d", fill: "#a0ff8d"}}><circle cx="12" cy="12" r="10"/><path d="M8 12l3 3 6-6" stroke="white" strokeWidth="2" fill="none" /></SvgIcon>} value="1" />
                          <Radio icon={<RadioButtonUncheckedIcon sx={{ fontSize: 60, color: "#a0ff8d" }} />} checkedIcon={<SvgIcon sx={{fontSize: 60, color: "#a0ff8d"}}><circle cx="12" cy="12" r="10" fill="currentColor" /><path d="M8 12l3 3 6-6" stroke="white" strokeWidth="2" fill="none" /></SvgIcon>} value="2" />
                          <Radio icon={<RadioButtonUncheckedIcon sx={{ fontSize: 50, color: "#a0ff8d" }} />} checkedIcon={<SvgIcon sx={{fontSize: 50, color: "#a0ff8d"}}><circle cx="12" cy="12" r="10" fill="currentColor" /><path d="M8 12l3 3 6-6" stroke="white" strokeWidth="2" fill="none" /></SvgIcon>} value="3" />
                          <Radio icon={<RadioButtonUncheckedIcon sx={{ fontSize: 40, color: "#D3D3D3" }} />} checkedIcon={<SvgIcon sx={{fontSize: 40, color: "#D3D3D3"}}><circle cx="12" cy="12" r="10" fill="currentColor" /><path d="M8 12l3 3 6-6" stroke="white" strokeWidth="2" fill="none" /></SvgIcon>} value="4" />
                          <Radio icon={<RadioButtonUncheckedIcon sx={{ fontSize: 50, color: "#d18dff" }} />} checkedIcon={<SvgIcon sx={{fontSize: 50, color: "#d18dff"}}><circle cx="12" cy="12" r="10" fill="currentColor" /><path d="M8 12l3 3 6-6" stroke="white" strokeWidth="2" fill="none" /></SvgIcon>} value="5" />
                          <Radio icon={<RadioButtonUncheckedIcon sx={{ fontSize: 60, color: "#d18dff" }} />} checkedIcon={<SvgIcon sx={{fontSize: 60, color: "#d18dff"}}><circle cx="12" cy="12" r="10" fill="currentColor" /><path d="M8 12l3 3 6-6" stroke="white" strokeWidth="2" fill="none" /></SvgIcon>} value="6" />
                          <Radio icon={<RadioButtonUncheckedIcon sx={{ fontSize: 70, color: "#d18dff" }} />} checkedIcon={<SvgIcon sx={{fontSize: 70, color: "#d18dff"}}><circle cx="12" cy="12" r="10" fill="currentColor" /><path d="M8 12l3 3 6-6" stroke="white" strokeWidth="2" fill="none" /></SvgIcon>} value="7" />
                          </RadioGroup>
                        <div style={{alignSelf: "center"}}>
                          <p>反対する</p>
                        </div>
                        </div>
                    </FormControl>
                </li>
              )}
              </ul>
            <Button variant="contained" onClick={handleSubmit} sx={{ fontSize: "30px", backgroundColor: "#CF9FFF", color: "#fff" }}>
                結果を見る→
            </Button>
        </div>
    )
}