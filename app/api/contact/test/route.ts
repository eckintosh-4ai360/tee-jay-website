import { NextResponse } from 'next/server';

/**
 * GET /api/contact/test
 * Test endpoint to verify Gmail configuration (doesn't send actual emails)
 */
export async function GET() {
  const gmailUser = process.env.GMAIL_USER;
  const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;
  const recipientEmail = process.env.CONTACT_RECIPIENT_EMAIL;

  const config = {
    hasGmailUser: !!gmailUser,
    hasGmailAppPassword: !!gmailAppPassword,
    hasRecipientEmail: !!recipientEmail,
    gmailUserLength: gmailUser?.length || 0,
    appPasswordLength: gmailAppPassword?.length || 0,
    // Show first 3 chars of email to verify it's correct
    gmailUserPreview: gmailUser ? gmailUser.substring(0, 3) + '***' : 'NOT SET',
  };

  return NextResponse.json(config);
}

