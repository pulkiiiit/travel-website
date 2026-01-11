import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { AuthForm } from "@/components/auth-form"

export const metadata = {
  title: "Login - TravelVerse",
  description: "Login or sign up to your TravelVerse account and manage your bookings",
}

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="flex items-center justify-center min-h-[calc(100vh-64px)] px-4 py-12">
        <div className="w-full max-w-md">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-2xl">✈</span>
              </div>
            </div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Welcome to TravelVerse</h1>
            <p className="text-muted-foreground">
              Login to explore amazing travel packages and book your dream vacation
            </p>
          </div>

          {/* Auth Form Card */}
          <div className="bg-card rounded-xl border border-border p-8 shadow-sm">
            <AuthForm />
          </div>

          {/* Footer */}
          <p className="text-center text-muted-foreground text-sm mt-6">
            <Link href="#" className="text-primary hover:underline">
              Forgot your password?
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
