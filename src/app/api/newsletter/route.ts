import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const email = body.email?.trim();

    if (!email) {
      return NextResponse.json(
        { success: false, error: 'Email address is required.' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }

    console.log('[NIVA NEWSLETTER SUBSCRIPTION]:', email, 'at', new Date().toISOString());

    return NextResponse.json(
      { success: true, message: 'Thank you for subscribing to the NIVA journal.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('[NIVA NEWSLETTER ERROR]:', error);
    return NextResponse.json(
      { success: false, error: 'Unable to process subscription.' },
      { status: 500 }
    );
  }
}
