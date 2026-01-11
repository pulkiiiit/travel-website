"use client"

import Link from "next/link"
import type { TravelPackage } from "@/lib/mock-data"
import { Button } from "@/components/ui/button"
import { RatingStars } from "./rating-stars"
import { MapPin } from "lucide-react"

interface PackageCardProps {
  package: TravelPackage
}

export function PackageCard({ package: pkg }: PackageCardProps) {
  return (
    <div className="group rounded-lg overflow-hidden bg-card border border-border hover:shadow-lg transition-all duration-300">
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden bg-muted">
        <img
          src={pkg.image || "/placeholder.svg"}
          alt={pkg.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-3 right-3 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
          ₹{pkg.price.toLocaleString("en-IN")} {/* changed from $ to ₹ and added Indian number formatting */}
        </div>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col h-48">
        <div className="mb-2">
          <h3 className="font-bold text-lg text-foreground mb-1 line-clamp-2">{pkg.title}</h3>
          <div className="flex items-center gap-1 text-muted-foreground text-sm mb-2">
            <MapPin size={16} />
            <span>{pkg.location}</span>
          </div>
          <RatingStars rating={pkg.rating} reviews={pkg.reviews} size="sm" />
        </div>

        <p className="text-sm text-muted-foreground line-clamp-2 mb-4 flex-grow">{pkg.description}</p>

        {/* Highlights */}
        <div className="flex flex-wrap gap-1 mb-4">
          {pkg.highlights.slice(0, 2).map((highlight) => (
            <span key={highlight} className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded">
              {highlight}
            </span>
          ))}
        </div>

        {/* Duration and CTA */}
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold text-muted-foreground">{pkg.duration} days</span>
          <Link href={`/packages/${pkg.id}`}>
            <Button size="sm" className="bg-primary hover:bg-primary/90">
              View Details
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
