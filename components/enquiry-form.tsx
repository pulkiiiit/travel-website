"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import type { EnquiryFormData } from "@/lib/types"
import { AlertCircle, CheckCircle, Loader } from "lucide-react"

interface EnquiryFormProps {
  packageId: string
  packageTitle: string
}

export function EnquiryForm({ packageId, packageTitle }: EnquiryFormProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null)
  const [formData, setFormData] = useState<Omit<EnquiryFormData, "packageId" | "packageTitle">>({
    fullName: "",
    email: "",
    phone: "",
    travelDate: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const validateForm = () => {
    if (!formData.fullName.trim()) return "Please enter your full name"
    if (!formData.email.trim() || !formData.email.includes("@")) return "Please enter a valid email"
    if (!formData.phone.trim() || formData.phone.length < 10) return "Please enter a valid phone number"
    if (!formData.travelDate.trim()) return "Please select a travel date"
    if (!formData.message.trim() || formData.message.length < 10)
      return "Please enter a message (minimum 10 characters)"
    return null
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setMessage(null)

    const validationError = validateForm()
    if (validationError) {
      setMessage({ type: "error", text: validationError })
      return
    }

    setIsLoading(true)

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          packageId,
          packageTitle,
        }),
      })

      const result = await response.json()

      if (response.ok) {
        setMessage({ type: "success", text: "Enquiry submitted successfully! We'll get back to you soon." })
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          travelDate: "",
          message: "",
        })
      } else {
        setMessage({ type: "error", text: result.message || "Failed to submit enquiry. Please try again." })
      }
    } catch (error) {
      setMessage({ type: "error", text: "An error occurred. Please try again later." })
      console.error("Enquiry submission error:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="bg-card border border-border rounded-lg p-8">
      <h2 className="text-2xl font-bold text-foreground mb-6">Send Enquiry</h2>

      {/* Messages */}
      {message && (
        <div
          className={`flex items-start gap-3 p-4 rounded-lg mb-6 ${
            message.type === "success" ? "bg-green-50 border border-green-200" : "bg-red-50 border border-red-200"
          }`}
        >
          {message.type === "success" ? (
            <CheckCircle className="text-green-600 mt-0.5 flex-shrink-0" size={20} />
          ) : (
            <AlertCircle className="text-red-600 mt-0.5 flex-shrink-0" size={20} />
          )}
          <p className={`text-sm ${message.type === "success" ? "text-green-800" : "text-red-800"}`}>{message.text}</p>
        </div>
      )}

      {/* Form Fields */}
      <div className="space-y-4">
        {/* Full Name */}
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-foreground mb-2">
            Full Name *
          </label>
          <Input
            id="fullName"
            name="fullName"
            type="text"
            placeholder="John Doe"
            value={formData.fullName}
            onChange={handleChange}
            required
            disabled={isLoading}
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
            Email Address *
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="your@email.com"
            value={formData.email}
            onChange={handleChange}
            required
            disabled={isLoading}
          />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
            Phone Number *
          </label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+1 (555) 000-0000"
            value={formData.phone}
            onChange={handleChange}
            required
            disabled={isLoading}
          />
        </div>

        {/* Travel Date */}
        <div>
          <label htmlFor="travelDate" className="block text-sm font-medium text-foreground mb-2">
            Preferred Travel Date *
          </label>
          <Input
            id="travelDate"
            name="travelDate"
            type="date"
            value={formData.travelDate}
            onChange={handleChange}
            required
            disabled={isLoading}
          />
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
            Additional Information/Questions *
          </label>
          <Textarea
            id="message"
            name="message"
            placeholder="Tell us about your preferences, special requirements, or any questions..."
            value={formData.message}
            onChange={handleChange}
            rows={5}
            required
            disabled={isLoading}
          />
        </div>
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        size="lg"
        disabled={isLoading}
        className="w-full mt-6 bg-primary hover:bg-primary/90 text-primary-foreground"
      >
        {isLoading ? (
          <>
            <Loader className="mr-2 h-5 w-5 animate-spin" />
            Submitting...
          </>
        ) : (
          "Submit Enquiry"
        )}
      </Button>

      <p className="text-xs text-muted-foreground text-center mt-4">
        We'll review your enquiry and contact you within 24 hours.
      </p>
    </form>
  )
}
