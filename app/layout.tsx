// app/layout.tsx
import { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SessionProviderWrapper from "../app/components/SessionProviderWrapper";
import type { Session } from "next-auth";
import ClientProviders from "./ClientProviders"; 

export const metadata: Metadata = {
  title: "英検学習タイプ診断",
  description: "あなたに一番効率的な英検学習方法が分かります。",
};

export default function RootLayout({
  children,
  session,
}: {
  children: React.ReactNode;
  session: Session | null;
}) {
  return (
    <html>
      <body>
        <SessionProviderWrapper session={session}>
          <ClientProviders>
            <Header />
            {children}
          </ClientProviders>
        </SessionProviderWrapper>
        <Footer />
      </body>
    </html>
  );
}
