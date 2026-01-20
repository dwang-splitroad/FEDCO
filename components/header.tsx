"use client"

import Link from "next/link"
import { useState, useRef, useEffect } from "react"
import { Menu, X, ChevronDown } from "lucide-react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const closeTimeoutRef = useRef<{ [key: string]: NodeJS.Timeout | null }>({})

  // Scroll behavior: hide on scroll down, show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY < 10) {
        // Always show when at top
        setIsVisible(true)
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down & past threshold - hide
        setIsVisible(false)
        setOpenMenu(null) // Close any open menus
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up - show
        setIsVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  // Helper to open menu and clear close timeout
  const handleMenuOpen = (menu: string) => {
    if (closeTimeoutRef.current[menu]) {
      clearTimeout(closeTimeoutRef.current[menu]!)
      closeTimeoutRef.current[menu] = null
    }
    setOpenMenu(menu)
  }

  // Helper to close menu with delay
  const handleMenuClose = (menu: string) => {
    closeTimeoutRef.current[menu] = setTimeout(() => {
      setOpenMenu((current) => (current === menu ? null : current))
    }, 200)
  }

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 w-full shadow-lg backdrop-blur-sm transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
      style={{ backgroundColor: "rgba(39, 55, 118, 0.98)", color: "white" }}
    >
      <div className="w-full h-20 px-6 md:px-10">
        {/* Desktop Grid Layout */}
        <div className="hidden lg:grid lg:grid-cols-[auto_1fr_auto] h-full items-center gap-4">
          {/* Logo - Left Grid (Left Aligned) */}
          <div className="flex justify-start">
            <Link href="/" className="flex items-center transition-transform hover:scale-105 duration-200">
              <img
                src="/images/FEDCO+Logo_White@300x-8.png"
                alt="FEDCO - Fulton Economic Development Corp"
                className="h-14 w-auto max-w-[260px] object-contain"
              />
            </Link>
          </div>

          {/* Desktop Navigation - Center Grid (Centered) */}
          <nav className="flex items-center justify-center gap-1">
          {/* Home */}
          <Link href="/">
            <button className="px-3 py-2 text-sm font-semibold text-white hover:bg-white/15 hover:text-white rounded-lg transition-all duration-200">
              Home
            </button>
          </Link>

          {/* Economic Development Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => handleMenuOpen("economic-development")}
            onMouseLeave={() => handleMenuClose("economic-development")}
          >
            <button className="flex items-center gap-1.5 px-3 py-2 text-sm font-semibold text-white hover:bg-white/15 hover:text-white rounded-lg transition-all duration-200">
              Economic Development
              <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${openMenu === "economic-development" ? "rotate-180" : ""}`} />
            </button>
            {openMenu === "economic-development" && (
              <div className="absolute top-full left-0 mt-2 w-60 bg-white rounded-lg shadow-xl border border-gray-100 py-2 animate-in fade-in-0 slide-in-from-top-2 duration-200">
                <Link href="/economic-development" className="block px-5 py-2.5 text-sm font-medium text-primary hover:bg-primary hover:text-white rounded-md mx-2 transition-colors">
                  Sites & Buildings
                </Link>
                <a
                  href="https://www.bls.gov/regions/midwest/news-release/countyemploymentandwages_indiana.htm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-5 py-2.5 text-sm font-medium text-primary hover:bg-primary hover:text-white rounded-md mx-2 transition-colors"
                >
                  Wage Survey
                </a>
                <a
                  href="https://www.hoosierdata.in.gov"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-5 py-2.5 text-sm font-medium text-primary hover:bg-primary hover:text-white rounded-md mx-2 transition-colors"
                >
                  Labor Statistics
                </a>
                <a
                  href="https://www.in.gov/dwd/newsroom/employment-reports"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-5 py-2.5 text-sm font-medium text-primary hover:bg-primary hover:text-white rounded-md mx-2 transition-colors"
                >
                  Employment Rates
                </a>
              </div>
            )}
          </div>

          {/* Small Biz Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => handleMenuOpen("small-biz")}
            onMouseLeave={() => handleMenuClose("small-biz")}
          >
            <button className="flex items-center gap-1.5 px-3 py-2 text-sm font-semibold text-white hover:bg-white/15 hover:text-white rounded-lg transition-all duration-200">
              Small Biz
              <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${openMenu === "small-biz" ? "rotate-180" : ""}`} />
            </button>
            {openMenu === "small-biz" && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-100 py-2 animate-in fade-in-0 slide-in-from-top-2 duration-200">
                <Link href="/small-business" className="block px-5 py-2.5 text-sm font-medium text-primary hover:bg-primary hover:text-white rounded-md mx-2 transition-colors">
                  Business Assistance
                </Link>
                <a
                  href="https://www.facebook.com/fedco46975#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-5 py-2.5 text-sm font-medium text-primary hover:bg-primary hover:text-white rounded-md mx-2 transition-colors"
                >
                  Upcoming Biz Events
                </a>
                <Link href="/stories-of-bizgro" className="block px-5 py-2.5 text-sm font-medium text-primary hover:bg-primary hover:text-white rounded-md mx-2 transition-colors">
                  Stories of BizGro
                </Link>
                <Link href="/sign-up" className="block px-5 py-2.5 text-sm font-medium text-primary hover:bg-primary hover:text-white rounded-md mx-2 transition-colors">
                  Sign up for Updates
                </Link>
              </div>
            )}
          </div>

          {/* Workone External Link */}
          <a href="https://www.in.gov/dwd/" target="_blank" rel="noopener noreferrer">
            <button className="px-3 py-2 text-sm font-semibold text-white hover:bg-white/15 hover:text-white rounded-lg transition-all duration-200">
              Workone
            </button>
          </a>

          {/* Life in Fulton County Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => handleMenuOpen("life-in-fulton")}
            onMouseLeave={() => handleMenuClose("life-in-fulton")}
          >
            <button className="flex items-center gap-1.5 px-3 py-2 text-sm font-semibold text-white hover:bg-white/15 hover:text-white rounded-lg transition-all duration-200">
              Life In Fulton County
              <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${openMenu === "life-in-fulton" ? "rotate-180" : ""}`} />
            </button>
            {openMenu === "life-in-fulton" && (
              <div className="absolute top-full left-0 mt-2 w-60 bg-white rounded-lg shadow-xl border border-gray-100 py-2 animate-in fade-in-0 slide-in-from-top-2 duration-200">
                <Link href="/life-in-fulton-county/quick-facts" className="block px-5 py-2.5 text-sm font-medium text-primary hover:bg-primary hover:text-white rounded-md mx-2 transition-colors">
                  Quick Facts
                </Link>
                <Link href="/life-in-fulton-county/healthcare" className="block px-5 py-2.5 text-sm font-medium text-primary hover:bg-primary hover:text-white rounded-md mx-2 transition-colors">
                  Healthcare
                </Link>
                <Link href="/life-in-fulton-county/education" className="block px-5 py-2.5 text-sm font-medium text-primary hover:bg-primary hover:text-white rounded-md mx-2 transition-colors">
                  Education
                </Link>
                <Link href="/life-in-fulton-county/utilities" className="block px-5 py-2.5 text-sm font-medium text-primary hover:bg-primary hover:text-white rounded-md mx-2 transition-colors">
                  Utilities
                </Link>
                <a
                  href="https://fultoncountyindiana.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-5 py-2.5 text-sm font-medium text-primary hover:bg-primary hover:text-white rounded-md mx-2 transition-colors"
                >
                  Things to Do
                </a>
              </div>
            )}
          </div>

          {/* Fulton County Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => handleMenuOpen("fulton-county")}
            onMouseLeave={() => handleMenuClose("fulton-county")}
          >
            <button className="flex items-center gap-1.5 px-3 py-2 text-sm font-semibold text-white hover:bg-white/15 hover:text-white rounded-lg transition-all duration-200">
              Fulton County
              <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${openMenu === "fulton-county" ? "rotate-180" : ""}`} />
            </button>
            {openMenu === "fulton-county" && (
              <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-100 py-2 animate-in fade-in-0 slide-in-from-top-2 duration-200">
                <Link href="/workforce" className="block px-5 py-2.5 text-sm font-medium text-primary hover:bg-primary hover:text-white rounded-md mx-2 transition-colors">
                  Workforce
                </Link>
                <Link href="/top-employers" className="block px-5 py-2.5 text-sm font-medium text-primary hover:bg-primary hover:text-white rounded-md mx-2 transition-colors">
                  Top Employers
                </Link>
                <Link href="/life-in-fulton-county/utilities" className="block px-5 py-2.5 text-sm font-medium text-primary hover:bg-primary hover:text-white rounded-md mx-2 transition-colors">
                  Utilities
                </Link>
              </div>
            )}
          </div>

          {/* Partners Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => handleMenuOpen("partners")}
            onMouseLeave={() => handleMenuClose("partners")}
          >
            <button className="flex items-center gap-1.5 px-3 py-2 text-sm font-semibold text-white hover:bg-white/15 hover:text-white rounded-lg transition-all duration-200">
              Partners
              <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${openMenu === "partners" ? "rotate-180" : ""}`} />
            </button>
            {openMenu === "partners" && (
              <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-100 py-2 animate-in fade-in-0 slide-in-from-top-2 duration-200">
                <a href="https://rochester.in.us/" target="_blank" rel="noopener noreferrer" className="block px-5 py-2.5 text-sm font-medium text-primary hover:bg-primary hover:text-white rounded-md mx-2 transition-colors">
                  Rochester
                </a>
                <a href="https://www.co.fulton.in.us/" target="_blank" rel="noopener noreferrer" className="block px-5 py-2.5 text-sm font-medium text-primary hover:bg-primary hover:text-white rounded-md mx-2 transition-colors">
                  Fulton County
                </a>
                <a href="https://akronindiana.com/" target="_blank" rel="noopener noreferrer" className="block px-5 py-2.5 text-sm font-medium text-primary hover:bg-primary hover:text-white rounded-md mx-2 transition-colors">
                  Akron
                </a>
                <a href="https://www.facebook.com/share/1CNHgtB9Vj" target="_blank" rel="noopener noreferrer" className="block px-5 py-2.5 text-sm font-medium text-primary hover:bg-primary hover:text-white rounded-md mx-2 transition-colors">
                  Kewanna
                </a>
                <a href="https://ieda.org" target="_blank" rel="noopener noreferrer" className="block px-5 py-2.5 text-sm font-medium text-primary hover:bg-primary hover:text-white rounded-md mx-2 transition-colors">
                  IEDA
                </a>
                <a href="https://iedc.in.gov" target="_blank" rel="noopener noreferrer" className="block px-5 py-2.5 text-sm font-medium text-primary hover:bg-primary hover:text-white rounded-md mx-2 transition-colors">
                  IEDC
                </a>
                <a href="https://www.iar.cc/north-central-indiana-regional-palnning-council" target="_blank" rel="noopener noreferrer" className="block px-5 py-2.5 text-sm font-medium text-primary hover:bg-primary hover:text-white rounded-md mx-2 transition-colors">
                  NCIRPC
                </a>
              </div>
            )}
          </div>

          {/* About Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => handleMenuOpen("about")}
            onMouseLeave={() => handleMenuClose("about")}
          >
            <button className="flex items-center gap-1.5 px-3 py-2 text-sm font-semibold text-white hover:bg-white/15 hover:text-white rounded-lg transition-all duration-200">
              About
              <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${openMenu === "about" ? "rotate-180" : ""}`} />
            </button>
            {openMenu === "about" && (
              <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-100 py-2 animate-in fade-in-0 slide-in-from-top-2 duration-200">
                <Link href="/about/staff" className="block px-5 py-2.5 text-sm font-medium text-primary hover:bg-primary hover:text-white rounded-md mx-2 transition-colors">
                  Staff
                </Link>
                <Link href="/about/board" className="block px-5 py-2.5 text-sm font-medium text-primary hover:bg-primary hover:text-white rounded-md mx-2 transition-colors">
                  Board of Directors
                </Link>
                <Link href="/about/mission" className="block px-5 py-2.5 text-sm font-medium text-primary hover:bg-primary hover:text-white rounded-md mx-2 transition-colors">
                  Mission
                </Link>
                <Link href="/contact" className="block px-5 py-2.5 text-sm font-medium text-primary hover:bg-primary hover:text-white rounded-md mx-2 transition-colors">
                  Contact
                </Link>
              </div>
            )}
          </div>

          </nav>

          {/* Contact Us Button - Right Grid (Right Aligned) */}
          <div className="flex justify-end">
            <Link href="/contact">
              <button className="px-6 py-2.5 text-base font-bold text-white bg-secondary hover:bg-secondary/90 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-105">
                Contact Us
              </button>
            </Link>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="flex lg:hidden h-full items-center justify-between">
          {/* Logo - Mobile */}
          <Link href="/" className="flex items-center transition-transform hover:scale-105 duration-200">
            <img
              src="/images/FEDCO+Logo_White@300x-8.png"
              alt="FEDCO - Fulton Economic Development Corp"
              className="h-14 w-auto max-w-[260px] object-contain"
            />
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="text-white p-2 ml-auto"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-white/20 backdrop-blur-sm" style={{ backgroundColor: "rgba(39, 55, 118, 0.98)" }}>
          <nav className="flex flex-col gap-1 p-4 max-h-[calc(100vh-5rem)] overflow-y-auto">
            <Link href="/" className="text-white py-3 px-4 hover:bg-white/10 hover:text-white rounded-lg font-medium transition-all" onClick={() => setMobileMenuOpen(false)}>
              Home
            </Link>
            <Link href="/about/mission" className="text-white py-3 px-4 hover:bg-white/10 hover:text-white rounded-lg font-medium transition-all" onClick={() => setMobileMenuOpen(false)}>
              Mission
            </Link>
            <Link href="/about/staff" className="text-white py-3 px-4 hover:bg-white/10 hover:text-white rounded-lg font-medium transition-all" onClick={() => setMobileMenuOpen(false)}>
              Staff
            </Link>
            <Link href="/about/board" className="text-white py-3 px-4 hover:bg-white/10 hover:text-white rounded-lg font-medium transition-all" onClick={() => setMobileMenuOpen(false)}>
              Board
            </Link>
            <Link href="/contact" className="text-white py-3 px-4 hover:bg-white/10 hover:text-white rounded-lg font-medium transition-all" onClick={() => setMobileMenuOpen(false)}>
              Contact
            </Link>
            <Link href="/small-business" className="text-white py-3 px-4 hover:bg-white/10 hover:text-white rounded-lg font-medium transition-all" onClick={() => setMobileMenuOpen(false)}>
              Business Assistance
            </Link>
            <Link href="/stories-of-bizgro" className="text-white py-3 px-4 hover:bg-white/10 hover:text-white rounded-lg font-medium transition-all" onClick={() => setMobileMenuOpen(false)}>
              Stories of BizGro
            </Link>
            <Link href="/life-in-fulton-county/education" className="text-white py-3 px-4 hover:bg-white/10 hover:text-white rounded-lg font-medium transition-all" onClick={() => setMobileMenuOpen(false)}>
              Education
            </Link>
            <Link href="/workforce" className="text-white py-3 px-4 hover:bg-white/10 hover:text-white rounded-lg font-medium transition-all" onClick={() => setMobileMenuOpen(false)}>
              Workforce
            </Link>
            <Link href="/top-employers" className="text-white py-3 px-4 hover:bg-white/10 hover:text-white rounded-lg font-medium transition-all" onClick={() => setMobileMenuOpen(false)}>
              Top Employers
            </Link>
            <Link href="/life-in-fulton-county/utilities" className="text-white py-3 px-4 hover:bg-white/10 hover:text-white rounded-lg font-medium transition-all" onClick={() => setMobileMenuOpen(false)}>
              Utilities
            </Link>
            <Link href="/life-in-fulton-county/quick-facts" className="text-white py-3 px-4 hover:bg-white/10 hover:text-white rounded-lg font-medium transition-all" onClick={() => setMobileMenuOpen(false)}>
              Quick Facts
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
