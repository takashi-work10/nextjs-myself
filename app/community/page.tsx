"use client";

import { useState } from "react";
import { Container, Box, Typography, Button } from "@mui/material";
import axios, { AxiosResponse } from "axios";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import CreatePostForm from "./CreatePostForm";
import PostItem, { PostType } from "./PostItem";

export default function CommunityPage() {
  const queryClient = useQueryClient();
  const [showForm, setShowForm] = useState(false);

  // 投稿の取得 (useQuery のオブジェクト形式)
  const { data: posts = [], isLoading, isError } = useQuery<PostType[]>({
    queryKey: ["posts"],
    queryFn: async () => {
      const res = await axios.get("/api/posts");
      return res.data;
    },
  });

  // 投稿作成用の Mutation (オブジェクト形式)
  const createPostMutation = useMutation({
    mutationFn: async (newPost: Partial<PostType>): Promise<AxiosResponse<any>> => {
      return axios.post("/api/posts", newPost);
    },
    onSuccess: () => {
      // 成功時に投稿一覧を再取得
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });

  // handleCreatePost は投稿データを引数にとる関数です
  const handleCreatePost = async (postData: Partial<PostType>) => {
    await createPostMutation.mutateAsync(postData);
    setShowForm(false);
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching posts.</div>;

  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom>
        コミュニティ
      </Typography>
      <Typography variant="body1" align="center" gutterBottom>
        みんなの投稿やコメントが見られます。
      </Typography>
      <Box sx={{ textAlign: "center", mb: 2 }}>
        <Button variant="contained" onClick={() => setShowForm(!showForm)}>
          {showForm ? "閉じる" : "投稿する"}
        </Button>
      </Box>
      {showForm && <CreatePostForm onCreated={handleCreatePost} />}
      <Box>
        {posts.map((post) => (
          <PostItem
            key={post._id}
            post={post}
            onAction={() =>
              queryClient.invalidateQueries({ queryKey: ["posts"] })
            }
          />
        ))}
      </Box>
    </Container>
  );
}
