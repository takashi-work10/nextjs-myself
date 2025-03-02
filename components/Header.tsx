"use client";

import { useState } from "react";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Drawer,
  Button,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LoginModal from "../app/components/auth/LoginModal"; // パスは実際の構成に合わせてください

export default function Header() {
  const { data: session } = useSession();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  // モバイル用 Drawer の内容
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center", p: 2 }}>
      <Box sx={{ mb: 2 }}>
        <Link href="/" style={{ textDecoration: "none", color: "#000" }}>
          ホーム
        </Link>
      </Box>
      <Box sx={{ mb: 2 }}>
        <Link href="/community" style={{ textDecoration: "none", color: "#000" }}>
          コミュニティ
        </Link>
      </Box>
      <Box sx={{ mb: 2 }}>
        <Link href="/contact" style={{ textDecoration: "none", color: "#000" }}>
          お問い合わせ
        </Link>
      </Box>
      <Box>
        {session ? (
          <Button onClick={handleProfileMenuOpen} sx={{ textTransform: "none" }}>
            プロフィール
          </Button>
        ) : (
          <Button onClick={() => setLoginModalOpen(true)} sx={{ textTransform: "none" }}>
            ログイン
          </Button>
        )}
      </Box>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          top: 0,
          left: 0,
          width: "100%",
          px: { xs: "15px", sm: "20px" },
          background: "linear-gradient(135deg, #f6d365 0%, #fda085 100%)",
          borderBottomLeftRadius: "20px",
          borderBottomRightRadius: "20px",
          boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
          zIndex: 1100,
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between", minHeight: { xs: "50px", sm: "60px" } }}>
          {/* 左側：ホームリンク（大画面用） */}
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Link
              href="/"
              style={{
                color: "#fff",
                fontWeight: "bold",
                textDecoration: "none",
                fontSize: "1.2rem",
              }}
            >
              ホーム
            </Link>
          </Box>
          {/* 右側：リンク（大画面用） */}
          <Box sx={{ display: { xs: "none", sm: "flex" }, alignItems: "center" }}>
            <Link
              href="/community"
              style={{
                color: "#fff",
                fontWeight: "bold",
                textDecoration: "none",
                marginRight: "10px",
                fontSize: "1.1rem",
              }}
            >
              コミュニティ
            </Link>
            <Link
              href="/contact"
              style={{
                color: "#fff",
                fontWeight: "bold",
                textDecoration: "none",
                marginRight: "10px",
                fontSize: "1.1rem",
              }}
            >
              お問い合わせ
            </Link>
            {session ? (
              <IconButton onClick={handleProfileMenuOpen} color="inherit">
                <Avatar alt={session.user?.name || "User"} src={session.user?.image || undefined} />
              </IconButton>
            ) : (
              <Button
                color="inherit"
                onClick={() => setLoginModalOpen(true)}
                sx={{ fontSize: "1.1rem", textTransform: "none", fontWeight: "bold" }}
              >
                ログイン
              </Button>
            )}
          </Box>
          {/* 小さい画面用：ハンバーガーメニュー */}
          <Box sx={{ display: { xs: "block", sm: "none" } }}>
            <IconButton color="inherit" onClick={handleDrawerToggle}>
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* モバイル用 Drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240 },
        }}
      >
        {drawer}
      </Drawer>

      {/* プロフィール用メニュー（大画面の場合） */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <MenuItem onClick={handleMenuClose} component={Link} href="/profile">
          プロフィール
        </MenuItem>
        <MenuItem
          onClick={() => {
            signOut();
            handleMenuClose();
          }}
        >
          サインアウト
        </MenuItem>
      </Menu>

      {/* ログインモーダル */}
      <LoginModal open={loginModalOpen} onClose={() => setLoginModalOpen(false)} />
    </>
  );
}
