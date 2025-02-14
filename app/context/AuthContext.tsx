"use client";

import { createContext, useContext, useState, ReactNode } from "react";

// AuthContext で管理する型を定義します
type AuthContextType = {
  loggedIn: boolean;
  setLoggedIn: (value: boolean) => void;
};

// 初期値として、false（ログインしていない）と空の関数を設定
const AuthContext = createContext<AuthContextType>({
  loggedIn: false,
  setLoggedIn: () => {},
});

// AuthProvider コンポーネントは、子供たちにログイン状態を提供します
export function AuthProvider({ children }: { children: ReactNode }) {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <AuthContext.Provider value={{ loggedIn, setLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
}

// 自分のコンポーネントでログイン状態を使うときに、簡単に呼び出せるようにするフック
export function useAuth() {
  return useContext(AuthContext);
}
