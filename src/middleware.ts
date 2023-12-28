import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl;

  const menuId = searchParams.get('menu');
  const searchQuery = searchParams.get('search');
  const isOrderConfirmationOpen =
    searchParams.get('openConfirmationDrawer') === 'true';

  const orderData = request.cookies.get('order')?.value;

  if (pathname === '/' && !menuId && !searchQuery) {
    return NextResponse.redirect(new URL('/?menu=1', request.url));
  }

  if (pathname === '/' && isOrderConfirmationOpen && !orderData) {
    return NextResponse.redirect(new URL('/?menu=1', request.url));
  }

  if (pathname.includes('products-management') && !menuId && !searchQuery) {
    return NextResponse.redirect(
      new URL('/settings/products-management?menu=1', request.url)
    );
  }

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
