import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(_request: NextRequest) {
  // Create response
  const response = NextResponse.next();

  // Add comprehensive no-cache headers
  response.headers.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0, s-maxage=0');
  response.headers.set('Pragma', 'no-cache');
  response.headers.set('Expires', '0');
  response.headers.set('Surrogate-Control', 'no-store');
  
  // Add Vary header to prevent proxy caching
  response.headers.set('Vary', '*');
  
  // Prevent iframe embedding
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('Content-Security-Policy', "frame-ancestors 'none'");

  return response;
}

// Apply middleware to all routes
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * But still apply no-cache to these as well by including them
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
    // Also apply to static and image files
    '/_next/static/(.*)',
    '/_next/image/(.*)',
    '/favicon.ico'
  ]
};
