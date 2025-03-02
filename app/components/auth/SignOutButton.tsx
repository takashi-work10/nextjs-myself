// app/components/auth/SignOutButton.tsx
"use client";

import { signOut } from "next-auth/react";
import { Button } from "@mui/material";

export default function SignOutButton() {
  return (
    <Button variant="contained" onClick={() => signOut()}>
      サインアウト
    </Button>
  );
}
