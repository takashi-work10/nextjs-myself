import Link from "next/link"
import Button from '@mui/material/Button'

export default function HomePage() {
  return (
    <div style={{ textAlign: "center", fontSize: "30px", display: "flex",flexDirection: "column"}}>
      <h1>診断テスト</h1>
      <p style={{marginBottom: "40px"}}>診断テストへようこそ。下のボタンを押して診断テストを始めましょう</p>
      <Link href="/diagnosis">
        <Button variant="contained" 
        sx={{
          fontSize: "30px",
          backgroundColor: "#CF9FFF",
          color: "#fff",
        }}>診断テストを始める→</Button>
      </Link>
      <Link href="/api/logout">
        ログアウト
      </Link>
    </div>
  )}