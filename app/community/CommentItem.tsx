// app/community/CommentItem.tsx
"use client";

import { Box, Typography, Button } from "@mui/material";
import axios from "axios";

export type CommentType = {
  _id: string;
  user: string;
  nickname?: string;
  content: string;
  createdAt: string;
};

type CommentItemProps = {
  comment: CommentType;
  onAction: () => void;
};

export default function CommentItem({ comment, onAction }: CommentItemProps) {
  const handleDelete = async () => {
    try {
      await axios.delete(`/api/comments/${comment._id}`);
      onAction();
    } catch (error) {
      console.error("コメント削除エラー:", error);
    }
  };

  return (
    <Box sx={{ border: "1px solid #eee", padding: "8px", marginTop: "8px" }}>
      <Typography variant="subtitle2">
        {comment.nickname ? comment.nickname : comment.user}
      </Typography>
      <Typography variant="body2">{comment.content}</Typography>
      <Typography variant="caption" sx={{ display: "block", mt: 1, color: "#666" }}>
        {new Date(comment.createdAt).toLocaleString()}
      </Typography>
      <Button variant="text" color="error" onClick={handleDelete} size="small">
        削除
      </Button>
    </Box>
  );
}
