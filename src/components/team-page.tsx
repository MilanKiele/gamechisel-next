"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Github, 
  Users, 
  Zap, 
  Shield, 
  Globe,
  Heart,
  Linkedin,
  Twitter,
  MapPin,
  Award,
  GraduationCap,
  Gamepad2,
  Palette,
  Cpu,
  Database,
  Smartphone
} from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function TeamPage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const carouselRef = useRef<HTMLDivElement>(null)
  const totalSlides = 3

  // Refs for GSAP animations
  const teamRef = useRef<HTMLElement>(null)
  const statsRef = useRef<HTMLElement>(null)
  const valuesRef = useRef<HTMLElement>(null)
  const joinRef = useRef<HTMLElement>(null)
  const statsRefs = useRef<(HTMLDivElement | null)[]>([])

  // Carousel scroll functions
  const scrollCarousel = (direction: 'left' | 'right') => {
    if (!carouselRef.current) return
    
    const newSlide = direction === 'left' ? currentSlide - 1 : currentSlide + 1
    if (newSlide >= 0 && newSlide < totalSlides) {
      setCurrentSlide(newSlide)
      setCanScrollLeft(newSlide > 0)
      setCanScrollRight(newSlide < totalSlides - 1)
    }
  }

  // GSAP animations setup
  useEffect(() => {

    // Team section animation
    if (teamRef.current) {
      gsap.fromTo(teamRef.current.querySelectorAll('.team-card'),
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: teamRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      )
    }

    // Stats section animation
    if (statsRef.current) {
      gsap.fromTo(statsRef.current.querySelectorAll('.stat-card'),
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      )
    }

    // Values section animation
    if (valuesRef.current) {
      gsap.fromTo(valuesRef.current.querySelectorAll('.value-card'),
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: valuesRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      )
    }

    // Join section animation
    if (joinRef.current) {
      gsap.fromTo(joinRef.current.querySelectorAll('.join-item'),
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: joinRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      )
    }

    // Statistics bars animation
    statsRefs.current.forEach((ref, index) => {
      if (ref) {
        gsap.fromTo(ref.querySelector('.meter > i'),
          { width: '0%' },
          {
            width: ref.dataset.width || '0%',
            duration: 1.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ref,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          }
        )
      }
    })

  }, [])

  return (
    <main>


        {/* Team Members Section */}
        <section ref={teamRef} className="wrap sp-xl pt-40">
          <div className="subtle">Meet the Team</div>
          <h2 className="title" style={{fontSize: 'clamp(40px,6vw,72px)'}}>
            The People Behind Gamechisel
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {/* Milan - Founder */}
            <Card className="team-card relative">
              <div className="absolute -top-3 left-6">
                <Badge variant="default" className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white">
                  <Award className="w-3 h-3 mr-1" />
                  Founder
                </Badge>
              </div>
              <CardHeader className="text-center pt-8">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">M</span>
                </div>
                <CardTitle className="text-xl">Milan</CardTitle>
                <CardDescription className="text-base font-medium">Founder & Lead Developer</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground text-sm mb-4">
                  Visionary leader with 10+ years in Unity development. Passionate about creating tools that empower developers worldwide.
                </p>
                <div className="flex items-center justify-center space-x-2 mb-4">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Remote</span>
                </div>
                <div className="flex items-center justify-center space-x-4">
                  <Button variant="outline" size="sm">
                    <Github className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <Linkedin className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <Twitter className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Sarah - Lead Designer */}
            <Card className="team-card">
              <CardHeader className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-pink-500 to-rose-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">S</span>
                </div>
                <CardTitle className="text-xl">Sarah Chen</CardTitle>
                <CardDescription className="text-base font-medium">Lead UI/UX Designer</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground text-sm mb-4">
                  Creative designer with expertise in game UI and user experience. Loves creating intuitive interfaces that developers love to use.
                </p>
                <div className="flex items-center justify-center space-x-2 mb-4">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">San Francisco, CA</span>
                </div>
                <div className="flex items-center justify-center space-x-4">
                  <Button variant="outline" size="sm">
                    <Github className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <Linkedin className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <Palette className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Alex - 3D Artist */}
            <Card className="team-card">
              <CardHeader className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">A</span>
                </div>
                <CardTitle className="text-xl">Alex Rodriguez</CardTitle>
                <CardDescription className="text-base font-medium">3D Artist & Technical Artist</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground text-sm mb-4">
                  Talented 3D artist specializing in game assets and technical implementation. Creates stunning visual experiences.
                </p>
                <div className="flex items-center justify-center space-x-2 mb-4">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Barcelona, Spain</span>
                </div>
                <div className="flex items-center justify-center space-x-4">
                  <Button variant="outline" size="sm">
                    <Github className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <Linkedin className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <Gamepad2 className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* David - Backend Developer */}
            <Card className="team-card">
              <CardHeader className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-red-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">D</span>
                </div>
                <CardTitle className="text-xl">David Kim</CardTitle>
                <CardDescription className="text-base font-medium">Backend Developer</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground text-sm mb-4">
                  Backend specialist focused on scalable architecture and performance optimization. Ensures our tools run smoothly at scale.
                </p>
                <div className="flex items-center justify-center space-x-2 mb-4">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Seoul, South Korea</span>
                </div>
                <div className="flex items-center justify-center space-x-4">
                  <Button variant="outline" size="sm">
                    <Github className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <Linkedin className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <Database className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Emma - Mobile Developer */}
            <Card className="team-card">
              <CardHeader className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">E</span>
                </div>
                <CardTitle className="text-xl">Emma Thompson</CardTitle>
                <CardDescription className="text-base font-medium">Mobile Developer</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground text-sm mb-4">
                  Mobile development expert with deep knowledge of iOS and Android platforms. Makes our tools accessible on all devices.
                </p>
                <div className="flex items-center justify-center space-x-2 mb-4">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">London, UK</span>
                </div>
                <div className="flex items-center justify-center space-x-4">
                  <Button variant="outline" size="sm">
                    <Github className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <Linkedin className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <Smartphone className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* James - DevOps Engineer */}
            <Card className="team-card">
              <CardHeader className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">J</span>
                </div>
                <CardTitle className="text-xl">James Wilson</CardTitle>
                <CardDescription className="text-base font-medium">DevOps Engineer</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground text-sm mb-4">
                  Infrastructure specialist ensuring our development pipeline runs smoothly. Keeps everything automated and reliable.
                </p>
                <div className="flex items-center justify-center space-x-2 mb-4">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Austin, TX</span>
                </div>
                <div className="flex items-center justify-center space-x-4">
                  <Button variant="outline" size="sm">
                    <Github className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <Linkedin className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <Cpu className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Team Values Section */}
        <section ref={valuesRef} className="wrap sp-xl">
          <div className="subtle">Our Values</div>
          <h2 className="title" style={{fontSize: 'clamp(40px,6vw,72px)'}}>
            What Drives Us
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <Card className="value-card">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Passion for Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We&apos;re passionate about creating the best possible tools for Unity developers. Every line of code is written with care and attention to detail.
                </p>
              </CardContent>
            </Card>

            <Card className="value-card">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Collaboration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We believe in the power of teamwork. Our diverse team brings together different perspectives and skills to create something amazing.
                </p>
              </CardContent>
            </Card>

            <Card className="value-card">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We&apos;re always pushing the boundaries of what&apos;s possible with Unity. Innovation is at the heart of everything we do.
                </p>
              </CardContent>
            </Card>

            <Card className="value-card">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Open Source</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We believe in the power of open source. Our tools are freely available to help the entire Unity community grow and succeed.
                </p>
              </CardContent>
            </Card>

            <Card className="value-card">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Continuous Learning</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Technology evolves rapidly, and so do we. We&apos;re committed to continuous learning and staying at the forefront of Unity development.
                </p>
              </CardContent>
            </Card>

            <Card className="value-card">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Quality & Reliability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We build tools that developers can rely on. Quality and reliability are non-negotiable in everything we create.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

    </main>
  )
}