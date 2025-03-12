// app/community/CreatePostForm.tsx ただ、投稿フォームを作って、それをコールバック関数でpage.tsxに渡してるだけ
import React, { useState } from "react";
import { Box, TextField, Button } from "@mui/material";
import { PostType } from "./PostItem";

type CreatePostFormProps = {
  // onCreated が投稿データを引数に取るように型定義を変更
  onCreated: (postData: Partial<PostType>) => void;
}

export default function CreatePostForm({ onCreated }: CreatePostFormProps) {
  const [content, setContent] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 入力された投稿内容を onCreated に渡す
    onCreated({ content });
    setContent("");
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <TextField
        label="投稿内容"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <Button type="submit">送信</Button>
    </Box>
  );
}
