"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  Box,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
  TextField,
} from "@mui/material";
import axios from "axios";
import CommentsSection from "./CommentsSection";
import { useSession } from "next-auth/react";
import { useMutation } from "@tanstack/react-query";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { io } from "socket.io-client";

// グローバルな socket インスタンスを作成（接続先は通知サーバー）
const socket = io("http://localhost:3001");

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

type PostItemProps = {
  post: PostType;
  onAction: () => void;
};

export default function PostItem({ post, onAction }: PostItemProps) {
  const { data: session } = useSession();
  const alreadyLiked = session?.user && post.likedBy.includes(session.user.id);
  const isOwner = session?.user?.id === post.user;

  // 編集モードの状態管理
  const [isEditing, setIsEditing] = useState(false);
  const [editContent, setEditContent] = useState(post.content);
  const editRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isEditing && editRef.current) {
      const length = editContent.length;
      editRef.current.setSelectionRange(length, length);
      editRef.current.focus();
    }
  }, [isEditing, editContent]);

  // 編集・削除メニューの管理
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const openMenu = Boolean(anchorEl);
  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  // 削除用 Mutation
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

  // 更新用 Mutation
  const updateMutation = useMutation({
    mutationFn: async () => {
      await axios.put(`/api/posts/${post._id}`, { content: editContent });
    },
    onSuccess: () => {
      onAction();
      setIsEditing(false);
      handleMenuClose();
    },
    onError: (error: any) => {
      console.error("投稿更新エラー:", error);
      alert("投稿の更新に失敗しました。");
    },
  });

  // いいね用 Mutation（通知送信処理を追加）
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
      // 自分自身がいいねした場合は通知を送らない
      if (session?.user?.id && session.user.id !== post.user) {
        // 投稿内容の抜粋（例：先頭30文字）
        const excerpt = post.content.slice(0, 30) + (post.content.length > 30 ? "…" : "");
        socket.emit("sendNotification", {
          receiverId: post.user, // 受信者は投稿の所有者
          message: `あなたの投稿「${excerpt}」にいいねがつきました！`,
          postId: post._id,
        });
      }
    },
    onError: (error: any) => {
      console.error("いいね処理エラー:", error);
      alert("いいね処理に失敗しました。再度お試しください。");
    },
  });

  const handleDelete = () => {
    deleteMutation.mutate();
    handleMenuClose();
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

  const handleEdit = () => {
    setIsEditing(true);
    handleMenuClose();
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditContent(post.content);
  };

  const handleSaveEdit = () => {
    updateMutation.mutate();
  };

  // いいねなどで自動更新された updatedAt の変化は短いと考え、2秒以上の差があれば本当に編集されたとみなす
  const isEdited =
    post.updatedAt &&
    new Date(post.updatedAt).getTime() - new Date(post.createdAt).getTime() > 2000;

  return (
    <Box
      sx={{
        border: "1px solid #ccc",
        padding: "10px",
        marginBottom: "10px",
        position: "relative",
        "&:hover .menu-button": { display: "block" },
      }}
    >
      {isOwner && !isEditing && (
        <IconButton
          className="menu-button"
          onClick={handleMenuOpen}
          sx={{
            position: "absolute",
            top: 8,
            right: 8,
            display: "none",
          }}
        >
          <MoreVertIcon />
        </IconButton>
      )}

      <Typography variant="subtitle1">
        {post.nickname ? post.nickname : post.user}
      </Typography>

      {isEditing ? (
        <>
          <TextField
            autoFocus
            inputRef={editRef}
            fullWidth
            multiline
            value={editContent}
            onChange={(e) => setEditContent(e.target.value)}
          />
          <Box sx={{ mt: 1 }}>
            <Button variant="contained" onClick={handleSaveEdit} size="small">
              更新
            </Button>
            <Button
              variant="outlined"
              onClick={handleCancelEdit}
              size="small"
              sx={{ ml: 1 }}
            >
              キャンセル
            </Button>
          </Box>
        </>
      ) : (
        <>
          <Typography variant="body2">
            {post.content}
            {isEdited && (
              <Typography
                component="span"
                variant="caption"
                sx={{ color: "#999", ml: 1 }}
              >
                （編集済み）
              </Typography>
            )}
          </Typography>
        </>
      )}

      <Typography variant="caption" sx={{ display: "block", mt: 1, color: "#666" }}>
        {new Date(post.createdAt).toLocaleString()}
      </Typography>

      <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
        <IconButton onClick={handleLike} disabled={!!alreadyLiked} sx={{ p: 0 }}>
          <ThumbUpAltIcon
            sx={{
              fontSize: 24,
              color: alreadyLiked ? "#e91e63" : "#e0e0e0",
              transition: "color 0.1s ease",
              "&:hover": {
                color: alreadyLiked ? "#d81b60" : "#bdbdbd",
              },
            }}
          />
        </IconButton>
        <Typography variant="body2" sx={{ ml: 1 }}>
          {post.likes}
        </Typography>
      </Box>

      <CommentsSection postId={post._id} />

      {isOwner && (
        <Menu
          anchorEl={anchorEl}
          open={openMenu}
          onClose={handleMenuClose}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <MenuItem onClick={handleEdit}>編集</MenuItem>
          <MenuItem onClick={handleDelete}>削除</MenuItem>
        </Menu>
      )}
    </Box>
  );
}
