import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required fields." },
        { status: 400 }
      );
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    // Check for configured email provider
    const resendApiKey = process.env.RESEND_API_KEY;
    const recipientEmail = process.env.CONTACT_EMAIL || "ujwalshettigar@gmail.com";

    if (resendApiKey) {
      // Integration with Resend if API key is provided
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Portfolio Contact <onboarding@resend.dev>",
          to: [recipientEmail],
          reply_to: email,
          subject: subject ? `Portfolio Message: ${subject}` : `New message from ${name}`,
          text: `From: ${name} (${email})\n\nMessage:\n${message}`,
        }),
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        return NextResponse.json(
          { error: "Failed to dispatch email via provider.", details: errorData },
          { status: 502 }
        );
      }

      return NextResponse.json({
        success: true,
        message: "Your message was sent successfully via email dispatch service.",
        dispatchedVia: "Resend",
      });
    }

    // When no third-party email provider is configured, do not pretend it succeeded silently.
    // Return honest status instructing client to provide mailto fallback or copy option.
    return NextResponse.json({
      success: false,
      requiresDirectClientFallback: true,
      directEmail: "ujwalshettigar@gmail.com",
      message: "Server email dispatch key is not configured. Please use direct email or the prepared mailto action.",
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error occurred while processing contact form." },
      { status: 500 }
    );
  }
}
