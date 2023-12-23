import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;

  if (pathname === '/' && !search.includes('menu')) {
    return NextResponse.redirect(new URL('/?menu=1', request.url));
  }

  // const userSession = request.cookies.get('userSession');

  // const redirectionUrl = process.env.WEBSITE_URL || '/';

  // if (request.nextUrl.pathname === '/' && userSession?.value) {
  //   return NextResponse.redirect(new URL(redirectionUrl, request.url));
  // }

  // if (request.nextUrl.pathname !== '/' && !userSession?.value) {
  //   return NextResponse.redirect(new URL(redirectionUrl, request.url));
  // }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - assets/media (media files)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|assets/media).*)',
  ],
};
