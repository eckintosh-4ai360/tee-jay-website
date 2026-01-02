import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

/**
 * POST /api/contact
 * Handles contact form submissions and sends emails via Gmail
 */
export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, service, message } = await request.json();

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, and message are required.' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address format.' },
        { status: 400 }
      );
    }

    // Check for environment variables
    const gmailUser = process.env.GMAIL_USER;
    const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;
    const recipientEmail = process.env.CONTACT_RECIPIENT_EMAIL || gmailUser;

    console.log('Environment variables check:', {
      hasGmailUser: !!gmailUser,
      hasGmailAppPassword: !!gmailAppPassword,
      hasRecipientEmail: !!recipientEmail,
      gmailUserPreview: gmailUser ? gmailUser.substring(0, 3) + '***' : 'NOT SET',
    });

    if (!gmailUser || !gmailAppPassword) {
      console.error('Gmail credentials not configured');
      return NextResponse.json(
        { error: 'Email service is not configured. Please contact the administrator.' },
        { status: 500 }
      );
    }

    // Create nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: gmailUser,
        pass: gmailAppPassword,
      },
    });

    // Email content for the business owner
    const mailOptions = {
      from: gmailUser,
      to: recipientEmail,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body {
                font-family: 'Arial', sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
              }
              .header {
                background: linear-gradient(135deg, #FCD34D 0%, #F59E0B 100%);
                color: #000;
                padding: 30px;
                text-align: center;
                border-radius: 10px 10px 0 0;
              }
              .header h1 {
                margin: 0;
                font-size: 24px;
              }
              .content {
                background: #fff;
                padding: 30px;
                border: 1px solid #e5e7eb;
                border-radius: 0 0 10px 10px;
              }
              .field {
                margin-bottom: 20px;
              }
              .field-label {
                font-weight: bold;
                color: #F59E0B;
                text-transform: uppercase;
                font-size: 12px;
                margin-bottom: 5px;
              }
              .field-value {
                background: #f9fafb;
                padding: 12px;
                border-radius: 5px;
                border-left: 3px solid #FCD34D;
              }
              .message-box {
                background: #f9fafb;
                padding: 15px;
                border-radius: 5px;
                border-left: 3px solid #FCD34D;
                white-space: pre-wrap;
                word-wrap: break-word;
              }
              .footer {
                text-align: center;
                margin-top: 30px;
                padding-top: 20px;
                border-top: 1px solid #e5e7eb;
                color: #6b7280;
                font-size: 12px;
              }
            </style>
          </head>
          <body>
            <div class="header">
              <h1>🎯 New Contact Form Submission</h1>
            </div>
            <div class="content">
              <div class="field">
                <div class="field-label">Name</div>
                <div class="field-value">${name}</div>
              </div>
              
              <div class="field">
                <div class="field-label">Email</div>
                <div class="field-value">
                  <a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a>
                </div>
              </div>
              
              ${phone ? `
              <div class="field">
                <div class="field-label">Phone</div>
                <div class="field-value">
                  <a href="tel:${phone}" style="color: #2563eb; text-decoration: none;">${phone}</a>
                </div>
              </div>
              ` : ''}
              
              ${service ? `
              <div class="field">
                <div class="field-label">Service Interested In</div>
                <div class="field-value">${service.charAt(0).toUpperCase() + service.slice(1)}</div>
              </div>
              ` : ''}
              
              <div class="field">
                <div class="field-label">Message</div>
                <div class="message-box">${message}</div>
              </div>
              
              <div class="footer">
                <p>This email was sent from the Tee Jay Multimedia contact form.</p>
                <p>Submitted on ${new Date().toLocaleString()}</p>
              </div>
            </div>
          </body>
        </html>
      `,
      text: `
New Contact Form Submission

Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}
Service: ${service || 'Not specified'}

Message:
${message}

Submitted on: ${new Date().toLocaleString()}
      `,
    };

    // Auto-reply email to the customer
    const autoReplyOptions = {
      from: gmailUser,
      to: email,
      subject: 'Thank You for Contacting Tee Jay Multimedia',
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body {
                font-family: 'Arial', sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
              }
              .header {
                background: linear-gradient(135deg, #FCD34D 0%, #F59E0B 100%);
                color: #000;
                padding: 30px;
                text-align: center;
                border-radius: 10px 10px 0 0;
              }
              .header h1 {
                margin: 0;
                font-size: 24px;
              }
              .content {
                background: #fff;
                padding: 30px;
                border: 1px solid #e5e7eb;
                border-radius: 0 0 10px 10px;
              }
              .button {
                display: inline-block;
                padding: 12px 30px;
                background: linear-gradient(135deg, #FCD34D 0%, #F59E0B 100%);
                color: #000;
                text-decoration: none;
                border-radius: 5px;
                font-weight: bold;
                margin: 20px 0;
              }
              .footer {
                text-align: center;
                margin-top: 30px;
                padding-top: 20px;
                border-top: 1px solid #e5e7eb;
                color: #6b7280;
                font-size: 12px;
              }
            </style>
          </head>
          <body>
            <div class="header">
              <h1>✨ Thank You for Reaching Out!</h1>
            </div>
            <div class="content">
              <p>Hi ${name},</p>
              
              <p>Thank you for contacting <strong>Tee Jay Multimedia</strong>! We have received your message and appreciate you taking the time to reach out to us.</p>
              
              <p>Our team will review your inquiry and get back to you within <strong>24 hours</strong>. If your matter is urgent, please feel free to call us at <strong>(555) 123-4567</strong>.</p>
              
              <p><strong>Your Message Summary:</strong></p>
              <p style="background: #f9fafb; padding: 15px; border-radius: 5px; border-left: 3px solid #FCD34D;">
                ${message.substring(0, 150)}${message.length > 150 ? '...' : ''}
              </p>
              
              <center>
                <a href="${process.env.NEXT_PUBLIC_SITE_URL || 'https://teejay.com'}" class="button">Visit Our Website</a>
              </center>
              
              <div class="footer">
                <p><strong>Tee Jay Multimedia</strong></p>
                <p>123 Creative Street, Studio City, CA 90000</p>
                <p>Email: info@teejay.com | Phone: (555) 123-4567</p>
                <p style="margin-top: 15px;">This is an automated response. Please do not reply to this email.</p>
              </div>
            </div>
          </body>
        </html>
      `,
      text: `
Hi ${name},

Thank you for contacting Tee Jay Multimedia! We have received your message and appreciate you taking the time to reach out to us.

Our team will review your inquiry and get back to you within 24 hours. If your matter is urgent, please feel free to call us at (555) 123-4567.

Your Message Summary:
${message.substring(0, 150)}${message.length > 150 ? '...' : ''}

Best regards,
Tee Jay Multimedia Team

---
Tee Jay Multimedia
123 Creative Street, Studio City, CA 90000
Email: info@teejay.com | Phone: (555) 123-4567

This is an automated response. Please do not reply to this email.
      `,
    };

    // Send both emails
    console.log('Attempting to send emails...');
    await transporter.sendMail(mailOptions);
    console.log('Business notification email sent successfully');
    await transporter.sendMail(autoReplyOptions);
    console.log('Auto-reply email sent successfully');

    return NextResponse.json(
      { 
        success: true, 
        message: 'Your message has been sent successfully! Check your email for confirmation.' 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    
    // Log detailed error information
    if (error instanceof Error) {
      console.error('Error name:', error.name);
      console.error('Error message:', error.message);
      console.error('Error stack:', error.stack);
    }
    
    return NextResponse.json(
      { 
        error: 'Failed to send message. Please try again later or contact us directly.',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

// Handle unsupported methods
export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
}

