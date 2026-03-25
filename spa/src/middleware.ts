import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {

  const requestHeaders = new Headers(request.headers);
  // Store the full URL in a custom header
  requestHeaders.set('x-current-url', request.url);

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}
 

export const config = {
  // Ensure this matches your Magnolia page routes
  // This matcher excludes static files and api routes to improve performance
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
