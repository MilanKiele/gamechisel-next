import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function OpenLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Gradient background effect */}
      <div className="fixed inset-0 z-0 bg-gradient-to-br from-background/20 via-background/5 to-transparent pointer-events-none" />
      
      {/* Content */}
      <div className="relative z-10">
        <Navigation variant="landing" />
        {children}
        <Footer />
      </div>
    </div>
  )
}