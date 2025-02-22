import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";


export const metadata: Metadata = {
  title: "英検学習タイプ診断",
  description: "あなたに一番効率的な英検学習方法が分かります。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        style={{display: "flex", minHeight: "100vh", flexDirection: "column", background: "linear-gradient(to bottom, #f0f8ff 0%, #f0f8ff 25%, #ffffff 100%)"}}
      >
      <Header />
      <main style={{ flex: 1, marginTop: "60px" }}>
        {children}
      </main>
      <Footer />
      </body>
    </html>
  );
}

