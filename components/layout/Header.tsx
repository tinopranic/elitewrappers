"use client"

import React from "react"
import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"

const services = [
  {
    title: "Full Vehicle Wraps",
    href: "/services?section=full-vehicle-wraps",
    description: "Transform your entire vehicle with a custom wrap.",
  },
  {
    title: "Paint Protection Film",
    href: "/services?section=paint-protection-film",
    description: "Shield your vehicle's paint from scratches and debris.",
  },
  {
    title: "Custom Designs",
    href: "/services?section=custom-designs",
    description: "Create unique, eye-catching designs for your vehicle.",
  },
  {
    title: "Commercial Vehicle Wraps",
    href: "/services?section=commercial-vehicle-wraps",
    description: "Promote your business with eye-catching vehicle graphics.",
  },
  {
    title: "Trailer Signage",
    href: "/services?section=trailer-signage",
    description: "Professional signage and wraps for commercial trailers and trucks.",
  },
  {
    title: "Signage Solutions",
    href: "/services?section=signage-solutions",
    description: "Create impactful business signage and displays.",
  },
  {
    title: "Ceramic Coating",
    href: "/services?section=ceramic-coating",
    description: "Long-lasting protection and shine for your vehicle.",
  },
]

const handleServiceClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  const isServicesPage = window.location.pathname === "/services"
  if (isServicesPage) {
    e.preventDefault()
    const sectionId = new URL(href, window.location.origin).searchParams.get("section")
    const element = document.getElementById(sectionId || "")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }
}

const handleQuoteClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
  // No need to prevent default - let the Link component handle navigation
  // The ScrollHandler component in contact/page.tsx will handle scrolling to the form
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [scrollDirection, setScrollDirection] = useState("up")

  useEffect(() => {
    let lastScrollY = window.pageYOffset

    const handleScroll = () => {
      const scrollY = window.pageYOffset
      const direction = scrollY > lastScrollY ? "down" : "up"
      if (direction !== scrollDirection && (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)) {
        setScrollDirection(direction)
      }
      lastScrollY = scrollY > 0 ? scrollY : 0
      setIsScrolled(scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [scrollDirection])

  return (
    <header
      className={cn(
        "fixed w-full z-50 transition-all duration-300 bg-premium-black/80 backdrop-blur-sm",
        scrollDirection === "down" && isScrolled ? "-top-24" : "top-0"
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-6" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Elite Wrappers Sydney</span>
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/NEW%20Logo%20jpg-6ER5dcL86gISqvgRIepb8CjEGxn8HQ.png"
              alt="Elite Wrappers Sydney Logo"
              width={200}
              height={200}
              className="h-20 w-auto"
              priority
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "text-gray-200 hover:text-pink-500 transition-colors cursor-pointer",
                    )}
                  >
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-gray-200 hover:text-pink-500 transition-colors cursor-pointer">
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-cover bg-center p-6 no-underline outline-none focus:shadow-md relative overflow-hidden group"
                          href="/services"
                          style={{
                            backgroundImage:
                              'url("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/_J016683.jpg-gkXuhy9uA0QQzlEV2TT07ngbcGMqqq.jpeg")',
                          }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80 transition-opacity group-hover:opacity-75" />
                          <div className="relative z-20">
                            <div className="mb-2 mt-4 text-lg font-medium text-white">Our Services</div>
                            <p className="text-sm leading-tight text-gray-100">
                              Discover our range of premium car wrapping and protection services.
                            </p>
                          </div>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    {services.map((service) => (
                      <ListItem key={service.title} title={service.title} href={service.href}>
                        {service.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/gallery" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "text-gray-200 hover:text-pink-500 transition-colors cursor-pointer",
                    )}
                  >
                    Gallery
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/about" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "text-gray-200 hover:text-pink-500 transition-colors cursor-pointer",
                    )}
                  >
                    About
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/contact" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "text-gray-200 hover:text-pink-500 transition-colors cursor-pointer",
                    )}
                  >
                    Contact
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <span className="relative inline-block overflow-hidden rounded-full p-[1.5px]">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#14B8A6_0%,#EC4899_50%,#14B8A6_100%)]" />
            <div className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black/60 text-xs font-medium backdrop-blur-3xl">
              <Link
                href="/contact?scroll=contact-form"
                className="inline-flex rounded-full text-center group items-center w-full justify-center bg-white/10 text-gray-200 py-2 px-6 text-sm hover:bg-white/20 hover:text-white transition-all cursor-pointer"
                onClick={handleQuoteClick}
              >
                Get a Quote
              </Link>
            </div>
          </span>
        </div>
      </nav>
      {/* Mobile menu, show/hide based on menu open state. */}
      <div className={`lg:hidden ${mobileMenuOpen ? "block" : "hidden"}`} role="dialog" aria-modal="true">
        {/* Background backdrop, show/hide based on slide-over state. */}
        <div className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm" />
        <div
          className={cn(
            "fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-premium-black/90 backdrop-blur-sm px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10",
            "h-[100dvh]",
          )}
        >
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Elite Wrappers Sydney</span>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/NEW%20Logo%20jpg-6ER5dcL86gISqvgRIepb8CjEGxn8HQ.png"
                alt="Elite Wrappers Sydney Logo"
                width={180}
                height={180}
                className="h-16 w-auto"
                priority
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link
                  href="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:text-pink-500 hover:bg-gray-50/10 cursor-pointer"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/services"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:text-pink-500 hover:bg-gray-50/10 cursor-pointer"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Services
                </Link>
                <Link
                  href="/gallery"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:text-pink-500 hover:bg-gray-50/10 cursor-pointer"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Gallery
                </Link>
                <Link
                  href="/about"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:text-pink-500 hover:bg-gray-50/10 cursor-pointer"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </Link>
                <div className="py-6">
                  <span className="relative inline-block overflow-hidden rounded-full p-[1.5px] w-full">
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#14B8A6_0%,#EC4899_50%,#14B8A6_100%)]" />
                    <div className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black/60 text-xs font-medium backdrop-blur-3xl">
                      <Link
                        href="/contact?scroll=contact-form"
                        className="inline-flex rounded-full text-center group items-center w-full justify-center bg-white/10 text-gray-200 py-2 px-6 text-sm hover:bg-white/20 hover:text-white transition-all cursor-pointer"
                        onClick={(e) => {
                          setMobileMenuOpen(false)
                          handleQuoteClick(e)
                        }}
                      >
                        Get a Quote
                      </Link>
                    </div>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute inset-0 -z-10 h-full w-full bg-black/75 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"
        style={{
          maskImage: 'linear-gradient(to bottom, black, transparent)',
          WebkitMaskImage: 'linear-gradient(to bottom, black, transparent)',
        }}
      >
        <div
          className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-teal-500"
          style={{
            opacity: '0.1',
            filter: 'blur(7px)',
            background:
              'conic-gradient(from 90deg at 50% 50%, #00bac5 -60.49deg, #ee2b7c 59.93deg, #00bac5 299.51deg, #ee2b7c 419.93deg)',
          }}
        />
      </div>
    </header>
  )
}

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className,
            )}
            onClick={(e) => handleServiceClick(e, props.href as string)}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    )
  },
)
ListItem.displayName = "ListItem"