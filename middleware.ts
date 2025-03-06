import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // クッキーからトークンを取得
  const token = request.cookies.get('token')?.value;
  
  // トークンがない場合はログインページにリダイレクト
  if (!token) {
    const url = request.nextUrl.clone();
    url.pathname = '/login';
    url.searchParams.set('message', 'login-first');
    return NextResponse.redirect(url);
  }
  
  // トークンがあればそのまま次へ
  return NextResponse.next();
}

export const config = {
  matcher: ['/result/detailed/:path*'],
};
