"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import GoldenButton from "@/components/ui/golden-button"
import { 
  ExternalLink,
  Clock,
  Monitor,
  ArrowDown,
  Smartphone
} from "lucide-react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

// Mock game data - in a real app, this would come from an API
const gameInfo = {
  name: "GameChisel",
  version: "1.0.0",
  build: "2024.1.15",
  size: "2.3 GB",
  lastUpdated: "January 15, 2024",
  downloadCount: 1247,
  rating: 4.8,
  description: "A comprehensive open source Unity collection project that empowers developers to easily deploy custom solutions using open source contributions.",
  features: [
    "3D Action-Adventure Gameplay",
    "Open Source Unity Components",
    "Advanced Camera Control (Cinemachine)",
    "Terrain Tools & Sculpting",
    "Animation Rigging System",
    "Multiplayer Networking (Netcode)",
    "Enhanced Text Rendering (TextMesh Pro)",
    "In-Editor Mesh Modeling (ProBuilder)",
    "Node-based Shader Development",
    "URP Toon Shading Support"
  ],
  requirements: {
    minimum: {
      os: "Windows 10 64-bit / macOS 10.15+ / Ubuntu 18.04+",
      processor: "Intel Core i5-8400 / AMD Ryzen 5 2600",
      memory: "8 GB RAM",
      graphics: "NVIDIA GTX 1060 / AMD RX 580",
      directx: "Version 11",
      storage: "5 GB available space"
    },
    recommended: {
      os: "Windows 11 64-bit / macOS 12+ / Ubuntu 20.04+",
      processor: "Intel Core i7-10700K / AMD Ryzen 7 3700X",
      memory: "16 GB RAM",
      graphics: "NVIDIA RTX 3070 / AMD RX 6700 XT",
      directx: "Version 12",
      storage: "10 GB available space"
    }
  },
  downloads: [
    {
      id: "gamechisel-windows",
      name: "GameChisel for Windows",
      platform: "Windows",
      size: "2.3 GB",
      format: "ZIP",
      url: "#",
      description: "Complete game package for Windows 10/11"
    },
    {
      id: "gamechisel-macos",
      name: "GameChisel for macOS",
      platform: "macOS",
      size: "2.1 GB",
      format: "DMG",
      url: "#",
      description: "Native macOS application"
    },
    {
      id: "gamechisel-linux",
      name: "GameChisel for Linux",
      platform: "Linux",
      size: "2.2 GB",
      format: "TAR.GZ",
      url: "#",
      description: "Linux build with all dependencies"
    },
    {
      id: "gamechisel-ios",
      name: "GameChisel for iOS",
      platform: "iOS",
      size: "1.9 GB",
      format: "IPA",
      url: "#",
      description: "Native iOS application for iPhone and iPad"
    }
  ]
}

export function DownloadPage() {
  const [downloading, setDownloading] = useState<string | null>(null)
  const [downloadProgress, setDownloadProgress] = useState(0)

  // Refs for GSAP animations
  const heroRef = useRef<HTMLElement>(null)
  const gameInfoRef = useRef<HTMLElement>(null)
  const downloadButtonsRef = useRef<HTMLDivElement>(null)
  const requirementsRef = useRef<HTMLElement>(null)

  const handleDownload = async (downloadId: string, url: string) => {
    if (url === "#") {
      // Mock download for demo
      setDownloading(downloadId)
      setDownloadProgress(0)
      
      const interval = setInterval(() => {
        setDownloadProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval)
            setDownloading(null)
            return 0
          }
          return prev + Math.random() * 15
        })
      }, 200)
    } else {
      // External link
      window.open(url, '_blank', 'noopener,noreferrer')
    }
  }

  const exportGameData = () => {
    const data = {
      gameInfo,
      exportDate: new Date().toISOString(),
      exportedBy: "GameChisel Download Page"
    }
    
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `gamechisel-info-${new Date().toISOString().split('T')[0]}.json`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

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

    // Game info section animation
    if (gameInfoRef.current) {
      gsap.fromTo(gameInfoRef.current.querySelectorAll('.game-info-item'),
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: gameInfoRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      )
    }

    // Download buttons animation
    if (downloadButtonsRef.current) {
      gsap.fromTo(downloadButtonsRef.current.querySelectorAll('.download-button'),
        { scale: 0.8, opacity: 0, y: 30 },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: downloadButtonsRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      )
    }

    // Requirements section animation
    if (requirementsRef.current) {
      gsap.fromTo(requirementsRef.current.querySelectorAll('.requirement-item'),
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: requirementsRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      )
    }

    // Add hover animations to download buttons
    if (downloadButtonsRef.current) {
      const buttons = downloadButtonsRef.current.querySelectorAll('.download-button')
      buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
          gsap.to(button, { scale: 1.05, duration: 0.3, ease: "power2.out" })
        })
        button.addEventListener('mouseleave', () => {
          gsap.to(button, { scale: 1, duration: 0.3, ease: "power2.out" })
        })
      })
    }

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <main>
        {/* Header Section */}
        <section ref={heroRef} className="wrap sp-xl pt-40">
          <div className="subtle">Download Center</div>
          <h1 className="title" style={{fontSize: 'clamp(40px,6vw,72px)'}}>
            Download GameChisel
          </h1>
          
          {/* itch.io Description */}
          <div className="mt-8 text-left">
            <p className="text-lg text-muted-foreground mb-6">
              We&apos;ve chosen itch.io as our distribution platform because it&apos;s an amazing community-driven marketplace 
              that supports indie developers and open source projects. Itch.io provides a seamless download experience, 
              automatic updates, and a platform that truly understands the game development community.
            </p>
          </div>
          
          {/* Centered Download Button */}
          <div className="mt-6 flex justify-center">
            <GoldenButton 
              onClick={() => window.open('https://gamechisel.itch.io', '_blank', 'noopener,noreferrer')}
              className="whitespace-nowrap text-lg px-8 py-4 h-auto"
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              Download on itch.io
            </GoldenButton>
          </div>
        </section>

        {/* Game Details - Subtle */}
        <section ref={gameInfoRef} className="wrap sp-lg">
          <div className="text-center mb-12">
            <div className="game-info-item inline-flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
              <span>v{gameInfo.version}</span>
              <span>•</span>
              <span>{gameInfo.size}</span>
              <span>•</span>
              <span>{gameInfo.lastUpdated}</span>
              <span>•</span>
              <span>Unity 2022.3 LTS</span>
            </div>
          </div>

          {/* Download Options */}
          <div ref={downloadButtonsRef} className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {gameInfo.downloads.map((download) => (
            <Card key={download.id} className="download-button relative text-center">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  {/* Platform Icon */}
                  <div className="flex justify-center">
                    {download.platform === 'Windows' && (
                      <Monitor className="h-12 w-12 text-blue-500" />
                    )}
                    {download.platform === 'macOS' && (
                      <Monitor className="h-12 w-12 text-gray-600" />
                    )}
                    {download.platform === 'Linux' && (
                      <Monitor className="h-12 w-12 text-orange-500" />
                    )}
                    {download.platform === 'iOS' && (
                      <Smartphone className="h-12 w-12 text-blue-600" />
                    )}
                  </div>
                  
                  {/* Platform Name */}
                  <div>
                    <h3 className="font-semibold text-sm">{download.platform}</h3>
                    <p className="text-xs text-muted-foreground">{download.size}</p>
                  </div>
                  
                  {/* Download Progress */}
                  {downloading === download.id && (
                    <div className="space-y-2">
                      <Progress value={downloadProgress} className="h-1" />
                      <p className="text-xs text-muted-foreground">
                        {Math.round(downloadProgress)}%
                      </p>
                    </div>
                  )}
                  
                  {/* Download Button */}
                  <Button 
                    onClick={() => handleDownload(download.id, download.url)}
                    disabled={downloading === download.id}
                    className="w-full"
                    size="sm"
                  >
                    {downloading === download.id ? (
                      <Clock className="h-4 w-4 animate-spin" />
                    ) : (
                      <ArrowDown className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
          </div>
        </section>

        {/* System Requirements - Table Format */}
        <section ref={requirementsRef} className="wrap sp-lg">
          <div className="subtle">System Requirements</div>
          <h2 className="title" style={{fontSize: 'clamp(32px,5vw,48px)'}}>
            System Requirements
          </h2>
          
          <div className="grid grid-cols-1 gap-8 mt-8">
            {/* Windows Requirements */}
            <div>
              <h4 className="font-semibold mb-4 text-sm text-blue-600 flex items-center gap-2">
                <Monitor className="h-4 w-4" />
                Windows
              </h4>
              <div className="overflow-hidden border rounded-lg">
                <table className="w-full text-sm">
                  <thead className="bg-muted/50">
                    <tr>
                      <th className="text-left p-3 font-medium">Specification</th>
                      <th className="text-left p-3 font-medium">Minimum</th>
                      <th className="text-left p-3 font-medium">Recommended</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="requirement-item border-t">
                      <td className="p-3 text-muted-foreground">OS</td>
                      <td className="p-3">Windows 10 64-bit</td>
                      <td className="p-3">Windows 11 64-bit</td>
                    </tr>
                    <tr className="requirement-item border-t">
                      <td className="p-3 text-muted-foreground">Processor</td>
                      <td className="p-3">Intel Core i5-8400</td>
                      <td className="p-3">Intel Core i7-10700K</td>
                    </tr>
                    <tr className="requirement-item border-t">
                      <td className="p-3 text-muted-foreground">Memory</td>
                      <td className="p-3">8 GB RAM</td>
                      <td className="p-3">16 GB RAM</td>
                    </tr>
                    <tr className="requirement-item border-t">
                      <td className="p-3 text-muted-foreground">Graphics</td>
                      <td className="p-3">NVIDIA GTX 1060</td>
                      <td className="p-3">NVIDIA RTX 3070</td>
                    </tr>
                    <tr className="requirement-item border-t">
                      <td className="p-3 text-muted-foreground">Storage</td>
                      <td className="p-3">5 GB available</td>
                      <td className="p-3">10 GB available</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* macOS Requirements */}
            <div>
              <h4 className="font-semibold mb-4 text-sm text-gray-600 flex items-center gap-2">
                <Monitor className="h-4 w-4" />
                macOS
              </h4>
              <div className="overflow-hidden border rounded-lg">
                <table className="w-full text-sm">
                  <thead className="bg-muted/50">
                    <tr>
                      <th className="text-left p-3 font-medium">Specification</th>
                      <th className="text-left p-3 font-medium">Minimum</th>
                      <th className="text-left p-3 font-medium">Recommended</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="requirement-item border-t">
                      <td className="p-3 text-muted-foreground">OS</td>
                      <td className="p-3">macOS 10.15+</td>
                      <td className="p-3">macOS 12+</td>
                    </tr>
                    <tr className="requirement-item border-t">
                      <td className="p-3 text-muted-foreground">Processor</td>
                      <td className="p-3">Intel Core i5</td>
                      <td className="p-3">Apple M1 / Intel i7</td>
                    </tr>
                    <tr className="requirement-item border-t">
                      <td className="p-3 text-muted-foreground">Memory</td>
                      <td className="p-3">8 GB RAM</td>
                      <td className="p-3">16 GB RAM</td>
                    </tr>
                    <tr className="requirement-item border-t">
                      <td className="p-3 text-muted-foreground">Graphics</td>
                      <td className="p-3">AMD RX 580</td>
                      <td className="p-3">AMD RX 6700 XT</td>
                    </tr>
                    <tr className="requirement-item border-t">
                      <td className="p-3 text-muted-foreground">Storage</td>
                      <td className="p-3">5 GB available</td>
                      <td className="p-3">10 GB available</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Linux Requirements */}
            <div>
              <h4 className="font-semibold mb-4 text-sm text-orange-600 flex items-center gap-2">
                <Monitor className="h-4 w-4" />
                Linux
              </h4>
              <div className="overflow-hidden border rounded-lg">
                <table className="w-full text-sm">
                  <thead className="bg-muted/50">
                    <tr>
                      <th className="text-left p-3 font-medium">Specification</th>
                      <th className="text-left p-3 font-medium">Minimum</th>
                      <th className="text-left p-3 font-medium">Recommended</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="requirement-item border-t">
                      <td className="p-3 text-muted-foreground">OS</td>
                      <td className="p-3">Ubuntu 18.04+</td>
                      <td className="p-3">Ubuntu 20.04+</td>
                    </tr>
                    <tr className="requirement-item border-t">
                      <td className="p-3 text-muted-foreground">Processor</td>
                      <td className="p-3">AMD Ryzen 5 2600</td>
                      <td className="p-3">AMD Ryzen 7 3700X</td>
                    </tr>
                    <tr className="requirement-item border-t">
                      <td className="p-3 text-muted-foreground">Memory</td>
                      <td className="p-3">8 GB RAM</td>
                      <td className="p-3">16 GB RAM</td>
                    </tr>
                    <tr className="requirement-item border-t">
                      <td className="p-3 text-muted-foreground">Graphics</td>
                      <td className="p-3">NVIDIA GTX 1060</td>
                      <td className="p-3">NVIDIA RTX 3070</td>
                    </tr>
                    <tr className="requirement-item border-t">
                      <td className="p-3 text-muted-foreground">Storage</td>
                      <td className="p-3">5 GB available</td>
                      <td className="p-3">10 GB available</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

    </main>
  )
}