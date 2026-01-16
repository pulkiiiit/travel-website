import { Navbar } from "@/components/navbar"
import { SignupForm } from "@/components/signup-form"

export const metadata = {
  title: "Sign Up - TravelVerse",
  description: "Create a new TravelVerse account and start booking amazing travel packages",
}

export default function SignupPage() {
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
            <h1 className="text-3xl font-bold text-foreground mb-2">Create Account</h1>
            <p className="text-muted-foreground">
              Sign up now to start booking amazing travel packages and creating memories
            </p>
          </div>

          {/* Signup Form Card */}
          <div className="bg-card rounded-xl border border-border p-8 shadow-sm">
            <SignupForm />
          </div>
        </div>
      </div>
    </div>
  )
}
