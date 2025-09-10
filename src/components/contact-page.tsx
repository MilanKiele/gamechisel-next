"use client"

import { useEffect, useRef } from "react"
import { Mail } from "lucide-react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function ContactPage() {
  // Refs for GSAP animations
  const heroRef = useRef<HTMLElement>(null)
  const contactCardRef = useRef<HTMLDivElement>(null)
  const footerRef = useRef<HTMLElement>(null)

  // GSAP animations setup
  useEffect(() => {
    // Hero section animation
    if (heroRef.current) {
      gsap.fromTo(heroRef.current.children, 
        { y: 60, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 1.2, 
          stagger: 0.2,
          ease: "power3.out"
        }
      )
    }

    // Contact card animation
    if (contactCardRef.current) {
      gsap.fromTo(contactCardRef.current, 
        { scale: 0.9, opacity: 0, y: 40 },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: contactCardRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      )
    }

    // Footer section animation
    if (footerRef.current) {
      gsap.fromTo(footerRef.current.children, 
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      )
    }

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])
  return (
    <main className="min-h-[60vh]">
      {/* Header Section */}
      <section ref={heroRef} className="wrap sp-xl pt-40">
        <div className="subtle">Contact</div>
        <h1 className="title" style={{fontSize: 'clamp(40px,6vw,72px)'}}>
          Get in Touch
        </h1>
        
        {/* Contact Information */}
        <div ref={contactCardRef} className="mt-12 max-w-md mx-auto text-center">
          <div className="flex items-center justify-center gap-3 p-6 rounded-lg bg-muted/50 border">
            <Mail className="h-6 w-6 text-primary" />
            <a 
              href="mailto:mail@gamechisel.net"
              className="text-lg font-medium hover:text-primary transition-colors"
            >
              mail@gamechisel.net
            </a>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            We&apos;d love to hear from you. Send us an email and we&apos;ll get back to you as soon as possible.
          </p>
        </div>
      </section>

      {/* Additional Spacing Section */}
      <section ref={footerRef} className="wrap sp-xl">
        <div className="text-center text-muted-foreground">
          <p className="text-sm">
            Thank you for your interest in GameChisel. We appreciate your support and look forward to hearing from you.
          </p>
        </div>
      </section>
    </main>
  )
}