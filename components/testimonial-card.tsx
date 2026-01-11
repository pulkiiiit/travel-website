import type { Review } from "@/lib/mock-data"
import { RatingStars } from "./rating-stars"

interface TestimonialCardProps {
  review: Review
}

export function TestimonialCard({ review }: TestimonialCardProps) {
  return (
    <div className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start gap-4 mb-4">
        <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 bg-muted">
          <img src={review.image || "/placeholder.svg"} alt={review.name} className="w-full h-full object-cover" />
        </div>
        <div className="flex-grow">
          <h4 className="font-semibold text-foreground">{review.name}</h4>
          <p className="text-xs text-muted-foreground">{review.date}</p>
        </div>
      </div>
      <RatingStars rating={review.rating} size="sm" />
      <p className="text-sm text-foreground mt-3 leading-relaxed">{review.comment}</p>
    </div>
  )
}
