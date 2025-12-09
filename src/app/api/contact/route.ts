import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { checkRateLimit, getClientIp } from '@/lib/rate-limit';
import { prisma } from '@/lib/prisma';

// Email configuration
const transporter = nodemailer.createTransporter({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// Validate email format
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Sanitize input to prevent injection attacks
function sanitizeInput(input: string): string {
  return input.replace(/[<>]/g, '');
}

export async function POST(request: NextRequest) {
  try {
    // Rate limiting: 5 submissions per hour per IP
    const clientIp = getClientIp(request);
    const rateLimitResult = checkRateLimit(clientIp, 5, 60 * 60 * 1000);

    if (!rateLimitResult.success) {
      const resetTime = new Date(rateLimitResult.reset).toLocaleTimeString('en-IN', {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
      });
      return NextResponse.json(
        {
          error: `Too many requests. Please try again after ${resetTime} IST.`,
          retryAfter: Math.ceil((rateLimitResult.reset - Date.now()) / 1000),
        },
        {
          status: 429,
          headers: {
            'X-RateLimit-Limit': rateLimitResult.limit.toString(),
            'X-RateLimit-Remaining': rateLimitResult.remaining.toString(),
            'X-RateLimit-Reset': rateLimitResult.reset.toString(),
            'Retry-After': Math.ceil((rateLimitResult.reset - Date.now()) / 1000).toString(),
          },
        }
      );
    }

    // Parse request body
    const body = await request.json();
    const { name, email, company, message } = body;

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required fields' },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    if (message.length < 10) {
      return NextResponse.json(
        { error: 'Message must be at least 10 characters long' },
        { status: 400 }
      );
    }

    // Sanitize inputs
    const sanitizedName = sanitizeInput(name);
    const sanitizedCompany = company ? sanitizeInput(company) : '';
    const sanitizedMessage = sanitizeInput(message);

    // Get request metadata
    const userAgent = request.headers.get('user-agent') || undefined;
    const referrer = request.headers.get('referer') || undefined;

    // Save to database
    const submission = await prisma.contactSubmission.create({
      data: {
        name: sanitizedName,
        email,
        company: sanitizedCompany || undefined,
        message: sanitizedMessage,
        ipAddress: clientIp,
        userAgent,
        referrer,
        status: 'NEW',
      },
    });

    console.log('Contact submission saved to database:', submission.id);

    // Email to Binary Capital
    const mailToCompany = {
      from: process.env.SMTP_FROM || 'noreply@binarycapital.in',
      to: process.env.CONTACT_EMAIL || 'sales@binarycapital.in',
      subject: `New Contact Form Submission from ${sanitizedName}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #1e3a8a 0%, #14b8a6 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f9fafb; padding: 30px; border: 1px solid #e5e7eb; }
            .field { margin-bottom: 20px; }
            .label { font-weight: bold; color: #1e3a8a; margin-bottom: 5px; }
            .value { background: white; padding: 10px; border-left: 4px solid #14b8a6; margin-top: 5px; }
            .footer { background: #1f2937; color: #9ca3af; padding: 20px; text-align: center; border-radius: 0 0 10px 10px; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>New Contact Form Submission</h1>
              <p>Binary Capital Website</p>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Name:</div>
                <div class="value">${sanitizedName}</div>
              </div>
              <div class="field">
                <div class="label">Email:</div>
                <div class="value"><a href="mailto:${email}">${email}</a></div>
              </div>
              <div class="field">
                <div class="label">Company:</div>
                <div class="value">${sanitizedCompany}</div>
              </div>
              <div class="field">
                <div class="label">Message:</div>
                <div class="value">${sanitizedMessage}</div>
              </div>
              <div class="field">
                <div class="label">Submitted:</div>
                <div class="value">${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST</div>
              </div>
            </div>
            <div class="footer">
              <p>This email was sent from the Binary Capital contact form</p>
              <p>Binary Capital Advisors LLP | Mumbai, India</p>
            </div>
          </div>
        </body>
        </html>
      `,
      text: `
New Contact Form Submission

Name: ${sanitizedName}
Email: ${email}
Company: ${sanitizedCompany}
Message: ${sanitizedMessage}

Submitted: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST
      `,
    };

    // Auto-reply email to user
    const mailToUser = {
      from: process.env.SMTP_FROM || 'noreply@binarycapital.in',
      to: email,
      subject: 'Thank you for contacting Binary Capital',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #1e3a8a 0%, #14b8a6 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f9fafb; padding: 30px; border: 1px solid #e5e7eb; }
            .footer { background: #1f2937; color: #9ca3af; padding: 20px; text-align: center; border-radius: 0 0 10px 10px; font-size: 12px; }
            .button { display: inline-block; background: #14b8a6; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; margin: 20px 0; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Thank You for Reaching Out!</h1>
              <p>Binary Capital Advisors LLP</p>
            </div>
            <div class="content">
              <p>Dear ${sanitizedName},</p>
              
              <p>Thank you for contacting Binary Capital. We have received your message and appreciate your interest in our investment banking and financial advisory services.</p>
              
              <p>Our team will review your inquiry and get back to you within 24 business hours. In the meantime, feel free to explore our services:</p>
              
              <ul>
                <li><strong>Finance Advisory</strong> - Structured finance and capital optimization</li>
                <li><strong>Transaction Advisory</strong> - M&A and corporate restructuring</li>
                <li><strong>Capital Markets</strong> - Debt and equity capital markets</li>
                <li><strong>Project Advisory</strong> - Infrastructure financing and SPV structuring</li>
              </ul>
              
              <p style="text-align: center;">
                <a href="https://binarycapital.in" class="button">Visit Our Website</a>
              </p>
              
              <p><strong>Contact Information:</strong><br>
              Phone: +91 7738056127<br>
              Email: sales@binarycapital.in<br>
              Address: 2045, 2nd Floor, Spaces Adani Height, Andheri West, Mumbai - 400053, India</p>
              
              <p>Best regards,<br>
              <strong>Binary Capital Team</strong></p>
            </div>
            <div class="footer">
              <p>Binary Capital Advisors LLP | Investment Banking & Financial Advisory</p>
              <p>Mumbai | India</p>
            </div>
          </div>
        </body>
        </html>
      `,
      text: `
Dear ${sanitizedName},

Thank you for contacting Binary Capital. We have received your message and appreciate your interest in our investment banking and financial advisory services.

Our team will review your inquiry and get back to you within 24 business hours.

Contact Information:
Phone: +91 7738056127
Email: sales@binarycapital.in
Address: 2045, 2nd Floor, Spaces Adani Height, Andheri West, Mumbai - 400053, India

Best regards,
Binary Capital Team
      `,
    };

    // Send emails
    try {
      // Send notification to company
      await transporter.sendMail(mailToCompany);
      
      // Send auto-reply to user
      await transporter.sendMail(mailToUser);

      return NextResponse.json(
        { 
          success: true, 
          message: 'Thank you for your message. We will get back to you within 24 hours.' 
        },
        { status: 200 }
      );
    } catch (emailError) {
      console.error('Email sending error:', emailError);
      
      // Return success to user even if email fails (don't expose internal errors)
      // Log the error for debugging
      return NextResponse.json(
        { 
          success: true, 
          message: 'Your message has been received. We will contact you soon.',
          warning: 'Email notification may be delayed'
        },
        { status: 200 }
      );
    }
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'An error occurred while processing your request. Please try again later.' },
      { status: 500 }
    );
  }
}

// Handle OPTIONS request for CORS
export async function OPTIONS(request: NextRequest) {
  return NextResponse.json(
    {},
    {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    }
  );
}
