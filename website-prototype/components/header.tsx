"use client"

import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Economic Development", href: "/economic-development" },
    { label: "Small Business", href: "/small-business" },
    { label: "Workone", href: "/workone" },
    { label: "Life in Fulton County", href: "/life-in-fulton-county" },
    { label: "Fulton County", href: "/fulton-county" },
    { label: "Partners", href: "/partners" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
              <span className="font-mono text-lg font-bold text-primary-foreground">F</span>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold leading-tight text-foreground">FEDCO</span>
              <span className="text-xs leading-tight text-muted-foreground">Growing Our Economy</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Button variant="default" size="sm">
              Contact Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
            {mobileMenuOpen ? <X className="h-6 w-6 text-foreground" /> : <Menu className="h-6 w-6 text-foreground" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-border py-4">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button variant="default" size="sm" className="w-full">
                Contact Us
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
