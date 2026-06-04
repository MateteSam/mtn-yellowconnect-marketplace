/**
 * Structured email service for HMS Pro.
 * Currently logs emails to the console. In production, integrate with
 * Nodemailer, SendGrid, Resend, or a similar email provider.
 */

type EmailType = 'welcome' | 'notification' | 'verification' | 'reset' | 'general';

interface EmailPayload {
  to: string;
  subject: string;
  body: string;
  type: EmailType;
}

function logEmail(payload: EmailPayload): void {
  console.log('──────────────────────────────────────────────');
  console.log(`📧 [${payload.type.toUpperCase()}] EMAIL`);
  console.log(`   TO: ${payload.to}`);
  console.log(`   SUBJECT: ${payload.subject}`);
  console.log(`   BODY: ${payload.body}`);
  console.log('──────────────────────────────────────────────');
}

export async function sendWelcomeEmail(email: string, password: string, name: string): Promise<void> {
  logEmail({
    to: email,
    subject: 'Welcome to HMS Pro',
    body: `Hello ${name},\nYour account has been created.\nYour temporary password is: ${password}\nPlease change it after your first login.`,
    type: 'welcome',
  });
}

export async function sendNotificationEmail(email: string, title: string, message: string): Promise<void> {
  logEmail({
    to: email,
    subject: title,
    body: message,
    type: 'notification',
  });
}

export async function sendGenericEmail(email: string, subject: string, body: string): Promise<void> {
  logEmail({
    to: email,
    subject,
    body,
    type: 'general',
  });
}
