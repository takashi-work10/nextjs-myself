"use client";

import React, { use } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { Box, Typography, Button } from "@mui/material";
import Link from "next/link";

export type PostType = {
  _id: string;
  user: string;
  nickname?: string;
  content: string;
  createdAt: string;
  updatedAt?: string;
  likes: number;
  likedBy: string[];
};

type PageProps = {
  // params が Promise として渡されるので型も Promise にする
  params: Promise<{ postId: string }>;
};

export default function PostDetailPage({ params }: PageProps) {
  // params を展開（unwrap）する
  const { postId } = use(params);

  const { data, error, isLoading } = useQuery({
    queryKey: ["postDetail", postId],
    queryFn: async () => {
      const response = await axios.get(`/api/posts/${postId}`);
      return response.data;
    },
    staleTime: 60000,
  });

  if (isLoading) return <div>読み込み中...</div>;
  if (error) return <div>エラー: {error.message}</div>;
  if (!data) return <div>投稿が見つかりません</div>;

  return (
    <Box sx={{ padding: "20px", maxWidth: "800px", margin: "0 auto", mt: "50px" }}>
      <Typography variant="h4" gutterBottom>
        {data.nickname ? data.nickname : data.user} の投稿
      </Typography>
      <Typography variant="body1" gutterBottom>
        {data.content}
      </Typography>
      <Typography variant="caption" color="text.secondary" gutterBottom>
        投稿日時: {new Date(data.createdAt).toLocaleString()}
      </Typography>
      <Box sx={{ mt: 2 }}>
        <Link href="/community" passHref>
          <Button variant="contained" color="primary">
            コミュニティページに戻る
          </Button>
        </Link>
      </Box>
    </Box>
  );
}
