// "use client";

// import { useState } from "react";
// import { useRouter, useSearchParams } from "next/navigation";
// import Button from '@mui/material/Button';
// import { useAuth } from "../context/AuthContext";

// export default function LoginPage() {
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   // 以前実装していたログアウト成功のパラメータもある場合に備えて
//   const loggedOut = searchParams.get('loggedout');
//   // ここで "message" クエリパラメータをチェック
//   const message = searchParams.get('message');

//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     const res = await fetch("/api/login", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ username, password }),
//     });
//     const data = await res.json();
//     if (res.ok) {
//       router.push("/");
//     } else {
//       setError(data.error || "ログインに失敗しました");
//     }
//   };

//   return (
//     <div style={{ maxWidth: "400px", margin: "0 auto", padding: "20px" }}>
//       {/* ログアウト成功のメッセージ */}
//       {loggedOut === 'true' && (
//         <p style={{ color: "green", fontWeight: "bold" }}>
//           ログアウトに成功しました！
//         </p>
//       )}
//       {/* ログインしていない状態でホームにアクセスされた場合のメッセージ */}
//       {message === 'login-first' && (
//         <p style={{ color: "red", fontWeight: "bold" }}>
//           まずログインしてください！
//         </p>
//       )}
//       <form onSubmit={handleSubmit}>
//         <div style={{ marginBottom: "10px" }}>
//           <label>
//             ユーザー名
//             <input 
//               type="text"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               style={{ width: "100%", border: "1px solid #ccc" }}
//             />
//           </label>
//         </div>
//         <div style={{ marginBottom: "10px" }}>
//           <label>パスワード</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             style={{ width: "100%", border: "1px solid #ccc" }}
//           />
//         </div>
//         {error && <p style={{ color: "red" }}>{error}</p>}
//         <Button type="submit" variant="contained">ログイン</Button>
//       </form>
//     </div>
//   );
// }
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
// AuthContextからsetLoggedInを使えるようにimportします（パスはプロジェクトの構造に合わせて調整）
import { useAuth } from "../context/AuthContext"; 
import Button from '@mui/material/Button';

export default function LoginPage() {
  const router = useRouter();
  // Contextからログイン状態を更新する関数を取り出す
  const { setLoggedIn } = useAuth();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
    const data = await res.json();
    if (res.ok) {
      // ログイン成功時にContextの状態を更新します
      setLoggedIn(true);
      router.push("/");
    } else {
      setError(data.error || "ログインに失敗しました");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "0 auto", padding: "20px" }}>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "10px" }}>
          <label>
            ユーザー名
            <input 
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{ width: "100%", border: "1px solid #ccc" }}
              required
            />
          </label>
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>
            パスワード
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ width: "100%", border: "1px solid #ccc" }}
              required
            />
          </label>
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <Button type="submit" variant="contained">ログイン</Button>
      </form>
    </div>
  );
}
