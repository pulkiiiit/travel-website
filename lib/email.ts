import nodemailer from "nodemailer"

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
})

export async function sendEmail(to: string, subject: string, html: string, replyTo?: string) {
  try {
    const info = await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to,
      subject,
      html,
      replyTo: replyTo || process.env.GMAIL_USER,
    })

    console.log("[v0] Email sent successfully:", info.messageId)
    return true
  } catch (error) {
    console.error("[v0] Email sending error:", error)
    throw error
  }
}
