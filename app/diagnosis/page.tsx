// "use client"

// import {useRef, useState} from "react";
// import {useRouter} from "next/navigation"
// import Button from '@mui/material/Button'
// import Radio from "@mui/material/Radio"
// import RadioGroup from "@mui/material/RadioGroup"
// import FormControlLabel from "@mui/material/FormControlLabel"
// import FormControl from "@mui/material/FormControl"
// import FormLabel from "@mui/material/FormLabel"
// import Link from "next/link"
// import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked"
// import { SvgIcon, SvgIconProps } from '@mui/material'

// function GreenFilledCircleIcon(props: SvgIconProps) {
//     return (
//       <SvgIcon {...props}>
//         <circle cx="12" cy="12" r="10" fill="currentColor" />
//       </SvgIcon>
//     )
//   }

// export default function Diagnosis() {
//     const [answer1, setAnswer1] = useState<number | null>(null);
//     const [answer2, setAnswer2] = useState<number | null>(null);
//     const [answer3, setAnswer3] = useState<number | null>(null);
//     const [answer4, setAnswer4] = useState<number | null>(null);
//     const [answer5, setAnswer5] = useState<number | null>(null);
//     const [answer6, setAnswer6] = useState<number | null>(null);
//     const [answer7, setAnswer7] = useState<number | null>(null);
//     const [answer8, setAnswer8] = useState<number | null>(null);
//     const [answer9, setAnswer9] = useState<number | null>(null);
//     const [answer10, setAnswer10] = useState<number | null>(null);
//     const [answer11, setAnswer11] = useState<number | null>(null);
//     const [answer12, setAnswer12] = useState<number | null>(null);
//     const [answer13, setAnswer13] = useState<number | null>(null);
//     const [answer14, setAnswer14] = useState<number | null>(null);
//     const [answer15, setAnswer15] = useState<number | null>(null);
//     const [answer16, setAnswer16] = useState<number | null>(null);

//     const [answered1, setAnswered1] = useState<boolean>(false);
//     const [answered2, setAnswered2] = useState<boolean>(false);
//     const [answered3, setAnswered3] = useState<boolean>(false);
//     const [answered4, setAnswered4] = useState<boolean>(false);
//     const [answered5, setAnswered5] = useState<boolean>(false);
//     const [answered6, setAnswered6] = useState<boolean>(false);
//     const [answered7, setAnswered7] = useState<boolean>(false);
//     const [answered8, setAnswered8] = useState<boolean>(false);
//     const [answered9, setAnswered9] = useState<boolean>(false);
//     const [answered10, setAnswered10] = useState<boolean>(false);
//     const [answered11, setAnswered11] = useState<boolean>(false);
//     const [answered12, setAnswered12] = useState<boolean>(false);
//     const [answered13, setAnswered13] = useState<boolean>(false);
//     const [answered14, setAnswered14] = useState<boolean>(false);
//     const [answered15, setAnswered15] = useState<boolean>(false);
//     const [answered16, setAnswered16] = useState<boolean>(false);

//     // const answersArray = [
//     //     answer1, answer2, answer3, answer4,
//     //     answer5, answer6, answer7, answer8,
//     //     answer9, answer10, answer11, answer12,
//     //     answer13, answer14, answer15, answer16
//     //   ];
    
//     const q2Ref = useRef<HTMLLIElement>(null);
//     const q3Ref = useRef<HTMLLIElement>(null);
//     const q4Ref = useRef<HTMLLIElement>(null);
//     const q5Ref = useRef<HTMLLIElement>(null);
//     const q6Ref = useRef<HTMLLIElement>(null);
//     const q7Ref = useRef<HTMLLIElement>(null);
//     const q8Ref = useRef<HTMLLIElement>(null);
//     const q9Ref = useRef<HTMLLIElement>(null);
//     const q10Ref = useRef<HTMLLIElement>(null);
//     const q11Ref = useRef<HTMLLIElement>(null);
//     const q12Ref = useRef<HTMLLIElement>(null);
//     const q13Ref = useRef<HTMLLIElement>(null);
//     const q14Ref = useRef<HTMLLIElement>(null);
//     const q15Ref = useRef<HTMLLIElement>(null);
//     const q16Ref = useRef<HTMLLIElement>(null);
//     const q17Ref = useRef<HTMLButtonElement>(null);

//     const handleQ1Change = (e: React.ChangeEvent<HTMLInputElement>) => {
//         setAnswer1(Number(e.target.value));
//         setAnswered1(true);
//         if (q2Ref.current) {
//           // q2Ref の位置（ページ上での Y 座標）を計算し、60px 分オフセットを引く
//           const topPosition =
//             q2Ref.current.getBoundingClientRect().top + window.pageYOffset - 60;
//           window.scrollTo({ top: topPosition, behavior: "smooth" });
//         }
//       };
//     const handleQ2Change = (e: React.ChangeEvent<HTMLInputElement>) => {
//         setAnswer2(Number(e.target.value));
//         setAnswered2(true);
//         if (q3Ref.current) {
//           // q2Ref の位置（ページ上での Y 座標）を計算し、60px 分オフセットを引く
//           const topPosition =
//             q3Ref.current.getBoundingClientRect().top + window.pageYOffset - 60;
//           window.scrollTo({ top: topPosition, behavior: "smooth" });
//         }
//       };
//       const handleQ3Change = (e: React.ChangeEvent<HTMLInputElement>) => {
//         setAnswer3(Number(e.target.value));
//         setAnswered3(true);
//         if (q4Ref.current) {
//           // q2Ref の位置（ページ上での Y 座標）を計算し、60px 分オフセットを引く
//           const topPosition =
//             q4Ref.current.getBoundingClientRect().top + window.pageYOffset - 60;
//           window.scrollTo({ top: topPosition, behavior: "smooth" });
//         }
//       };
//       const handleQ4Change = (e: React.ChangeEvent<HTMLInputElement>) => {
//         setAnswer4(Number(e.target.value));
//         setAnswered4(true);
//         if (q5Ref.current) {
//           // q2Ref の位置（ページ上での Y 座標）を計算し、60px 分オフセットを引く
//           const topPosition =
//             q5Ref.current.getBoundingClientRect().top + window.pageYOffset - 60;
//           window.scrollTo({ top: topPosition, behavior: "smooth" });
//         }
//       };
//       const handleQ5Change = (e: React.ChangeEvent<HTMLInputElement>) => {
//         setAnswer5(Number(e.target.value));
//         setAnswered5(true);
//         if (q6Ref.current) {
//           // q2Ref の位置（ページ上での Y 座標）を計算し、60px 分オフセットを引く
//           const topPosition =
//             q6Ref.current.getBoundingClientRect().top + window.pageYOffset - 60;
//           window.scrollTo({ top: topPosition, behavior: "smooth" });
//         }
//       };
//       const handleQ6Change = (e: React.ChangeEvent<HTMLInputElement>) => {
//         setAnswer6(Number(e.target.value));
//         setAnswered6(true);
//         if (q7Ref.current) {
//           // q2Ref の位置（ページ上での Y 座標）を計算し、60px 分オフセットを引く
//           const topPosition =
//             q7Ref.current.getBoundingClientRect().top + window.pageYOffset - 60;
//           window.scrollTo({ top: topPosition, behavior: "smooth" });
//         }
//       };
//       const handleQ7Change = (e: React.ChangeEvent<HTMLInputElement>) => {
//         setAnswer7(Number(e.target.value));
//         setAnswered7(true);
//         if (q8Ref.current) {
//           // q2Ref の位置（ページ上での Y 座標）を計算し、60px 分オフセットを引く
//           const topPosition =
//             q8Ref.current.getBoundingClientRect().top + window.pageYOffset - 60;
//           window.scrollTo({ top: topPosition, behavior: "smooth" });
//         }
//       };
//       const handleQ8Change = (e: React.ChangeEvent<HTMLInputElement>) => {
//         setAnswer8(Number(e.target.value));
//         setAnswered8(true);
//         if (q9Ref.current) {
//           // q2Ref の位置（ページ上での Y 座標）を計算し、60px 分オフセットを引く
//           const topPosition =
//             q9Ref.current.getBoundingClientRect().top + window.pageYOffset - 60;
//           window.scrollTo({ top: topPosition, behavior: "smooth" });
//         }
//       };
//       const handleQ9Change = (e: React.ChangeEvent<HTMLInputElement>) => {
//         setAnswer9(Number(e.target.value));
//         setAnswered9(true);
//         if (q10Ref.current) {
//           // q2Ref の位置（ページ上での Y 座標）を計算し、60px 分オフセットを引く
//           const topPosition =
//             q10Ref.current.getBoundingClientRect().top + window.pageYOffset - 60;
//           window.scrollTo({ top: topPosition, behavior: "smooth" });
//         }
//       };
//       const handleQ10Change = (e: React.ChangeEvent<HTMLInputElement>) => {
//         setAnswer10(Number(e.target.value));
//         setAnswered10(true);
//         if (q11Ref.current) {
//           // q2Ref の位置（ページ上での Y 座標）を計算し、60px 分オフセットを引く
//           const topPosition =
//             q11Ref.current.getBoundingClientRect().top + window.pageYOffset - 60;
//           window.scrollTo({ top: topPosition, behavior: "smooth" });
//         }
//       };
//       const handleQ11Change = (e: React.ChangeEvent<HTMLInputElement>) => {
//         setAnswer11(Number(e.target.value));
//         setAnswered11(true);
//         if (q12Ref.current) {
//           // q2Ref の位置（ページ上での Y 座標）を計算し、60px 分オフセットを引く
//           const topPosition =
//             q12Ref.current.getBoundingClientRect().top + window.pageYOffset - 60;
//           window.scrollTo({ top: topPosition, behavior: "smooth" });
//         }
//       };
//       const handleQ12Change = (e: React.ChangeEvent<HTMLInputElement>) => {
//         setAnswer12(Number(e.target.value));
//         setAnswered12(true);
//         if (q13Ref.current) {
//           // q2Ref の位置（ページ上での Y 座標）を計算し、60px 分オフセットを引く
//           const topPosition =
//             q13Ref.current.getBoundingClientRect().top + window.pageYOffset - 60;
//           window.scrollTo({ top: topPosition, behavior: "smooth" });
//         }
//       };
//       const handleQ13Change = (e: React.ChangeEvent<HTMLInputElement>) => {
//         setAnswer13(Number(e.target.value));
//         setAnswered13(true);
//         if (q14Ref.current) {
//           // q2Ref の位置（ページ上での Y 座標）を計算し、60px 分オフセットを引く
//           const topPosition =
//             q14Ref.current.getBoundingClientRect().top + window.pageYOffset - 60;
//           window.scrollTo({ top: topPosition, behavior: "smooth" });
//         }
//       };
//       const handleQ14Change = (e: React.ChangeEvent<HTMLInputElement>) => {
//         setAnswer14(Number(e.target.value));
//         setAnswered14(true);
//         if (q15Ref.current) {
//           // q2Ref の位置（ページ上での Y 座標）を計算し、60px 分オフセットを引く
//           const topPosition =
//             q15Ref.current.getBoundingClientRect().top + window.pageYOffset - 60;
//           window.scrollTo({ top: topPosition, behavior: "smooth" });
//         }
//       };
//       const handleQ15Change = (e: React.ChangeEvent<HTMLInputElement>) => {
//         setAnswer15(Number(e.target.value));
//         setAnswered15(true);
//         if (q16Ref.current) {
//           // q2Ref の位置（ページ上での Y 座標）を計算し、60px 分オフセットを引く
//           const topPosition =
//             q16Ref.current.getBoundingClientRect().top + window.pageYOffset - 60;
//           window.scrollTo({ top: topPosition, behavior: "smooth" });
//         }
//       };
//       const handleQ16Change = (e: React.ChangeEvent<HTMLInputElement>) => {
//         setAnswer16(Number(e.target.value));
//         setAnswered16(true);
//         if (q17Ref.current) {
//           // q2Ref の位置（ページ上での Y 座標）を計算し、60px 分オフセットを引く
//           const topPosition =
//             q17Ref.current.getBoundingClientRect().top + window.pageYOffset - 60;
//           window.scrollTo({ top: topPosition, behavior: "smooth" });
//         }
//       };
  
//     const router = useRouter()

//     const group1 = (answer1 ?? 0) + (answer2 ?? 0) + (answer3 ?? 0) + (answer4 ?? 0);
//     const group2 = (answer5 ?? 0) + (answer6 ?? 0) + (answer7 ?? 0) + (answer8 ?? 0);
//     const group3 = (answer9 ?? 0) + (answer10 ?? 0) + (answer11 ?? 0) + (answer12 ?? 0);
//     const group4 = (answer13 ?? 0) + (answer14 ?? 0) + (answer15 ?? 0) + (answer16 ?? 0);
    

//     let highestGroup = 1
//     let highestScore = group1
//     if (group2 > highestScore) {
//         highestGroup =2
//         highestScore = group2
//     }
//     if (group3 > highestScore) {
//         highestGroup =3
//         highestScore = group3
//     }
//     if (group4 > highestScore) {
//         highestGroup = 4
//         highestScore = group4
//     }

//     let pattern = "";
//     if (highestGroup === 1) {
//         pattern = "A"
//     } else if (highestGroup === 2) {
//         pattern = "B"
//     } else if (highestGroup === 3) {
//         pattern = "C"
//     } else if (highestGroup === 4) {
//         pattern = "D"
//     }

//     const handleSubmit = async () => {
//         const answersArray = [
//             answer1, answer2, answer3, answer4,
//             answer5, answer6, answer7, answer8,
//             answer9, answer10, answer11, answer12,
//             answer13, answer14, answer15, answer16
//           ];
//         console.log("送信前の answersArray:", answersArray);
//         const payload = { pattern, answers: answersArray };
//         await fetch("/api/saveDiagnosis", {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(payload)
//         });
//         router.push("/result");
//       };

//     return(
//         <div style={{marginTop: "20px",   display: "flex", flexDirection: "column", alignItems: "center",}}>
//             <ul>
//                 <li style={{borderBottom: "1px solid #ccc", margin: "40px 0", opacity: answered1 ? 0.4 : 1, color: answered1 ? "gray" : "inherit", transition: "all 0.3s ease", padding: "10px", borderRadius: "4px"}}>
//                     <FormControl component="fieldset">
//                         <FormLabel component="legend" sx={{fontWeight: "bold", fontSize: "21px"}}>Q1:将来のことを考えると、理由もなく不安に襲われることがある。</FormLabel>
//                         <div style={{display: "flex"}}>
//                             <div style={{alignSelf: "center"}}>
//                                 <p>賛成する</p>
//                             </div>
//                             <RadioGroup row name="q1" value={answer1 !== null ? answer1.toString() : ""} onChange={handleQ1Change}>
//                             <Radio icon={<RadioButtonUncheckedIcon sx={{ fontSize: 70, color: "#a0ff8d" }} />} checkedIcon={<SvgIcon sx={{fontSize: 70, color: "#a0ff8d"}}><circle cx="12" cy="12" r="10" fill="currentColor" /><path d="M8 12l3 3 6-6" stroke="white" strokeWidth="2" fill="none" /></SvgIcon>} value="1" />
//                             <Radio icon={<RadioButtonUncheckedIcon sx={{ fontSize: 60, color: "#a0ff8d" }} />} checkedIcon={<SvgIcon sx={{fontSize: 60, color: "#a0ff8d"}}><circle cx="12" cy="12" r="10" fill="currentColor" /><path d="M8 12l3 3 6-6" stroke="white" strokeWidth="2" fill="none" /></SvgIcon>} value="2" />
//                             <Radio icon={<RadioButtonUncheckedIcon sx={{ fontSize: 50, color: "#a0ff8d" }} />} checkedIcon={<SvgIcon sx={{fontSize: 50, color: "#a0ff8d"}}><circle cx="12" cy="12" r="10" fill="currentColor" /><path d="M8 12l3 3 6-6" stroke="white" strokeWidth="2" fill="none" /></SvgIcon>} value="3" />
//                             <Radio icon={<RadioButtonUncheckedIcon sx={{ fontSize: 40, color: "#D3D3D3" }} />} checkedIcon={<SvgIcon sx={{fontSize: 40, color: "#D3D3D3"}}><circle cx="12" cy="12" r="10" fill="currentColor" /><path d="M8 12l3 3 6-6" stroke="white" strokeWidth="2" fill="none" /></SvgIcon>} value="4" />
//                             <Radio icon={<RadioButtonUncheckedIcon sx={{ fontSize: 50, color: "#d18dff" }} />} checkedIcon={<SvgIcon sx={{fontSize: 50, color: "#d18dff"}}><circle cx="12" cy="12" r="10" fill="currentColor" /><path d="M8 12l3 3 6-6" stroke="white" strokeWidth="2" fill="none" /></SvgIcon>} value="5" />
//                             <Radio icon={<RadioButtonUncheckedIcon sx={{ fontSize: 60, color: "#d18dff" }} />} checkedIcon={<SvgIcon sx={{fontSize: 60, color: "#d18dff"}}><circle cx="12" cy="12" r="10" fill="currentColor" /><path d="M8 12l3 3 6-6" stroke="white" strokeWidth="2" fill="none" /></SvgIcon>} value="6" />
//                             <Radio icon={<RadioButtonUncheckedIcon sx={{ fontSize: 70, color: "#d18dff" }} />} checkedIcon={<SvgIcon sx={{fontSize: 70, color: "#d18dff"}}><circle cx="12" cy="12" r="10" fill="currentColor" /><path d="M8 12l3 3 6-6" stroke="white" strokeWidth="2" fill="none" /></SvgIcon>} value="7" />
//                             </RadioGroup>
//                             <div style={{alignSelf: "center"}}>
//                                 <p>反対する</p>
//                             </div>
//                         </div>
//                     </FormControl>
//                 </li>
//                 <li ref={q2Ref} style={{borderBottom: "1px solid #ccc", margin: "40px 0", opacity: answered1 ? 0.4 : 1, color: answered1 ? "gray" : "inherit", transition: "all 0.3s ease", padding: "10px", borderRadius: "4px"}}>
//                     <FormControl component="fieldset">
//                         <FormLabel component="legend" sx={{fontWeight: "bold", fontSize: "21px"}}>Q2:未来に何が起こるか分からないと、夜も眠れなくなる。</FormLabel>
//                         <div style={{display: "flex"}}>
//                             <div style={{alignSelf: "center"}}>
//                                 <p>賛成する</p>
//                             </div>
//                             <RadioGroup row name="q2" value={answer2 !== null ? answer2.toString() : ""} onChange={handleQ2Change}>
//                             <Radio icon={<RadioButtonUncheckedIcon sx={{ fontSize: 70, color: "#a0ff8d" }} />} checkedIcon={<SvgIcon sx={{fontSize: 70, color: "#a0ff8d"}}><circle cx="12" cy="12" r="10" fill="currentColor" /><path d="M8 12l3 3 6-6" stroke="white" strokeWidth="2" fill="none" /></SvgIcon>} value="1" />
//                             <Radio icon={<RadioButtonUncheckedIcon sx={{ fontSize: 60, color: "#a0ff8d" }} />} checkedIcon={<SvgIcon sx={{fontSize: 60, color: "#a0ff8d"}}><circle cx="12" cy="12" r="10" fill="currentColor" /><path d="M8 12l3 3 6-6" stroke="white" strokeWidth="2" fill="none" /></SvgIcon>} value="2" />
//                             <Radio icon={<RadioButtonUncheckedIcon sx={{ fontSize: 50, color: "#a0ff8d" }} />} checkedIcon={<SvgIcon sx={{fontSize: 50, color: "#a0ff8d"}}><circle cx="12" cy="12" r="10" fill="currentColor" /><path d="M8 12l3 3 6-6" stroke="white" strokeWidth="2" fill="none" /></SvgIcon>} value="3" />
//                             <Radio icon={<RadioButtonUncheckedIcon sx={{ fontSize: 40, color: "#D3D3D3" }} />} checkedIcon={<SvgIcon sx={{fontSize: 40, color: "#D3D3D3"}}><circle cx="12" cy="12" r="10" fill="currentColor" /><path d="M8 12l3 3 6-6" stroke="white" strokeWidth="2" fill="none" /></SvgIcon>} value="4" />
//                             <Radio icon={<RadioButtonUncheckedIcon sx={{ fontSize: 50, color: "#d18dff" }} />} checkedIcon={<SvgIcon sx={{fontSize: 50, color: "#d18dff"}}><circle cx="12" cy="12" r="10" fill="currentColor" /><path d="M8 12l3 3 6-6" stroke="white" strokeWidth="2" fill="none" /></SvgIcon>} value="5" />
//                             <Radio icon={<RadioButtonUncheckedIcon sx={{ fontSize: 60, color: "#d18dff" }} />} checkedIcon={<SvgIcon sx={{fontSize: 60, color: "#d18dff"}}><circle cx="12" cy="12" r="10" fill="currentColor" /><path d="M8 12l3 3 6-6" stroke="white" strokeWidth="2" fill="none" /></SvgIcon>} value="6" />
//                             <Radio icon={<RadioButtonUncheckedIcon sx={{ fontSize: 70, color: "#d18dff" }} />} checkedIcon={<SvgIcon sx={{fontSize: 70, color: "#d18dff"}}><circle cx="12" cy="12" r="10" fill="currentColor" /><path d="M8 12l3 3 6-6" stroke="white" strokeWidth="2" fill="none" /></SvgIcon>} value="7" />
//                             </RadioGroup>
//                             <div style={{alignSelf: "center"}}>
//                                 <p>反対する</p>
//                             </div>
//                         </div>
//                     </FormControl>
//                 </li>
//                 <li ref={q3Ref}  style={{borderBottom: "1px solid #ccc", margin: "40px 0"}}>
//                     <FormControl component="fieldset">
//                         <FormLabel component="legend" sx={{fontWeight: "bold", fontSize: "21px"}}>Q3:自分の存在や人生の意味について、ふと疑問に思うことがある。</FormLabel>
//                         <div style={{display: "flex"}}>
//                             <div style={{alignSelf: "center"}}>
//                                 <p>賛成する</p>
//                             </div>
//                             <RadioGroup row name="q3" value={answer3 !== null ? answer3.toString() : ""} onChange={handleQ3Change}>
//                             <Radio icon={<RadioButtonUncheckedIcon sx={{ fontSize: 70, color: "#a0ff8d" }} />} checkedIcon={<SvgIcon sx={{fontSize: 70, color: "#a0ff8d"}}><circle cx="12" cy="12" r="10" fill="currentColor" /><path d="M8 12l3 3 6-6" stroke="white" strokeWidth="2" fill="none" /></SvgIcon>} value="1" />
//                             <Radio icon={<RadioButtonUncheckedIcon sx={{ fontSize: 60, color: "#a0ff8d" }} />} checkedIcon={<SvgIcon sx={{fontSize: 60, color: "#a0ff8d"}}><circle cx="12" cy="12" r="10" fill="currentColor" /><path d="M8 12l3 3 6-6" stroke="white" strokeWidth="2" fill="none" /></SvgIcon>} value="2" />
//                             <Radio icon={<RadioButtonUncheckedIcon sx={{ fontSize: 50, color: "#a0ff8d" }} />} checkedIcon={<SvgIcon sx={{fontSize: 50, color: "#a0ff8d"}}><circle cx="12" cy="12" r="10" fill="currentColor" /><path d="M8 12l3 3 6-6" stroke="white" strokeWidth="2" fill="none" /></SvgIcon>} value="3" />
//                             <Radio icon={<RadioButtonUncheckedIcon sx={{ fontSize: 40, color: "#D3D3D3" }} />} checkedIcon={<SvgIcon sx={{fontSize: 40, color: "#D3D3D3"}}><circle cx="12" cy="12" r="10" fill="currentColor" /><path d="M8 12l3 3 6-6" stroke="white" strokeWidth="2" fill="none" /></SvgIcon>} value="4" />
//                             <Radio icon={<RadioButtonUncheckedIcon sx={{ fontSize: 50, color: "#d18dff" }} />} checkedIcon={<SvgIcon sx={{fontSize: 50, color: "#d18dff"}}><circle cx="12" cy="12" r="10" fill="currentColor" /><path d="M8 12l3 3 6-6" stroke="white" strokeWidth="2" fill="none" /></SvgIcon>} value="5" />
//                             <Radio icon={<RadioButtonUncheckedIcon sx={{ fontSize: 60, color: "#d18dff" }} />} checkedIcon={<SvgIcon sx={{fontSize: 60, color: "#d18dff"}}><circle cx="12" cy="12" r="10" fill="currentColor" /><path d="M8 12l3 3 6-6" stroke="white" strokeWidth="2" fill="none" /></SvgIcon>} value="6" />
//                             <Radio icon={<RadioButtonUncheckedIcon sx={{ fontSize: 70, color: "#d18dff" }} />} checkedIcon={<SvgIcon sx={{fontSize: 70, color: "#d18dff"}}><circle cx="12" cy="12" r="10" fill="currentColor" /><path d="M8 12l3 3 6-6" stroke="white" strokeWidth="2" fill="none" /></SvgIcon>} value="7" />
//                             </RadioGroup>
//                             <div style={{alignSelf: "center"}}>
//                                 <p>反対する</p>
//                             </div>
//                         </div>
//                     </FormControl>
//                 </li>
//                 <li ref={q4Ref}  style={{borderBottom: "1px solid #ccc", margin: "40px 0"}}>
//                     <FormControl component="fieldset">
//                         <FormLabel component="legend" sx={{fontWeight: "bold", fontSize: "21px"}}>Q4:もし最悪のことが起こったら…と常に考えてしまう。</FormLabel>
//                         <div style={{display: "flex"}}>
//                             <div style={{alignSelf: "center"}}>
//                                 <p>賛成する</p>
//                             </div>
//                             <RadioGroup row name="q4" value={answer4 !== null ? answer4.toString() : ""} onChange={handleQ4Change}>
//                             <Radio icon={<RadioButtonUncheckedIcon sx={{ fontSize: 70, color: "#a0ff8d" }} />} checkedIcon={<SvgIcon sx={{fontSize: 70, color: "#a0ff8d"}}><circle cx="12" cy="12" r="10" fill="currentColor" /><path d="M8 12l3 3 6-6" stroke="white" strokeWidth="2" fill="none" /></SvgIcon>} value="1" />
//                             <Radio icon={<RadioButtonUncheckedIcon sx={{ fontSize: 60, color: "#a0ff8d" }} />} checkedIcon={<SvgIcon sx={{fontSize: 60, color: "#a0ff8d"}}><circle cx="12" cy="12" r="10" fill="currentColor" /><path d="M8 12l3 3 6-6" stroke="white" strokeWidth="2" fill="none" /></SvgIcon>} value="2" />
//                             <Radio icon={<RadioButtonUncheckedIcon sx={{ fontSize: 50, color: "#a0ff8d" }} />} checkedIcon={<SvgIcon sx={{fontSize: 50, color: "#a0ff8d"}}><circle cx="12" cy="12" r="10" fill="currentColor" /><path d="M8 12l3 3 6-6" stroke="white" strokeWidth="2" fill="none" /></SvgIcon>} value="3" />
//                             <Radio icon={<RadioButtonUncheckedIcon sx={{ fontSize: 40, color: "#D3D3D3" }} />} checkedIcon={<SvgIcon sx={{fontSize: 40, color: "#D3D3D3"}}><circle cx="12" cy="12" r="10" fill="currentColor" /><path d="M8 12l3 3 6-6" stroke="white" strokeWidth="2" fill="none" /></SvgIcon>} value="4" />
//                             <Radio icon={<RadioButtonUncheckedIcon sx={{ fontSize: 50, color: "#d18dff" }} />} checkedIcon={<SvgIcon sx={{fontSize: 50, color: "#d18dff"}}><circle cx="12" cy="12" r="10" fill="currentColor" /><path d="M8 12l3 3 6-6" stroke="white" strokeWidth="2" fill="none" /></SvgIcon>} value="5" />
//                             <Radio icon={<RadioButtonUncheckedIcon sx={{ fontSize: 60, color: "#d18dff" }} />} checkedIcon={<SvgIcon sx={{fontSize: 60, color: "#d18dff"}}><circle cx="12" cy="12" r="10" fill="currentColor" /><path d="M8 12l3 3 6-6" stroke="white" strokeWidth="2" fill="none" /></SvgIcon>} value="6" />
//                             <Radio icon={<RadioButtonUncheckedIcon sx={{ fontSize: 70, color: "#d18dff" }} />} checkedIcon={<SvgIcon sx={{fontSize: 70, color: "#d18dff"}}><circle cx="12" cy="12" r="10" fill="currentColor" /><path d="M8 12l3 3 6-6" stroke="white" strokeWidth="2" fill="none" /></SvgIcon>} value="7" />
//                             </RadioGroup>
//                             <div style={{alignSelf: "center"}}>
//                                 <p>反対する</p>
//                             </div>
//                         </div>
//                     </FormControl>
//                 </li>
//                 <li ref={q5Ref}  style={{borderBottom: "1px solid #ccc", margin: "40px 0"}}>
//                     <FormControl component="fieldset">
//                         <FormLabel component="legend" sx={{fontWeight: "bold", fontSize: "21px"}}>Q5:人前で話すとき、体が固まってしまうほど緊張する。</FormLabel>
//                         <div style={{display: "flex"}}>
//                             <div style={{alignSelf: "center"}}>
//                                 <p>賛成する</p>
//                             </div>
//                             <RadioGroup row name="q5" value={answer5 !== null ? answer5.toString() : ""} onChange={handleQ5Change}>
//                             <Radio icon={<RadioButtonUncheckedIcon sx={{ fontSize: 70, color: "#a0ff8d" }} />} checkedIcon={<SvgIcon sx={{fontSize: 70, color: "#a0ff8d"}}><circle cx="12" cy="12" r="10" fill="currentColor" /><path d="M8 12l3 3 6-6" stroke="white" strokeWidth="2" fill="none" /></SvgIcon>} value="1" />
//                             <Radio icon={<RadioButtonUncheckedIcon sx={{ fontSize: 60, color: "#a0ff8d" }} />} checkedIcon={<SvgIcon sx={{fontSize: 60, color: "#a0ff8d"}}><circle cx="12" cy="12" r="10" fill="currentColor" /><path d="M8 12l3 3 6-6" stroke="white" strokeWidth="2" fill="none" /></SvgIcon>} value="2" />
//                             <Radio icon={<RadioButtonUncheckedIcon sx={{ fontSize: 50, color: "#a0ff8d" }} />} checkedIcon={<SvgIcon sx={{fontSize: 50, color: "#a0ff8d"}}><circle cx="12" cy="12" r="10" fill="currentColor" /><path d="M8 12l3 3 6-6" stroke="white" strokeWidth="2" fill="none" /></SvgIcon>} value="3" />
//                             <Radio icon={<RadioButtonUncheckedIcon sx={{ fontSize: 40, color: "#D3D3D3" }} />} checkedIcon={<SvgIcon sx={{fontSize: 40, color: "#D3D3D3"}}><circle cx="12" cy="12" r="10" fill="currentColor" /><path d="M8 12l3 3 6-6" stroke="white" strokeWidth="2" fill="none" /></SvgIcon>} value="4" />
//                             <Radio icon={<RadioButtonUncheckedIcon sx={{ fontSize: 50, color: "#d18dff" }} />} checkedIcon={<SvgIcon sx={{fontSize: 50, color: "#d18dff"}}><circle cx="12" cy="12" r="10" fill="currentColor" /><path d="M8 12l3 3 6-6" stroke="white" strokeWidth="2" fill="none" /></SvgIcon>} value="5" />
//                             <Radio icon={<RadioButtonUncheckedIcon sx={{ fontSize: 60, color: "#d18dff" }} />} checkedIcon={<SvgIcon sx={{fontSize: 60, color: "#d18dff"}}><circle cx="12" cy="12" r="10" fill="currentColor" /><path d="M8 12l3 3 6-6" stroke="white" strokeWidth="2" fill="none" /></SvgIcon>} value="6" />
//                             <Radio icon={<RadioButtonUncheckedIcon sx={{ fontSize: 70, color: "#d18dff" }} />} checkedIcon={<SvgIcon sx={{fontSize: 70, color: "#d18dff"}}><circle cx="12" cy="12" r="10" fill="currentColor" /><path d="M8 12l3 3 6-6" stroke="white" strokeWidth="2" fill="none" /></SvgIcon>} value="7" />
//                             </RadioGroup>
//                             <div style={{alignSelf: "center"}}>
//                                 <p>反対する</p>
//                             </div>
//                         </div>
//                     </FormControl>
//                 </li>
//                 <li ref={q6Ref} style={{borderBottom: "1px solid #ccc", margin: "40px 0"}}>
//                     <FormControl component="fieldset">
//                         <FormLabel component="legend" sx={{fontWeight: "bold", fontSize: "21px"}}>Q6:ちょっとした他人の言葉や態度で、自分の価値を疑ってしまう。</FormLabel>
//                         <div style={{display: "flex"}}>
//                             <div style={{alignSelf: "center"}}>
//                                 <p>賛成する</p>
//                             </div>
//                             <RadioGroup row name="q6" value={answer6 !== null ? answer6.toString() : ""} onChange={handleQ6Change}>
//                             <Radio icon={<RadioButtonUncheckedIcon sx={{ fontSize: 70, color: "#a0ff8d" }} />} checkedIcon={<SvgIcon sx={{fontSize: 70, color: "#a0ff8d"}}><circle cx="12" cy="12" r="10" fill="currentColor" /><path d="M8 12l3 3 6-6" stroke="white" strokeWidth="2" fill="none" /></SvgIcon>} value="1" />
//                             <Radio icon={<RadioButtonUncheckedIcon sx={{ fontSize: 60, color: "#a0ff8d" }} />} checkedIcon={<SvgIcon sx={{fontSize: 60, color: "#a0ff8d"}}><circle cx="12" cy="12" r="10" fill="currentColor" /><path d="M8 12l3 3 6-6" stroke="white" strokeWidth="2" fill="none" /></SvgIcon>} value="2" />
//                             <Radio icon={<RadioButtonUncheckedIcon sx={{ fontSize: 50, color: "#a0ff8d" }} />} checkedIcon={<SvgIcon sx={{fontSize: 50, color: "#a0ff8d"}}><circle cx="12" cy="12" r="10" fill="currentColor" /><path d="M8 12l3 3 6-6" stroke="white" strokeWidth="2" fill="none" /></SvgIcon>} value="3" />
//                             <Radio icon={<RadioButtonUncheckedIcon sx={{ fontSize: 40, color: "#D3D3D3" }} />} checkedIcon={<SvgIcon sx={{fontSize: 40, color: "#D3D3D3"}}><circle cx="12" cy="12" r="10" fill="currentColor" /><path d="M8 12l3 3 6-6" stroke="white" strokeWidth="2" fill="none" /></SvgIcon>} value="4" />
//                             <Radio icon={<RadioButtonUncheckedIcon sx={{ fontSize: 50, color: "#d18dff" }} />} checkedIcon={<SvgIcon sx={{fontSize: 50, color: "#d18dff"}}><circle cx="12" cy="12" r="10" fill="currentColor" /><path d="M8 12l3 3 6-6" stroke="white" strokeWidth="2" fill="none" /></SvgIcon>} value="5" />
//                             <Radio icon={<RadioButtonUncheckedIcon sx={{ fontSize: 60, color: "#d18dff" }} />} checkedIcon={<SvgIcon sx={{fontSize: 60, color: "#d18dff"}}><circle cx="12" cy="12" r="10" fill="currentColor" /><path d="M8 12l3 3 6-6" stroke="white" strokeWidth="2" fill="none" /></SvgIcon>} value="6" />
//                             <Radio icon={<RadioButtonUncheckedIcon sx={{ fontSize: 70, color: "#d18dff" }} />} checkedIcon={<SvgIcon sx={{fontSize: 70, color: "#d18dff"}}><circle cx="12" cy="12" r="10" fill="currentColor" /><path d="M8 12l3 3 6-6" stroke="white" strokeWidth="2" fill="none" /></SvgIcon>} value="7" />
//                             </RadioGroup>
//                             <div style={{alignSelf: "center"}}>
//                                 <p>反対する</p>
//                             </div>
//                         </div>
//                     </FormControl>
//                 </li>
//                 <li ref={q7Ref} style={{borderBottom: "1px solid #ccc", margin: "40px 0"}}>
//                     <FormControl component="fieldset">
//                         <FormLabel component="legend" sx={{fontWeight: "bold", fontSize: "21px"}}>Q7:他人からの批判や否定的なコメントを、長い時間引きずってしまう。</FormLabel>
//                         <div style={{display: "flex"}}>
//                             <div style={{alignSelf: "center"}}>
//                                 <p>賛成する</p>
//                             </div>
//                             <RadioGroup row name="q7" value={answer7 !== null ? answer7.toString() : ""} onChange={handleQ7Change}>
//                             <Radio icon={<RadioButtonUncheckedIcon sx={{ fontSize: 70, color: "#a0ff8d" }} />} checkedIcon={<SvgIcon sx={{fontSize: 70, color: "#a0ff8d"}}><circle cx="12" cy="12" r="10" fill="currentColor" /><path d="M8 12l3 3 6-6" stroke="white" strokeWidth="2" fill="none" /></SvgIcon>} value="1" />
//                             <Radio icon={<RadioButtonUncheckedIcon sx={{ fontSize: 60, color: "#a0ff8d" }} />} checkedIcon={<SvgIcon sx={{fontSize: 60, color: "#a0ff8d"}}><circle cx="12" cy="12" r="10" fill="currentColor" /><path d="M8 12l3 3 6-6" stroke="white" strokeWidth="2" fill="none" /></SvgIcon>} value="2" />
//                             <Radio icon={<RadioButtonUncheckedIcon sx={{ fontSize: 50, color: "#a0ff8d" }} />} checkedIcon={<SvgIcon sx={{fontSize: 50, color: "#a0ff8d"}}><circle cx="12" cy="12" r="10" fill="currentColor" /><path d="M8 12l3 3 6-6" stroke="white" strokeWidth="2" fill="none" /></SvgIcon>} value="3" />
//                             <Radio icon={<RadioButtonUncheckedIcon sx={{ fontSize: 40, color: "#D3D3D3" }} />} checkedIcon={<SvgIcon sx={{fontSize: 40, color: "#D3D3D3"}}><circle cx="12" cy="12" r="10" fill="currentColor" /><path d="M8 12l3 3 6-6" stroke="white" strokeWidth="2" fill="none" /></SvgIcon>} value="4" />
//                             <Radio icon={<RadioButtonUncheckedIcon sx={{ fontSize: 50, color: "#d18dff" }} />} checkedIcon={<SvgIcon sx={{fontSize: 50, color: "#d18dff"}}><circle cx="12" cy="12" r="10" fill="currentColor" /><path d="M8 12l3 3 6-6" stroke="white" strokeWidth="2" fill="none" /></SvgIcon>} value="5" />
//                             <Radio icon={<RadioButtonUncheckedIcon sx={{ fontSize: 60, color: "#d18dff" }} />} checkedIcon={<SvgIcon sx={{fontSize: 60, color: "#d18dff"}}><circle cx="12" cy="12" r="10" fill="currentColor" /><path d="M8 12l3 3 6-6" stroke="white" strokeWidth="2" fill="none" /></SvgIcon>} value="6" />
//                             <Radio icon={<RadioButtonUncheckedIcon sx={{ fontSize: 70, color: "#d18dff" }} />} checkedIcon={<SvgIcon sx={{fontSize: 70, color: "#d18dff"}}><circle cx="12" cy="12" r="10" fill="currentColor" /><path d="M8 12l3 3 6-6" stroke="white" strokeWidth="2" fill="none" /></SvgIcon>} value="7" />
//                             </RadioGroup>
//                             <div style={{alignSelf: "center"}}>
//                                 <p>反対する</p>
//                             </div>
//                         </div>
//                     </FormControl>
//                 </li>
//                 <li ref={q8Ref} style={{borderBottom: "1px solid #ccc", margin: "40px 0"}}>
//                     <FormControl component="fieldset">
//                         <FormLabel component="legend" sx={{fontWeight: "bold", fontSize: "21px"}}>Q8:初対面の人と話すと、何を言っていいか分からなくなる。</FormLabel>
//                         <div style={{display: "flex"}}>
//                             <div style={{alignSelf: "center"}}>
//                                 <p>賛成する</p>
//                             </div>
//                             <RadioGroup row name="q8" value={answer8 !== null ? answer8.toString() : ""} onChange={handleQ8Change}>
//                             <Radio icon={<RadioButtonUncheckedIcon sx={{ fontSize: 70, color: "#a0ff8d" }} />} checkedIcon={<SvgIcon sx={{fontSize: 70, color: "#a0ff8d"}}><circle cx="12" cy="12" r="10" fill="currentColor" /><path d="M8 12l3 3 6-6" stroke="white" strokeWidth="2" fill="none" /></SvgIcon>} value="1" />
//                             <Radio icon={<RadioButtonUncheckedIcon sx={{ fontSize: 60, color: "#a0ff8d" }} />} checkedIcon={<SvgIcon sx={{fontSize: 60, color: "#a0ff8d"}}><circle cx="12" cy="12" r="10" fill="currentColor" /><path d="M8 12l3 3 6-6" stroke="white" strokeWidth="2" fill="none" /></SvgIcon>} value="2" />
//                             <Radio icon={<RadioButtonUncheckedIcon sx={{ fontSize: 50, color: "#a0ff8d" }} />} checkedIcon={<SvgIcon sx={{fontSize: 50, color: "#a0ff8d"}}><circle cx="12" cy="12" r="10" fill="currentColor" /><path d="M8 12l3 3 6-6" stroke="white" strokeWidth="2" fill="none" /></SvgIcon>} value="3" />
//                             <Radio icon={<RadioButtonUncheckedIcon sx={{ fontSize: 40, color: "#D3D3D3" }} />} checkedIcon={<SvgIcon sx={{fontSize: 40, color: "#D3D3D3"}}><circle cx="12" cy="12" r="10" fill="currentColor" /><path d="M8 12l3 3 6-6" stroke="white" strokeWidth="2" fill="none" /></SvgIcon>} value="4" />
//                             <Radio icon={<RadioButtonUncheckedIcon sx={{ fontSize: 50, color: "#d18dff" }} />} checkedIcon={<SvgIcon sx={{fontSize: 50, color: "#d18dff"}}><circle cx="12" cy="12" r="10" fill="currentColor" /><path d="M8 12l3 3 6-6" stroke="white" strokeWidth="2" fill="none" /></SvgIcon>} value="5" />
//                             <Radio icon={<RadioButtonUncheckedIcon sx={{ fontSize: 60, color: "#d18dff" }} />} checkedIcon={<SvgIcon sx={{fontSize: 60, color: "#d18dff"}}><circle cx="12" cy="12" r="10" fill="currentColor" /><path d="M8 12l3 3 6-6" stroke="white" strokeWidth="2" fill="none" /></SvgIcon>} value="6" />
//                             <Radio icon={<RadioButtonUncheckedIcon sx={{ fontSize: 70, color: "#d18dff" }} />} checkedIcon={<SvgIcon sx={{fontSize: 70, color: "#d18dff"}}><circle cx="12" cy="12" r="10" fill="currentColor" /><path d="M8 12l3 3 6-6" stroke="white" strokeWidth="2" fill="none" /></SvgIcon>} value="7" />
//                             </RadioGroup>
//                             <div style={{alignSelf: "center"}}>
//                                 <p>反対する</p>
//                             </div>
//                         </div>
//                     </FormControl>
//                 </li>
//                 <li ref={q9Ref} style={{borderBottom: "1px solid #ccc", margin: "40px 0"}}>
//                     <FormControl component="fieldset">
//                         <FormLabel component="legend" sx={{fontWeight: "bold", fontSize: "21px"}}>Q9:何事も100%完璧にしなければ気持ちが落ち着かない。</FormLabel>
//                         <div style={{display: "flex"}}>
//                             <div style={{alignSelf: "center"}}>
//                                 <p>賛成する</p>
//                             </div>
//                             <RadioGroup row name="q9" value={answer9 !== null ? answer9.toString() : ""} onChange={handleQ9Change}>
//                             <Radio icon={<RadioButtonUncheckedIcon sx={{ fontSize: 70, color: "#a0ff8d" }} />} checkedIcon={<SvgIcon sx={{fontSize: 70, color: "#a0ff8d"}}><circle cx="12" cy="12" r="10" fill="currentColor" /><path d="M8 12l3 3 6-6" stroke="white" strokeWidth="2" fill="none" /></SvgIcon>} value="1" />
//                             <Radio icon={<RadioButtonUncheckedIcon sx={{ fontSize: 60, color: "#a0ff8d" }} />} checkedIcon={<SvgIcon sx={{fontSize: 60, color: "#a0ff8d"}}><circle cx="12" cy="12" r="10" fill="currentColor" /><path d="M8 12l3 3 6-6" stroke="white" strokeWidth="2" fill="none" /></SvgIcon>} value="2" />
//                             <Radio icon={<RadioButtonUncheckedIcon sx={{ fontSize: 50, color: "#a0ff8d" }} />} checkedIcon={<SvgIcon sx={{fontSize: 50, color: "#a0ff8d"}}><circle cx="12" cy="12" r="10" fill="currentColor" /><path d="M8 12l3 3 6-6" stroke="white" strokeWidth="2" fill="none" /></SvgIcon>} value="3" />
//                             <Radio icon={<RadioButtonUncheckedIcon sx={{ fontSize: 40, color: "#D3D3D3" }} />} checkedIcon={<SvgIcon sx={{fontSize: 40, color: "#D3D3D3"}}><circle cx="12" cy="12" r="10" fill="currentColor" /><path d="M8 12l3 3 6-6" stroke="white" strokeWidth="2" fill="none" /></SvgIcon>} value="4" />
//                             <Radio icon={<RadioButtonUncheckedIcon sx={{ fontSize: 50, color: "#d18dff" }} />} checkedIcon={<SvgIcon sx={{fontSize: 50, color: "#d18dff"}}><circle cx="12" cy="12" r="10" fill="currentColor" /><path d="M8 12l3 3 6-6" stroke="white" strokeWidth="2" fill="none" /></SvgIcon>} value="5" />
//                             <Radio icon={<RadioButtonUncheckedIcon sx={{ fontSize: 60, color: "#d18dff" }} />} checkedIcon={<SvgIcon sx={{fontSize: 60, color: "#d18dff"}}><circle cx="12" cy="12" r="10" fill="currentColor" /><path d="M8 12l3 3 6-6" stroke="white" strokeWidth="2" fill="none" /></SvgIcon>} value="6" />
//                             <Radio icon={<RadioButtonUncheckedIcon sx={{ fontSize: 70, color: "#d18dff" }} />} checkedIcon={<SvgIcon sx={{fontSize: 70, color: "#d18dff"}}><circle cx="12" cy="12" r="10" fill="currentColor" /><path d="M8 12l3 3 6-6" stroke="white" strokeWidth="2" fill="none" /></SvgIcon>} value="7" />
//                             </RadioGroup>
//                             <div style={{alignSelf: "center"}}>
//                                 <p>反対する</p>
//                             </div>
//                         </div>
//                     </FormControl>
//                 </li>
//                 <li ref={q10Ref} style={{borderBottom: "1px solid #ccc", margin: "40px 0"}}>
//                     <FormControl component="fieldset">
//                         <FormLabel component="legend" sx={{fontWeight: "bold", fontSize: "21px"}}>Q10:一度のミスで、自分の能力に強い不安を感じる。</FormLabel>
//                         <div style={{display: "flex"}}>
//                             <div style={{alignSelf: "center"}}>
//                                 <p>賛成する</p>
//                             </div>
//                             <RadioGroup row name="q10" value={answer10 !== null ? answer10.toString() : ""} onChange={handleQ10Change}>
//                             <Radio icon={<RadioButtonUncheckedIcon sx={{ fontSize: 70, color: "#a0ff8d" }} />} checkedIcon={<SvgIcon sx={{fontSize: 70, color: "#a0ff8d"}}><circle cx="12" cy="12" r="10" fill="currentColor" /><path d="M8 12l3 3 6-6" stroke="white" strokeWidth="2" fill="none" /></SvgIcon>} value="1" />
//                             <Radio icon={<RadioButtonUncheckedIcon sx={{ fontSize: 60, color: "#a0ff8d" }} />} checkedIcon={<SvgIcon sx={{fontSize: 60, color: "#a0ff8d"}}><circle cx="12" cy="12" r="10" fill="currentColor" /><path d="M8 12l3 3 6-6" stroke="white" strokeWidth="2" fill="none" /></SvgIcon>} value="2" />
//                             <Radio icon={<RadioButtonUncheckedIcon sx={{ fontSize: 50, color: "#a0ff8d" }} />} checkedIcon={<SvgIcon sx={{fontSize: 50, color: "#a0ff8d"}}><circle cx="12" cy="12" r="10" fill="currentColor" /><path d="M8 12l3 3 6-6" stroke="white" strokeWidth="2" fill="none" /></SvgIcon>} value="3" />
//                             <Radio icon={<RadioButtonUncheckedIcon sx={{ fontSize: 40, color: "#D3D3D3" }} />} checkedIcon={<SvgIcon sx={{fontSize: 40, color: "#D3D3D3"}}><circle cx="12" cy="12" r="10" fill="currentColor" /><path d="M8 12l3 3 6-6" stroke="white" strokeWidth="2" fill="none" /></SvgIcon>} value="4" />
//                             <Radio icon={<RadioButtonUncheckedIcon sx={{ fontSize: 50, color: "#d18dff" }} />} checkedIcon={<SvgIcon sx={{fontSize: 50, color: "#d18dff"}}><circle cx="12" cy="12" r="10" fill="currentColor" /><path d="M8 12l3 3 6-6" stroke="white" strokeWidth="2" fill="none" /></SvgIcon>} value="5" />
//                             <Radio icon={<RadioButtonUncheckedIcon sx={{ fontSize: 60, color: "#d18dff" }} />} checkedIcon={<SvgIcon sx={{fontSize: 60, color: "#d18dff"}}><circle cx="12" cy="12" r="10" fill="currentColor" /><path d="M8 12l3 3 6-6" stroke="white" strokeWidth="2" fill="none" /></SvgIcon>} value="6" />
//                             <Radio icon={<RadioButtonUncheckedIcon sx={{ fontSize: 70, color: "#d18dff" }} />} checkedIcon={<SvgIcon sx={{fontSize: 70, color: "#d18dff"}}><circle cx="12" cy="12" r="10" fill="currentColor" /><path d="M8 12l3 3 6-6" stroke="white" strokeWidth="2" fill="none" /></SvgIcon>} value="7" />
//                             </RadioGroup>
//                             <div style={{alignSelf: "center"}}>
//                                 <p>反対する</p>
//                             </div>
//                         </div>
//                     </FormControl>
//                 </li>
//                 <li ref={q11Ref} style={{borderBottom: "1px solid #ccc", margin: "40px 0"}}>
//                     <FormControl component="fieldset">
//                         <FormLabel component="legend" sx={{fontWeight: "bold", fontSize: "21px"}}>Q11:体のちょっとした違和感でも、すぐに大病を疑ってしまう。</FormLabel>
//                         <div style={{display: "flex"}}>
//                             <div style={{alignSelf: "center"}}>
//                                 <p>賛成する</p>
//                             </div>
//                             <RadioGroup row name="q11" value={answer11 !== null ? answer11.toString() : ""} onChange={handleQ11Change}>
//                             <Radio icon={<RadioButtonUncheckedIcon sx={{ fontSize: 70, color: "#a0ff8d" }} />} checkedIcon={<SvgIcon sx={{fontSize: 70, color: "#a0ff8d"}}><circle cx="12" cy="12" r="10" fill="currentColor" /><path d="M8 12l3 3 6-6" stroke="white" strokeWidth="2" fill="none" /></SvgIcon>} value="1" />
//                             <Radio icon={<RadioButtonUncheckedIcon sx={{ fontSize: 60, color: "#a0ff8d" }} />} checkedIcon={<SvgIcon sx={{fontSize: 60, color: "#a0ff8d"}}><circle cx="12" cy="12" r="10" fill="currentColor" /><path d="M8 12l3 3 6-6" stroke="white" strokeWidth="2" fill="none" /></SvgIcon>} value="2" />
//                             <Radio icon={<RadioButtonUncheckedIcon sx={{ fontSize: 50, color: "#a0ff8d" }} />} checkedIcon={<SvgIcon sx={{fontSize: 50, color: "#a0ff8d"}}><circle cx="12" cy="12" r="10" fill="currentColor" /><path d="M8 12l3 3 6-6" stroke="white" strokeWidth="2" fill="none" /></SvgIcon>} value="3" />
//                             <Radio icon={<RadioButtonUncheckedIcon sx={{ fontSize: 40, color: "#D3D3D3" }} />} checkedIcon={<SvgIcon sx={{fontSize: 40, color: "#D3D3D3"}}><circle cx="12" cy="12" r="10" fill="currentColor" /><path d="M8 12l3 3 6-6" stroke="white" strokeWidth="2" fill="none" /></SvgIcon>} value="4" />
//                             <Radio icon={<RadioButtonUncheckedIcon sx={{ fontSize: 50, color: "#d18dff" }} />} checkedIcon={<SvgIcon sx={{fontSize: 50, color: "#d18dff"}}><circle cx="12" cy="12" r="10" fill="currentColor" /><path d="M8 12l3 3 6-6" stroke="white" strokeWidth="2" fill="none" /></SvgIcon>} value="5" />
//                             <Radio icon={<RadioButtonUncheckedIcon sx={{ fontSize: 60, color: "#d18dff" }} />} checkedIcon={<SvgIcon sx={{fontSize: 60, color: "#d18dff"}}><circle cx="12" cy="12" r="10" fill="currentColor" /><path d="M8 12l3 3 6-6" stroke="white" strokeWidth="2" fill="none" /></SvgIcon>} value="6" />
//                             <Radio icon={<RadioButtonUncheckedIcon sx={{ fontSize: 70, color: "#d18dff" }} />} checkedIcon={<SvgIcon sx={{fontSize: 70, color: "#d18dff"}}><circle cx="12" cy="12" r="10" fill="currentColor" /><path d="M8 12l3 3 6-6" stroke="white" strokeWidth="2" fill="none" /></SvgIcon>} value="7" />
//                             </RadioGroup>
//                             <div style={{alignSelf: "center"}}>
//                                 <p>反対する</p>
//                             </div>
//                         </div>
//                     </FormControl>
//                 </li>
//                 <li ref={q12Ref} style={{borderBottom: "1px solid #ccc", margin: "40px 0"}}>
//                     <FormControl component="fieldset">
//                         <FormLabel component="legend" sx={{fontWeight: "bold", fontSize: "21px"}}>Q12:検査で『問題なし』と言われても、安心できず不安になる。</FormLabel>
//                         <div style={{display: "flex"}}>
//                             <div style={{alignSelf: "center"}}>
//                                 <p>賛成する</p>
//                             </div>
//                             <RadioGroup row name="q12" value={answer12 !== null ? answer12.toString() : ""} onChange={handleQ12Change}>
//                             <Radio icon={<RadioButtonUncheckedIcon sx={{ fontSize: 70, color: "#a0ff8d" }} />} checkedIcon={<SvgIcon sx={{fontSize: 70, color: "#a0ff8d"}}><circle cx="12" cy="12" r="10" fill="currentColor" /><path d="M8 12l3 3 6-6" stroke="white" strokeWidth="2" fill="none" /></SvgIcon>} value="1" />
//                             <Radio icon={<RadioButtonUncheckedIcon sx={{ fontSize: 60, color: "#a0ff8d" }} />} checkedIcon={<SvgIcon sx={{fontSize: 60, color: "#a0ff8d"}}><circle cx="12" cy="12" r="10" fill="currentColor" /><path d="M8 12l3 3 6-6" stroke="white" strokeWidth="2" fill="none" /></SvgIcon>} value="2" />
//                             <Radio icon={<RadioButtonUncheckedIcon sx={{ fontSize: 50, color: "#a0ff8d" }} />} checkedIcon={<SvgIcon sx={{fontSize: 50, color: "#a0ff8d"}}><circle cx="12" cy="12" r="10" fill="currentColor" /><path d="M8 12l3 3 6-6" stroke="white" strokeWidth="2" fill="none" /></SvgIcon>} value="3" />
//                             <Radio icon={<RadioButtonUncheckedIcon sx={{ fontSize: 40, color: "#D3D3D3" }} />} checkedIcon={<SvgIcon sx={{fontSize: 40, color: "#D3D3D3"}}><circle cx="12" cy="12" r="10" fill="currentColor" /><path d="M8 12l3 3 6-6" stroke="white" strokeWidth="2" fill="none" /></SvgIcon>} value="4" />
//                             <Radio icon={<RadioButtonUncheckedIcon sx={{ fontSize: 50, color: "#d18dff" }} />} checkedIcon={<SvgIcon sx={{fontSize: 50, color: "#d18dff"}}><circle cx="12" cy="12" r="10" fill="currentColor" /><path d="M8 12l3 3 6-6" stroke="white" strokeWidth="2" fill="none" /></SvgIcon>} value="5" />
//                             <Radio icon={<RadioButtonUncheckedIcon sx={{ fontSize: 60, color: "#d18dff" }} />} checkedIcon={<SvgIcon sx={{fontSize: 60, color: "#d18dff"}}><circle cx="12" cy="12" r="10" fill="currentColor" /><path d="M8 12l3 3 6-6" stroke="white" strokeWidth="2" fill="none" /></SvgIcon>} value="6" />
//                             <Radio icon={<RadioButtonUncheckedIcon sx={{ fontSize: 70, color: "#d18dff" }} />} checkedIcon={<SvgIcon sx={{fontSize: 70, color: "#d18dff"}}><circle cx="12" cy="12" r="10" fill="currentColor" /><path d="M8 12l3 3 6-6" stroke="white" strokeWidth="2" fill="none" /></SvgIcon>} value="7" />
//                             </RadioGroup>
//                             <div style={{alignSelf: "center"}}>
//                                 <p>反対する</p>
//                             </div>
//                         </div>
//                     </FormControl>
//                 </li>
//                 <li ref={q13Ref} style={{borderBottom: "1px solid #ccc", margin: "40px 0"}}>
//                     <FormControl component="fieldset">
//                         <FormLabel component="legend" sx={{fontWeight: "bold", fontSize: "21px"}}>Q13:過去の辛い経験がふとよみがえると、心が乱れてしまう。</FormLabel>
//                         <div style={{display: "flex"}}>
//                             <div style={{alignSelf: "center"}}>
//                                 <p>賛成する</p>
//                             </div>
//                             <RadioGroup row name="q13" value={answer13 !== null ? answer13.toString() : ""} onChange={handleQ13Change}>
//                             <Radio icon={<RadioButtonUncheckedIcon sx={{ fontSize: 70, color: "#a0ff8d" }} />} checkedIcon={<SvgIcon sx={{fontSize: 70, color: "#a0ff8d"}}><circle cx="12" cy="12" r="10" fill="currentColor" /><path d="M8 12l3 3 6-6" stroke="white" strokeWidth="2" fill="none" /></SvgIcon>} value="1" />
//                             <Radio icon={<RadioButtonUncheckedIcon sx={{ fontSize: 60, color: "#a0ff8d" }} />} checkedIcon={<SvgIcon sx={{fontSize: 60, color: "#a0ff8d"}}><circle cx="12" cy="12" r="10" fill="currentColor" /><path d="M8 12l3 3 6-6" stroke="white" strokeWidth="2" fill="none" /></SvgIcon>} value="2" />
//                             <Radio icon={<RadioButtonUncheckedIcon sx={{ fontSize: 50, color: "#a0ff8d" }} />} checkedIcon={<SvgIcon sx={{fontSize: 50, color: "#a0ff8d"}}><circle cx="12" cy="12" r="10" fill="currentColor" /><path d="M8 12l3 3 6-6" stroke="white" strokeWidth="2" fill="none" /></SvgIcon>} value="3" />
//                             <Radio icon={<RadioButtonUncheckedIcon sx={{ fontSize: 40, color: "#D3D3D3" }} />} checkedIcon={<SvgIcon sx={{fontSize: 40, color: "#D3D3D3"}}><circle cx="12" cy="12" r="10" fill="currentColor" /><path d="M8 12l3 3 6-6" stroke="white" strokeWidth="2" fill="none" /></SvgIcon>} value="4" />
//                             <Radio icon={<RadioButtonUncheckedIcon sx={{ fontSize: 50, color: "#d18dff" }} />} checkedIcon={<SvgIcon sx={{fontSize: 50, color: "#d18dff"}}><circle cx="12" cy="12" r="10" fill="currentColor" /><path d="M8 12l3 3 6-6" stroke="white" strokeWidth="2" fill="none" /></SvgIcon>} value="5" />
//                             <Radio icon={<RadioButtonUncheckedIcon sx={{ fontSize: 60, color: "#d18dff" }} />} checkedIcon={<SvgIcon sx={{fontSize: 60, color: "#d18dff"}}><circle cx="12" cy="12" r="10" fill="currentColor" /><path d="M8 12l3 3 6-6" stroke="white" strokeWidth="2" fill="none" /></SvgIcon>} value="6" />
//                             <Radio icon={<RadioButtonUncheckedIcon sx={{ fontSize: 70, color: "#d18dff" }} />} checkedIcon={<SvgIcon sx={{fontSize: 70, color: "#d18dff"}}><circle cx="12" cy="12" r="10" fill="currentColor" /><path d="M8 12l3 3 6-6" stroke="white" strokeWidth="2" fill="none" /></SvgIcon>} value="7" />
//                             </RadioGroup>
//                             <div style={{alignSelf: "center"}}>
//                                 <p>反対する</p>
//                             </div>
//                         </div>
//                     </FormControl>
//                 </li>
//                 <li ref={q14Ref} style={{borderBottom: "1px solid #ccc", margin: "40px 0"}}>
//                     <FormControl component="fieldset">
//                         <FormLabel component="legend" sx={{fontWeight: "bold", fontSize: "21px"}}>Q14:毎日の忙しさやプレッシャーで、常に心に重荷を感じる。</FormLabel>
//                         <div style={{display: "flex"}}>
//                             <div style={{alignSelf: "center"}}>
//                                 <p>賛成する</p>
//                             </div>
//                             <RadioGroup row name="q14" value={answer14 !== null ? answer14.toString() : ""} onChange={handleQ14Change}>
//                             <Radio icon={<RadioButtonUncheckedIcon sx={{ fontSize: 70, color: "#a0ff8d" }} />} checkedIcon={<SvgIcon sx={{fontSize: 70, color: "#a0ff8d"}}><circle cx="12" cy="12" r="10" fill="currentColor" /><path d="M8 12l3 3 6-6" stroke="white" strokeWidth="2" fill="none" /></SvgIcon>} value="1" />
//                             <Radio icon={<RadioButtonUncheckedIcon sx={{ fontSize: 60, color: "#a0ff8d" }} />} checkedIcon={<SvgIcon sx={{fontSize: 60, color: "#a0ff8d"}}><circle cx="12" cy="12" r="10" fill="currentColor" /><path d="M8 12l3 3 6-6" stroke="white" strokeWidth="2" fill="none" /></SvgIcon>} value="2" />
//                             <Radio icon={<RadioButtonUncheckedIcon sx={{ fontSize: 50, color: "#a0ff8d" }} />} checkedIcon={<SvgIcon sx={{fontSize: 50, color: "#a0ff8d"}}><circle cx="12" cy="12" r="10" fill="currentColor" /><path d="M8 12l3 3 6-6" stroke="white" strokeWidth="2" fill="none" /></SvgIcon>} value="3" />
//                             <Radio icon={<RadioButtonUncheckedIcon sx={{ fontSize: 40, color: "#D3D3D3" }} />} checkedIcon={<SvgIcon sx={{fontSize: 40, color: "#D3D3D3"}}><circle cx="12" cy="12" r="10" fill="currentColor" /><path d="M8 12l3 3 6-6" stroke="white" strokeWidth="2" fill="none" /></SvgIcon>} value="4" />
//                             <Radio icon={<RadioButtonUncheckedIcon sx={{ fontSize: 50, color: "#d18dff" }} />} checkedIcon={<SvgIcon sx={{fontSize: 50, color: "#d18dff"}}><circle cx="12" cy="12" r="10" fill="currentColor" /><path d="M8 12l3 3 6-6" stroke="white" strokeWidth="2" fill="none" /></SvgIcon>} value="5" />
//                             <Radio icon={<RadioButtonUncheckedIcon sx={{ fontSize: 60, color: "#d18dff" }} />} checkedIcon={<SvgIcon sx={{fontSize: 60, color: "#d18dff"}}><circle cx="12" cy="12" r="10" fill="currentColor" /><path d="M8 12l3 3 6-6" stroke="white" strokeWidth="2" fill="none" /></SvgIcon>} value="6" />
//                             <Radio icon={<RadioButtonUncheckedIcon sx={{ fontSize: 70, color: "#d18dff" }} />} checkedIcon={<SvgIcon sx={{fontSize: 70, color: "#d18dff"}}><circle cx="12" cy="12" r="10" fill="currentColor" /><path d="M8 12l3 3 6-6" stroke="white" strokeWidth="2" fill="none" /></SvgIcon>} value="7" />
//                             </RadioGroup>
//                             <div style={{alignSelf: "center"}}>
//                                 <p>反対する</p>
//                             </div>
//                         </div>
//                     </FormControl>
//                 </li>
//                 <li ref={q15Ref} style={{borderBottom: "1px solid #ccc", margin: "40px 0"}}>
//                     <FormControl component="fieldset">
//                         <FormLabel component="legend" sx={{fontWeight: "bold", fontSize: "21px"}}>Q15:仕事や勉強の締め切りが近づくと、強い不安に襲われる。</FormLabel>
//                         <div style={{display: "flex"}}>
//                             <div style={{alignSelf: "center"}}>
//                                 <p>賛成する</p>
//                             </div>
//                             <RadioGroup row name="q15" value={answer15 !== null ? answer15.toString() : ""} onChange={handleQ15Change}>
//                             <Radio icon={<RadioButtonUncheckedIcon sx={{ fontSize: 70, color: "#a0ff8d" }} />} checkedIcon={<SvgIcon sx={{fontSize: 70, color: "#a0ff8d"}}><circle cx="12" cy="12" r="10" fill="currentColor" /><path d="M8 12l3 3 6-6" stroke="white" strokeWidth="2" fill="none" /></SvgIcon>} value="1" />
//                             <Radio icon={<RadioButtonUncheckedIcon sx={{ fontSize: 60, color: "#a0ff8d" }} />} checkedIcon={<SvgIcon sx={{fontSize: 60, color: "#a0ff8d"}}><circle cx="12" cy="12" r="10" fill="currentColor" /><path d="M8 12l3 3 6-6" stroke="white" strokeWidth="2" fill="none" /></SvgIcon>} value="2" />
//                             <Radio icon={<RadioButtonUncheckedIcon sx={{ fontSize: 50, color: "#a0ff8d" }} />} checkedIcon={<SvgIcon sx={{fontSize: 50, color: "#a0ff8d"}}><circle cx="12" cy="12" r="10" fill="currentColor" /><path d="M8 12l3 3 6-6" stroke="white" strokeWidth="2" fill="none" /></SvgIcon>} value="3" />
//                             <Radio icon={<RadioButtonUncheckedIcon sx={{ fontSize: 40, color: "#D3D3D3" }} />} checkedIcon={<SvgIcon sx={{fontSize: 40, color: "#D3D3D3"}}><circle cx="12" cy="12" r="10" fill="currentColor" /><path d="M8 12l3 3 6-6" stroke="white" strokeWidth="2" fill="none" /></SvgIcon>} value="4" />
//                             <Radio icon={<RadioButtonUncheckedIcon sx={{ fontSize: 50, color: "#d18dff" }} />} checkedIcon={<SvgIcon sx={{fontSize: 50, color: "#d18dff"}}><circle cx="12" cy="12" r="10" fill="currentColor" /><path d="M8 12l3 3 6-6" stroke="white" strokeWidth="2" fill="none" /></SvgIcon>} value="5" />
//                             <Radio icon={<RadioButtonUncheckedIcon sx={{ fontSize: 60, color: "#d18dff" }} />} checkedIcon={<SvgIcon sx={{fontSize: 60, color: "#d18dff"}}><circle cx="12" cy="12" r="10" fill="currentColor" /><path d="M8 12l3 3 6-6" stroke="white" strokeWidth="2" fill="none" /></SvgIcon>} value="6" />
//                             <Radio icon={<RadioButtonUncheckedIcon sx={{ fontSize: 70, color: "#d18dff" }} />} checkedIcon={<SvgIcon sx={{fontSize: 70, color: "#d18dff"}}><circle cx="12" cy="12" r="10" fill="currentColor" /><path d="M8 12l3 3 6-6" stroke="white" strokeWidth="2" fill="none" /></SvgIcon>} value="7" />
//                             </RadioGroup>
//                             <div style={{alignSelf: "center"}}>
//                                 <p>反対する</p>
//                             </div>
//                         </div>
//                     </FormControl>
//                 </li>
//                 <li ref={q16Ref} style={{borderBottom: "1px solid #ccc", margin: "40px 0"}}>
//                     <FormControl component="fieldset">
//                         <FormLabel component="legend" sx={{fontWeight: "bold", fontSize: "21px"}}>Q16:些細な出来事で、過去の嫌な記憶が一気に蘇ることがある。</FormLabel>
//                         <div style={{display: "flex"}}>
//                             <div style={{alignSelf: "center"}}>
//                                 <p>賛成する</p>
//                             </div>
//                             <RadioGroup row name="q16" value={answer16 !== null ? answer16.toString() : ""} onChange={handleQ16Change}>
//                             <Radio icon={<RadioButtonUncheckedIcon sx={{ fontSize: 70, color: "#a0ff8d" }} />} checkedIcon={<SvgIcon sx={{fontSize: 70, color: "#a0ff8d"}}><circle cx="12" cy="12" r="10" fill="currentColor" /><path d="M8 12l3 3 6-6" stroke="white" strokeWidth="2" fill="none" /></SvgIcon>} value="1" />
//                             <Radio icon={<RadioButtonUncheckedIcon sx={{ fontSize: 60, color: "#a0ff8d" }} />} checkedIcon={<SvgIcon sx={{fontSize: 60, color: "#a0ff8d"}}><circle cx="12" cy="12" r="10" fill="currentColor" /><path d="M8 12l3 3 6-6" stroke="white" strokeWidth="2" fill="none" /></SvgIcon>} value="2" />
//                             <Radio icon={<RadioButtonUncheckedIcon sx={{ fontSize: 50, color: "#a0ff8d" }} />} checkedIcon={<SvgIcon sx={{fontSize: 50, color: "#a0ff8d"}}><circle cx="12" cy="12" r="10" fill="currentColor" /><path d="M8 12l3 3 6-6" stroke="white" strokeWidth="2" fill="none" /></SvgIcon>} value="3" />
//                             <Radio icon={<RadioButtonUncheckedIcon sx={{ fontSize: 40, color: "#D3D3D3" }} />} checkedIcon={<SvgIcon sx={{fontSize: 40, color: "#D3D3D3"}}><circle cx="12" cy="12" r="10" fill="currentColor" /><path d="M8 12l3 3 6-6" stroke="white" strokeWidth="2" fill="none" /></SvgIcon>} value="4" />
//                             <Radio icon={<RadioButtonUncheckedIcon sx={{ fontSize: 50, color: "#d18dff" }} />} checkedIcon={<SvgIcon sx={{fontSize: 50, color: "#d18dff"}}><circle cx="12" cy="12" r="10" fill="currentColor" /><path d="M8 12l3 3 6-6" stroke="white" strokeWidth="2" fill="none" /></SvgIcon>} value="5" />
//                             <Radio icon={<RadioButtonUncheckedIcon sx={{ fontSize: 60, color: "#d18dff" }} />} checkedIcon={<SvgIcon sx={{fontSize: 60, color: "#d18dff"}}><circle cx="12" cy="12" r="10" fill="currentColor" /><path d="M8 12l3 3 6-6" stroke="white" strokeWidth="2" fill="none" /></SvgIcon>} value="6" />
//                             <Radio icon={<RadioButtonUncheckedIcon sx={{ fontSize: 70, color: "#d18dff" }} />} checkedIcon={<SvgIcon sx={{fontSize: 70, color: "#d18dff"}}><circle cx="12" cy="12" r="10" fill="currentColor" /><path d="M8 12l3 3 6-6" stroke="white" strokeWidth="2" fill="none" /></SvgIcon>} value="7" />
//                             </RadioGroup>
//                             <div style={{alignSelf: "center"}}>
//                                 <p>反対する</p>
//                             </div>
//                         </div>
//                     </FormControl>
//                 </li>
//             </ul>
//             <Button ref={q17Ref} variant="contained" onClick={handleSubmit} sx={{ fontSize: "30px", backgroundColor: "#CF9FFF", color: "#fff" }}>
//                 結果を見る→
//             </Button>
//         </div>
//     )
// }

"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Button from "@mui/material/Button";
import { FormControl, FormLabel } from "@mui/material";

// 全体の質問テキスト
const questions = [
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
  const router = useRouter();

  // 各質問の回答（初期は null でチェックなし状態）
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

  // 各質問が回答済みかどうか（表示のスタイル用）
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

  // 各質問と結果ボタンへのスクロール位置を保持する ref（null を許容）
  const q2Ref = useRef<HTMLLIElement | null>(null);
  const q3Ref = useRef<HTMLLIElement | null>(null);
  const q4Ref = useRef<HTMLLIElement | null>(null);
  const q5Ref = useRef<HTMLLIElement | null>(null);
  const q6Ref = useRef<HTMLLIElement | null>(null);
  const q7Ref = useRef<HTMLLIElement | null>(null);
  const q8Ref = useRef<HTMLLIElement | null>(null);
  const q9Ref = useRef<HTMLLIElement | null>(null);
  const q10Ref = useRef<HTMLLIElement | null>(null);
  const q11Ref = useRef<HTMLLIElement | null>(null);
  const q12Ref = useRef<HTMLLIElement | null>(null);
  const q13Ref = useRef<HTMLLIElement | null>(null);
  const q14Ref = useRef<HTMLLIElement | null>(null);
  const q15Ref = useRef<HTMLLIElement | null>(null);
  const q16Ref = useRef<HTMLLIElement | null>(null);
  const q17Ref = useRef<HTMLButtonElement | null>(null);

  // 共通のスクロール関数：次の要素の位置から60px上へオフセットしてスクロール
  const scrollToNext = (
    nextRef: React.RefObject<HTMLLIElement | null> | React.RefObject<HTMLButtonElement | null>
  ) => {
    if (nextRef.current) {
      const topPosition =
        nextRef.current.getBoundingClientRect().top + window.pageYOffset - 60;
      window.scrollTo({ top: topPosition, behavior: "smooth" });
    }
  };

  // 各質問の onChange ハンドラー：回答を保存し、次の要素へスクロール
  const handleQ1Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer1(Number(e.target.value));
    setAnswered1(true);
    scrollToNext(q2Ref);
  };
  const handleQ2Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer2(Number(e.target.value));
    setAnswered2(true);
    scrollToNext(q3Ref);
  };
  const handleQ3Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer3(Number(e.target.value));
    setAnswered3(true);
    scrollToNext(q4Ref);
  };
  const handleQ4Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer4(Number(e.target.value));
    setAnswered4(true);
    scrollToNext(q5Ref);
  };
  const handleQ5Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer5(Number(e.target.value));
    setAnswered5(true);
    scrollToNext(q6Ref);
  };
  const handleQ6Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer6(Number(e.target.value));
    setAnswered6(true);
    scrollToNext(q7Ref);
  };
  const handleQ7Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer7(Number(e.target.value));
    setAnswered7(true);
    scrollToNext(q8Ref);
  };
  const handleQ8Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer8(Number(e.target.value));
    setAnswered8(true);
    scrollToNext(q9Ref);
  };
  const handleQ9Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer9(Number(e.target.value));
    setAnswered9(true);
    scrollToNext(q10Ref);
  };
  const handleQ10Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer10(Number(e.target.value));
    setAnswered10(true);
    scrollToNext(q11Ref);
  };
  const handleQ11Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer11(Number(e.target.value));
    setAnswered11(true);
    scrollToNext(q12Ref);
  };
  const handleQ12Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer12(Number(e.target.value));
    setAnswered12(true);
    scrollToNext(q13Ref);
  };
  const handleQ13Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer13(Number(e.target.value));
    setAnswered13(true);
    scrollToNext(q14Ref);
  };
  const handleQ14Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer14(Number(e.target.value));
    setAnswered14(true);
    scrollToNext(q15Ref);
  };
  const handleQ15Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer15(Number(e.target.value));
    setAnswered15(true);
    scrollToNext(q16Ref);
  };
  const handleQ16Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer16(Number(e.target.value));
    setAnswered16(true);
    scrollToNext(q17Ref);
  };

  // グループごとの合計（null は 0 として計算）
  const group1 = (answer1 ?? 0) + (answer2 ?? 0) + (answer3 ?? 0) + (answer4 ?? 0);
  const group2 = (answer5 ?? 0) + (answer6 ?? 0) + (answer7 ?? 0) + (answer8 ?? 0);
  const group3 = (answer9 ?? 0) + (answer10 ?? 0) + (answer11 ?? 0) + (answer12 ?? 0);
  const group4 = (answer13 ?? 0) + (answer14 ?? 0) + (answer15 ?? 0) + (answer16 ?? 0);

  let highestGroup = 1;
  let highestScore = group1;
  if (group2 > highestScore) {
    highestGroup = 2;
    highestScore = group2;
  }
  if (group3 > highestScore) {
    highestGroup = 3;
    highestScore = group3;
  }
  if (group4 > highestScore) {
    highestGroup = 4;
    highestScore = group4;
  }

  let pattern = "";
  if (highestGroup === 1) pattern = "A";
  else if (highestGroup === 2) pattern = "B";
  else if (highestGroup === 3) pattern = "C";
  else if (highestGroup === 4) pattern = "D";

  const handleSubmit = async () => {
    const answersArray = [
      answer1, answer2, answer3, answer4,
      answer5, answer6, answer7, answer8,
      answer9, answer10, answer11, answer12,
      answer13, answer14, answer15, answer16,
    ];
    console.log("送信前の answersArray:", answersArray);
    const payload = { pattern, answers: answersArray };
    await fetch("/api/saveDiagnosis", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    router.push("/result");
  };

  // 回答済みの場合に半透明グレーになるスタイル
  const questionStyle = (isAnswered: boolean) => ({
    borderBottom: "1px solid #ccc",
    margin: "40px 0",
    padding: "10px",
    borderRadius: "4px",
    backgroundColor: isAnswered ? "rgba(128,128,128,0.4)" : "inherit",
    opacity: isAnswered ? 0.4 : 1,
    color: isAnswered ? "gray" : "inherit",
    transition: "all 0.3s ease",
  });

  return (
    <div style={{ marginTop: "20px", display: "flex", flexDirection: "column", alignItems: "center" }}>
      <ul style={{ listStyle: "none", padding: 0, maxWidth: "800px", width: "100%" }}>
        {/* Q1 */}
        <li style={questionStyle(answered1)}>
          <FormControl component="fieldset">
            <FormLabel component="legend" sx={{ fontWeight: "bold", fontSize: "21px" }}>
              {questions[0]}
            </FormLabel>
            <div>
              <label>
                <input type="radio" name="q1" value="1" checked={answer1 === 1} onChange={handleQ1Change} /> 1
              </label>
              <label>
                <input type="radio" name="q1" value="2" checked={answer1 === 2} onChange={handleQ1Change} /> 2
              </label>
              <label>
                <input type="radio" name="q1" value="3" checked={answer1 === 3} onChange={handleQ1Change} /> 3
              </label>
              <label>
                <input type="radio" name="q1" value="4" checked={answer1 === 4} onChange={handleQ1Change} /> 4
              </label>
              <label>
                <input type="radio" name="q1" value="5" checked={answer1 === 5} onChange={handleQ1Change} /> 5
              </label>
              <label>
                <input type="radio" name="q1" value="6" checked={answer1 === 6} onChange={handleQ1Change} /> 6
              </label>
              <label>
                <input type="radio" name="q1" value="7" checked={answer1 === 7} onChange={handleQ1Change} /> 7
              </label>
            </div>
          </FormControl>
        </li>
        {/* Q2 */}
        <li ref={q2Ref} style={questionStyle(answered2)}>
          <FormControl component="fieldset">
            <FormLabel component="legend" sx={{ fontWeight: "bold", fontSize: "21px" }}>
              {questions[1]}
            </FormLabel>
            <div>
              <label>
                <input type="radio" name="q2" value="1" checked={answer2 === 1} onChange={handleQ2Change} /> 1
              </label>
              <label>
                <input type="radio" name="q2" value="2" checked={answer2 === 2} onChange={handleQ2Change} /> 2
              </label>
              <label>
                <input type="radio" name="q2" value="3" checked={answer2 === 3} onChange={handleQ2Change} /> 3
              </label>
              <label>
                <input type="radio" name="q2" value="4" checked={answer2 === 4} onChange={handleQ2Change} /> 4
              </label>
              <label>
                <input type="radio" name="q2" value="5" checked={answer2 === 5} onChange={handleQ2Change} /> 5
              </label>
              <label>
                <input type="radio" name="q2" value="6" checked={answer2 === 6} onChange={handleQ2Change} /> 6
              </label>
              <label>
                <input type="radio" name="q2" value="7" checked={answer2 === 7} onChange={handleQ2Change} /> 7
              </label>
            </div>
          </FormControl>
        </li>
        {/* Q3 ～ Q16 も同様に定義（下記のコードをそのままコピーしてください） */}
        <li ref={q3Ref} style={questionStyle(answered3)}>
          <FormControl component="fieldset">
            <FormLabel component="legend" sx={{ fontWeight: "bold", fontSize: "21px" }}>
              {questions[2]}
            </FormLabel>
            <div>
              <label>
                <input type="radio" name="q3" value="1" checked={answer3 === 1} onChange={handleQ3Change} /> 1
              </label>
              <label>
                <input type="radio" name="q3" value="2" checked={answer3 === 2} onChange={handleQ3Change} /> 2
              </label>
              <label>
                <input type="radio" name="q3" value="3" checked={answer3 === 3} onChange={handleQ3Change} /> 3
              </label>
              <label>
                <input type="radio" name="q3" value="4" checked={answer3 === 4} onChange={handleQ3Change} /> 4
              </label>
              <label>
                <input type="radio" name="q3" value="5" checked={answer3 === 5} onChange={handleQ3Change} /> 5
              </label>
              <label>
                <input type="radio" name="q3" value="6" checked={answer3 === 6} onChange={handleQ3Change} /> 6
              </label>
              <label>
                <input type="radio" name="q3" value="7" checked={answer3 === 7} onChange={handleQ3Change} /> 7
              </label>
            </div>
          </FormControl>
        </li>
        <li ref={q4Ref} style={questionStyle(answered4)}>
          <FormControl component="fieldset">
            <FormLabel component="legend" sx={{ fontWeight: "bold", fontSize: "21px" }}>
              {questions[3]}
            </FormLabel>
            <div>
              <label>
                <input type="radio" name="q4" value="1" checked={answer4 === 1} onChange={handleQ4Change} /> 1
              </label>
              <label>
                <input type="radio" name="q4" value="2" checked={answer4 === 2} onChange={handleQ4Change} /> 2
              </label>
              <label>
                <input type="radio" name="q4" value="3" checked={answer4 === 3} onChange={handleQ4Change} /> 3
              </label>
              <label>
                <input type="radio" name="q4" value="4" checked={answer4 === 4} onChange={handleQ4Change} /> 4
              </label>
              <label>
                <input type="radio" name="q4" value="5" checked={answer4 === 5} onChange={handleQ4Change} /> 5
              </label>
              <label>
                <input type="radio" name="q4" value="6" checked={answer4 === 6} onChange={handleQ4Change} /> 6
              </label>
              <label>
                <input type="radio" name="q4" value="7" checked={answer4 === 7} onChange={handleQ4Change} /> 7
              </label>
            </div>
          </FormControl>
        </li>
        <li ref={q5Ref} style={questionStyle(answered5)}>
          <FormControl component="fieldset">
            <FormLabel component="legend" sx={{ fontWeight: "bold", fontSize: "21px" }}>
              {questions[4]}
            </FormLabel>
            <div>
              <label>
                <input type="radio" name="q5" value="1" checked={answer5 === 1} onChange={handleQ5Change} /> 1
              </label>
              <label>
                <input type="radio" name="q5" value="2" checked={answer5 === 2} onChange={handleQ5Change} /> 2
              </label>
              <label>
                <input type="radio" name="q5" value="3" checked={answer5 === 3} onChange={handleQ5Change} /> 3
              </label>
              <label>
                <input type="radio" name="q5" value="4" checked={answer5 === 4} onChange={handleQ5Change} /> 4
              </label>
              <label>
                <input type="radio" name="q5" value="5" checked={answer5 === 5} onChange={handleQ5Change} /> 5
              </label>
              <label>
                <input type="radio" name="q5" value="6" checked={answer5 === 6} onChange={handleQ5Change} /> 6
              </label>
              <label>
                <input type="radio" name="q5" value="7" checked={answer5 === 7} onChange={handleQ5Change} /> 7
              </label>
            </div>
          </FormControl>
        </li>
        <li ref={q6Ref} style={questionStyle(answered6)}>
          <FormControl component="fieldset">
            <FormLabel component="legend" sx={{ fontWeight: "bold", fontSize: "21px" }}>
              {questions[5]}
            </FormLabel>
            <div>
              <label>
                <input type="radio" name="q6" value="1" checked={answer6 === 1} onChange={handleQ6Change} /> 1
              </label>
              <label>
                <input type="radio" name="q6" value="2" checked={answer6 === 2} onChange={handleQ6Change} /> 2
              </label>
              <label>
                <input type="radio" name="q6" value="3" checked={answer6 === 3} onChange={handleQ6Change} /> 3
              </label>
              <label>
                <input type="radio" name="q6" value="4" checked={answer6 === 4} onChange={handleQ6Change} /> 4
              </label>
              <label>
                <input type="radio" name="q6" value="5" checked={answer6 === 5} onChange={handleQ6Change} /> 5
              </label>
              <label>
                <input type="radio" name="q6" value="6" checked={answer6 === 6} onChange={handleQ6Change} /> 6
              </label>
              <label>
                <input type="radio" name="q6" value="7" checked={answer6 === 7} onChange={handleQ6Change} /> 7
              </label>
            </div>
          </FormControl>
        </li>
        <li ref={q7Ref} style={questionStyle(answered7)}>
          <FormControl component="fieldset">
            <FormLabel component="legend" sx={{ fontWeight: "bold", fontSize: "21px" }}>
              {questions[6]}
            </FormLabel>
            <div>
              <label>
                <input type="radio" name="q7" value="1" checked={answer7 === 1} onChange={handleQ7Change} /> 1
              </label>
              <label>
                <input type="radio" name="q7" value="2" checked={answer7 === 2} onChange={handleQ7Change} /> 2
              </label>
              <label>
                <input type="radio" name="q7" value="3" checked={answer7 === 3} onChange={handleQ7Change} /> 3
              </label>
              <label>
                <input type="radio" name="q7" value="4" checked={answer7 === 4} onChange={handleQ7Change} /> 4
              </label>
              <label>
                <input type="radio" name="q7" value="5" checked={answer7 === 5} onChange={handleQ7Change} /> 5
              </label>
              <label>
                <input type="radio" name="q7" value="6" checked={answer7 === 6} onChange={handleQ7Change} /> 6
              </label>
              <label>
                <input type="radio" name="q7" value="7" checked={answer7 === 7} onChange={handleQ7Change} /> 7
              </label>
            </div>
          </FormControl>
        </li>
        <li ref={q8Ref} style={questionStyle(answered8)}>
          <FormControl component="fieldset">
            <FormLabel component="legend" sx={{ fontWeight: "bold", fontSize: "21px" }}>
              {questions[7]}
            </FormLabel>
            <div>
              <label>
                <input type="radio" name="q8" value="1" checked={answer8 === 1} onChange={handleQ8Change} /> 1
              </label>
              <label>
                <input type="radio" name="q8" value="2" checked={answer8 === 2} onChange={handleQ8Change} /> 2
              </label>
              <label>
                <input type="radio" name="q8" value="3" checked={answer8 === 3} onChange={handleQ8Change} /> 3
              </label>
              <label>
                <input type="radio" name="q8" value="4" checked={answer8 === 4} onChange={handleQ8Change} /> 4
              </label>
              <label>
                <input type="radio" name="q8" value="5" checked={answer8 === 5} onChange={handleQ8Change} /> 5
              </label>
              <label>
                <input type="radio" name="q8" value="6" checked={answer8 === 6} onChange={handleQ8Change} /> 6
              </label>
              <label>
                <input type="radio" name="q8" value="7" checked={answer8 === 7} onChange={handleQ8Change} /> 7
              </label>
            </div>
          </FormControl>
        </li>
        <li ref={q9Ref} style={questionStyle(answered9)}>
          <FormControl component="fieldset">
            <FormLabel component="legend" sx={{ fontWeight: "bold", fontSize: "21px" }}>
              {questions[8]}
            </FormLabel>
            <div>
              <label>
                <input type="radio" name="q9" value="1" checked={answer9 === 1} onChange={handleQ9Change} /> 1
              </label>
              <label>
                <input type="radio" name="q9" value="2" checked={answer9 === 2} onChange={handleQ9Change} /> 2
              </label>
              <label>
                <input type="radio" name="q9" value="3" checked={answer9 === 3} onChange={handleQ9Change} /> 3
              </label>
              <label>
                <input type="radio" name="q9" value="4" checked={answer9 === 4} onChange={handleQ9Change} /> 4
              </label>
              <label>
                <input type="radio" name="q9" value="5" checked={answer9 === 5} onChange={handleQ9Change} /> 5
              </label>
              <label>
                <input type="radio" name="q9" value="6" checked={answer9 === 6} onChange={handleQ9Change} /> 6
              </label>
              <label>
                <input type="radio" name="q9" value="7" checked={answer9 === 7} onChange={handleQ9Change} /> 7
              </label>
            </div>
          </FormControl>
        </li>
        <li ref={q10Ref} style={questionStyle(answered10)}>
          <FormControl component="fieldset">
            <FormLabel component="legend" sx={{ fontWeight: "bold", fontSize: "21px" }}>
              {questions[9]}
            </FormLabel>
            <div>
              <label>
                <input type="radio" name="q10" value="1" checked={answer10 === 1} onChange={handleQ10Change} /> 1
              </label>
              <label>
                <input type="radio" name="q10" value="2" checked={answer10 === 2} onChange={handleQ10Change} /> 2
              </label>
              <label>
                <input type="radio" name="q10" value="3" checked={answer10 === 3} onChange={handleQ10Change} /> 3
              </label>
              <label>
                <input type="radio" name="q10" value="4" checked={answer10 === 4} onChange={handleQ10Change} /> 4
              </label>
              <label>
                <input type="radio" name="q10" value="5" checked={answer10 === 5} onChange={handleQ10Change} /> 5
              </label>
              <label>
                <input type="radio" name="q10" value="6" checked={answer10 === 6} onChange={handleQ10Change} /> 6
              </label>
              <label>
                <input type="radio" name="q10" value="7" checked={answer10 === 7} onChange={handleQ10Change} /> 7
              </label>
            </div>
          </FormControl>
        </li>
        <li ref={q11Ref} style={questionStyle(answered11)}>
          <FormControl component="fieldset">
            <FormLabel component="legend" sx={{ fontWeight: "bold", fontSize: "21px" }}>
              {questions[10]}
            </FormLabel>
            <div>
              <label>
                <input type="radio" name="q11" value="1" checked={answer11 === 1} onChange={handleQ11Change} /> 1
              </label>
              <label>
                <input type="radio" name="q11" value="2" checked={answer11 === 2} onChange={handleQ11Change} /> 2
              </label>
              <label>
                <input type="radio" name="q11" value="3" checked={answer11 === 3} onChange={handleQ11Change} /> 3
              </label>
              <label>
                <input type="radio" name="q11" value="4" checked={answer11 === 4} onChange={handleQ11Change} /> 4
              </label>
              <label>
                <input type="radio" name="q11" value="5" checked={answer11 === 5} onChange={handleQ11Change} /> 5
              </label>
              <label>
                <input type="radio" name="q11" value="6" checked={answer11 === 6} onChange={handleQ11Change} /> 6
              </label>
              <label>
                <input type="radio" name="q11" value="7" checked={answer11 === 7} onChange={handleQ11Change} /> 7
              </label>
            </div>
          </FormControl>
        </li>
        <li ref={q12Ref} style={questionStyle(answered12)}>
          <FormControl component="fieldset">
            <FormLabel component="legend" sx={{ fontWeight: "bold", fontSize: "21px" }}>
              {questions[11]}
            </FormLabel>
            <div>
              <label>
                <input type="radio" name="q12" value="1" checked={answer12 === 1} onChange={handleQ12Change} /> 1
              </label>
              <label>
                <input type="radio" name="q12" value="2" checked={answer12 === 2} onChange={handleQ12Change} /> 2
              </label>
              <label>
                <input type="radio" name="q12" value="3" checked={answer12 === 3} onChange={handleQ12Change} /> 3
              </label>
              <label>
                <input type="radio" name="q12" value="4" checked={answer12 === 4} onChange={handleQ12Change} /> 4
              </label>
              <label>
                <input type="radio" name="q12" value="5" checked={answer12 === 5} onChange={handleQ12Change} /> 5
              </label>
              <label>
                <input type="radio" name="q12" value="6" checked={answer12 === 6} onChange={handleQ12Change} /> 6
              </label>
              <label>
                <input type="radio" name="q12" value="7" checked={answer12 === 7} onChange={handleQ12Change} /> 7
              </label>
            </div>
          </FormControl>
        </li>
        <li ref={q13Ref} style={questionStyle(answered13)}>
          <FormControl component="fieldset">
            <FormLabel component="legend" sx={{ fontWeight: "bold", fontSize: "21px" }}>
              {questions[12]}
            </FormLabel>
            <div>
              <label>
                <input type="radio" name="q13" value="1" checked={answer13 === 1} onChange={handleQ13Change} /> 1
              </label>
              <label>
                <input type="radio" name="q13" value="2" checked={answer13 === 2} onChange={handleQ13Change} /> 2
              </label>
              <label>
                <input type="radio" name="q13" value="3" checked={answer13 === 3} onChange={handleQ13Change} /> 3
              </label>
              <label>
                <input type="radio" name="q13" value="4" checked={answer13 === 4} onChange={handleQ13Change} /> 4
              </label>
              <label>
                <input type="radio" name="q13" value="5" checked={answer13 === 5} onChange={handleQ13Change} /> 5
              </label>
              <label>
                <input type="radio" name="q13" value="6" checked={answer13 === 6} onChange={handleQ13Change} /> 6
              </label>
              <label>
                <input type="radio" name="q13" value="7" checked={answer13 === 7} onChange={handleQ13Change} /> 7
              </label>
            </div>
          </FormControl>
        </li>
        <li ref={q14Ref} style={questionStyle(answered14)}>
          <FormControl component="fieldset">
            <FormLabel component="legend" sx={{ fontWeight: "bold", fontSize: "21px" }}>
              {questions[13]}
            </FormLabel>
            <div>
              <label>
                <input type="radio" name="q14" value="1" checked={answer14 === 1} onChange={handleQ14Change} /> 1
              </label>
              <label>
                <input type="radio" name="q14" value="2" checked={answer14 === 2} onChange={handleQ14Change} /> 2
              </label>
              <label>
                <input type="radio" name="q14" value="3" checked={answer14 === 3} onChange={handleQ14Change} /> 3
              </label>
              <label>
                <input type="radio" name="q14" value="4" checked={answer14 === 4} onChange={handleQ14Change} /> 4
              </label>
              <label>
                <input type="radio" name="q14" value="5" checked={answer14 === 5} onChange={handleQ14Change} /> 5
              </label>
              <label>
                <input type="radio" name="q14" value="6" checked={answer14 === 6} onChange={handleQ14Change} /> 6
              </label>
              <label>
                <input type="radio" name="q14" value="7" checked={answer14 === 7} onChange={handleQ14Change} /> 7
              </label>
            </div>
          </FormControl>
        </li>
        <li ref={q15Ref} style={questionStyle(answered15)}>
          <FormControl component="fieldset">
            <FormLabel component="legend" sx={{ fontWeight: "bold", fontSize: "21px" }}>
              {questions[14]}
            </FormLabel>
            <div>
              <label>
                <input type="radio" name="q15" value="1" checked={answer15 === 1} onChange={handleQ15Change} /> 1
              </label>
              <label>
                <input type="radio" name="q15" value="2" checked={answer15 === 2} onChange={handleQ15Change} /> 2
              </label>
              <label>
                <input type="radio" name="q15" value="3" checked={answer15 === 3} onChange={handleQ15Change} /> 3
              </label>
              <label>
                <input type="radio" name="q15" value="4" checked={answer15 === 4} onChange={handleQ15Change} /> 4
              </label>
              <label>
                <input type="radio" name="q15" value="5" checked={answer15 === 5} onChange={handleQ15Change} /> 5
              </label>
              <label>
                <input type="radio" name="q15" value="6" checked={answer15 === 6} onChange={handleQ15Change} /> 6
              </label>
              <label>
                <input type="radio" name="q15" value="7" checked={answer15 === 7} onChange={handleQ15Change} /> 7
              </label>
            </div>
          </FormControl>
        </li>
        <li ref={q16Ref} style={questionStyle(answered16)}>
          <FormControl component="fieldset">
            <FormLabel component="legend" sx={{ fontWeight: "bold", fontSize: "21px" }}>
              {questions[15]}
            </FormLabel>
            <div>
              <label>
                <input type="radio" name="q16" value="1" checked={answer16 === 1} onChange={handleQ16Change} /> 1
              </label>
              <label>
                <input type="radio" name="q16" value="2" checked={answer16 === 2} onChange={handleQ16Change} /> 2
              </label>
              <label>
                <input type="radio" name="q16" value="3" checked={answer16 === 3} onChange={handleQ16Change} /> 3
              </label>
              <label>
                <input type="radio" name="q16" value="4" checked={answer16 === 4} onChange={handleQ16Change} /> 4
              </label>
              <label>
                <input type="radio" name="q16" value="5" checked={answer16 === 5} onChange={handleQ16Change} /> 5
              </label>
              <label>
                <input type="radio" name="q16" value="6" checked={answer16 === 6} onChange={handleQ16Change} /> 6
              </label>
              <label>
                <input type="radio" name="q16" value="7" checked={answer16 === 7} onChange={handleQ16Change} /> 7
              </label>
            </div>
          </FormControl>
        </li>
      </ul>
      <Button
        ref={q17Ref}
        variant="contained"
        onClick={handleSubmit}
        sx={{ fontSize: "30px", backgroundColor: "#CF9FFF", color: "#fff" }}
      >
        結果を見る →
      </Button>
    </div>
  );
}
