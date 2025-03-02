// app/community/page.tsx
"use client";

import { useState, useEffect } from "react";
import { Container, Box, Typography } from "@mui/material";
import axios from "axios";
import CreatePostForm from "./CreatePostForm";
import PostItem, { PostType } from "./PostItem";

export default function CommunityPage() {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [showForm, setShowForm] = useState(false);

  const fetchPosts = async () => {
    try {
      const res = await axios.get("/api/posts");
      setPosts(res.data);
    } catch (error) {
      console.error("投稿取得エラー:", error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom>
        コミュニティ
      </Typography>
      <Typography variant="body1" align="center" gutterBottom>
        みんなの投稿やコメントが見られます。
      </Typography>
      
      <Box sx={{ textAlign: "center", mb: 2 }}>
        <button onClick={() => setShowForm(!showForm)}>
          {showForm ? "閉じる" : "投稿する"}
        </button>
      </Box>
      
      {showForm && <CreatePostForm onCreated={fetchPosts} />}
      
      <Box>
        {posts.map((post) => (
          <PostItem key={post._id} post={post} onAction={fetchPosts} />
        ))}
      </Box>
    </Container>
  );
}
