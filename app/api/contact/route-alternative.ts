import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // Log the request for debugging
    console.log("Contact form submission received:", {
      name: body.name,
      email: body.email,
      service: body.service,
    })

    // Email credentials from environment variables
    const EMAIL_USER = process.env.EMAIL_USER
    const EMAIL_PASSWORD = process.env.EMAIL_PASSWORD

    if (!EMAIL_USER || !EMAIL_PASSWORD) {
      console.error("Email credentials not configured properly in environment variables")
      return NextResponse.json(
        {
          success: false,
          message: "Email service not properly configured. Please contact us directly at info@elev8tech.co.",
        },
        { status: 500 },
      )
    }

    // Prepare email content
    const emailContent = `
Name: ${body.name}
Email: ${body.email}
${body.phone ? `Phone: ${body.phone}` : ""}
${body.company ? `Company: ${body.company}` : ""}
${body.service ? `Service Interested In: ${body.service}` : ""}

Message:
${body.message}
    `

    // Use fetch to send the email through a third-party email API service
    // This is an alternative approach that doesn't rely on SMTP
    try {
      // This is a placeholder for a third-party email API service
      // You would need to sign up for a service like SendGrid, Mailgun, etc.
      // and replace this with their API endpoint and your API key

      // Example using a hypothetical email API service
      const response = await fetch("https://api.emailservice.com/v1/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.EMAIL_API_KEY}`, // You would need to add this env var
        },
        body: JSON.stringify({
          from: EMAIL_USER,
          to: EMAIL_USER,
          subject: body.subject || `New Contact Form Submission from ${body.name}`,
          text: emailContent,
          replyTo: body.email,
        }),
      })

      const data = await response.json()

      if (data.success) {
        return NextResponse.json({
          success: true,
          message: "Your message has been sent! We'll get back to you soon.",
        })
      } else {
        throw new Error("Email API service returned an error")
      }
    } catch (apiError) {
      console.error("Error using email API service:", apiError)

      // If the API approach fails, fall back to a simpler solution
      // This is just a placeholder to show the concept
      return NextResponse.json(
        {
          success: false,
          message: "We couldn't process your message. Please email us directly at info@elev8tech.co.",
        },
        { status: 500 },
      )
    }
  } catch (error) {
    console.error("Error processing form submission:", error)

    return NextResponse.json(
      {
        success: false,
        message:
          "We couldn't process your message at this time. Please email us directly at info@elev8tech.co or try again later.",
        error: process.env.NODE_ENV === "development" ? String(error) : undefined,
      },
      { status: 500 },
    )
  }
}
