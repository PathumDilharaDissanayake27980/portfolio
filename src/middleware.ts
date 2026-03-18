import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith('/api') || pathname.startsWith('/_next') || pathname.startsWith('/admin')) {
    return NextResponse.next();
  }

  // Track page views via API route (Edge-compatible — no firebase-admin in middleware)
  try {
    const baseUrl = request.nextUrl.origin;
    fetch(`${baseUrl}/api/analytics`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ pathname }),
    }).catch(() => {}); // fire-and-forget, don't block the request
  } catch {
    // silently ignore analytics errors
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
