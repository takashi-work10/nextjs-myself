// middleware.ts

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // クッキー「token」があるかチェック（ログイン済みかどうかの目印）
  const token = request.cookies.get('token')?.value;

  // ログインページとログインAPIは、誰でもアクセスできるようにする
  const publicPaths = ["/login", "/api/login"];
  if (publicPaths.some(path => request.nextUrl.pathname.startsWith(path))) {
    return NextResponse.next();
  }

  // ログインしていない場合、ログインページにリダイレクトする
  if (!token) {
    const url = request.nextUrl.clone();
    url.pathname = '/login';
    // クエリパラメータ message=login-first を追加して、ログインページ側でメッセージを表示する
    url.searchParams.set('message', 'login-first');
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
