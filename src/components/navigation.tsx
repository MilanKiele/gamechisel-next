"use client"

import * as React from "react"
import { useEffect, useRef } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { gsap } from "gsap"
import { 
  ChevronDown, 
  ArrowRight,
  MessageSquare,
  FileText,
  Users,
  Globe,
  Github,
  Download,
  Home,
  Mail
} from "lucide-react"
import { GameChiselLogo } from "@/components/ui/gamechisel-logo"
import { HiMenuAlt3, HiX } from "react-icons/hi"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import GoldenButton from "@/components/ui/golden-button"
import { ViewWorkButton } from "@/components/ui/view-work-button"
import { cn } from "@/lib/utils"

interface NavigationProps {
  variant?: 'landing' | 'dashboard';
  transparentPages?: string[]; // Pages where nav should be transparent at top
}



const resourceLinks = [
  {
    title: "Download",
    href: "/download",
    description: "Download GameChisel and game assets",
    icon: Download,
  },
  {
    title: "License",
    href: "/license",
    description: "License agreement and terms",
    icon: FileText,
  },
]

const ListItem = React.forwardRef<
  React.ElementRef<typeof Link>,
  React.ComponentPropsWithoutRef<typeof Link> & { icon?: React.ComponentType<{ className?: string }> }
>(({ className, title, children, icon: Icon, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="flex items-center gap-2 text-sm font-medium leading-none">
            {Icon && <Icon className="h-4 w-4" />}
            {title}
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

export default function Navigation({ 
  variant = 'landing',
  transparentPages = ['/']
}: NavigationProps) {
  const [isOpen, setIsOpen] = React.useState(false)
  const [isNavVisible, setIsNavVisible] = React.useState(true)
  const [scrollOpacity, setScrollOpacity] = React.useState(0)
  const [mounted, setMounted] = React.useState(false)
  const [openMobileMenu, setOpenMobileMenu] = React.useState<string | null>(null)
  const [currentPath, setCurrentPath] = React.useState('/')
  const lastScrollY = React.useRef(0)
  
  // Refs for GSAP animations
  const navRef = useRef<HTMLElement>(null)
  const logoRef = useRef<HTMLDivElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)

  // Optimize initial load with minimal effects
  React.useEffect(() => {
    setMounted(true)
    setCurrentPath(window.location.pathname)
  }, [])

  // Optimized scroll handler with opacity control
  React.useEffect(() => {
    const onScroll = () => {
      if (isOpen) {
        setIsNavVisible(true)
        return
      }
      const currentY = window.scrollY
      const opacity = Math.min(currentY / 200, 1)
      setScrollOpacity(opacity)

      if (currentY < 120) {
        setIsNavVisible(true)
      } else if (currentY > lastScrollY.current) {
        setIsNavVisible(false)
      } else if (currentY < lastScrollY.current) {
        setIsNavVisible(true)
      }

      lastScrollY.current = currentY
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [isOpen])

  // Prevent body scroll when mobile menu is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }
    return () => document.body.classList.remove('overflow-hidden')
  }, [isOpen])

  const toggleMobileMenu = (menuKey: string) => {
    setOpenMobileMenu(openMobileMenu === menuKey ? null : menuKey)
  }

  // GSAP animations setup
  useEffect(() => {
    if (!mounted) return

    // Initial navigation animation
    if (navRef.current) {
      gsap.fromTo(navRef.current, 
        { y: -100, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8, 
          ease: "power3.out" 
        }
      )
    }

    // Logo animation
    if (logoRef.current) {
      gsap.fromTo(logoRef.current, 
        { scale: 0.8, opacity: 0, rotation: -10 },
        { 
          scale: 1, 
          opacity: 1, 
          rotation: 0,
          duration: 0.6, 
          ease: "back.out(1.7)",
          delay: 0.2
        }
      )
    }

    // Menu items animation
    if (menuRef.current) {
      gsap.fromTo(menuRef.current.children, 
        { y: -20, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.5, 
          stagger: 0.1,
          ease: "power2.out",
          delay: 0.4
        }
      )
    }

    // Add hover animations to menu items
    const menuItems = document.querySelectorAll('[data-navigation-menu-item]')
    menuItems.forEach(item => {
      item.addEventListener('mouseenter', () => {
        gsap.to(item, { 
          scale: 1.05, 
          duration: 0.2, 
          ease: "power2.out" 
        })
      })
      item.addEventListener('mouseleave', () => {
        gsap.to(item, { 
          scale: 1, 
          duration: 0.2, 
          ease: "power2.out" 
        })
      })
    })

    // Mobile menu animation
    const mobileMenu = document.querySelector('[data-mobile-menu]')
    if (mobileMenu) {
      gsap.set(mobileMenu, { x: "100%", opacity: 0 })
    }

  }, [mounted])

  // Animate mobile menu open/close
  useEffect(() => {
    const mobileMenu = document.querySelector('[data-mobile-menu]')
    if (!mobileMenu) return

    if (isOpen) {
      gsap.to(mobileMenu, { 
        x: 0, 
        opacity: 1, 
        duration: 0.3, 
        ease: "power2.out" 
      })
    } else {
      gsap.to(mobileMenu, { 
        x: "100%", 
        opacity: 0, 
        duration: 0.3, 
        ease: "power2.out" 
      })
    }
  }, [isOpen])

  if (!mounted) return null

  const isAtTop = scrollOpacity === 0
  const extraPad = isAtTop ? 6 : 0 // Increased padding for more height
  const navHeight = isAtTop ? 80 : 72 // Increased height for better spacing

  return (
    <>
      <motion.nav
        ref={navRef}
        initial={{ y: -100, opacity: 0 }}
        animate={{
          y: isOpen ? 0 : (isNavVisible ? 0 : -100),
          opacity: 1,
          paddingTop: extraPad,
          paddingBottom: extraPad,
          height: navHeight,
        }}
        transition={{
          duration: 0.3, // Consistent with provided version
          ease: 'easeOut',
          paddingTop: { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.06 },
          paddingBottom: { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.06 },
          height: { duration: 0.25, ease: [0.4, 0, 0.2, 1] },
        }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-200",
          isAtTop && !isOpen ? "bg-transparent" : "bg-background"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center" style={{ height: `${navHeight}px` }}>
            {/* Logo - Left */}
            <div ref={logoRef} className="flex-shrink-0">
              <Link href="/" className="flex items-center space-x-3 group">
                <GameChiselLogo className="w-5 h-5" />
                <span className="text-xl font-semibold tracking-tight">GameChisel</span>
              </Link>
            </div>

            {/* Desktop Navigation - Center */}
            <div ref={menuRef} className="hidden lg:flex items-center justify-center flex-1">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem data-navigation-menu-item>
                    <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                        <li className="row-span-3">
                          <NavigationMenuLink asChild>
                            <Link
                              className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                              href="/"
                            >
                              <Home className="h-6 w-6" />
                              <div className="mb-2 mt-4 text-lg font-medium">
                                GameChisel Home
                              </div>
                              <p className="text-sm leading-tight text-muted-foreground">
                                Return to the main GameChisel landing page.
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li className="row-span-3">
                          <NavigationMenuLink asChild>
                            <a
                              className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                              href="https://storsko.com"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Globe className="h-6 w-6" />
                              <div className="mb-2 mt-4 text-lg font-medium">
                                Storsko.com
                              </div>
                              <p className="text-sm leading-tight text-muted-foreground">
                                Visit our partner platform for additional resources.
                              </p>
                            </a>
                          </NavigationMenuLink>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>



                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                        <li className="row-span-3">
                          <NavigationMenuLink asChild>
                            <a
                              className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                              href="https://github.com/gamechisel/gamechisel"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Github className="h-6 w-6" />
                              <div className="mb-2 mt-4 text-lg font-medium">
                                GitHub
                              </div>
                              <p className="text-sm leading-tight text-muted-foreground">
                                Open source Unity development tools and components.
                              </p>
                            </a>
                          </NavigationMenuLink>
                        </li>
                        {resourceLinks.map((link) => (
                          <ListItem
                            key={link.title}
                            title={link.title}
                            href={link.href}
                            icon={link.icon}
                          >
                            {link.description}
                          </ListItem>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Team</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                        <li className="row-span-3">
                          <NavigationMenuLink asChild>
                            <Link
                              className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                              href="/team"
                            >
                              <Users className="h-6 w-6" />
                              <div className="mb-2 mt-4 text-lg font-medium">
                                Meet the Team
                              </div>
                              <p className="text-sm leading-tight text-muted-foreground">
                                Learn about our team members and company values.
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li className="row-span-3">
                          <NavigationMenuLink asChild>
                            <Link
                              className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                              href="/contact"
                            >
                              <Mail className="h-6 w-6" />
                              <div className="mb-2 mt-4 text-lg font-medium">
                                Contact Us
                              </div>
                              <p className="text-sm leading-tight text-muted-foreground">
                                Get in touch with our team for support or inquiries.
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem data-navigation-menu-item>
                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                      <Link href="/github">Code</Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>

                  <NavigationMenuItem data-navigation-menu-item>
                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                      <Link href="/download" className="font-bold">Download</Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

            </div>

            {/* Right Side - Theme Toggle, Visit storsko.com, and Get Started */}
            <div className="hidden lg:flex items-center gap-4 flex-shrink-0">
              <ThemeToggle />
              {variant === 'landing' && (
                <ViewWorkButton href="https://storsko.com">
                  Visit storsko.com
                </ViewWorkButton>
              )}
              {variant === 'landing' && (
                <GoldenButton href="/download" className="whitespace-nowrap">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Get Started
                </GoldenButton>
              )}
              {variant === 'dashboard' && (
                <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                  <span className="text-xs font-medium">U</span>
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 ml-auto"
            >
              {isOpen ? (
                <HiX className="w-6 h-6" />
              ) : (
                <HiMenuAlt3 className="w-6 h-6" />
              )}
            </Button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            data-mobile-menu
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden fixed inset-0 z-40 bg-background"
            style={{ top: `${navHeight}px` }}
          >
            <div className="flex flex-col h-full">
              <div className="flex-1 px-6 py-6 overflow-y-auto">
                <div className="space-y-4">
                  {/* Products Menu */}
                  <div className="space-y-2">
                    <Button
                      variant="ghost"
                      onClick={() => toggleMobileMenu('products')}
                      className="w-full justify-between h-auto p-4"
                    >
                      <span className="font-medium">Products</span>
                      <ChevronDown 
                        className={cn(
                          "w-5 h-5 transition-transform",
                          openMobileMenu === 'products' && "rotate-180"
                        )}
                      />
                    </Button>
                    <AnimatePresence>
                      {openMobileMenu === 'products' && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden space-y-2 pl-4"
                        >
                          <Link
                            href="/"
                            onClick={() => setIsOpen(false)}
                            className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent transition-colors"
                          >
                            <Home className="w-5 h-5" />
                            <div>
                              <div className="font-medium">GameChisel Home</div>
                              <div className="text-sm text-muted-foreground">Main landing page</div>
                            </div>
                          </Link>
                          <a
                            href="https://storsko.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setIsOpen(false)}
                            className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent transition-colors"
                          >
                            <Globe className="w-5 h-5" />
                            <div>
                              <div className="font-medium">Storsko.com</div>
                              <div className="text-sm text-muted-foreground">Partner platform</div>
                            </div>
                          </a>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>



                  {/* Resources Menu */}
                  <div className="space-y-2">
                    <Button
                      variant="ghost"
                      onClick={() => toggleMobileMenu('resources')}
                      className="w-full justify-between h-auto p-4"
                    >
                      <span className="font-medium">Resources</span>
                      <ChevronDown 
                        className={cn(
                          "w-5 h-5 transition-transform",
                          openMobileMenu === 'resources' && "rotate-180"
                        )}
                      />
                    </Button>
                    <AnimatePresence>
                      {openMobileMenu === 'resources' && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden space-y-2 pl-4"
                        >
                          {resourceLinks.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              onClick={() => setIsOpen(false)}
                              className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent transition-colors"
                            >
                              <item.icon className="w-5 h-5" />
                              <div>
                                <div className="font-medium">{item.title}</div>
                                <div className="text-sm text-muted-foreground">{item.description}</div>
                              </div>
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Team Menu */}
                  <div className="space-y-2">
                    <Button
                      variant="ghost"
                      onClick={() => toggleMobileMenu('team')}
                      className="w-full justify-between h-auto p-4"
                    >
                      <span className="font-medium">Team</span>
                      <ChevronDown 
                        className={cn(
                          "w-5 h-5 transition-transform",
                          openMobileMenu === 'team' && "rotate-180"
                        )}
                      />
                    </Button>
                    <AnimatePresence>
                      {openMobileMenu === 'team' && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden space-y-2 pl-4"
                        >
                          <Link
                            href="/team"
                            onClick={() => setIsOpen(false)}
                            className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent transition-colors"
                          >
                            <Users className="w-5 h-5" />
                            <div>
                              <div className="font-medium">Meet the Team</div>
                              <div className="text-sm text-muted-foreground">Team members and values</div>
                            </div>
                          </Link>
                          <Link
                            href="/contact"
                            onClick={() => setIsOpen(false)}
                            className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent transition-colors"
                          >
                            <Mail className="w-5 h-5" />
                            <div>
                              <div className="font-medium">Contact Us</div>
                              <div className="text-sm text-muted-foreground">Get in touch</div>
                            </div>
                          </Link>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Code Link */}
                  <Link
                    href="/github"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between p-4 rounded-lg hover:bg-accent transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <Github className="w-5 h-5" />
                      <span className="font-medium">Source Code</span>
                    </div>
                    <ArrowRight className="w-5 h-5" />
                  </Link>

                  {/* Download Link */}
                  <Link
                    href="/download"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between p-4 rounded-lg hover:bg-accent transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <Download className="w-5 h-5" />
                      <span className="font-bold">Download</span>
                    </div>
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>

              <div className="px-6 py-6 border-t space-y-4">
                {variant === 'landing' && (
                  <>
                    <div className="flex items-center justify-between">
                      <ViewWorkButton href="https://storsko.com">
                        Visit storsko.com
                      </ViewWorkButton>
                      <ThemeToggle />
                    </div>
                    <GoldenButton href="/download" className="w-full whitespace-nowrap" onClick={() => setIsOpen(false)}>
                      <MessageSquare className="w-4 h-4 mr-2" />
                      Get Started
                    </GoldenButton>
                  </>
                )}
                {variant !== 'landing' && (
                  <div className="flex justify-center">
                    <ThemeToggle />
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}