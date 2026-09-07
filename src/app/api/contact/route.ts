import { NextRequest, NextResponse } from 'next/server';

interface ContactPayload {
  fullName?: string;
  phone?: string;
  email?: string;
  location?: string;
  companyName?: string;
  projectType?: string;
  units?: string;
  preferredModel?: string;
  message?: string;
  notes?: string;
  honeypot?: string;
}

export async function POST(req: NextRequest) {
  try {
    const body: ContactPayload = await req.json();

    // 1. Anti-spam honeypot check
    if (body.honeypot && body.honeypot.trim() !== '') {
      // Silently reject bots
      return NextResponse.json({ success: true, message: 'Inquiry received' }, { status: 200 });
    }

    // 2. Validate mandatory fields
    const fullName = body.fullName?.trim();
    const phone = body.phone?.trim();
    const email = body.email?.trim();
    const location = body.location?.trim();

    if (!fullName || !phone || !email) {
      return NextResponse.json(
        { success: false, error: 'Full name, phone number, and email address are required.' },
        { status: 400 }
      );
    }

    // Basic email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    // Basic phone length check
    if (phone.length < 7 || phone.length > 25) {
      return NextResponse.json(
        { success: false, error: 'Please provide a valid contact number.' },
        { status: 400 }
      );
    }

    // 3. Structure inquiry record
    const inquiryRecord = {
      timestamp: new Date().toISOString(),
      fullName,
      email,
      phone,
      location: location || 'Not specified',
      companyName: body.companyName?.trim() || 'Individual / Private Estate',
      projectType: body.projectType || 'Resort',
      units: body.units || '1-2 Units',
      preferredModel: body.preferredModel || 'NIVA D1',
      details: body.message?.trim() || body.notes?.trim() || 'No additional notes provided.',
      source: 'nivadoms.com website inquiry',
    };

    // Log inquiry for server records / webhook consumers
    console.log('[NIVA INQUIRY RECEIVED]:', JSON.stringify(inquiryRecord, null, 2));

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you. Your inquiry has been received. Our architectural team will contact you within 24 hours.',
        inquiryId: 'NIVA-' + Date.now().toString(36).toUpperCase(),
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('[NIVA API ERROR]:', error);
    return NextResponse.json(
      { success: false, error: 'Unable to process inquiry at this time. Please contact info@nivadoms.com directly.' },
      { status: 500 }
    );
  }
}
