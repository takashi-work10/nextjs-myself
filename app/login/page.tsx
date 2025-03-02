"use client";

import { useState } from "react";
import { Modal, Box, Typography, Button, Backdrop, Fade } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import { signIn } from "next-auth/react";

export default function LoginModal() {
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      {/* ログインボタンを画面上に配置（ここは任意の位置に配置してください） */}
      <Button variant="outlined" onClick={handleOpen}>
        ログイン
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 400,
              bgcolor: "background.paper",
              borderRadius: "16px",
              boxShadow: 24,
              p: 4,
              textAlign: "center",
            }}
          >
            <Typography variant="h4" component="h2" sx={{ mb: 2 }}>
              ログイン
            </Typography>
            <Typography sx={{ mb: 4 }}>
              Googleアカウントでログインしてください
            </Typography>
            <Button
              variant="contained"
              startIcon={<GoogleIcon />}
              onClick={() => signIn("google")}
              sx={{
                backgroundColor: "#4285F4",
                color: "#fff",
                px: 4,
                py: 1.5,
                fontSize: "16px",
                fontWeight: "bold",
                borderRadius: "8px",
                textTransform: "none",
                transition: "background-color 0.3s",
                "&:hover": {
                  backgroundColor: "#357ae8",
                },
              }}
            >
              Googleでログイン
            </Button>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
