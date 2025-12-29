import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    try {
        const { name, email, subject, message } = await req.json();

        if (!name || !email || !subject || !message) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        console.log('Attempting to send email...');
        const emailUser = process.env.EMAIL_USER;
        const emailPass = process.env.EMAIL_PASS;
        const emailHost = process.env.EMAIL_HOST || 'smtp.gmail.com';
        const emailPort = parseInt(process.env.EMAIL_PORT || '465');

        console.log('EMAIL_USER exists:', !!emailUser);
        console.log('EMAIL_PASS exists:', !!emailPass);
        console.log('Using Host:', emailHost, 'Port:', emailPort);

        if (!emailUser || !emailPass) {
            console.error('Missing email credentials in environment variables');
            return NextResponse.json({ 
                error: 'Email configuration error', 
                details: 'EMAIL_USER or EMAIL_PASS environment variables are not set.' 
            }, { status: 500 });
        }

        const transporter = nodemailer.createTransport({
            host: emailHost,
            port: emailPort,
            secure: emailPort === 465, // true for 465, false for other ports
            auth: {
                user: emailUser,
                pass: emailPass,
            },
        });

        const mailOptions = {
            from: emailUser,
            to: emailUser, // Send to yourself
            replyTo: email,
            subject: `Portfolio Contact: ${subject}`,
            text: `
        Name: ${name}
        Email: ${email}
        Subject: ${subject}
        
        Message:
        ${message}
      `,
            html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <br/>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
        };

        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully');

        return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
    } catch (error: any) {
        console.error('Error sending email:', error);
        return NextResponse.json({ 
            error: 'Failed to send email', 
            details: error.message,
            code: error.code,
            command: error.command
        }, { status: 500 });
    }
}
