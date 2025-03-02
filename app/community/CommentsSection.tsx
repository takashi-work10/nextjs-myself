// app/community/CommentsSection.tsx
"use client";

import { useState, useEffect, useCallback } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import axios from "axios";
import CommentItem, { CommentType } from "./CommentItem";
import { useSession } from "next-auth/react";

export default function CommentsSection({ postId }: { postId: string }) {
  const { data: session } = useSession();
  const [comments, setComments] = useState<CommentType[]>([]);
  const [newComment, setNewComment] = useState("");

  const fetchComments = useCallback(async () => {
    try {
      const res = await axios.get(`/api/comments?postId=${postId}`);
      setComments(res.data);
    } catch (error) {
      console.error("コメント取得エラー:", error);
    }
  }, [postId]);

  useEffect(() => {
    fetchComments();
  }, [fetchComments]);

  const handleCommentSubmit = async () => {
    if (newComment.trim() === "") return;
    if (!session?.user) {
      alert("ログインしてください");
      return;
    }
    try {
      await axios.post("/api/comments", {
        postId,
        content: newComment,
        user: session.user.id,
      });
      setNewComment("");
      fetchComments();
    } catch (error) {
      console.error("コメント投稿エラー:", error);
    }
  };

  return (
    <Box sx={{ mt: 2 }}>
      <Typography variant="h6">コメント</Typography>
      {comments.map((comment) => (
        <CommentItem key={comment._id} comment={comment} onAction={fetchComments} />
      ))}
      <TextField
        label="新しいコメント"
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        fullWidth
        multiline
        sx={{ mt: 1 }}
      />
      <Button variant="contained" onClick={handleCommentSubmit} sx={{ mt: 1 }}>
        コメントする
      </Button>
    </Box>
  );
}
