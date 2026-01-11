import Link from "next/link"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PackageGrid } from "@/components/package-grid"
import { TestimonialCard } from "@/components/testimonial-card"
import { Button } from "@/components/ui/button"
import { travelPackages, reviews } from "@/lib/mock-data"
import { ArrowRight, MapPin, Calendar, Users } from "lucide-react"

export default function Home() {
  const featuredPackages = travelPackages.slice(0, 3)

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden h-[600px] md:h-[700px] flex items-center">
        <Image
          src="/hero-bg.jpg"
          alt="Tropical beach destination"
          fill
          className="absolute inset-0 object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 w-full">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Discover Your <span className="text-yellow-300">Next Adventure</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-xl">
              Explore curated travel packages to the world's most beautiful destinations. From tropical beaches to
              mountain peaks, we have your perfect getaway.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/packages">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto">
                  Explore Packages
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/20 w-full sm:w-auto bg-transparent"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-secondary/50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">50+</div>
              <p className="text-muted-foreground">Destinations Worldwide</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">10K+</div>
              <p className="text-muted-foreground">Happy Travelers</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">98%</div>
              <p className="text-muted-foreground">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Packages Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Featured Packages</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Handpicked destinations that offer unforgettable experiences at unbeatable prices.
            </p>
          </div>

          <PackageGrid packages={featuredPackages} />

          <div className="text-center mt-12">
            <Link href="/packages">
              <Button variant="outline" size="lg">
                View All Packages
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">Why Choose TravelVerse?</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 text-primary mb-4">
                <MapPin size={32} />
              </div>
              <h3 className="font-bold text-lg text-foreground mb-2">Curated Destinations</h3>
              <p className="text-muted-foreground">
                Carefully selected locations with unique experiences and cultural attractions.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/20 text-accent mb-4">
                <Calendar size={32} />
              </div>
              <h3 className="font-bold text-lg text-foreground mb-2">Flexible Dates</h3>
              <p className="text-muted-foreground">
                Travel when you want with flexible booking options and date modifications.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 text-primary mb-4">
                <Users size={32} />
              </div>
              <h3 className="font-bold text-lg text-foreground mb-2">Expert Support</h3>
              <p className="text-muted-foreground">
                Dedicated travel consultants available 24/7 to assist with your journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">What Our Travelers Say</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <TestimonialCard key={review.id} review={review} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary to-accent py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">Ready to Start Your Journey?</h2>
          <p className="text-lg text-primary-foreground/90 mb-8">
            Browse our packages and book your dream vacation today. Special discounts available for group bookings!
          </p>
          <Link href="/packages">
            <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
              Book Now
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
