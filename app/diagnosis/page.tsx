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
    const [answer1, setAnswer1] = useState("");
    const [answer2, setAnswer2] = useState("");
    const [answer3, setAnswer3] = useState("");
    const [answer4, setAnswer4] = useState("");
    const [answer5, setAnswer5] = useState("");
    const [answer6, setAnswer6] = useState("");
    const [answer7, setAnswer7] = useState("");
    const [answer8, setAnswer8] = useState("");
    const [answer9, setAnswer9] = useState("");
    const [answer10, setAnswer10] = useState("");
    const [answer11, setAnswer11] = useState("");
    const [answer12, setAnswer12] = useState("");
    const [answer13, setAnswer13] = useState("");
    const [answer14, setAnswer14] = useState("");
    const [answer15, setAnswer15] = useState("");
    const [answer16, setAnswer16] = useState("");
  
  
    const router = useRouter()
  
    // クエリパラメータを作成する（例：?a1=1&a2=2&a3=3）
    const query = `?q1=${answer1}&q2=${answer2}&q3=${answer3}&q4=${answer4}&q5=${answer5}&q6=${answer6}&q7=${answer7}&q8=${answer8}&q9=${answer9}&q10=${answer10}&q11=${answer11}&q12=${answer12}&q13=${answer13}&q14=${answer14}&q15=${answer15}&q16=${answer16}`;
  
    const handleClick = () => {
      router.push(`/result${query}`)
    }

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
                            <RadioGroup row value={answer1} onChange={(e) => setAnswer1(e.target.value)}>
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
                            <RadioGroup row value={answer2} onChange={(e) => setAnswer2(e.target.value)}>
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
                            <RadioGroup row value={answer3} onChange={(e) => setAnswer3(e.target.value)}>
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
                            <RadioGroup row value={answer4} onChange={(e) => setAnswer4(e.target.value)}>
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
                            <RadioGroup row value={answer5} onChange={(e) => setAnswer5(e.target.value)}>
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
                            <RadioGroup row value={answer6} onChange={(e) => setAnswer6(e.target.value)}>
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
                            <RadioGroup row value={answer7} onChange={(e) => setAnswer7(e.target.value)}>
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
                            <RadioGroup row value={answer8} onChange={(e) => setAnswer8(e.target.value)}>
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
                            <RadioGroup row value={answer9} onChange={(e) => setAnswer9(e.target.value)}>
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
                            <RadioGroup row value={answer10} onChange={(e) => setAnswer10(e.target.value)}>
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
                            <RadioGroup row value={answer11} onChange={(e) => setAnswer11(e.target.value)}>
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
                            <RadioGroup row value={answer12} onChange={(e) => setAnswer12(e.target.value)}>
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
                            <RadioGroup row value={answer13} onChange={(e) => setAnswer13(e.target.value)}>
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
                            <RadioGroup row value={answer14} onChange={(e) => setAnswer14(e.target.value)}>
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
                            <RadioGroup row value={answer15} onChange={(e) => setAnswer15(e.target.value)}>
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
                            <RadioGroup row value={answer16} onChange={(e) => setAnswer16(e.target.value)}>
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
            <Link href="/result">
                <Button variant='contained' 
                sx={{
                    fontSize: "30px",
                    backgroundColor: "#CF9FFF",
                    color: "#fff",  
                }} onClick={handleClick}>結果を見る→</Button>
            </Link>
        </div>
    )
}