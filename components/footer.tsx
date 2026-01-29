import Link from "next/link"
import { Facebook, Linkedin, Twitter, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Brand Column */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Fulton Economic Development Corp</h3>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/fedco46975"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white cursor-pointer"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/fulton-economic-development-corporation/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white cursor-pointer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com/fedco46975"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white cursor-pointer"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://www.youtube.com/channel/UCXZr1Z5Y9Z9Z9Z9Z9Z9Z9Zw"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white cursor-pointer"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
            <div className="mt-4 space-y-1 text-sm">
              <p>822 Main Street</p>
              <p>Rochester, Indiana 46975</p>
              <p className="mt-2">
                <a href="tel:5742233326" className="hover:text-white cursor-pointer">
                  (574) 223-3326
                </a>
              </p>
              <p>
                <a href="mailto:info@fedco.org" className="hover:text-white cursor-pointer">
                  info@fedco.org
                </a>
              </p>
            </div>
          </div>

          {/* About Column */}
          <div>
            <h4 className="text-white font-semibold mb-4">About</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about/mission" className="hover:text-white cursor-pointer">
                  Mission
                </Link>
              </li>
              <li>
                <Link href="/about/staff" className="hover:text-white cursor-pointer">
                  Staff
                </Link>
              </li>
              <li>
                <Link href="/about/board" className="hover:text-white cursor-pointer">
                  Board of Directors
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white cursor-pointer">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Small Biz Column */}
          <div>
            <h4 className="text-white font-semibold mb-4">Small Biz</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/small-business/business-assistance" className="hover:text-white cursor-pointer">
                  Business Assistance
                </Link>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/fedco46975#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white cursor-pointer"
                >
                  Upcoming Biz Events
                </a>
              </li>
              <li>
                <Link href="/small-business/stories-of-bizgro" className="hover:text-white cursor-pointer">
                  Stories of BizGro
                </Link>
              </li>
              <li>
                <Link href="/small-business/sign-up" className="hover:text-white cursor-pointer">
                  Sign up for Updates
                </Link>
              </li>
            </ul>
          </div>

          {/* Life in Fulton County Column */}
          <div>
            <h4 className="text-white font-semibold mb-4">Life in Fulton County</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/life-in-fulton-county/quick-facts" className="hover:text-white cursor-pointer">
                  Quick Facts
                </Link>
              </li>
              <li>
                <Link href="/life-in-fulton-county/healthcare" className="hover:text-white cursor-pointer">
                  Healthcare
                </Link>
              </li>
              <li>
                <Link href="/life-in-fulton-county/education" className="hover:text-white cursor-pointer">
                  Education
                </Link>
              </li>
              <li>
                <Link href="/life-in-fulton-county/utilities" className="hover:text-white cursor-pointer">
                  Utilities
                </Link>
              </li>
              <li>
                <a
                  href="https://fultoncountyindiana.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white cursor-pointer"
                >
                  Things to Do
                </a>
              </li>
            </ul>
          </div>

          {/* Economic Development Column */}
          <div>
            <h4 className="text-white font-semibold mb-4">Economic Development</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/economic-development/sites-and-buildings" className="hover:text-white cursor-pointer">
                  Sites & Buildings
                </Link>
              </li>
              <li>
                <Link href="/fulton-county/workforce" className="hover:text-white cursor-pointer">
                  Workforce
                </Link>
              </li>
              <li>
                <Link href="/fulton-county/top-employers" className="hover:text-white cursor-pointer">
                  Top Employers
                </Link>
              </li>
              <li>
                <a
                  href="https://www.hoosierdata.in.gov"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white cursor-pointer"
                >
                  Labor Statistics
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p className="text-center md:text-left">© 2026 Fulton Economic Development Corp. All rights reserved.</p>
          <div className="flex flex-wrap gap-4 md:gap-6 justify-center">
            <Link href="/contact" className="hover:text-white cursor-pointer">
              Privacy Policy
            </Link>
            <Link href="/contact" className="hover:text-white cursor-pointer">
              Terms of Service
            </Link>
            <Link href="/contact" className="hover:text-white cursor-pointer">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
