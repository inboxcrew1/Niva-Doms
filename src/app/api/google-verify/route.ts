import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const file = request.nextUrl.searchParams.get('file') || request.nextUrl.searchParams.get('code') || request.url || '';
  const match = file.match(/google([a-zA-Z0-9_-]+)\.html/);
  const content = match ? `google-site-verification: google${match[1]}.html` : 'google-site-verification: google.html';
  
  return new NextResponse(content, {
    status: 200,
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
    },
  });
}

