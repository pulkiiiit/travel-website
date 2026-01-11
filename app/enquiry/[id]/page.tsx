"use client"

import { useParams } from "next/navigation"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { EnquiryForm } from "@/components/enquiry-form"
import { travelPackages } from "@/lib/mock-data"
import { Button } from "@/components/ui/button"
import { ArrowLeft, AlertCircle } from "lucide-react"

export default function EnquiryPage() {
  const params = useParams()
  const id = params.id as string

  const package_ = travelPackages.find((pkg) => pkg.id === id)

  if (!package_) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-start gap-4 p-6 bg-red-50 border border-red-200 rounded-lg mb-8">
            <AlertCircle className="text-red-600 mt-0.5 flex-shrink-0" size={20} />
            <div>
              <h3 className="font-semibold text-red-900">Package Not Found</h3>
              <p className="text-red-800 text-sm mt-1">The package you're looking for doesn't exist.</p>
            </div>
          </div>
          <Link href="/packages">
            <Button className="bg-primary hover:bg-primary/90">
              <ArrowLeft className="mr-2" size={20} />
              Back to Packages
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <section className="bg-gradient-to-b from-primary/10 to-transparent py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href={`/packages/${package_.id}`}
            className="flex items-center gap-2 text-primary hover:text-primary/80 mb-4"
          >
            <ArrowLeft size={20} />
            <span>Back to Package</span>
          </Link>

          <h1 className="text-4xl font-bold text-foreground mb-2">Enquiry for {package_.title}</h1>
          <p className="text-muted-foreground">Fill out the form below and we'll get back to you shortly</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Package Summary */}
            <div className="md:col-span-1">
              <div className="sticky top-20 bg-card border border-border rounded-lg overflow-hidden">
                <div className="h-40 overflow-hidden">
                  <img
                    src={package_.image || "/placeholder.svg"}
                    alt={package_.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg text-foreground mb-2">{package_.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{package_.location}</p>

                  <div className="space-y-3 py-4 border-y border-border">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Duration</span>
                      <span className="font-semibold text-foreground">{package_.duration} days</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Starting From</span>
                      <span className="font-semibold text-accent">${package_.price}</span>
                    </div>
                  </div>

                  <p className="text-xs text-muted-foreground mt-4">
                    Submit your enquiry and our team will provide you with detailed information and special offers.
                  </p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="md:col-span-2">
              <EnquiryForm packageId={package_.id} packageTitle={package_.title} />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
