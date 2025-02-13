"use client"

import {useState} from "react";
import {useRouter} from "next/navigation"
import Button from '@mui/material/Button'
import Radio from "@mui/material/Radio"
import RadioGroup from "@mui/material/RadioGroup"
import FormControlLabel from "@mui/material/FormControlLabel"
import FormControl from "@mui/material/FormControl"
import FormLabel from "@mui/material/FormLabel"
import Link from "next/link"
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked"
import { SvgIcon, SvgIconProps } from '@mui/material'

function GreenFilledCircleIcon(props: SvgIconProps) {
    return (
      <SvgIcon {...props}>
        <circle cx="12" cy="12" r="10" fill="currentColor" />
      </SvgIcon>
    )
  }

export default function Diagnosis() {
    const [answer1, setAnswer1] = useState<number>(1);
    const [answer2, setAnswer2] = useState<number>(1);
    const [answer3, setAnswer3] = useState<number>(1);
    const [answer4, setAnswer4] = useState<number>(1);
    const [answer5, setAnswer5] = useState<number>(1);
    const [answer6, setAnswer6] = useState<number>(1);
    const [answer7, setAnswer7] = useState<number>(1);
    const [answer8, setAnswer8] = useState<number>(1);
    const [answer9, setAnswer9] = useState<number>(1);
    const [answer10, setAnswer10] = useState<number>(1);
    const [answer11, setAnswer11] = useState<number>(1);
    const [answer12, setAnswer12] = useState<number>(1);
    const [answer13, setAnswer13] = useState<number>(1);
    const [answer14, setAnswer14] = useState<number>(1);
    const [answer15, setAnswer15] = useState<number>(1);
    const [answer16, setAnswer16] = useState<number>(1);

    const answersArray = [
        answer1, answer2, answer3, answer4,
        answer5, answer6, answer7, answer8,
        answer9, answer10, answer11, answer12,
        answer13, answer14, answer15, answer16
      ];
  
    const router = useRouter()

    const group1 = answer1 + answer2 + answer3 + answer4
    const group2 = answer5 + answer6 + answer7 + answer8
    const group3 = answer9 + answer10 + answer11 + answer12
    const group4 = answer13 + answer14 + answer15 + answer16

    let highestGroup = 1
    let highestScore = group1
    if (group2 > highestScore) {
        highestGroup =2
        highestScore = group2
    }
    if (group3 > highestScore) {
        highestGroup =3
        highestScore = group3
    }
    if (group4 > highestScore) {
        highestGroup = 4
        highestScore = group4
    }

    let pattern = "";
    if (highestGroup === 1) {
        pattern = "A"
    } else if (highestGroup === 2) {
        pattern = "B"
    } else if (highestGroup === 3) {
        pattern = "C"
    } else if (highestGroup === 4) {
        pattern = "D"
    }

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
        <div style={{marginTop: "20px",   display: "flex", flexDirection: "column", alignItems: "center", }}>
            <ul>
                <li style={{borderBottom: "1px solid #ccc", margin: "40px 0"}}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend" sx={{fontWeight: "bold", fontSize: "21px"}}>Q1:将来のことを考えると、理由もなく不安に襲われることがある。</FormLabel>
                        <div style={{display: "flex"}}>
                            <div style={{alignSelf: "center"}}>
                                <p>賛成する</p>
                            </div>
                            <RadioGroup row name="q1" value={answer1.toString()} onChange={(e) => {console.log("Q1の新しい値:", e.target.value); setAnswer1(Number(e.target.value)); }}>
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
                <li style={{borderBottom: "1px solid #ccc", margin: "40px 0"}}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend" sx={{fontWeight: "bold", fontSize: "21px"}}>Q2:未来に何が起こるか分からないと、夜も眠れなくなる。</FormLabel>
                        <div style={{display: "flex"}}>
                            <div style={{alignSelf: "center"}}>
                                <p>賛成する</p>
                            </div>
                            <RadioGroup row name="q2" value={answer2.toString()} onChange={(e) => {console.log("Q2の新しい値:", e.target.value);setAnswer2(Number(e.target.value))}}>
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
                <li style={{borderBottom: "1px solid #ccc", margin: "40px 0"}}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend" sx={{fontWeight: "bold", fontSize: "21px"}}>Q3:自分の存在や人生の意味について、ふと疑問に思うことがある。</FormLabel>
                        <div style={{display: "flex"}}>
                            <div style={{alignSelf: "center"}}>
                                <p>賛成する</p>
                            </div>
                            <RadioGroup row name="q3" value={answer3.toString()} onChange={(e) => setAnswer3(Number(e.target.value))}>
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
                <li style={{borderBottom: "1px solid #ccc", margin: "40px 0"}}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend" sx={{fontWeight: "bold", fontSize: "21px"}}>Q4:もし最悪のことが起こったら…と常に考えてしまう。</FormLabel>
                        <div style={{display: "flex"}}>
                            <div style={{alignSelf: "center"}}>
                                <p>賛成する</p>
                            </div>
                            <RadioGroup row name="q4" value={answer4.toString()} onChange={(e) => setAnswer4(Number(e.target.value))}>
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
                <li style={{borderBottom: "1px solid #ccc", margin: "40px 0"}}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend" sx={{fontWeight: "bold", fontSize: "21px"}}>Q5:人前で話すとき、体が固まってしまうほど緊張する。</FormLabel>
                        <div style={{display: "flex"}}>
                            <div style={{alignSelf: "center"}}>
                                <p>賛成する</p>
                            </div>
                            <RadioGroup row name="q5" value={answer5.toString()} onChange={(e) => setAnswer5(Number(e.target.value))}>
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
                <li style={{borderBottom: "1px solid #ccc", margin: "40px 0"}}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend" sx={{fontWeight: "bold", fontSize: "21px"}}>Q6:ちょっとした他人の言葉や態度で、自分の価値を疑ってしまう。</FormLabel>
                        <div style={{display: "flex"}}>
                            <div style={{alignSelf: "center"}}>
                                <p>賛成する</p>
                            </div>
                            <RadioGroup row name="q6" value={answer6.toString()} onChange={(e) => setAnswer6(Number(e.target.value))}>
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
                <li style={{borderBottom: "1px solid #ccc", margin: "40px 0"}}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend" sx={{fontWeight: "bold", fontSize: "21px"}}>Q7:他人からの批判や否定的なコメントを、長い時間引きずってしまう。</FormLabel>
                        <div style={{display: "flex"}}>
                            <div style={{alignSelf: "center"}}>
                                <p>賛成する</p>
                            </div>
                            <RadioGroup row name="q7" value={answer7.toString()} onChange={(e) => setAnswer7(Number(e.target.value))}>
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
                <li style={{borderBottom: "1px solid #ccc", margin: "40px 0"}}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend" sx={{fontWeight: "bold", fontSize: "21px"}}>Q8:初対面の人と話すと、何を言っていいか分からなくなる。</FormLabel>
                        <div style={{display: "flex"}}>
                            <div style={{alignSelf: "center"}}>
                                <p>賛成する</p>
                            </div>
                            <RadioGroup row name="q8" value={answer8.toString()} onChange={(e) => setAnswer8(Number(e.target.value))}>
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
                <li style={{borderBottom: "1px solid #ccc", margin: "40px 0"}}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend" sx={{fontWeight: "bold", fontSize: "21px"}}>Q9:何事も100%完璧にしなければ気持ちが落ち着かない。</FormLabel>
                        <div style={{display: "flex"}}>
                            <div style={{alignSelf: "center"}}>
                                <p>賛成する</p>
                            </div>
                            <RadioGroup row name="q9" value={answer9.toString()} onChange={(e) => setAnswer9(Number(e.target.value))}>
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
                <li style={{borderBottom: "1px solid #ccc", margin: "40px 0"}}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend" sx={{fontWeight: "bold", fontSize: "21px"}}>Q10:一度のミスで、自分の能力に強い不安を感じる。</FormLabel>
                        <div style={{display: "flex"}}>
                            <div style={{alignSelf: "center"}}>
                                <p>賛成する</p>
                            </div>
                            <RadioGroup row name="q10" value={answer10.toString()} onChange={(e) => setAnswer10(Number(e.target.value))}>
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
                <li style={{borderBottom: "1px solid #ccc", margin: "40px 0"}}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend" sx={{fontWeight: "bold", fontSize: "21px"}}>Q11:体のちょっとした違和感でも、すぐに大病を疑ってしまう。</FormLabel>
                        <div style={{display: "flex"}}>
                            <div style={{alignSelf: "center"}}>
                                <p>賛成する</p>
                            </div>
                            <RadioGroup row name="q11" value={answer11.toString()} onChange={(e) => setAnswer11(Number(e.target.value))}>
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
                <li style={{borderBottom: "1px solid #ccc", margin: "40px 0"}}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend" sx={{fontWeight: "bold", fontSize: "21px"}}>Q12:検査で『問題なし』と言われても、安心できず不安になる。</FormLabel>
                        <div style={{display: "flex"}}>
                            <div style={{alignSelf: "center"}}>
                                <p>賛成する</p>
                            </div>
                            <RadioGroup row name="q12" value={answer12.toString()} onChange={(e) => setAnswer12(Number(e.target.value))}>
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
                <li style={{borderBottom: "1px solid #ccc", margin: "40px 0"}}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend" sx={{fontWeight: "bold", fontSize: "21px"}}>Q13:過去の辛い経験がふとよみがえると、心が乱れてしまう。</FormLabel>
                        <div style={{display: "flex"}}>
                            <div style={{alignSelf: "center"}}>
                                <p>賛成する</p>
                            </div>
                            <RadioGroup row name="q13" value={answer13.toString()} onChange={(e) => setAnswer13(Number(e.target.value))}>
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
                <li style={{borderBottom: "1px solid #ccc", margin: "40px 0"}}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend" sx={{fontWeight: "bold", fontSize: "21px"}}>Q14:毎日の忙しさやプレッシャーで、常に心に重荷を感じる。</FormLabel>
                        <div style={{display: "flex"}}>
                            <div style={{alignSelf: "center"}}>
                                <p>賛成する</p>
                            </div>
                            <RadioGroup row name="q14" value={answer14.toString()} onChange={(e) => setAnswer14(Number(e.target.value))}>
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
                <li style={{borderBottom: "1px solid #ccc", margin: "40px 0"}}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend" sx={{fontWeight: "bold", fontSize: "21px"}}>Q15:仕事や勉強の締め切りが近づくと、強い不安に襲われる。</FormLabel>
                        <div style={{display: "flex"}}>
                            <div style={{alignSelf: "center"}}>
                                <p>賛成する</p>
                            </div>
                            <RadioGroup row name="q15" value={answer15.toString()} onChange={(e) => setAnswer15(Number(e.target.value))}>
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
                <li style={{borderBottom: "1px solid #ccc", margin: "40px 0"}}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend" sx={{fontWeight: "bold", fontSize: "21px"}}>Q16:些細な出来事で、過去の嫌な記憶が一気に蘇ることがある。</FormLabel>
                        <div style={{display: "flex"}}>
                            <div style={{alignSelf: "center"}}>
                                <p>賛成する</p>
                            </div>
                            <RadioGroup row name="q16" value={answer16.toString()} onChange={(e) => setAnswer16(Number(e.target.value))}>
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