// "use client";

// import Link from "next/link";
// import { useAuth } from "../app/context/AuthContext"; // Context のパスはプロジェクトに合わせて調整してください

// export default function Header() {
//   const { loggedIn } = useAuth();

//   // クリック時にログイン状態をチェックして、未ログインならアラートを出す関数
//   const handleProtectedClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
//     if (!loggedIn) {
//       e.preventDefault(); // リンク先へ遷移する動作を止める
//       alert("先にログインしてください");
//     }
//   };

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
//           justifyContent: "space-between",
//           alignItems: "center",
//         }}
//       >
//         {/* 左側：ホームリンク */}
//         <div>
//           <Link href="/" onClick={handleProtectedClick}>ホーム</Link>
//         </div>
//         {/* 右側：お問い合わせとログイン／ログアウトリンク */}
//         <div>
//           <Link href="/contact" onClick={handleProtectedClick}>お問い合わせ</Link>
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

export default function Header() {
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
          <Link href="/">ホーム</Link>
        </div>
        {/* 右側：お問い合わせ、ログインリンク */}
        <div>
          <Link href="/contact">お問い合わせ</Link>
          {" | "}
          <Link href="/login">ログイン</Link>
        </div>
      </nav>
    </header>
  );
}
