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
    const { name, email, phone, service, message, photos } = await req.json();

    // Build nodemailer attachments from base64 strings
    const attachments = Array.isArray(photos)
      ? photos
          .filter((p: { name: string; data: string }) => p?.data && p?.name)
          .map((p: { name: string; data: string }) => ({
            filename: p.name,
            content: p.data,
            encoding: 'base64' as const,
          }))
      : [];

    // Build a small photos HTML block for the email body
    const photosHtml =
      attachments.length > 0
        ? `
        <!-- Photos note -->
        <tr>
          <td style="background:#fafafa;border-top:1px solid #f0f0f0;padding:20px 36px 24px;">
            <p style="margin:0 0 6px;font-size:11px;font-weight:600;letter-spacing:0.07em;text-transform:uppercase;color:#a1a1aa;">
              Attached Photos (${attachments.length})
            </p>
            <p style="margin:0;font-size:13px;color:#3f3f46;">
              ${attachments.map((a) => a.filename).join(', ')}
            </p>
          </td>
        </tr>`
        : '';

    await transporter.sendMail({
      from: `"Rapid Shield Website" <${process.env.GMAIL_USER}>`,
      to: process.env.CLIENT_EMAIL,
      replyTo: email,
      subject: `New Quote Request — ${service || 'General Inquiry'}${attachments.length ? ` (${attachments.length} photo${attachments.length > 1 ? 's' : ''})` : ''}`,
      attachments,
      html: `
					<!DOCTYPE html>
					<html>
					<head>
					<meta charset="utf-8">
					<meta name="viewport" content="width=device-width, initial-scale=1">
					</head>
					<body style="margin:0;padding:0;background:#f4f4f5;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
					<table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f5;padding:40px 16px;">
						<tr>
						<td align="center">
							<table width="100%" cellpadding="0" cellspacing="0" style="max-width:520px;">

							<!-- Header -->
							<tr>
								<td style="background:#18181b;border-radius:12px 12px 0 0;padding:32px 36px 28px;">
								<p style="margin:0 0 6px;font-size:11px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:#a1a1aa;">Incoming request</p>
								<h1 style="margin:0;font-size:22px;font-weight:600;color:#ffffff;line-height:1.3;">New Quote Request</h1>
								</td>
							</tr>

							<!-- Details card -->
							<tr>
								<td style="background:#ffffff;padding:32px 36px 24px;">
								<table width="100%" cellpadding="0" cellspacing="0">
									<tr>
									<td style="padding-bottom:20px;">
										<p style="margin:0 0 4px;font-size:11px;font-weight:600;letter-spacing:0.07em;text-transform:uppercase;color:#a1a1aa;">Name</p>
										<p style="margin:0;font-size:15px;color:#18181b;">${name}</p>
									</td>
									</tr>
									<tr>
									<td style="padding-bottom:20px;border-top:1px solid #f0f0f0;padding-top:20px;">
										<p style="margin:0 0 4px;font-size:11px;font-weight:600;letter-spacing:0.07em;text-transform:uppercase;color:#a1a1aa;">Email</p>
										<p style="margin:0;font-size:15px;color:#18181b;">${email}</p>
									</td>
									</tr>
									<tr>
									<td style="padding-bottom:20px;border-top:1px solid #f0f0f0;padding-top:20px;">
										<p style="margin:0 0 4px;font-size:11px;font-weight:600;letter-spacing:0.07em;text-transform:uppercase;color:#a1a1aa;">Phone</p>
										<p style="margin:0;font-size:15px;color:#18181b;">${phone || 'Not provided'}</p>
									</td>
									</tr>
									<tr>
									<td style="border-top:1px solid #f0f0f0;padding-top:20px;">
										<p style="margin:0 0 4px;font-size:11px;font-weight:600;letter-spacing:0.07em;text-transform:uppercase;color:#a1a1aa;">Service</p>
										<p style="margin:0;font-size:15px;color:#18181b;">${service || 'Not specified'}</p>
									</td>
									</tr>
								</table>
								</td>
							</tr>

							<!-- Message section -->
							<tr>
								<td style="background:#fafafa;border-top:1px solid #f0f0f0;padding:24px 36px 28px;">
								<p style="margin:0 0 10px;font-size:11px;font-weight:600;letter-spacing:0.07em;text-transform:uppercase;color:#a1a1aa;">Message</p>
								<p style="margin:0;font-size:15px;line-height:1.7;color:#3f3f46;">${message.replace(/\n/g, '<br/>')}</p>
								</td>
							</tr>

							${photosHtml}

							<!-- Footer -->
							<tr>
								<td style="background:#f4f4f5;border-radius:0 0 12px 12px;padding:18px 36px;border-top:1px solid #e4e4e7;">
								<p style="margin:0;font-size:12px;color:#a1a1aa;">Sent via your website contact form</p>
								</td>
							</tr>

							</table>
						</td>
						</tr>
					</table>
					</body>
					</html>
				`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
