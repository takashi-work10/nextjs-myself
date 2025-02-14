import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  // cookies() を await して「cookieStore」というお手紙箱（クッキー管理の箱）を取り出します
  const cookieStore = await cookies();
  // その箱から「token」という名前のお手紙（クッキー）を削除します
  cookieStore.delete('token');

  // 削除が終わったら、ログインページ（例：/login）に自動で送ります
  return NextResponse.redirect(new URL('/login?loggedout=true', request.url));
}
