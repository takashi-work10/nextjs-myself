// app/auth/signin/page.tsx
import { signIn } from "next-auth/react";

export default function SignInPage() {
  return (
    <div>
      <h1>サインイン</h1>
      <button onClick={() => signIn("google")}>
        Googleでサインイン
      </button>
    </div>
  );
}
