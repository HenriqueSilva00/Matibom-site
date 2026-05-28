import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, email, subject, message } = body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"MATIBOM - Contacto via Website" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `Contacto: ${subject}`,
      text: `
      Nome: ${name}
      Email: ${email}
      
      Mensagem:
      ${message}
        `,
    });
    return Response.json({ success: true });
  } catch (error: any) {
    console.error("FULL EMAIL ERROR:", error);

    return Response.json(
      {
        ok: false,
        error: error?.message,
        full: error,
      },
      { status: 500 }
    );
  }
}
