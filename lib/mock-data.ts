export interface TravelPackage {
  id: string
  title: string
  location: string
  price: number
  duration: number
  rating: number
  reviews: number
  description: string
  image: string
  highlights: string[]
  includesFlights: boolean
  includesHotel: boolean
  includesMeals: boolean
}

export interface Review {
  id: string
  name: string
  rating: number
  comment: string
  date: string
  image: string
}

export const travelPackages: TravelPackage[] = [
  {
    id: "1",
    title: "Bali Paradise Escape",
    location: "Bali, Indonesia",
    price: 94999,
    duration: 7,
    rating: 4.8,
    reviews: 234,
    description:
      "Experience the tropical beauty of Bali with pristine beaches, ancient temples, and vibrant culture. Perfect for relaxation and adventure.",
    image: "/bali-tropical-beach-resort.jpg",
    highlights: ["Beach Relaxation", "Temple Tours", "Spa & Wellness", "Water Sports"],
    includesFlights: true,
    includesHotel: true,
    includesMeals: true,
  },
  {
    id: "2",
    title: "Swiss Alpine Adventure",
    location: "Switzerland",
    price: 138999,
    duration: 10,
    rating: 4.9,
    reviews: 189,
    description:
      "Discover snow-capped mountains, charming villages, and world-class hiking trails in the heart of the Alps.",
    image: "/switzerland-alpine-mountains-snow.jpg",
    highlights: ["Mountain Hiking", "Scenic Trains", "Swiss Culture", "Local Cuisine"],
    includesFlights: true,
    includesHotel: true,
    includesMeals: false,
  },
  {
    id: "3",
    title: "Tokyo Urban Experience",
    location: "Tokyo, Japan",
    price: 116999,
    duration: 5,
    rating: 4.7,
    reviews: 156,
    description:
      "Immerse yourself in the bustling energy of Tokyo with temples, neon-lit streets, sushi experiences, and cutting-edge technology.",
    image: "/tokyo-japan-city-skyline-night.jpg",
    highlights: ["City Tour", "Temple Visits", "Food Experience", "Shopping"],
    includesFlights: true,
    includesHotel: true,
    includesMeals: false,
  },
  {
    id: "4",
    title: "Paris Romance Package",
    location: "Paris, France",
    price: 109999,
    duration: 6,
    rating: 4.9,
    reviews: 312,
    description:
      "Fall in love with the City of Light. Experience iconic landmarks, world-class museums, fine dining, and charming cafes.",
    image: "/paris-eiffel-tower-romantic.png",
    highlights: ["Landmarks", "Museums", "Fine Dining", "River Cruise"],
    includesFlights: true,
    includesHotel: true,
    includesMeals: true,
  },
  {
    id: "5",
    title: "New Zealand Adventure",
    location: "New Zealand",
    price: 153999,
    duration: 12,
    rating: 4.8,
    reviews: 267,
    description:
      "Explore stunning landscapes from mountains to fjords. Perfect for adventure seekers with activities like bungee jumping and kayaking.",
    image: "/new-zealand-mountain-lake-landscape.jpg",
    highlights: ["Hiking", "Adventure Sports", "Scenic Drives", "Wildlife"],
    includesFlights: true,
    includesHotel: true,
    includesMeals: false,
  },
  {
    id: "6",
    title: "Maldives Luxury Retreat",
    location: "Maldives",
    price: 182999,
    duration: 8,
    rating: 4.9,
    reviews: 198,
    description:
      "Relax in luxury overwater bungalows with crystal-clear waters, world-class snorkeling, and pristine white-sand beaches.",
    image: "/maldives-overwater-bungalow-turquoise.jpg",
    highlights: ["Luxury Stay", "Snorkeling", "Spa", "Water Activities"],
    includesFlights: true,
    includesHotel: true,
    includesMeals: true,
  },
]

export const reviews: Review[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    rating: 5,
    comment: "Amazing experience! The Bali trip was exactly what I needed. The team organized everything perfectly.",
    date: "2 months ago",
    image: "/diverse-woman-avatar.png",
  },
  {
    id: "2",
    name: "Michael Chen",
    rating: 5,
    comment: "Switzerland exceeded all expectations. The hiking trails and views were absolutely breathtaking.",
    date: "1 month ago",
    image: "/man-avatar.png",
  },
  {
    id: "3",
    name: "Emma Rodriguez",
    rating: 4.5,
    comment: "Paris was magical! Great hotel location and wonderful tour guides. Highly recommend!",
    date: "3 weeks ago",
    image: "/diverse-woman-avatar.png",
  },
]
