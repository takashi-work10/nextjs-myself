// app/auth/signin/page.tsx
import SignInButton from "@/app/components/auth/SignInButton";
import { Box, Typography } from "@mui/material";

export default function SignInPage() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        p: 2,
      }}
    >
      <Typography variant="h3" gutterBottom>
        サインイン
      </Typography>
      <SignInButton />
    </Box>
  );
}
