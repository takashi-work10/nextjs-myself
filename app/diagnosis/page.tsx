"use client"

import {useRef, useState} from "react";
import {useRouter} from "next/navigation"
import Button from '@mui/material/Button'
import Radio from "@mui/material/Radio"
import RadioGroup from "@mui/material/RadioGroup"
import FormControl from "@mui/material/FormControl"
import FormLabel from "@mui/material/FormLabel"
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked"
import { SvgIcon} from '@mui/material'



export default function Diagnosis() {
    const [answer1, setAnswer1] = useState<number | null>(null);
    const [answer2, setAnswer2] = useState<number | null>(null);
    const [answer3, setAnswer3] = useState<number | null>(null);
    const [answer4, setAnswer4] = useState<number | null>(null);
    const [answer5, setAnswer5] = useState<number | null>(null);
    const [answer6, setAnswer6] = useState<number | null>(null);
    const [answer7, setAnswer7] = useState<number | null>(null);
    const [answer8, setAnswer8] = useState<number | null>(null);
    const [answer9, setAnswer9] = useState<number | null>(null);
    const [answer10, setAnswer10] = useState<number | null>(null);
    const [answer11, setAnswer11] = useState<number | null>(null);
    const [answer12, setAnswer12] = useState<number | null>(null);
    const [answer13, setAnswer13] = useState<number | null>(null);
    const [answer14, setAnswer14] = useState<number | null>(null);
    const [answer15, setAnswer15] = useState<number | null>(null);
    const [answer16, setAnswer16] = useState<number | null>(null);

    const [answered1, setAnswered1] = useState<boolean>(false);
    const [answered2, setAnswered2] = useState<boolean>(false);
    const [answered3, setAnswered3] = useState<boolean>(false);
    const [answered4, setAnswered4] = useState<boolean>(false);
    const [answered5, setAnswered5] = useState<boolean>(false);
    const [answered6, setAnswered6] = useState<boolean>(false);
    const [answered7, setAnswered7] = useState<boolean>(false);
    const [answered8, setAnswered8] = useState<boolean>(false);
    const [answered9, setAnswered9] = useState<boolean>(false);
    const [answered10, setAnswered10] = useState<boolean>(false);
    const [answered11, setAnswered11] = useState<boolean>(false);
    const [answered12, setAnswered12] = useState<boolean>(false);
    const [answered13, setAnswered13] = useState<boolean>(false);
    const [answered14, setAnswered14] = useState<boolean>(false);
    const [answered15, setAnswered15] = useState<boolean>(false);
    const [answered16, setAnswered16] = useState<boolean>(false);

    
    const q2Ref = useRef<HTMLLIElement>(null);
    const q3Ref = useRef<HTMLLIElement>(null);
    const q4Ref = useRef<HTMLLIElement>(null);
    const q5Ref = useRef<HTMLLIElement>(null);
    const q6Ref = useRef<HTMLLIElement>(null);
    const q7Ref = useRef<HTMLLIElement>(null);
    const q8Ref = useRef<HTMLLIElement>(null);
    const q9Ref = useRef<HTMLLIElement>(null);
    const q10Ref = useRef<HTMLLIElement>(null);
    const q11Ref = useRef<HTMLLIElement>(null);
    const q12Ref = useRef<HTMLLIElement>(null);
    const q13Ref = useRef<HTMLLIElement>(null);
    const q14Ref = useRef<HTMLLIElement>(null);
    const q15Ref = useRef<HTMLLIElement>(null);
    const q16Ref = useRef<HTMLLIElement>(null);
    const q17Ref = useRef<HTMLButtonElement>(null);

    const handleQ1Change = (e: React.ChangeEvent<HTMLInputElement>) => {
      if ( !e.target.value) {
        alert("全ての質問に回答してください。");
        return;
      }
        setAnswer1(Number(e.target.value));
        setAnswered1(true);
        if (q2Ref.current) {
          // q2Ref の位置（ページ上での Y 座標）を計算し、60px 分オフセットを引く
          const topPosition =
            q2Ref.current.getBoundingClientRect().top - 60;
          window.scrollTo({ top: topPosition, behavior: "smooth" });
        }
      };
    const handleQ2Change = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAnswer2(Number(e.target.value));
        setAnswered2(true);
        if (q3Ref.current) {
          // q2Ref の位置（ページ上での Y 座標）を計算し、60px 分オフセットを引く
          const topPosition =
            q3Ref.current.getBoundingClientRect().top + window.pageYOffset - 60;
          window.scrollTo({ top: topPosition, behavior: "smooth" });
        }
      };
      const handleQ3Change = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAnswer3(Number(e.target.value));
        setAnswered3(true);
        if (q4Ref.current) {
          // q2Ref の位置（ページ上での Y 座標）を計算し、60px 分オフセットを引く
          const topPosition =
            q4Ref.current.getBoundingClientRect().top + window.pageYOffset - 60;
          window.scrollTo({ top: topPosition, behavior: "smooth" });
        }
      };
      const handleQ4Change = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAnswer4(Number(e.target.value));
        setAnswered4(true);
        if (q5Ref.current) {
          // q2Ref の位置（ページ上での Y 座標）を計算し、60px 分オフセットを引く
          const topPosition =
            q5Ref.current.getBoundingClientRect().top + window.pageYOffset - 60;
          window.scrollTo({ top: topPosition, behavior: "smooth" });
        }
      };
      const handleQ5Change = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAnswer5(Number(e.target.value));
        setAnswered5(true);
        if (q6Ref.current) {
          // q2Ref の位置（ページ上での Y 座標）を計算し、60px 分オフセットを引く
          const topPosition =
            q6Ref.current.getBoundingClientRect().top + window.pageYOffset - 60;
          window.scrollTo({ top: topPosition, behavior: "smooth" });
        }
      };
      const handleQ6Change = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAnswer6(Number(e.target.value));
        setAnswered6(true);
        if (q7Ref.current) {
          // q2Ref の位置（ページ上での Y 座標）を計算し、60px 分オフセットを引く
          const topPosition =
            q7Ref.current.getBoundingClientRect().top + window.pageYOffset - 60;
          window.scrollTo({ top: topPosition, behavior: "smooth" });
        }
      };
      const handleQ7Change = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAnswer7(Number(e.target.value));
        setAnswered7(true);
        if (q8Ref.current) {
          // q2Ref の位置（ページ上での Y 座標）を計算し、60px 分オフセットを引く
          const topPosition =
            q8Ref.current.getBoundingClientRect().top + window.pageYOffset - 60;
          window.scrollTo({ top: topPosition, behavior: "smooth" });
        }
      };
      const handleQ8Change = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAnswer8(Number(e.target.value));
        setAnswered8(true);
        if (q9Ref.current) {
          // q2Ref の位置（ページ上での Y 座標）を計算し、60px 分オフセットを引く
          const topPosition =
            q9Ref.current.getBoundingClientRect().top + window.pageYOffset - 60;
          window.scrollTo({ top: topPosition, behavior: "smooth" });
        }
      };
      const handleQ9Change = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAnswer9(Number(e.target.value));
        setAnswered9(true);
        if (q10Ref.current) {
          // q2Ref の位置（ページ上での Y 座標）を計算し、60px 分オフセットを引く
          const topPosition =
            q10Ref.current.getBoundingClientRect().top + window.pageYOffset - 60;
          window.scrollTo({ top: topPosition, behavior: "smooth" });
        }
      };
      const handleQ10Change = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAnswer10(Number(e.target.value));
        setAnswered10(true);
        if (q11Ref.current) {
          // q2Ref の位置（ページ上での Y 座標）を計算し、60px 分オフセットを引く
          const topPosition =
            q11Ref.current.getBoundingClientRect().top + window.pageYOffset - 60;
          window.scrollTo({ top: topPosition, behavior: "smooth" });
        }
      };
      const handleQ11Change = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAnswer11(Number(e.target.value));
        setAnswered11(true);
        if (q12Ref.current) {
          // q2Ref の位置（ページ上での Y 座標）を計算し、60px 分オフセットを引く
          const topPosition =
            q12Ref.current.getBoundingClientRect().top + window.pageYOffset - 60;
          window.scrollTo({ top: topPosition, behavior: "smooth" });
        }
      };
      const handleQ12Change = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAnswer12(Number(e.target.value));
        setAnswered12(true);
        if (q13Ref.current) {
          // q2Ref の位置（ページ上での Y 座標）を計算し、60px 分オフセットを引く
          const topPosition =
            q13Ref.current.getBoundingClientRect().top + window.pageYOffset - 60;
          window.scrollTo({ top: topPosition, behavior: "smooth" });
        }
      };
      const handleQ13Change = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAnswer13(Number(e.target.value));
        setAnswered13(true);
        if (q14Ref.current) {
          // q2Ref の位置（ページ上での Y 座標）を計算し、60px 分オフセットを引く
          const topPosition =
            q14Ref.current.getBoundingClientRect().top + window.pageYOffset - 60;
          window.scrollTo({ top: topPosition, behavior: "smooth" });
        }
      };
      const handleQ14Change = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAnswer14(Number(e.target.value));
        setAnswered14(true);
        if (q15Ref.current) {
          // q2Ref の位置（ページ上での Y 座標）を計算し、60px 分オフセットを引く
          const topPosition =
            q15Ref.current.getBoundingClientRect().top + window.pageYOffset - 60;
          window.scrollTo({ top: topPosition, behavior: "smooth" });
        }
      };
      const handleQ15Change = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAnswer15(Number(e.target.value));
        setAnswered15(true);
        if (q16Ref.current) {
          // q2Ref の位置（ページ上での Y 座標）を計算し、60px 分オフセットを引く
          const topPosition =
            q16Ref.current.getBoundingClientRect().top + window.pageYOffset - 60;
          window.scrollTo({ top: topPosition, behavior: "smooth" });
        }
      };
      const handleQ16Change = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAnswer16(Number(e.target.value));
        setAnswered16(true);
        if (q17Ref.current) {
          // q2Ref の位置（ページ上での Y 座標）を計算し、60px 分オフセットを引く
          const topPosition =
            q17Ref.current.getBoundingClientRect().top + window.pageYOffset - 60;
          window.scrollTo({ top: topPosition, behavior: "smooth" });
        }
      };
  
    const router = useRouter()

    const groups = [
      (answer1 ?? 0) + (answer2 ?? 0) + (answer3 ?? 0) + (answer4 ?? 0),
      (answer5 ?? 0) + (answer6 ?? 0) + (answer7 ?? 0) + (answer8 ?? 0),
      (answer9 ?? 0) + (answer10 ?? 0) + (answer11 ?? 0) + (answer12 ?? 0),
      (answer13 ?? 0) + (answer14 ?? 0) + (answer15 ?? 0) + (answer16 ?? 0)
    ];

    const highestScore = Math.max(...groups);
    const highestGroup = groups.indexOf(highestScore);
    const pattern = ["A", "B", "C", "D"][highestGroup];

    const handleSubmit = async () => {
        const answersArray = [
            answer1, answer2, answer3, answer4,
            answer5, answer6, answer7, answer8,
            answer9, answer10, answer11, answer12,
            answer13, answer14, answer15, answer16
          ];
        console.log("送信前の answersArray:", answersArray);
        const payload = { pattern, answers: answersArray };
        await fetch("/api/saveDiagnosis", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload)
        });
        router.push("/result");
      };

    return(
        <div style={{marginTop: "20px",   display: "flex", flexDirection: "column", alignItems: "center",}}>
            <ul>
                <li style={{borderBottom: "1px solid #ccc", margin: "40px 0", opacity: answered1 ? 0.4 : 1, color: answered1 ? "gray" : "inherit", transition: "all 0.3s ease", padding: "10px", borderRadius: "4px"}}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend" sx={{fontWeight: "bold", fontSize: "21px"}}>Q1:将来のことを考えると、理由もなく不安に襲われることがある。</FormLabel>
                        <div style={{display: "flex"}}>
                            <div style={{alignSelf: "center"}}>
                                <p>賛成する</p>
                            </div>
                            <RadioGroup row name="q1" value={answer1 !== null ? answer1.toString() : ""} onChange={handleQ1Change}>
                            <Radio icon={<RadioButtonUncheckedIcon sx={{ fontSize: 70, color: "#a0ff8d" }} />} checkedIcon={<SvgIcon sx={{fontSize: 70, color: "#a0ff8d"}}><circle cx="12" cy="12" r="10" fill="currentColor" /><path d="M8 12l3 3 6-6" stroke="white" strokeWidth="2" fill="none" /></SvgIcon>} value="1" />
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
                <li ref={q2Ref} style={{borderBottom: "1px solid #ccc", margin: "40px 0", opacity: answered2 ? 0.4 : 1, color: answered2 ? "gray" : "inherit", transition: "all 0.3s ease", padding: "10px", borderRadius: "4px"}}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend" sx={{fontWeight: "bold", fontSize: "21px"}}>Q2:未来に何が起こるか分からないと、夜も眠れなくなる。</FormLabel>
                        <div style={{display: "flex"}}>
                            <div style={{alignSelf: "center"}}>
                                <p>賛成する</p>
                            </div>
                            <RadioGroup row name="q2" value={answer2 !== null ? answer2.toString() : ""} onChange={handleQ2Change}>
                            <Radio icon={<RadioButtonUncheckedIcon sx={{ fontSize: 70, color: "#a0ff8d" }} />} checkedIcon={<SvgIcon sx={{fontSize: 70, color: "#a0ff8d"}}><circle cx="12" cy="12" r="10" fill="currentColor" /><path d="M8 12l3 3 6-6" stroke="white" strokeWidth="2" fill="none" /></SvgIcon>} value="1" />
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
                <li ref={q3Ref}  style={{borderBottom: "1px solid #ccc", margin: "40px 0", opacity: answered3 ? 0.4 : 1, color: answered3 ? "gray" : "inherit", transition: "all 0.3s ease", padding: "10px", borderRadius: "4px"}}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend" sx={{fontWeight: "bold", fontSize: "21px"}}>Q3:自分の存在や人生の意味について、ふと疑問に思うことがある。</FormLabel>
                        <div style={{display: "flex"}}>
                            <div style={{alignSelf: "center"}}>
                                <p>賛成する</p>
                            </div>
                            <RadioGroup row name="q3" value={answer3 !== null ? answer3.toString() : ""} onChange={handleQ3Change}>
                            <Radio icon={<RadioButtonUncheckedIcon sx={{ fontSize: 70, color: "#a0ff8d" }} />} checkedIcon={<SvgIcon sx={{fontSize: 70, color: "#a0ff8d"}}><circle cx="12" cy="12" r="10" fill="currentColor" /><path d="M8 12l3 3 6-6" stroke="white" strokeWidth="2" fill="none" /></SvgIcon>} value="1" />
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
                <li ref={q4Ref}  style={{borderBottom: "1px solid #ccc", margin: "40px 0", opacity: answered4 ? 0.4 : 1, color: answered4 ? "gray" : "inherit", transition: "all 0.3s ease", padding: "10px", borderRadius: "4px"}}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend" sx={{fontWeight: "bold", fontSize: "21px"}}>Q4:もし最悪のことが起こったら…と常に考えてしまう。</FormLabel>
                        <div style={{display: "flex"}}>
                            <div style={{alignSelf: "center"}}>
                                <p>賛成する</p>
                            </div>
                            <RadioGroup row name="q4" value={answer4 !== null ? answer4.toString() : ""} onChange={handleQ4Change}>
                            <Radio icon={<RadioButtonUncheckedIcon sx={{ fontSize: 70, color: "#a0ff8d" }} />} checkedIcon={<SvgIcon sx={{fontSize: 70, color: "#a0ff8d"}}><circle cx="12" cy="12" r="10" fill="currentColor" /><path d="M8 12l3 3 6-6" stroke="white" strokeWidth="2" fill="none" /></SvgIcon>} value="1" />
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
                <li ref={q5Ref}  style={{borderBottom: "1px solid #ccc", margin: "40px 0", opacity: answered5 ? 0.4 : 1, color: answered5 ? "gray" : "inherit", transition: "all 0.3s ease", padding: "10px", borderRadius: "4px"}}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend" sx={{fontWeight: "bold", fontSize: "21px"}}>Q5:人前で話すとき、体が固まってしまうほど緊張する。</FormLabel>
                        <div style={{display: "flex"}}>
                            <div style={{alignSelf: "center"}}>
                                <p>賛成する</p>
                            </div>
                            <RadioGroup row name="q5" value={answer5 !== null ? answer5.toString() : ""} onChange={handleQ5Change}>
                            <Radio icon={<RadioButtonUncheckedIcon sx={{ fontSize: 70, color: "#a0ff8d" }} />} checkedIcon={<SvgIcon sx={{fontSize: 70, color: "#a0ff8d"}}><circle cx="12" cy="12" r="10" fill="currentColor" /><path d="M8 12l3 3 6-6" stroke="white" strokeWidth="2" fill="none" /></SvgIcon>} value="1" />
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
                <li ref={q6Ref} style={{borderBottom: "1px solid #ccc", margin: "40px 0", opacity: answered6 ? 0.4 : 1, color: answered6 ? "gray" : "inherit", transition: "all 0.3s ease", padding: "10px", borderRadius: "4px"}}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend" sx={{fontWeight: "bold", fontSize: "21px"}}>Q6:ちょっとした他人の言葉や態度で、自分の価値を疑ってしまう。</FormLabel>
                        <div style={{display: "flex"}}>
                            <div style={{alignSelf: "center"}}>
                                <p>賛成する</p>
                            </div>
                            <RadioGroup row name="q6" value={answer6 !== null ? answer6.toString() : ""} onChange={handleQ6Change}>
                            <Radio icon={<RadioButtonUncheckedIcon sx={{ fontSize: 70, color: "#a0ff8d" }} />} checkedIcon={<SvgIcon sx={{fontSize: 70, color: "#a0ff8d"}}><circle cx="12" cy="12" r="10" fill="currentColor" /><path d="M8 12l3 3 6-6" stroke="white" strokeWidth="2" fill="none" /></SvgIcon>} value="1" />
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
                <li ref={q7Ref} style={{borderBottom: "1px solid #ccc", margin: "40px 0", opacity: answered7 ? 0.4 : 1, color: answered7 ? "gray" : "inherit", transition: "all 0.3s ease", padding: "10px", borderRadius: "4px"}}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend" sx={{fontWeight: "bold", fontSize: "21px"}}>Q7:他人からの批判や否定的なコメントを、長い時間引きずってしまう。</FormLabel>
                        <div style={{display: "flex"}}>
                            <div style={{alignSelf: "center"}}>
                                <p>賛成する</p>
                            </div>
                            <RadioGroup row name="q7" value={answer7 !== null ? answer7.toString() : ""} onChange={handleQ7Change}>
                            <Radio icon={<RadioButtonUncheckedIcon sx={{ fontSize: 70, color: "#a0ff8d" }} />} checkedIcon={<SvgIcon sx={{fontSize: 70, color: "#a0ff8d"}}><circle cx="12" cy="12" r="10" fill="currentColor" /><path d="M8 12l3 3 6-6" stroke="white" strokeWidth="2" fill="none" /></SvgIcon>} value="1" />
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
                <li ref={q8Ref} style={{borderBottom: "1px solid #ccc", margin: "40px 0", opacity: answered8 ? 0.4 : 1, color: answered8 ? "gray" : "inherit", transition: "all 0.3s ease", padding: "10px", borderRadius: "4px"}}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend" sx={{fontWeight: "bold", fontSize: "21px"}}>Q8:初対面の人と話すと、何を言っていいか分からなくなる。</FormLabel>
                        <div style={{display: "flex"}}>
                            <div style={{alignSelf: "center"}}>
                                <p>賛成する</p>
                            </div>
                            <RadioGroup row name="q8" value={answer8 !== null ? answer8.toString() : ""} onChange={handleQ8Change}>
                            <Radio icon={<RadioButtonUncheckedIcon sx={{ fontSize: 70, color: "#a0ff8d" }} />} checkedIcon={<SvgIcon sx={{fontSize: 70, color: "#a0ff8d"}}><circle cx="12" cy="12" r="10" fill="currentColor" /><path d="M8 12l3 3 6-6" stroke="white" strokeWidth="2" fill="none" /></SvgIcon>} value="1" />
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
                <li ref={q9Ref} style={{borderBottom: "1px solid #ccc", margin: "40px 0", opacity: answered9 ? 0.4 : 1, color: answered9 ? "gray" : "inherit", transition: "all 0.3s ease", padding: "10px", borderRadius: "4px"}}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend" sx={{fontWeight: "bold", fontSize: "21px"}}>Q9:何事も100%完璧にしなければ気持ちが落ち着かない。</FormLabel>
                        <div style={{display: "flex"}}>
                            <div style={{alignSelf: "center"}}>
                                <p>賛成する</p>
                            </div>
                            <RadioGroup row name="q9" value={answer9 !== null ? answer9.toString() : ""} onChange={handleQ9Change}>
                            <Radio icon={<RadioButtonUncheckedIcon sx={{ fontSize: 70, color: "#a0ff8d" }} />} checkedIcon={<SvgIcon sx={{fontSize: 70, color: "#a0ff8d"}}><circle cx="12" cy="12" r="10" fill="currentColor" /><path d="M8 12l3 3 6-6" stroke="white" strokeWidth="2" fill="none" /></SvgIcon>} value="1" />
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
                <li ref={q10Ref} style={{borderBottom: "1px solid #ccc", margin: "40px 0", opacity: answered10 ? 0.4 : 1, color: answered10 ? "gray" : "inherit", transition: "all 0.3s ease", padding: "10px", borderRadius: "4px"}}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend" sx={{fontWeight: "bold", fontSize: "21px"}}>Q10:一度のミスで、自分の能力に強い不安を感じる。</FormLabel>
                        <div style={{display: "flex"}}>
                            <div style={{alignSelf: "center"}}>
                                <p>賛成する</p>
                            </div>
                            <RadioGroup row name="q10" value={answer10 !== null ? answer10.toString() : ""} onChange={handleQ10Change}>
                            <Radio icon={<RadioButtonUncheckedIcon sx={{ fontSize: 70, color: "#a0ff8d" }} />} checkedIcon={<SvgIcon sx={{fontSize: 70, color: "#a0ff8d"}}><circle cx="12" cy="12" r="10" fill="currentColor" /><path d="M8 12l3 3 6-6" stroke="white" strokeWidth="2" fill="none" /></SvgIcon>} value="1" />
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
                <li ref={q11Ref} style={{borderBottom: "1px solid #ccc", margin: "40px 0", opacity: answered11 ? 0.4 : 1, color: answered11 ? "gray" : "inherit", transition: "all 0.3s ease", padding: "10px", borderRadius: "4px"}}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend" sx={{fontWeight: "bold", fontSize: "21px"}}>Q11:体のちょっとした違和感でも、すぐに大病を疑ってしまう。</FormLabel>
                        <div style={{display: "flex"}}>
                            <div style={{alignSelf: "center"}}>
                                <p>賛成する</p>
                            </div>
                            <RadioGroup row name="q11" value={answer11 !== null ? answer11.toString() : ""} onChange={handleQ11Change}>
                            <Radio icon={<RadioButtonUncheckedIcon sx={{ fontSize: 70, color: "#a0ff8d" }} />} checkedIcon={<SvgIcon sx={{fontSize: 70, color: "#a0ff8d"}}><circle cx="12" cy="12" r="10" fill="currentColor" /><path d="M8 12l3 3 6-6" stroke="white" strokeWidth="2" fill="none" /></SvgIcon>} value="1" />
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
                <li ref={q12Ref} style={{borderBottom: "1px solid #ccc", margin: "40px 0", opacity: answered12 ? 0.4 : 1, color: answered12 ? "gray" : "inherit", transition: "all 0.3s ease", padding: "10px", borderRadius: "4px"}}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend" sx={{fontWeight: "bold", fontSize: "21px"}}>Q12:検査で『問題なし』と言われても、安心できず不安になる。</FormLabel>
                        <div style={{display: "flex"}}>
                            <div style={{alignSelf: "center"}}>
                                <p>賛成する</p>
                            </div>
                            <RadioGroup row name="q12" value={answer12 !== null ? answer12.toString() : ""} onChange={handleQ12Change}>
                            <Radio icon={<RadioButtonUncheckedIcon sx={{ fontSize: 70, color: "#a0ff8d" }} />} checkedIcon={<SvgIcon sx={{fontSize: 70, color: "#a0ff8d"}}><circle cx="12" cy="12" r="10" fill="currentColor" /><path d="M8 12l3 3 6-6" stroke="white" strokeWidth="2" fill="none" /></SvgIcon>} value="1" />
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
                <li ref={q13Ref} style={{borderBottom: "1px solid #ccc", margin: "40px 0", opacity: answered13 ? 0.4 : 1, color: answered13 ? "gray" : "inherit", transition: "all 0.3s ease", padding: "10px", borderRadius: "4px"}}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend" sx={{fontWeight: "bold", fontSize: "21px"}}>Q13:過去の辛い経験がふとよみがえると、心が乱れてしまう。</FormLabel>
                        <div style={{display: "flex"}}>
                            <div style={{alignSelf: "center"}}>
                                <p>賛成する</p>
                            </div>
                            <RadioGroup row name="q13" value={answer13 !== null ? answer13.toString() : ""} onChange={handleQ13Change}>
                            <Radio icon={<RadioButtonUncheckedIcon sx={{ fontSize: 70, color: "#a0ff8d" }} />} checkedIcon={<SvgIcon sx={{fontSize: 70, color: "#a0ff8d"}}><circle cx="12" cy="12" r="10" fill="currentColor" /><path d="M8 12l3 3 6-6" stroke="white" strokeWidth="2" fill="none" /></SvgIcon>} value="1" />
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
                <li ref={q14Ref} style={{borderBottom: "1px solid #ccc", margin: "40px 0", opacity: answered14 ? 0.4 : 1, color: answered14 ? "gray" : "inherit", transition: "all 0.3s ease", padding: "10px", borderRadius: "4px"}}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend" sx={{fontWeight: "bold", fontSize: "21px"}}>Q14:毎日の忙しさやプレッシャーで、常に心に重荷を感じる。</FormLabel>
                        <div style={{display: "flex"}}>
                            <div style={{alignSelf: "center"}}>
                                <p>賛成する</p>
                            </div>
                            <RadioGroup row name="q14" value={answer14 !== null ? answer14.toString() : ""} onChange={handleQ14Change}>
                            <Radio icon={<RadioButtonUncheckedIcon sx={{ fontSize: 70, color: "#a0ff8d" }} />} checkedIcon={<SvgIcon sx={{fontSize: 70, color: "#a0ff8d"}}><circle cx="12" cy="12" r="10" fill="currentColor" /><path d="M8 12l3 3 6-6" stroke="white" strokeWidth="2" fill="none" /></SvgIcon>} value="1" />
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
                <li ref={q15Ref} style={{borderBottom: "1px solid #ccc", margin: "40px 0", opacity: answered15 ? 0.4 : 1, color: answered15 ? "gray" : "inherit", transition: "all 0.3s ease", padding: "10px", borderRadius: "4px"}}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend" sx={{fontWeight: "bold", fontSize: "21px"}}>Q15:仕事や勉強の締め切りが近づくと、強い不安に襲われる。</FormLabel>
                        <div style={{display: "flex"}}>
                            <div style={{alignSelf: "center"}}>
                                <p>賛成する</p>
                            </div>
                            <RadioGroup row name="q15" value={answer15 !== null ? answer15.toString() : ""} onChange={handleQ15Change}>
                            <Radio icon={<RadioButtonUncheckedIcon sx={{ fontSize: 70, color: "#a0ff8d" }} />} checkedIcon={<SvgIcon sx={{fontSize: 70, color: "#a0ff8d"}}><circle cx="12" cy="12" r="10" fill="currentColor" /><path d="M8 12l3 3 6-6" stroke="white" strokeWidth="2" fill="none" /></SvgIcon>} value="1" />
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
                <li ref={q16Ref} style={{borderBottom: "1px solid #ccc", margin: "40px 0", opacity: answered16 ? 0.4 : 1, color: answered16 ? "gray" : "inherit", transition: "all 0.3s ease", padding: "10px", borderRadius: "4px"}}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend" sx={{fontWeight: "bold", fontSize: "21px"}}>Q16:些細な出来事で、過去の嫌な記憶が一気に蘇ることがある。</FormLabel>
                        <div style={{display: "flex"}}>
                            <div style={{alignSelf: "center"}}>
                                <p>賛成する</p>
                            </div>
                            <RadioGroup row name="q16" value={answer16 !== null ? answer16.toString() : ""} onChange={handleQ16Change}>
                            <Radio icon={<RadioButtonUncheckedIcon sx={{ fontSize: 70, color: "#a0ff8d" }} />} checkedIcon={<SvgIcon sx={{fontSize: 70, color: "#a0ff8d"}}><circle cx="12" cy="12" r="10" fill="currentColor" /><path d="M8 12l3 3 6-6" stroke="white" strokeWidth="2" fill="none" /></SvgIcon>} value="1" />
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
            </ul>
            <Button variant="contained" onClick={handleSubmit} sx={{ fontSize: "30px", backgroundColor: "#CF9FFF", color: "#fff" }}>
                結果を見る→
            </Button>
        </div>
    )
}