import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

const submittedIPs = new Map<string, number>();

export async function POST(req: Request) {
  const ip = req.headers.get('x-forwarded-for') ?? 'unknown';
  const last = submittedIPs.get(ip) ?? 0;

  if (Date.now() - last < 60_000) {
    return NextResponse.json(
      { error: 'Please wait a minute before submitting again.' },
      { status: 429 }
    );
  }

  submittedIPs.set(ip, Date.now());
  try {
    const { name, email, phone, service, message } = await req.json();

    await transporter.sendMail({
      from: `"Rapid Shield Website" <${process.env.GMAIL_USER}>`,
      to: process.env.CLIENT_EMAIL,
      replyTo: email,
      subject: `New Quote Request — ${service || 'General Inquiry'}`,
      html: `
        <h2 style="color:#000">New Quote Request</h2>
        <table cellpadding="8" style="border-collapse:collapse;width:100%;max-width:500px">
          <tr><td><strong>Name</strong></td><td>${name}</td></tr>
          <tr><td><strong>Email</strong></td><td>${email}</td></tr>
          <tr><td><strong>Phone</strong></td><td>${phone || 'Not provided'}</td></tr>
          <tr><td><strong>Service</strong></td><td>${service || 'Not specified'}</td></tr>
        </table>
        <h3 style="color:#000">Message</h3>
        <p style="max-width:500px">${message.replace(/\n/g, '<br/>')}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
