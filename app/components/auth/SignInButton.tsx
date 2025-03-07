// app/components/auth/SignInButton.tsx
"use client";

import { signIn } from "next-auth/react";
import { Button } from "@mui/material";

export default function SignInButton() {
  return (
    <Button variant="contained" onClick={() => signIn()}>
      サインイン
    </Button>
  );
}