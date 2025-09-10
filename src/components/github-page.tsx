"use client"

import GoldenButton from "./ui/golden-button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Github,
  Users,
  Star,
  GitBranch,
  CheckCircle,
  GitCommit,
} from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function GitHubPage() {
  // Refs for GSAP animations
  const heroRef = useRef<HTMLElement>(null)
  const statsRef = useRef<HTMLElement>(null)
  const branchesRef = useRef<HTMLElement>(null)
  const progressRef = useRef<HTMLElement>(null)
  const commitsRef = useRef<HTMLElement>(null)
  const statsRefs = useRef<(HTMLDivElement | null)[]>([])

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

    // Stats section animation
    if (statsRef.current) {
      gsap.fromTo(statsRef.current.querySelectorAll('.stat-card'),
        { y: 60, opacity: 0 },
        {
          y: 0,
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

    // Branches section animation
    if (branchesRef.current) {
      gsap.fromTo(branchesRef.current.querySelectorAll('.branch-card'),
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: branchesRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      )
    }

    // Progress section animation
    if (progressRef.current) {
      gsap.fromTo(progressRef.current.querySelectorAll('.progress-item'),
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: progressRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      )
    }

    // Commits section animation
    if (commitsRef.current) {
      gsap.fromTo(commitsRef.current.querySelectorAll('.commit-item'),
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: commitsRef.current,
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
        {/* Header Section */}
        <section ref={heroRef} className="wrap sp-xl pt-40">
          <div className="subtle">Source Code</div>
          <h1 className="title" style={{fontSize: 'clamp(40px,6vw,72px)'}}>
            GitHub Repository
          </h1>
          
          {/* Description */}
          <div className="mt-8 text-left">
            <p className="text-lg text-muted-foreground">
              Explore our open source Unity project repository. GameChisel is built with modern Unity packages 
              and follows best practices for game development. Browse the code, contribute to the project, 
              or use it as a reference for your own Unity projects.
            </p>
          </div>
          
          {/* GitHub Redirect Button */}
          <div className="mt-8 flex justify-center">
            <GoldenButton 
              onClick={() => window.open('https://github.com/gamechisel/gamechisel', '_blank', 'noopener,noreferrer')}
              className="whitespace-nowrap text-lg px-8 py-4 h-auto"
            >
              <Github className="h-6 w-6 mr-3" />
              View on GitHub
            </GoldenButton>
          </div>
        </section>

        {/* Repository Stats Section */}
        <section ref={statsRef} className="wrap sp-xl">
          <div className="subtle">Repository Statistics</div>
          <h2 className="title" style={{fontSize: 'clamp(40px,6vw,72px)'}}>
            Development Metrics
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <Card className="stat-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Commits</CardTitle>
                <GitCommit className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2</div>
                <p className="text-xs text-muted-foreground">
                  Project started Jan 1, 2025
                </p>
              </CardContent>
            </Card>

            <Card className="stat-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Branches</CardTitle>
                <GitBranch className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1</div>
                <p className="text-xs text-muted-foreground">
                  Main branch active
                </p>
              </CardContent>
            </Card>

            <Card className="stat-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Contributors</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2</div>
                <p className="text-xs text-muted-foreground">
                  Milan + 1 contributor
                </p>
              </CardContent>
            </Card>

            <Card className="stat-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Stars</CardTitle>
                <Star className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">0</div>
                <p className="text-xs text-muted-foreground">
                  Be the first to star!
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Branches Section */}
        <section ref={branchesRef} className="wrap sp-xl">
          <div className="subtle">Repository Branches</div>
          <h2 className="title" style={{fontSize: 'clamp(40px,6vw,72px)'}}>
            Active Development Branches
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <Card className="branch-card">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center">
                    <GitBranch className="w-4 h-4 mr-2" />
                    main
                  </CardTitle>
                  <Badge variant="default">Production</Badge>
                </div>
                <CardDescription>
                  Main development branch for GameChisel Unity project
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Last commit:</span>
                    <span className="text-muted-foreground">Recently</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Commits:</span>
                    <span className="text-muted-foreground">2</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Status:</span>
                    <Badge variant="outline" className="text-green-600 border-green-600">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      Active Development
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Progress Tracking Section */}
        <section ref={progressRef} className="wrap sp-xl">
          <div className="subtle">Development Progress</div>
          <h2 className="title" style={{fontSize: 'clamp(40px,6vw,72px)'}}>
            Project Milestones
          </h2>
          
          <div className="mt-12 space-y-8">
            <div className="progress-item">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">Project Setup & Foundation</h3>
                <Badge variant="default">Completed</Badge>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-primary h-2 rounded-full" style={{width: '100%'}}></div>
              </div>
              <p className="text-muted-foreground mt-2">Unity project initialized with essential packages and structure</p>
            </div>

            <div className="progress-item">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">3D Models + Animation</h3>
                <Badge variant="outline">Planned</Badge>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-primary h-2 rounded-full" style={{width: '10%'}}></div>
              </div>
              <p className="text-muted-foreground mt-2">Character models, animations, and 3D assets - 10% complete</p>
            </div>

            <div className="progress-item">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">Player Movement</h3>
                <Badge variant="outline">Planned</Badge>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-primary h-2 rounded-full" style={{width: '5%'}}></div>
              </div>
              <p className="text-muted-foreground mt-2">Character controller and movement mechanics - 5% complete</p>
            </div>

            <div className="progress-item">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">Combat System</h3>
                <Badge variant="outline">Planned</Badge>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-primary h-2 rounded-full" style={{width: '0%'}}></div>
              </div>
              <p className="text-muted-foreground mt-2">Combat mechanics and weapon systems - Not started</p>
            </div>

            <div className="progress-item">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">World Design</h3>
                <Badge variant="outline">Planned</Badge>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-primary h-2 rounded-full" style={{width: '0%'}}></div>
              </div>
              <p className="text-muted-foreground mt-2">Level design and world building - Not started</p>
            </div>

            <div className="progress-item">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">Multiplayer Synchronization</h3>
                <Badge variant="outline">Planned</Badge>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-primary h-2 rounded-full" style={{width: '0%'}}></div>
              </div>
              <p className="text-muted-foreground mt-2">Netcode for GameObjects integration - Not started</p>
            </div>
          </div>
        </section>


    </main>
  )
}