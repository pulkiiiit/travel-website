"use client"

import { useParams } from "next/navigation"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { RatingStars } from "@/components/rating-stars"
import { travelPackages } from "@/lib/mock-data"
import { MapPin, Calendar, Users, Plane, Hotel, Utensils, ArrowLeft, Share2 } from "lucide-react"
import { useSession, signOut } from "next-auth/react";

export default function PackageDetailPage() {
  const { data: session, status } = useSession();
  const params = useParams()
  const id = params.id as string

  const package_ = travelPackages.find((pkg) => pkg.id === id)
  if (status === "loading") return null;

  if (!package_) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <p className="text-center text-muted-foreground">Package not found.</p>
          <div className="text-center mt-8">
            <Link href="/packages">
              <Button className="bg-primary hover:bg-primary/90">
                <ArrowLeft className="mr-2" size={20} />
                Back to Packages
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Image */}
      <section className="relative h-96 overflow-hidden bg-muted">
        <img src={package_.image || "/placeholder.svg"} alt={package_.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      </section>

      {/* Content */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <Link href="/packages" className="flex items-center gap-2 text-primary hover:text-primary/80 mb-4">
              <ArrowLeft size={20} />
              <span>Back to Packages</span>
            </Link>

            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{package_.title}</h1>

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin size={20} />
                <span className="text-lg">{package_.location}</span>
              </div>

              <div className="flex items-center gap-2">
                <RatingStars rating={package_.rating} reviews={package_.reviews} size="md" />
              </div>
            </div>
          </div>

          {/* Quick Info Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="bg-secondary/50 rounded-lg p-4 text-center">
              <Calendar className="mx-auto mb-2 text-primary" size={24} />
              <p className="text-muted-foreground text-sm">Duration</p>
              <p className="font-bold text-foreground text-lg">{package_.duration} Days</p>
            </div>

            <div className="bg-secondary/50 rounded-lg p-4 text-center">
              <Users className="mx-auto mb-2 text-primary" size={24} />
              <p className="text-muted-foreground text-sm">Group Size</p>
              <p className="font-bold text-foreground text-lg">2-30 People</p>
            </div>

            <div className="bg-secondary/50 rounded-lg p-4 text-center">
              <MapPin className="mx-auto mb-2 text-primary" size={24} />
              <p className="text-muted-foreground text-sm">Season</p>
              <p className="font-bold text-foreground text-lg">Year Round</p>
            </div>

            <div className="bg-accent/10 rounded-lg p-4 text-center border-2 border-accent">
              <p className="text-muted-foreground text-sm">Price</p>
              <p className="font-bold text-accent text-2xl">₹{package_.price}</p>
              <p className="text-xs text-muted-foreground">per person</p>
            </div>
          </div>

          {/* Description */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">Overview</h2>
            <p className="text-muted-foreground leading-relaxed text-lg mb-6">{package_.description}</p>
          </div>

          {/* Highlights */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">Highlights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {package_.highlights.map((highlight) => (
                <div key={highlight} className="flex items-center gap-3 bg-secondary/20 rounded-lg p-4">
                  <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                  <span className="text-foreground">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Inclusions */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">What's Included</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div
                className={`flex items-center gap-3 p-4 rounded-lg ${
                  package_.includesFlights ? "bg-primary/10 border border-primary/30" : "bg-muted/30 opacity-50"
                }`}
              >
                <Plane className={package_.includesFlights ? "text-primary" : "text-muted-foreground"} size={24} />
                <span className={package_.includesFlights ? "text-foreground font-semibold" : "text-muted-foreground"}>
                  {package_.includesFlights ? "✓ Flights Included" : "Flights Not Included"}
                </span>
              </div>

              <div
                className={`flex items-center gap-3 p-4 rounded-lg ${
                  package_.includesHotel ? "bg-primary/10 border border-primary/30" : "bg-muted/30 opacity-50"
                }`}
              >
                <Hotel className={package_.includesHotel ? "text-primary" : "text-muted-foreground"} size={24} />
                <span className={package_.includesHotel ? "text-foreground font-semibold" : "text-muted-foreground"}>
                  {package_.includesHotel ? "✓ Accommodation" : "Accommodation Not Included"}
                </span>
              </div>

              <div
                className={`flex items-center gap-3 p-4 rounded-lg ${
                  package_.includesMeals ? "bg-primary/10 border border-primary/30" : "bg-muted/30 opacity-50"
                }`}
              >
                <Utensils className={package_.includesMeals ? "text-primary" : "text-muted-foreground"} size={24} />
                <span className={package_.includesMeals ? "text-foreground font-semibold" : "text-muted-foreground"}>
                  {package_.includesMeals ? "✓ Meals Included" : "Meals Not Included"}
                </span>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-foreground mb-2">Ready to Book This Package?</h3>
            <p className="text-muted-foreground mb-6">
              Secure your spot now and get ready for an unforgettable adventure!
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href={session ? `/enquiry/${package_.id}` : `/login`} className="flex-1">
                <Button size="lg" className="bg-primary hover:bg-primary/90 w-full">
                  Enquire Now
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="border-border hover:bg-muted bg-transparent"
                onClick={() => navigator.share?.({ title: package_.title, text: `Check out ${package_.title}` })}
              >
                <Share2 className="mr-2" size={20} />
                Share
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
