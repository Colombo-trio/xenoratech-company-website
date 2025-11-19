import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validations/contact";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { token, ...formData } = body;

        // 1. Validate form data with Zod
        const validationResult = contactFormSchema.safeParse(formData);
        if (!validationResult.success) {
            return NextResponse.json(
                { error: "Invalid form data", details: validationResult.error.flatten() },
                { status: 400 }
            );
        }

        const { name, email, phone, subject, message } = validationResult.data;

        // 2. Verify ReCAPTCHA
        const recaptchaRes = await fetch(
            `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
            { method: "POST" }
        );

        const recaptchaData = await recaptchaRes.json();

        if (!recaptchaData.success || recaptchaData.score < 0.5) {
            return NextResponse.json(
                { error: "ReCAPTCHA verification failed. Please try again." },
                { status: 400 }
            );
        }

        // 3. Send Email via Nodemailer
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT),
            secure: Number(process.env.SMTP_PORT) === 465, // true for 465, false for other ports
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        const mailOptions = {
            from: `"${name}" <${process.env.SMTP_USER}>`, // Sender address (must be authenticated user usually)
            to: process.env.CONTACT_RECIPIENT,
            replyTo: email,
            subject: `New Contact Form Submission: ${subject}`,
            text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone || "N/A"}
        Subject: ${subject}
        
        Message:
        ${message}
      `,
            html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "N/A"}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <br/>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br/>")}</p>
      `,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true, message: "Email sent successfully" });
    } catch (error) {
        console.error("Contact API Error:", error);
        return NextResponse.json(
            { error: "Failed to send message. Please try again later." },
            { status: 500 }
        );
    }
}
