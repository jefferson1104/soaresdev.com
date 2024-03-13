import { EmailTemplate } from "../../components/EmailTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
    try {
        const data = await resend.emails.send({
            from: "Jefferson Soares Web Site: <jeffersonscjunior@gmail.com>",
            to: ["jeffersonscjunior@gmail.com"],
            subject: "Hello world",
            react: EmailTemplate({ firstName: "John" })
        });

        return Response.json(data);
    } catch (error) {
        return Response.json({ error });
    }
}
