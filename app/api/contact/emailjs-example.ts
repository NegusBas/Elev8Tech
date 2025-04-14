// This is an example of how to use EmailJS as an alternative to SMTP
// You can implement this approach if SMTP continues to be problematic

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

    // Get EmailJS API key from environment variables
    const EMAIL_JS_USER_ID = process.env.EMAIL_API_KEY

    if (!EMAIL_JS_USER_ID) {
      console.error("EMAIL_API_KEY environment variable is missing")
      return NextResponse.json(
        {
          success: false,
          message: "Email service not properly configured. Please contact us directly at info@elev8tech.co.",
        },
        { status: 500 },
      )
    }

    // Use EmailJS API to send the email
    // You'll need to create a service and template in EmailJS first
    // Visit https://www.emailjs.com/ to set up an account
    try {
      const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          service_id: "service_elev8tech", // Replace with your EmailJS service ID
          template_id: "template_contact", // Replace with your EmailJS template ID
          user_id: EMAIL_JS_USER_ID,
          template_params: {
            from_name: body.name,
            from_email: body.email,
            phone: body.phone || "Not provided",
            company: body.company || "Not provided",
            service: body.service || "Not specified",
            message: body.message,
            reply_to: body.email,
          },
        }),
      })

      if (response.status === 200) {
        console.log("Email sent successfully using EmailJS")
        return NextResponse.json({
          success: true,
          message: "Your message has been sent! We'll get back to you soon.",
        })
      } else {
        const errorData = await response.text()
        throw new Error(`EmailJS error: ${errorData}`)
      }
    } catch (apiError) {
      console.error("Error using EmailJS service:", apiError)
      throw apiError
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
