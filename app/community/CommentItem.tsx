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
import { useSession } from "next-auth/react";
import { useMutation } from "@tanstack/react-query";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export type CommentType = {
  _id: string;
  user: string;
  nickname?: string;
  content: string;
  createdAt: string;
  updatedAt?: string;
  likes: number;
  likedBy: string[];
};

type CommentItemProps = {
  comment: CommentType;
  onAction: () => void;
};

export default function CommentItem({ comment, onAction }: CommentItemProps) {
  const { data: session } = useSession();
  const isOwner = session?.user?.id === comment.user;
  const alreadyLiked =
    session?.user && (comment.likedBy || []).includes(session.user.id);

  // 編集モードの状態管理
  const [isEditing, setIsEditing] = useState(false);
  const [editContent, setEditContent] = useState(comment.content);
  // 編集用の TextField にフォーカスとカーソル位置制御するための ref
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

  // コメント削除用 Mutation
  const deleteMutation = useMutation({
    mutationFn: async () => {
      await axios.delete(`/api/comments/${comment._id}`);
    },
    onSuccess: () => {
      onAction();
    },
    onError: (error: any) => {
      console.error("コメント削除エラー:", error);
      alert("コメントの削除に失敗しました。再度お試しください。");
    },
  });

  // コメント更新用 Mutation
  const updateMutation = useMutation({
    mutationFn: async () => {
      await axios.put(`/api/comments/${comment._id}`, { content: editContent });
    },
    onSuccess: () => {
      onAction();
      setIsEditing(false);
      handleMenuClose();
    },
    onError: (error: any) => {
      console.error("コメント更新エラー:", error);
      alert("コメントの更新に失敗しました。");
    },
  });

  // コメントいいね用 Mutation
  const likeMutation = useMutation({
    mutationFn: async (userId: string) => {
      await axios.patch(
        `/api/comments/${comment._id}/like`,
        { user: userId },
        { headers: { "Content-Type": "application/json" } }
      );
    },
    onSuccess: () => {
      onAction();
    },
    onError: (error: any) => {
      console.error("コメントいいね処理エラー:", error);
      alert("コメントのいいね処理に失敗しました。再度お試しください。");
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
    setEditContent(comment.content);
  };

  const handleSaveEdit = () => {
    updateMutation.mutate();
  };

  // 編集済みかどうか（updatedAt が存在し、createdAt と異なる場合）
  const isEdited = comment.updatedAt && comment.updatedAt !== comment.createdAt;

  return (
    <Box
      sx={{
        border: "1px solid #eee",
        padding: "8px",
        marginTop: "8px",
        position: "relative",
        "&:hover .menu-button": { display: "block" },
      }}
    >
      {/* 所有者の場合、カーソル時に右上にメニューボタンを表示 */}
      {isOwner && !isEditing && (
        <IconButton
          className="menu-button"
          onClick={handleMenuOpen}
          sx={{
            position: "absolute",
            top: 4,
            right: 4,
            display: "none",
          }}
        >
          <MoreVertIcon />
        </IconButton>
      )}

      <Typography variant="subtitle2">
        {comment.nickname ? comment.nickname : comment.user}
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
            {comment.content}
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
        {new Date(comment.createdAt).toLocaleString()}
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
          {comment.likes}
        </Typography>
      </Box>

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
