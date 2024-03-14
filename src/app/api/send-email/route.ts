import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// COMPONENTS
import { EmailTemplate } from "../../utils/email-template";

// SEND EMAIL
export async function POST(req: NextRequest) {
    const { email, subject, message } = await req.json();

    const resend = new Resend(process.env.RESEND_API_KEY);
    const fromEmail = process.env.FROM_EMAIL;
    const toEmail = process.env.TO_EMAIL;

    try {
        const data = await resend.emails.send({
            from: fromEmail!,
            to: [toEmail!],
            subject: subject,
            react: EmailTemplate({ email, subject, message })
        });

        return NextResponse.json(data);
    } catch (error) {
        console.error("SEND EMAIL ERROR: ", error);
        return NextResponse.json({ error }, { status: 500 });
    }
}
