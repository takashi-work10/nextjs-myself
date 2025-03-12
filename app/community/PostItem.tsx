// app/community/PostItem.tsx

"use client";

import { Box, Typography, Button } from "@mui/material";
import axios from "axios";
import CommentsSection from "./CommentsSection";
import { useSession } from "next-auth/react";
import { useMutation } from "@tanstack/react-query";

export type PostType = {
  _id: string;
  user: string;
  nickname?: string;
  content: string;
  createdAt: string;
  likes: number;
  likedBy: string[];
};

type PostItemProps = {
  post: PostType;
  onAction: () => void;
};

export default function PostItem({ post, onAction }: PostItemProps) {
  const { data: session } = useSession();
  const alreadyLiked = session?.user && post.likedBy.includes(session.user.id);

  // 削除用の Mutation
  const deleteMutation = useMutation({
    mutationFn: async () => {
      await axios.delete(`/api/posts/${post._id}`);
    },
    onSuccess: () => {
      onAction();
    },
    onError: (error: any) => {
      console.error("投稿削除エラー:", error);
      alert("投稿の削除に失敗しました。再度お試しください。");
    },
  });

  // いいね用の Mutation
  const likeMutation = useMutation({
    mutationFn: async (userId: string) => {
      await axios.patch(
        `/api/posts/${post._id}/like`,
        { user: userId },
        { headers: { "Content-Type": "application/json" } }
      );
    },
    onSuccess: () => {
      onAction();
    },
    onError: (error: any) => {
      console.error("いいね処理エラー:", error);
      alert("いいね処理に失敗しました。再度お試しください。");
    },
  });

  const handleDelete = () => {
    deleteMutation.mutate();
  };

  const handleLike = () => {
    if (!session?.user) {
      alert("ログインしてください");
      return;
    }
    if (alreadyLiked) {
      alert("既にいいね済みです。");
      return;
    }
    likeMutation.mutate(session.user.id);
  };

  return (
    <Box sx={{ border: "1px solid #ccc", padding: "10px", marginBottom: "10px" }}>
      <Typography variant="subtitle1">
        {post.nickname ? post.nickname : post.user}
      </Typography>
      <Typography variant="body2">{post.content}</Typography>
      <Typography variant="caption" sx={{ display: "block", mt: 1, color: "#666" }}>
        {new Date(post.createdAt).toLocaleString()}
      </Typography>
      <Typography variant="body2" sx={{ mt: 1 }}>
        いいね: {post.likes}
      </Typography>
      <Button
        variant="outlined"
        onClick={handleLike}
        size="small"
        sx={{ mt: 1, mr: 1 }}
        disabled={!!alreadyLiked}
      >
        {alreadyLiked ? "いいね済み" : "いいね！"}
      </Button>
      <Button
        variant="outlined"
        color="error"
        onClick={handleDelete}
        size="small"
        sx={{ mt: 1 }}
      >
        削除
      </Button>
      <CommentsSection postId={post._id} />
    </Box>
  );
}
