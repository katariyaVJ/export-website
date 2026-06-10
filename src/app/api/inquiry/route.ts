import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';

// Validation Schema
const InquirySchema = z.object({
  name: z.string().min(2, "Name is too short"),
  company: z.string().optional(),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Invalid phone number"),
  product: z.string().optional(),
  message: z.string().min(10, "Message is too short"),
});

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // 1. Check for Honeypot
    if (body.fax) {
      // It's a bot, return success but don't actually do anything
      return NextResponse.json({ success: true, message: 'Inquiry processed' });
    }

    // 2. Validate data
    const validatedData = InquirySchema.parse(body);

    // 2. Send Email using Resend
    // Note: To use this in production, set RESEND_API_KEY in .env.local
    if (process.env.RESEND_API_KEY) {
      await resend.emails.send({
        from: 'Krushnkrupa Website <onboarding@resend.dev>',
        to: ['vijaykatariya1825@gmail.com'],
        subject: `New Trade Inquiry from ${validatedData.name}`,
        html: `
          <div style="font-family: sans-serif; padding: 20px; color: #333;">
            <h2 style="color: #c5a059;">New Inquiry Received</h2>
            <p><strong>Name:</strong> ${validatedData.name}</p>
            <p><strong>Company:</strong> ${validatedData.company || 'N/A'}</p>
            <p><strong>Email:</strong> ${validatedData.email}</p>
            <p><strong>Phone:</strong> ${validatedData.phone}</p>
            <p><strong>Product Interest:</strong> ${validatedData.product || 'General'}</p>
            <div style="margin-top: 20px; padding: 15px; background: #f9f9f9; border-left: 4px solid #c5a059;">
              <strong>Message:</strong><br/>
              ${validatedData.message}
            </div>
          </div>
        `,
      });
    } else {
      // Log for development if no API key
      console.log('Inquiry received (Development Mode):', validatedData);
    }

    return NextResponse.json({ success: true, message: 'Inquiry sent successfully' });

  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ success: false, errors: error.errors }, { status: 400 });
    }
    
    console.error('Inquiry API Error:', error);
    return NextResponse.json({ success: false, message: 'Internal Server Error' }, { status: 500 });
  }
}
