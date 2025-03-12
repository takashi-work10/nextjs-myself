"use client";

import { useState } from "react";
import { Container, Box, Typography, Button } from "@mui/material";
import axios, { AxiosResponse } from "axios";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import CreatePostForm from "./CreatePostForm";
import PostItem, { PostType } from "./PostItem";

export default function CommunityPage() {
  const queryClient = useQueryClient();
  const [showForm, setShowForm] = useState(false);

  // セッションからログインユーザー情報を取得
  const { data: session } = useSession();

  // 投稿の取得
  const { data: posts = [], isLoading, isError } = useQuery<PostType[]>({
    queryKey: ["posts"],
    queryFn: async () => {
      const res = await axios.get("/api/posts");
      return res.data;
    },
  });

  // 投稿作成用の Mutation
  const createPostMutation = useMutation({
    mutationFn: async (newPost: Partial<PostType>): Promise<AxiosResponse<any>> => {
      return axios.post("/api/posts", newPost);
    },
    onSuccess: () => {
      // 成功時に投稿一覧を再取得
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
    onError: (error: any) => {
      console.error("投稿作成エラー:", error);
      alert("投稿の作成に失敗しました。再度お試しください。");
    },
  });

  // handleCreatePost: 子コンポーネントから投稿データを受け取り、ユーザー情報を追加してAPIに送信
  const handleCreatePost = async (postData: Partial<PostType>) => {
    const userId = session?.user?.id;
    if (!userId) {
      alert("ログインしてください");
      return;
    }
    const payload = { ...postData, user: userId };
    await createPostMutation.mutateAsync(payload);
    setShowForm(false);
  };

  if (isLoading) return <Box>Loading...</Box>;
  if (isError) return <Box>Error fetching posts.</Box>;

  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom sx={{ mt: "90px" }}>
        コミュニティ
      </Typography>
      <Typography variant="body1" align="center" gutterBottom>
        みんなの投稿やコメントが見られます。
      </Typography>
      <Box sx={{ textAlign: "center", mb: 2 }}>
        <Button 
          variant="contained"
          onClick={() => {
            // ログインしていない場合はフォームを開かずにログインを促す
            if (!session) {
              alert("投稿するにはログインが必要です。");
              // 必要に応じてログインページへリダイレクトするなどの処理も可能です
            } else {
              setShowForm(!showForm);
            }
          }}
        >
          {showForm ? "閉じる" : "投稿する"}
        </Button>
      </Box>
      {showForm && <CreatePostForm onCreated={handleCreatePost} />}
      <Box>
        {posts.map((post) => (
          <PostItem
            key={post._id}
            post={post}
            onAction={() => queryClient.invalidateQueries({ queryKey: ["posts"] })}
          />
        ))}
      </Box>
    </Container>
  );
}
