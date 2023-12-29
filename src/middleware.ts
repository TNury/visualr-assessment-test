import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

import { getFeaturedMenuId } from '@vat/actions/menu.actions';

/**
 * Redirects to a new URL with a specified menu ID.
 *
 * @param pathname - The path of the new URL.
 * @param menuId - The menu ID to be included in the new URL.
 * @param request - The NextRequest object representing the current request.
 * @returns A NextResponse object that redirects to the new URL.
 */
function redirectWithMenuId(
  pathname: string,
  menuId: string,
  request: NextRequest
) {
  return NextResponse.redirect(
    new URL(`${pathname}?menu=${menuId}`, request.url)
  );
}

export async function middleware(request: NextRequest) {
  const { cookies } = request;
  const { pathname, searchParams } = request.nextUrl;

  let featuredMenuId: string;

  let menuId = searchParams.get('menu');
  const searchQuery = searchParams.get('search');
  const isOrderConfirmationOpen =
    searchParams.get('openConfirmationDrawer') === 'true';

  const orderData = cookies.get('order')?.value;

  // TODO: Add cookies here
  if (
    !menuId &&
    (pathname === '/' || pathname.includes('products-management'))
  ) {
    const featuredMenuIdResponse = await getFeaturedMenuId();

    featuredMenuId = featuredMenuIdResponse.data?.menus.data[0].id;
  }

  // If you try to go '/' without a menu ID or search query.
  if (pathname === '/' && !menuId && !searchQuery) {
    return redirectWithMenuId('/', featuredMenuId, request);
  }

  // If you try to open the order confirmation drawer without orderData
  if (pathname === '/' && isOrderConfirmationOpen && !orderData) {
    return redirectWithMenuId('/', featuredMenuId, request);
  }

  // If you try to go to '/settings/products-management' without a menu ID or search query.
  if (pathname.includes('products-management') && !menuId && !searchQuery) {
    return redirectWithMenuId(
      '/settings/products-management',
      featuredMenuId,
      request
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
