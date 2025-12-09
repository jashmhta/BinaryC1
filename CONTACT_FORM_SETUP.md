# Contact Form Backend Setup Guide

## Overview

The Binary Capital website now has a fully functional contact form backend with email notification capabilities. When users submit the contact form, the system:

1. Validates the form data
2. Sends an email notification to Binary Capital
3. Sends an auto-reply confirmation email to the user
4. Provides real-time feedback to the user

---

## Features

### ✅ Form Validation
- Required fields: Name, Email, Message
- Email format validation
- Minimum message length (10 characters)
- Input sanitization to prevent injection attacks

### ✅ Email Notifications
- **To Company**: Beautifully formatted HTML email with all form details
- **To User**: Professional auto-reply with company information
- **Fallback**: Plain text versions for email clients that don't support HTML

### ✅ User Experience
- Real-time form status (idle, submitting, success, error)
- Disabled inputs during submission
- Success/error messages with auto-dismiss
- Form reset after successful submission
- Loading state on submit button

### ✅ Security
- Input sanitization
- CORS handling
- Environment variable protection
- Error handling without exposing internal details

---

## Setup Instructions

### Step 1: Configure Environment Variables

Create a `.env.local` file in the project root:

```bash
cp .env.example .env.local
```

### Step 2: Choose Your Email Provider

#### Option A: Gmail (Recommended for Testing)

1. **Enable 2-Factor Authentication** on your Gmail account
2. **Generate App Password**:
   - Go to https://myaccount.google.com/apppasswords
   - Select "Mail" and "Other (Custom name)"
   - Name it "Binary Capital Website"
   - Copy the 16-character password

3. **Update `.env.local`**:
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-16-char-app-password
SMTP_FROM=noreply@binarycapital.in
CONTACT_EMAIL=sales@binarycapital.in
```

#### Option B: SendGrid (Recommended for Production)

1. **Sign up** at https://sendgrid.com (Free tier: 100 emails/day)
2. **Create API Key**:
   - Go to Settings > API Keys
   - Create API Key with "Mail Send" permissions
   - Copy the API key

3. **Update `.env.local`**:
```env
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=apikey
SMTP_PASS=your-sendgrid-api-key
SMTP_FROM=noreply@binarycapital.in
CONTACT_EMAIL=sales@binarycapital.in
```

#### Option C: Mailgun

1. **Sign up** at https://www.mailgun.com (Free tier: 5,000 emails/month)
2. **Get SMTP credentials** from Domains > Sending > SMTP

3. **Update `.env.local`**:
```env
SMTP_HOST=smtp.mailgun.org
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=postmaster@your-domain.mailgun.org
SMTP_PASS=your-mailgun-password
SMTP_FROM=noreply@binarycapital.in
CONTACT_EMAIL=sales@binarycapital.in
```

#### Option D: AWS SES (Recommended for High Volume)

1. **Set up AWS SES** in your AWS account
2. **Verify your domain** and email addresses
3. **Create SMTP credentials** in SES Console

4. **Update `.env.local`**:
```env
SMTP_HOST=email-smtp.us-east-1.amazonaws.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-ses-smtp-username
SMTP_PASS=your-ses-smtp-password
SMTP_FROM=noreply@binarycapital.in
CONTACT_EMAIL=sales@binarycapital.in
```

### Step 3: Restart Development Server

After configuring environment variables:

```bash
# Stop the current server (Ctrl+C)
# Restart with new environment variables
pnpm dev
```

---

## API Endpoint

### POST `/api/contact`

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "company": "Example Corp",
  "message": "I'm interested in your M&A advisory services."
}
```

**Success Response (200):**
```json
{
  "success": true,
  "message": "Thank you for your message. We will get back to you within 24 hours."
}
```

**Error Response (400):**
```json
{
  "error": "Name, email, and message are required fields"
}
```

**Error Response (500):**
```json
{
  "error": "An error occurred while processing your request. Please try again later."
}
```

---

## Email Templates

### Email to Company (sales@binarycapital.in)

**Subject:** New Contact Form Submission from [Name]

**Content:**
- Name
- Email (clickable mailto link)
- Company
- Message
- Submission timestamp (IST)
- Professional gradient header
- Formatted with Binary Capital branding

### Auto-Reply to User

**Subject:** Thank you for contacting Binary Capital

**Content:**
- Personalized greeting
- Confirmation of message receipt
- 24-hour response time commitment
- Overview of services
- Contact information
- Link to website
- Professional branding

---

## Testing

### Test the Form Locally

1. **Start the development server**:
```bash
pnpm dev
```

2. **Navigate to** http://localhost:3000/#contact

3. **Fill out the form**:
   - Name: Test User
   - Email: your-test-email@gmail.com
   - Company: Test Company
   - Message: This is a test message for the contact form.

4. **Submit and verify**:
   - Form shows "Sending..." state
   - Success message appears
   - Form resets
   - Check inbox for auto-reply
   - Check company email for notification

### Test API Directly

```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "company": "Test Company",
    "message": "This is a test message"
  }'
```

---

## Troubleshooting

### Issue: "Network error" message

**Solution:**
- Check if development server is running
- Verify API route exists at `/src/app/api/contact/route.ts`
- Check browser console for errors

### Issue: Form submits but no emails received

**Solution:**
1. **Check environment variables** are loaded:
```bash
# Add this to your API route temporarily
console.log('SMTP_USER:', process.env.SMTP_USER);
```

2. **Verify SMTP credentials** are correct
3. **Check spam folder** for emails
4. **Test SMTP connection**:
```bash
# Install nodemailer test tool
npm install -g nodemailer-test-smtp

# Test connection
nodemailer-test-smtp smtp.gmail.com 587 your-email@gmail.com your-app-password
```

### Issue: Gmail "Less secure app" error

**Solution:**
- Gmail no longer supports "less secure apps"
- You MUST use App Passwords with 2FA enabled
- Regular Gmail password will NOT work

### Issue: SendGrid "Sender not verified" error

**Solution:**
- Verify your sender email in SendGrid dashboard
- Or verify your entire domain
- Single sender verification is free

---

## Production Deployment

### Environment Variables on Vercel

1. Go to your Vercel project settings
2. Navigate to "Environment Variables"
3. Add all SMTP variables:
   - `SMTP_HOST`
   - `SMTP_PORT`
   - `SMTP_SECURE`
   - `SMTP_USER`
   - `SMTP_PASS`
   - `SMTP_FROM`
   - `CONTACT_EMAIL`

4. Redeploy your application

### Environment Variables on Other Platforms

**Netlify:**
- Site settings > Build & deploy > Environment

**Railway:**
- Project > Variables

**AWS Amplify:**
- App settings > Environment variables

---

## Rate Limiting (Recommended for Production)

To prevent spam, consider adding rate limiting:

```bash
pnpm add @upstash/ratelimit @upstash/redis
```

Update `/src/app/api/contact/route.ts`:

```typescript
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(5, "1 h"), // 5 requests per hour
});

export async function POST(request: NextRequest) {
  const ip = request.ip ?? "127.0.0.1";
  const { success } = await ratelimit.limit(ip);
  
  if (!success) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      { status: 429 }
    );
  }
  
  // ... rest of the code
}
```

---

## Database Storage (Optional)

To store form submissions in a database:

### Option 1: Vercel Postgres

```bash
pnpm add @vercel/postgres
```

Create table:
```sql
CREATE TABLE contact_submissions (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  company VARCHAR(255),
  message TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Option 2: MongoDB

```bash
pnpm add mongodb
```

### Option 3: Prisma (Recommended)

```bash
pnpm add prisma @prisma/client
npx prisma init
```

---

## Monitoring & Analytics

### Track Form Submissions

Add analytics tracking in the form handler:

```typescript
// After successful submission
if (typeof window !== 'undefined' && window.gtag) {
  window.gtag('event', 'form_submission', {
    event_category: 'Contact',
    event_label: 'Contact Form',
  });
}
```

### Email Delivery Monitoring

Most email providers offer delivery analytics:
- **SendGrid**: Dashboard > Activity
- **Mailgun**: Dashboard > Sending > Logs
- **AWS SES**: CloudWatch Metrics

---

## Security Best Practices

1. ✅ **Never commit `.env.local`** to version control
2. ✅ **Use environment variables** for all sensitive data
3. ✅ **Validate and sanitize** all user inputs
4. ✅ **Implement rate limiting** in production
5. ✅ **Use HTTPS** in production (automatic on Vercel)
6. ✅ **Monitor for spam** and adjust validation as needed
7. ✅ **Keep dependencies updated** regularly

---

## Support

For issues or questions:
- Check the troubleshooting section above
- Review Next.js API Routes documentation
- Check nodemailer documentation
- Contact your email provider's support

---

## File Structure

```
src/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts          # API endpoint
│   └── page.tsx                  # Contact form UI
├── components/
│   └── ui/
│       └── button.tsx            # Button component
└── ...

.env.example                      # Environment variables template
.env.local                        # Your local environment (not committed)
CONTACT_FORM_SETUP.md            # This file
```

---

## Changelog

### Version 1.0 (Current)
- ✅ Contact form API endpoint
- ✅ Email notifications (company + user)
- ✅ Form validation
- ✅ Real-time status updates
- ✅ HTML email templates
- ✅ Error handling
- ✅ Environment variable configuration

### Future Enhancements
- [ ] Rate limiting
- [ ] Database storage
- [ ] Admin dashboard for submissions
- [ ] Email templates customization
- [ ] Multi-language support
- [ ] File attachment support
- [ ] CAPTCHA integration

---

**Last Updated:** December 9, 2025  
**Version:** 1.0  
**Status:** Production Ready ✅
