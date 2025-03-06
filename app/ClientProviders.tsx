// app/ClientProviders.tsx
"use client";

import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// クライアントコンポーネント内でQueryClientを初期化する
export default function ClientProviders({ children }: { children: React.ReactNode }) {
  // useStateで遅延初期化。これにより、サーバーからはシリアライズ可能なpropsのみが渡される。
  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
}
