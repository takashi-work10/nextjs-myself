// import Link from 'next/link'
// import { AppBar, Toolbar, IconButton, Button, Typography } from '@mui/material'
// import HomeIcon from '@mui/icons-material/Home'

// export default function Header() {
//     return (
//         <AppBar position="static" sx={{backgroundColor: "#fff"}}>
//             <Toolbar>
//                 <Link href="/" style={{flexGrow: 1}}>              
//                     <Typography variant="h6" component="div" sx={{color:"black"}}>
//                         Diagnosis
//                     </Typography>
//                 </Link>
//                 <Link href="/login">
//                     <Button>ログイン</Button>
//                 </Link>
//             </Toolbar>
//         </AppBar>
//     )
//   }

// "use client";

// import Link from "next/link";
// import { useState, useEffect } from "react";

// export default function Header() {
//   // ユーザーがログインしているかどうかを管理する変数
//   const [loggedIn, setLoggedIn] = useState(false);

//   // コンポーネントが表示されたら、ブラウザのクッキーから「token」があるか確認します
//   useEffect(() => {
//     // document.cookie はパソコンのメモ帳のように、クッキー情報が文字列として保存されています
//     const tokenCookie = document.cookie.split("; ").find(row => row.startsWith("token="));
//     // tokenCookie が見つかり、=の右側に値があればログイン中とします
//     if (tokenCookie && tokenCookie.split("=")[1]) {
//       setLoggedIn(true);
//     } else {
//       setLoggedIn(false);
//     }
//   }, []);

//   return (
//     <header
//       style={{
//         position: "fixed",  // ヘッダーを固定して、画面をスクロールしてもそのまま表示
//         top: 0,             // 画面の上端にくっつける
//         left: 0,            // 画面の左端にくっつける
//         width: "100%",      // 画面の幅いっぱいに広げる
//         padding: "10px",
//         backgroundColor: "#eee",
//         zIndex: 1000,       // 他のコンテンツより前面に表示するための設定
//       }}
//     >
//       <nav style={{
//           display: "flex",                // フレックスボックスでレイアウト
//           justifyContent: "space-between",// 子要素を左右に分けて配置
//           alignItems: "center",           // 縦方向を中央に揃える
//         }}>
//         <Link href="/">Diagnosis</Link>
//         <div>
//         <Link href="/contact">お問い合わせ</Link>
//         {" | "}
//         {/* loggedInがtrueならログアウトリンク、falseならログインリンクを表示 */}
//         {loggedIn ? (
//           <Link href="/api/logout">ログアウト</Link>
//         ) : (
//           <Link href="/login">ログイン</Link>
//         )}
//         </div>
//       </nav>
//     </header>
//   );
// }

// "use client";

// import Link from "next/link";
// import { useAuth } from "../app/context/AuthContext"; // AuthContext を読み込みます

// export default function Header() {
//   const { loggedIn } = useAuth(); // グローバルなログイン状態を取得

//   return (
//     <header
//       style={{
//         position: "fixed",
//         top: 0,
//         left: 0,
//         width: "100%",
//         padding: "10px 20px",
//         backgroundColor: "#eee",
//         zIndex: 1000,
//       }}
//     >
//       <nav
//         style={{
//           display: "flex",
//           justifyContent: "space-between", // 左右に分けて配置
//           alignItems: "center",
//         }}
//       >
//         {/* 左側: ホームリンク */}
//         <div>
//           <Link href="/">Diagnosis</Link>
//         </div>
//         {/* 右側: お問い合わせとログイン／ログアウトリンク */}
//         <div>
//           <Link href="/contact">お問い合わせ</Link>
//           {" | "}
//           {loggedIn ? (
//             <Link href="/api/logout">ログアウト</Link>
//           ) : (
//             <Link href="/login">ログイン</Link>
//           )}
//         </div>
//       </nav>
//     </header>
//   );
// }

"use client";

import Link from "next/link";
import { useAuth } from "../app/context/AuthContext"; // Context のパスはプロジェクトに合わせて調整してください

export default function Header() {
  const { loggedIn } = useAuth();

  // クリック時にログイン状態をチェックして、未ログインならアラートを出す関数
  const handleProtectedClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (!loggedIn) {
      e.preventDefault(); // リンク先へ遷移する動作を止める
      alert("先にログインしてください");
    }
  };

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        padding: "10px 20px",
        backgroundColor: "#eee",
        zIndex: 1000,
      }}
    >
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* 左側：ホームリンク */}
        <div>
          <Link href="/" onClick={handleProtectedClick}>ホーム</Link>
        </div>
        {/* 右側：お問い合わせとログイン／ログアウトリンク */}
        <div>
          <Link href="/contact" onClick={handleProtectedClick}>お問い合わせ</Link>
          {" | "}
          {loggedIn ? (
            <Link href="/api/logout">ログアウト</Link>
          ) : (
            <Link href="/login">ログイン</Link>
          )}
        </div>
      </nav>
    </header>
  );
}
