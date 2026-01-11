import type { EnquiryFormData } from "@/lib/types"
import { sendEmail } from "@/lib/email"

async function sendEnquiryEmails(data: EnquiryFormData) {
  try {
    const owner_email = process.env.OWNER_EMAIL || "owner@travelverse.com"

    console.log("[v0] Sending emails for enquiry from:", data.email)

    // Email to business owner
    await sendEmail(
      owner_email,
      `New Travel Enquiry: ${data.packageTitle}`,
      `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1f2937; margin-bottom: 20px;">New Enquiry Received</h2>
          
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <p style="margin: 8px 0;"><strong>Package:</strong> ${data.packageTitle}</p>
            <p style="margin: 8px 0;"><strong>Customer Name:</strong> ${data.fullName}</p>
            <p style="margin: 8px 0;"><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
            <p style="margin: 8px 0;"><strong>Phone:</strong> ${data.phone}</p>
            <p style="margin: 8px 0;"><strong>Travel Date:</strong> ${data.travelDate}</p>
          </div>
          
          <div style="margin-bottom: 20px;">
            <h3 style="color: #1f2937; margin-bottom: 10px;">Message:</h3>
            <p style="background-color: #f9fafb; padding: 15px; border-left: 4px solid #3b82f6; color: #4b5563;">
              ${data.message.replace(/\n/g, "<br>")}
            </p>
          </div>
          
          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;">
          <p style="color: #6b7280; font-size: 14px;">
            Please contact the customer at ${data.email} or ${data.phone}
          </p>
        </div>
      `,
    )

    // Confirmation email to customer
    await sendEmail(
      data.email,
      "Your Travel Enquiry Has Been Received - TravelVerse",
      `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1f2937; margin-bottom: 10px;">Thank You for Your Enquiry!</h2>
          <p style="color: #6b7280; margin-bottom: 20px;">Hi ${data.fullName},</p>
          
          <p style="color: #4b5563; line-height: 1.6;">
            Thank you for reaching out to us. We've received your enquiry for the <strong>${data.packageTitle}</strong> package. Our travel team is reviewing your request and will get back to you shortly.
          </p>
          
          <div style="background-color: #f0fdf4; border-left: 4px solid #16a34a; padding: 15px; margin: 20px 0; border-radius: 4px;">
            <h3 style="color: #15803d; margin-top: 0;">Your Enquiry Details</h3>
            <ul style="color: #166534; margin: 10px 0; padding-left: 20px;">
              <li><strong>Package Selected:</strong> ${data.packageTitle}</li>
              <li><strong>Travel Date:</strong> ${data.travelDate}</li>
              <li><strong>Contact Number:</strong> ${data.phone}</li>
            </ul>
          </div>
          
          <p style="color: #4b5563; line-height: 1.6;">
            We will review your enquiry and contact you within 24 hours. If you have any urgent questions, feel free to reach out to us directly.
          </p>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
            <p style="color: #6b7280; margin: 5px 0;">Thank you for choosing TravelVerse for your travel adventure!</p>
            <p style="color: #6b7280; margin: 5px 0;"><strong>Best regards,</strong><br>The TravelVerse Team</p>
          </div>
        </div>
      `,
    )

    console.log("[v0] Enquiry emails sent successfully")
    return true
  } catch (error) {
    console.error("[v0] Email sending error:", error)
    throw error
  }
}

export async function POST(request: Request) {
  try {
    // Parse request body
    const body = await request.json()

    // Validate required fields
    const { fullName, email, phone, travelDate, message, packageId, packageTitle } = body

    if (!fullName || !email || !phone || !travelDate || !message || !packageId || !packageTitle) {
      return Response.json({ success: false, message: "Missing required fields" }, { status: 400 })
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return Response.json({ success: false, message: "Invalid email address" }, { status: 400 })
    }

    // Phone validation (basic - at least 10 digits)
    const phoneDigits = phone.replace(/\D/g, "")
    if (phoneDigits.length < 10) {
      return Response.json({ success: false, message: "Invalid phone number" }, { status: 400 })
    }

    // Prepare enquiry data
    const enquiryData: EnquiryFormData = {
      fullName: fullName.trim(),
      email: email.trim(),
      phone: phone.trim(),
      travelDate,
      message: message.trim(),
      packageId,
      packageTitle,
    }

    console.log("[v0] Processing enquiry from:", enquiryData.email)

    // Send emails
    await sendEnquiryEmails(enquiryData)

    console.log("[v0] Enquiry processed successfully")

    return Response.json(
      {
        success: true,
        message: "Enquiry submitted successfully. We'll contact you soon!",
        data: {
          id: Math.random().toString(36).substr(2, 9),
          ...enquiryData,
          submittedAt: new Date().toISOString(),
        },
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("[v0] Enquiry submission error:", error)
    return Response.json(
      { success: false, message: "Failed to process enquiry. Please try again later." },
      { status: 500 },
    )
  }
}
