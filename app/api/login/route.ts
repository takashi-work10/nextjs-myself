// // app/api/login/route.ts

// import { NextResponse } from 'next/server';
// import { cookies } from 'next/headers';

// export async function POST(request: Request) {
//   // ユーザーが送ってきた情報（名前とパスワード）を取得
//   const { username, password } = await request.json();

//   // シンプルなチェック: ユーザー名とパスワードがどちらも "demo" の場合のみ成功
//   if (username === "takashi" && password === "diagnosis123") {
//     // クッキーを操作するための箱を await で取得します
//     const cookieStore = await cookies();

//     // トークンをクッキーにセットします
//     // ※ここでは開発用のシンプルな実装のため、httpOnly は使っていません（これによりクライアント側からも読み取れます）
//     cookieStore.set("token", "my-secure-token", {
//       path: "/",            // 全ページで利用可能にする
//       maxAge: 60 * 60 * 24,   // 1日間有効
//     });

//     // ログイン成功の返事を返す
//     return NextResponse.json({ success: true });
//   } else {
//     // ユーザー名またはパスワードが違う場合はエラー
//     return NextResponse.json({ error: "ユーザー名またはパスワードが違います" }, { status: 401 });
//   }
// }
