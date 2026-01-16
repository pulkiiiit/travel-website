"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useSession, signOut } from "next-auth/react";

export function Navbar() {
  const { data: session, status } = useSession();
  console.log("SESSION:", session);
  console.log("STATUS:", status);
  const [isOpen, setIsOpen] = useState(false);
  if (status === "loading") return null;

  return (
    <nav className="sticky top-0 z-50 bg-card border-b border-border backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">
                ✈
              </span>
            </div>
            <span className="font-bold text-lg text-foreground hidden sm:inline">
              TravelVerse
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-foreground hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link
              href="/packages"
              className="text-foreground hover:text-primary transition-colors"
            >
              Packages
            </Link>
            <Link
              href="#"
              className="text-foreground hover:text-primary transition-colors"
            >
              About
            </Link>
            <Link
              href="#"
              className="text-foreground hover:text-primary transition-colors"
            >
              Contact
            </Link>
            {!session ? (
              <Link
                href="/login"
                className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              >
                Login
              </Link>
            ) : (
              <>
                <p className="font-medium text-foreground">
                  {session.user?.name}
                </p>
                <button onClick={() => signOut()} className="px-4 py-2 bg-red-600 text-primary-foreground rounded-lg hover:bg-red-900 transition-colors">
                  Logout
                </button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-border py-4 space-y-3">
            <Link
              href="/"
              className="block text-foreground hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/packages"
              className="block text-foreground hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Packages
            </Link>
            <Link
              href="#"
              className="block text-foreground hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="#"
              className="block text-foreground hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            {!session ? (
              <Link
                href="/login"
                className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              >
                Login
              </Link>
            ) : (
              <p className="font-medium text-foreground">
                {session.user?.name}
              </p>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
