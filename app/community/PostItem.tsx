// app/community/PostItem.tsx
"use client";

import { Box, Typography, Button } from "@mui/material";
import axios from "axios";
import CommentsSection from "./CommentsSection";
import { useSession } from "next-auth/react";

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

  const handleDelete = async () => {
    try {
      await axios.delete(`/api/posts/${post._id}`);
      onAction();
    } catch (error) {
      console.error("削除エラー:", error);
    }
  };

  const handleLike = async () => {
    if (!session?.user) {
      alert("ログインしてください");
      return;
    }
    if (alreadyLiked) {
      alert("既にいいね済みです。");
      return;
    }
    try {
      await axios.patch(
        `/api/posts/${post._id}/like`,
        { user: session.user.id },
        { headers: { "Content-Type": "application/json" } }
      );
      onAction();
    } catch (error) {
      console.error("Error liking post:", error);
    }
  };

  return (
    <Box sx={{ border: "1px solid #ccc", padding: "10px", marginBottom: "10px" }}>
      <Typography variant="subtitle1">{post.nickname ? post.nickname : post.user}</Typography>
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
      <Button variant="outlined" color="error" onClick={handleDelete} size="small" sx={{ mt: 1 }}>
        削除
      </Button>
      <CommentsSection postId={post._id} />
    </Box>
  );
}
