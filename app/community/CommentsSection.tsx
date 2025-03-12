"use client";

import { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import axios from "axios";
import CommentItem, { CommentType } from "./CommentItem";
import { useSession } from "next-auth/react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

export default function CommentsSection({ postId }: { postId: string }) {
  const { data: session } = useSession();
  const [newComment, setNewComment] = useState("");
  const queryClient = useQueryClient();

  // コメント取得用の useQuery
  const {
    data: comments = [],
    isLoading,
    isError,
  } = useQuery<CommentType[]>({
    queryKey: ["comments", postId],
    queryFn: async () => {
      const res = await axios.get(`/api/comments?postId=${postId}`);
      return res.data;
    },
  });

  // コメント投稿用の useMutation
  const addCommentMutation = useMutation({
    mutationFn: async (commentData: { postId: string; content: string; user: string }) => {
      return axios.post("/api/comments", commentData);
    },
    onSuccess: () => {
      // 投稿後、キャッシュを無効化してコメント一覧を再取得
      queryClient.invalidateQueries({ queryKey: ["comments", postId] });
      setNewComment("");
    },
    onError: (error: any) => {
      console.error("コメント投稿エラー:", error);
      alert("コメントの投稿に失敗しました。再度お試しください。");
    },
  });

  const handleCommentSubmit = () => {
    if (newComment.trim() === "") return;
    if (!session?.user) {
      alert("ログインしてください");
      return;
    }
    addCommentMutation.mutate({
      postId,
      content: newComment,
      user: session.user.id,
    });
  };

  if (isLoading) return <div>コメント読み込み中...</div>;
  if (isError) return <div>コメントの読み込みに失敗しました。</div>;

  return (
    <Box sx={{ mt: 2 }}>
      <Typography variant="h6">コメント</Typography>
      {comments.map((comment) => (
        <CommentItem
          key={comment._id}
          comment={comment}
          onAction={() =>
            queryClient.invalidateQueries({ queryKey: ["comments", postId] })
          }
        />
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
