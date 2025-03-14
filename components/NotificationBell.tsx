"use client";

import { useState, useEffect, useRef } from "react";
import {
  IconButton,
  Badge,
  Popover,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  Drawer,
  Box,
  Typography,
  Button,
} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { io } from "socket.io-client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

// 通知データの型（投稿IDを含む）
type NotificationData = {
  message: string;
  postId: string;
};

const socket = io("http://localhost:3001");

const NotificationBell = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const [notifications, setNotifications] = useState<NotificationData[]>([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedPostId, setSelectedPostId] = useState<string | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const hasRegistered = useRef(false);

  useEffect(() => {
    if (session?.user?.id && !hasRegistered.current) {
      socket.emit("register", session.user.id);
      hasRegistered.current = true;
    }

    socket.on("connect", () => {
      console.log("Socket connected:", socket.id);
    });

    // サーバーから受信する通知は { message, postId } のオブジェクト
    socket.on("receiveNotification", (data: NotificationData) => {
      console.log("Received notification:", data);
      setNotifications((prev) => [data, ...prev]);
      setUnreadCount((prev) => prev + 1);
    });

    return () => {
      socket.off("connect");
      socket.off("receiveNotification");
    };
  }, [session]);

  const handleBellClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setUnreadCount(0);
  };

  const handleClosePopover = () => {
    setAnchorEl(null);
  };

  // 通知項目をクリックしたら、対象の postId を保持して Drawer を開く
  const handleNotificationClick = (notification: NotificationData) => {
    setSelectedPostId(notification.postId);
    setDrawerOpen(true);
    handleClosePopover();
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
    setSelectedPostId(null);
  };

  const openPopover = Boolean(anchorEl);

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <IconButton onClick={handleBellClick} color="inherit">
        <Badge badgeContent={unreadCount} color="error">
          <NotificationsIcon fontSize="large" />
        </Badge>
      </IconButton>

      <Popover
        open={openPopover}
        anchorEl={anchorEl}
        onClose={handleClosePopover}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <List sx={{ width: 300, maxHeight: 400, overflow: "auto" }}>
          {notifications.length === 0 ? (
            <ListItem>
              <ListItemText primary="通知はありません" />
            </ListItem>
          ) : (
            notifications.map((notification, index) => (
              <ListItemButton
                key={index}
                divider
                onClick={() => handleNotificationClick(notification)}
              >
                <ListItemText primary={notification.message} />
              </ListItemButton>
            ))
          )}
        </List>
      </Popover>

      {/* Drawer を使って、実際の投稿詳細または投稿ページに遷移するための UI を表示 */}
      <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerClose}>
        <Box sx={{ width: 350, p: 2 }}>
          <Typography variant="h6" gutterBottom>
            投稿詳細
          </Typography>
          {selectedPostId ? (
            <>
              {/* ここでは投稿IDのみ表示。必要に応じて API 呼び出しで詳細情報を取得してください */}
              <Typography variant="body1">
                投稿ID: {selectedPostId}
              </Typography>
              <Typography variant="body2" sx={{ mt: 1 }}>
                この投稿にいいねがついた通知です。
              </Typography>
              <Button
                variant="contained"
                sx={{ mt: 2 }}
                onClick={() => {
                  // 実際の投稿ページに遷移する場合はこちらを利用
                  router.push(`/community/${selectedPostId}`);
                }}
              >
                投稿ページへ移動
              </Button>
            </>
          ) : (
            <Typography variant="body1">読み込み中...</Typography>
          )}
        </Box>
      </Drawer>
    </Box>
  );
};

export default NotificationBell;
