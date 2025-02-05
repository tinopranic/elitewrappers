import Link from "next/link"
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Elite Wrappers Sydney</h3>
            <p className="text-sm text-gray-400">Premium vehicle wrapping and paint protection services in Sydney.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-gray-400 hover:text-teal-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-gray-400 hover:text-teal-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-sm text-gray-400 hover:text-teal-400 transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-gray-400 hover:text-teal-400 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-400 hover:text-teal-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-teal-400 flex-shrink-0" />
                <span className="text-sm text-gray-400">Unit 1/16 Hickeys Rd, Penrith NSW 2750, Australia</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-teal-400 flex-shrink-0" />
                <a href="tel:+61247616929" className="text-sm text-gray-400 hover:text-teal-400 transition-colors">
                  (02) 4761 6929
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-teal-400 flex-shrink-0" />
                <div className="flex flex-col">
                  <a
                    href="mailto:getwrapped@elitewrappers.com.au"
                    className="text-sm text-gray-400 hover:text-teal-400 transition-colors"
                  >
                    getwrapped@elitewrappers.com.au
                  </a>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/elitewrapperssydney/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-400 transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://www.facebook.com/elitewrapperssydney/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="https://www.tiktok.com/@elitewrapperssydney"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#00f2ea] transition-colors"
              >
                <svg
                  fill="currentColor"
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlSpace="preserve"
                >
                  <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Elite Wrappers Sydney. All rights reserved. Designed by{" "}
            <a
              href="https://www.instagram.com/seven2media/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-400 hover:text-pink-400 transition-colors"
            >
              Seven2Media
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

