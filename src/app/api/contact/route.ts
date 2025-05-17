// app/api/contact/route.ts
// export async function POST(req: Request) {
//   const body = await req.json();

//   // You can handle the data here: save to DB, send email, etc
//   console.log("Form submission:", body);

//   return new Response(JSON.stringify({ message: "Message received!" }), {
//     status: 200,
//     headers: { "Content-Type": "application/json" },
//   });
// }



import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, message } = body;

  // Configure the transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
    //   user: process.env.EMAIL_USER, // your Gmail address
    //   pass: process.env.EMAIL_PASS, // your App Password from Gmail
    user: "rr824566@gmail.com",
    pass: "idet hevp xecs fhgm"
    },
  });

  try {
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: "rr824566@gmail.com", // your receiving email
      subject: "New Contact Form Submission",
      html: `
        <h3>New message from GandS website:</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br>${message}</p>
      `,
    });

    return NextResponse.json({ message: "Message sent successfully!" }, { status: 200 });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json({ message: "Something went wrong!" }, { status: 500 });
  }
}
