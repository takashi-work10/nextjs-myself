// import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';

// export function middleware(request: NextRequest) {
//   const token = request.cookies.get('token')?.value;

//   const publicPaths = ["/login", "/api/login"];
//   if (publicPaths.some(path => request.nextUrl.pathname.startsWith(path))) {
//     return NextResponse.next();
//   }

//   if (!token) {
//     const url = request.nextUrl.clone();
//     url.pathname = '/login';
//     url.searchParams.set('message', 'login-first');
//     return NextResponse.redirect(url);
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
// };
import { NextResponse } from 'next/server';

export function middleware(request: Request) {
  // 何も処理を行わずに次の処理へ
  return NextResponse.next();
}
