"use client"

import {useSearchParams} from "next/navigation"
import Link from "next/link"
import Button from '@mui/material/Button'


export default function Result() {
    const searchParams = useSearchParams()

    const q1 = Number(searchParams.get("q1")) || 0
    const q2 = Number(searchParams.get("q2")) || 0
    const q3 = Number(searchParams.get("q3")) || 0
    const q4 = Number(searchParams.get("q4")) || 0
    const q5 = Number(searchParams.get("q5")) || 0
    const q6 = Number(searchParams.get("q6")) || 0
    const q7 = Number(searchParams.get("q7")) || 0
    const q8 = Number(searchParams.get("q8")) || 0
    const q9 = Number(searchParams.get("q9")) || 0
    const q10 = Number(searchParams.get("q10")) || 0
    const q11 = Number(searchParams.get("q11")) || 0
    const q12 = Number(searchParams.get("q12")) || 0
    const q13 = Number(searchParams.get("q13")) || 0
    const q14 = Number(searchParams.get("q14")) || 0
    const q15 = Number(searchParams.get("q15")) || 0
    const q16 = Number(searchParams.get("q16")) || 0

    const group1 = q1 + q2 + q3 + q4
    const group2 = q5 + q6 + q7 + q8
    const group3 = q9 + q10 + q11 + q12
    const group4 = q13 + q14 + q15 + q16

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

    let resultText = ""
    if (highestGroup === 1) {
        resultText = "【未来・存在不安型】\n将来への不確実性や、人生の意味について漠然とした不安が強く、いつも『最悪のことは何か？』と考えてしまう傾向があります。"
    } else if (highestGroup === 2) {
        resultText = "【対人・評価不安型】\n人前での緊張や、他人からの評価に敏感で、ちょっとした言動により自分の価値を疑ってしまう傾向があります。"
    } else if (highestGroup === 3) {
        resultText = "【完璧主義・健康不安型】\n何事も完璧でなければ気が済まず、体調のわずかな変化にも大きな不安を感じ、自己評価が厳しい傾向があります。"
    } else if (highestGroup === 4) {
        resultText = "【トラウマ・ストレス不安型】\n過去の辛い経験や日常のストレスが影響し、感情が不安定になりやすい傾向があります。"
    }

    return(
        <div style={{padding: "1rem", textAlign: "center"}}>
            <h1 style={{fontSize: "2rem"}}>診断結果</h1>
            <p style={{whiteSpace: "pre-wrap", fontSize: "20px"}}>{resultText}</p>
            <Link href="/">
                <Button variant="contained" sx={{margin: "20px", fontSize: "30px", backgroundColor: "#CF9FFF", color: "#fff"}}>ホームに戻る→</Button>
            </Link>
        </div>
    )

    
}

