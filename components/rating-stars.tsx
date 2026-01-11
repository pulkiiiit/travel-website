interface RatingStarsProps {
  rating: number
  reviews?: number
  size?: "sm" | "md" | "lg"
}

export function RatingStars({ rating, reviews, size = "md" }: RatingStarsProps) {
  const sizeClass = size === "sm" ? "text-xs" : size === "lg" ? "text-lg" : "text-sm"
  const fullStars = Math.floor(rating)
  const hasHalf = rating % 1 !== 0

  return (
    <div className="flex items-center gap-2">
      <div className={`flex gap-0.5 ${sizeClass}`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i}>
            {i < fullStars ? (
              <span className="text-accent">★</span>
            ) : i === fullStars && hasHalf ? (
              <span className="text-accent">◐</span>
            ) : (
              <span className="text-muted-foreground">☆</span>
            )}
          </span>
        ))}
      </div>
      <span className="text-muted-foreground text-sm font-medium">
        {rating.toFixed(1)}
        {reviews && <span className="ml-1">({reviews})</span>}
      </span>
    </div>
  )
}
