import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

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
    const EMAIL_API_KEY = process.env.EMAIL_API_KEY

    if (!EMAIL_USER) {
      console.error("EMAIL_USER environment variable is missing")
      return NextResponse.json(
        {
          success: false,
          message: "Email service not properly configured. Please contact us directly at info@elev8tech.co.",
        },
        { status: 500 },
      )
    }

    // Email content
    const mailOptions = {
      from: `"Elev8Tech Website" <${EMAIL_USER}>`,
      to: EMAIL_USER,
      replyTo: body.email,
      subject: body.subject || `New Contact Form Submission from ${body.name}`,
      text: `
Name: ${body.name}
Email: ${body.email}
${body.phone ? `Phone: ${body.phone}` : ""}
${body.company ? `Company: ${body.company}` : ""}
${body.service ? `Service Interested In: ${body.service}` : ""}

Message:
${body.message}
      `,
      html: `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px;">
  <h2 style="color: #b79c87; border-bottom: 2px solid #b79c87; padding-bottom: 10px;">New Contact Form Submission</h2>

  <div style="margin-bottom: 20px;">
    <p><strong>Name:</strong> ${body.name}</p>
    <p><strong>Email:</strong> <a href="mailto:${body.email}">${body.email}</a></p>
    ${body.phone ? `<p><strong>Phone:</strong> ${body.phone}</p>` : ""}
    ${body.company ? `<p><strong>Company:</strong> ${body.company}</p>` : ""}
    ${body.service ? `<p><strong>Service Interested In:</strong> ${body.service}</p>` : ""}
  </div>

  <div style="margin-top: 20px;">
    <h3 style="color: #333;">Message:</h3>
    <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; white-space: pre-line;">
      ${body.message.replace(/\n/g, "<br>")}
    </div>
  </div>

  <div style="margin-top: 30px; font-size: 12px; color: #666; border-top: 1px solid #e0e0e0; padding-top: 10px;">
    <p>This email was sent from the contact form on the Elev8Tech website.</p>
  </div>
</div>
      `,
    }

    // Try sending email with different methods in sequence
    let emailSent = false
    let lastError = null

    // Method 1: Try using third-party email API if API key is available
    if (EMAIL_API_KEY) {
      try {
        console.log("Attempting to send email using third-party API service...")

        console.log("EmailJS configuration:", {
          serviceId: "service_elev8tech",
          templateId: "template_contact",
          apiKeyExists: !!EMAIL_API_KEY,
          templateParams: {
            from_name: body.name,
            from_email: body.email,
            phone: body.phone || "Not provided",
            company: body.company || "Not provided",
            service: body.service || "Not specified",
            message: body.message,
            reply_to: body.email,
          },
        })

        // Use fetch to send the email through a third-party email API service
        const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            service_id: "service_elev8tech", // Update this to match your actual service ID
            template_id: "template_contact", // Update this to match your actual template ID
            user_id: EMAIL_API_KEY,
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
          console.log("Email sent successfully using third-party API")
          emailSent = true
        } else {
          const errorData = await response.text()
          console.error("Error sending email via API. Status:", response.status, "Response:", errorData)
          lastError = new Error(`API service error: ${errorData}`)
        }
      } catch (apiError) {
        console.error("Error using email API service:", apiError, "Stack:", apiError.stack)
        lastError = apiError
      }
    }

    // Method 2: Try using Office 365 SMTP if not sent yet and credentials are available
    if (!emailSent && EMAIL_USER && EMAIL_PASSWORD) {
      try {
        console.log("Attempting to send email via Office 365 SMTP...")

        const office365Transporter = nodemailer.createTransport({
          host: "smtp.office365.com",
          port: 587,
          secure: false,
          auth: {
            user: EMAIL_USER,
            pass: EMAIL_PASSWORD,
          },
          tls: {
            ciphers: "SSLv3",
            rejectUnauthorized: false,
          },
        })

        const info = await office365Transporter.sendMail(mailOptions)
        console.log("Email sent successfully via Office 365:", info.messageId)
        emailSent = true
      } catch (smtpError) {
        console.error("Error sending email via Office 365 SMTP:", smtpError)
        lastError = smtpError
      }
    }

    // Method 3: Try using Outlook SMTP as fallback
    if (!emailSent && EMAIL_USER && EMAIL_PASSWORD) {
      try {
        console.log("Attempting to send email via Outlook SMTP fallback...")

        const outlookTransporter = nodemailer.createTransport({
          host: "smtp-mail.outlook.com",
          port: 587,
          secure: false,
          auth: {
            user: EMAIL_USER,
            pass: EMAIL_PASSWORD,
          },
          tls: {
            ciphers: "SSLv3",
            rejectUnauthorized: false,
          },
        })

        const info = await outlookTransporter.sendMail(mailOptions)
        console.log("Email sent successfully via Outlook fallback:", info.messageId)
        emailSent = true
      } catch (outlookError) {
        console.error("Error sending email via Outlook SMTP:", outlookError)
        lastError = outlookError
      }
    }

    // Method 4: Try using Gmail SMTP as a last resort
    if (!emailSent && EMAIL_USER && EMAIL_PASSWORD) {
      try {
        console.log("Attempting to send email via Gmail SMTP as last resort...")

        const gmailTransporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: EMAIL_USER,
            pass: EMAIL_PASSWORD,
          },
        })

        const info = await gmailTransporter.sendMail(mailOptions)
        console.log("Email sent successfully via Gmail:", info.messageId)
        emailSent = true
      } catch (gmailError) {
        console.error("Error sending email via Gmail SMTP:", gmailError)
        lastError = gmailError
      }
    }

    // Return appropriate response based on whether email was sent
    if (emailSent) {
      return NextResponse.json({
        success: true,
        message: "Your message has been sent! We'll get back to you soon.",
      })
    } else {
      console.error("All email sending methods failed. Last error details:", {
        message: lastError?.message,
        stack: lastError?.stack,
        name: lastError?.name,
      })
      return NextResponse.json(
        {
          success: false,
          message: "We couldn't process your message. Please email us directly at info@elev8tech.co.",
          error: process.env.NODE_ENV === "development" ? String(lastError) : undefined,
        },
        { status: 500 },
      )
    }
  } catch (error) {
    console.error("Error processing form submission:", error)

    // Return a more detailed error message
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
