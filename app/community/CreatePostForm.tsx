// // app/community/CreatePostForm.tsx
// "use client";

// import { useState } from "react";
// import { Box, Button, TextField } from "@mui/material";
// import axios from "axios";

// export default function CreatePostForm({ onCreated }: { onCreated: () => void }) {
//   const [content, setContent] = useState("");

//   const handleSubmit = async () => {
//     if (content.trim() === "") return;
//     try {
//       await axios.post("/api/posts", { content, user: "currentUser", category: "discussion" });
//       setContent("");
//       onCreated();
//     } catch (error) {
//       console.error("投稿エラー:", error);
//     }
//   };

//   return (
//     <Box>
//       <TextField
//         label="投稿内容"
//         value={content}
//         onChange={(e) => setContent(e.target.value)}
//         fullWidth
//         multiline
//       />
//       <Button variant="contained" onClick={handleSubmit} sx={{ mt: 1 }}>
//         投稿する
//       </Button>
//     </Box>
//   );
// }
// app/community/CreatePostForm.tsx
"use client";
import { useState } from "react";
import { useSession } from "next-auth/react";
import axios from "axios";

export default function CreatePostForm({ onCreated }: { onCreated: () => void }) {
  const { data: session } = useSession();
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!session?.user) {
      alert("ログインしてください");
      return;
    }
    try {
      // セッション情報にニックネームが入っていない場合は、プロフィール表示や編集時に取得しておくか、
      // サーバー側でユーザープロフィールから取得することも可能ですが、ここではセッションから送信する例です。
      const nickname = session.user.name || ""; // 例えば、session.user.name をニックネームとして利用
      if (!nickname) {
        alert("ニックネームが取得できませんでした");
        return;
      }
      await axios.post("/api/posts", {
        content,
        category,
        user: session.user.id, // ユーザーID
        nickname,           // ニックネームを送信
        // email: session.user.email, // 必要なら email も送信
      });
      setContent("");
      setCategory("");
      onCreated();
    } catch (error) {
      console.error("投稿作成エラー:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="投稿内容を入力"
      />
      <input
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="カテゴリを入力"
      />
      <button type="submit">投稿する</button>
    </form>
  );
}

