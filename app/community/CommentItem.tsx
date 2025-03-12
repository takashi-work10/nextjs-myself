"use client";

import { Box, Typography, Button } from "@mui/material";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";

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


  const deleteMutation = useMutation({
    mutationFn: async () => {
      await axios.delete(`/api/comments/${comment._id}`);
    },
    onSuccess: () => {
      // コメント削除後、親コンポーネント側でキャッシュの再取得などの処理を行う
      onAction();
    },
    onError: (error: any) => {
      console.error("コメント削除エラー:", error);
      alert("コメントの削除に失敗しました。再度お試しください。");
    },
  });

  const handleDelete = () => {
    deleteMutation.mutate();
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
