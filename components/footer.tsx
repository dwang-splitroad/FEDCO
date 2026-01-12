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
                className="hover:text-white"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/fulton-economic-development-corporation/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com/fedco46975"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://www.youtube.com/channel/UCXZr1Z5Y9Z9Z9Z9Z9Z9Z9Zw"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
            <div className="mt-4 space-y-1 text-sm">
              <p>1424 College Ave</p>
              <p>Rochester, IN 46975</p>
              <p className="mt-2">
                <a href="tel:5742233434" className="hover:text-white">
                  (574) 223-3434
                </a>
              </p>
              <p>
                <a href="mailto:info@fedco.org" className="hover:text-white">
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
                <Link href="/about/mission" className="hover:text-white">
                  Our Mission
                </Link>
              </li>
              <li>
                <Link href="/about/staff" className="hover:text-white">
                  Leadership Team
                </Link>
              </li>
              <li>
                <Link href="/about/board" className="hover:text-white">
                  Board of Directors
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/small-business" className="hover:text-white">
                  Business Development
                </Link>
              </li>
              <li>
                <Link href="/economic-development" className="hover:text-white">
                  Site Selection
                </Link>
              </li>
              <li>
                <Link href="/fulton-county#workforce" className="hover:text-white">
                  Workforce Training
                </Link>
              </li>
              <li>
                <Link href="/economic-development" className="hover:text-white">
                  Incentive Programs
                </Link>
              </li>
            </ul>
          </div>

          {/* Community Column */}
          <div>
            <h4 className="text-white font-semibold mb-4">Community</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/life-in-fulton-county" className="hover:text-white">
                  Life in Fulton County
                </Link>
              </li>
              <li>
                <Link href="/life-in-fulton-county#education" className="hover:text-white">
                  Education
                </Link>
              </li>
              <li>
                <a
                  href="https://fultoncountyindiana.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  Recreation
                </a>
              </li>
              <li>
                <a
                  href="https://www.co.fulton.in.us/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  Real Estate
                </a>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/fulton-county#top-employers" className="hover:text-white">
                  Business Directory
                </Link>
              </li>
              <li>
                <a
                  href="https://www.hoosierdata.in.gov"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  Economic Data
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/fedco46975#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  News & Events
                </a>
              </li>
              <li>
                <Link href="/economic-development" className="hover:text-white">
                  Partners
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>© 2026 Fulton Economic Development Corp. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/contact" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/contact" className="hover:text-white">
              Terms of Service
            </Link>
            <Link href="/contact" className="hover:text-white">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
