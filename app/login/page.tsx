"use client";

import { Container, Box, Typography, Button } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  return (
    <Container maxWidth="sm" sx={{ mt: 10, textAlign: "center", p: "200px" }}>
      <Typography variant="h3" component="h1" gutterBottom>
        ログイン
      </Typography>
      <Typography variant="body1" gutterBottom>
        Googleアカウントでログインしてください。
      </Typography>
      <Box sx={{ mt: 4 }}>
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
    </Container>
  );
}
