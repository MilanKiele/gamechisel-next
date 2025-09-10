import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, FileText, Shield, Scale, Building2 } from "lucide-react"

export default async function LegalLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <div className="h-screen bg-background flex flex-col overflow-hidden">
      {/* Fixed Header */}
      <header className="flex-none border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="!bg-transparent hover:!bg-transparent hover:text-accent transition-colors focus:!bg-transparent focus-visible:!bg-transparent active:!bg-transparent data-[state=open]:!bg-transparent" asChild>
                <Link href="/" className="flex items-center space-x-2">
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back to Home</span>
                </Link>
              </Button>
            </div>
            <h1 className="text-lg font-semibold">Legal Documents</h1>
          </div>
        </div>
      </header>

      {/* Content Area */}
      <div className="flex-1 flex overflow-hidden">
        <div className="container mx-auto px-6 py-8 flex-1 flex overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 flex-1 overflow-hidden">
            {/* Sidebar Navigation */}
            <aside className="lg:col-span-1 flex flex-col">
              <nav className="space-y-2">
                <h2 className="text-sm font-medium text-muted-foreground mb-4">Legal Pages</h2>
                
                <Button variant="ghost" className="w-full justify-start !bg-transparent hover:!bg-transparent hover:text-accent transition-colors focus:!bg-transparent focus-visible:!bg-transparent active:!bg-transparent data-[state=open]:!bg-transparent" asChild>
                  <Link href="/terms" className="flex items-center space-x-3">
                    <FileText className="w-4 h-4" />
                    <span>Terms of Service</span>
                  </Link>
                </Button>
                
                <Button variant="ghost" className="w-full justify-start !bg-transparent hover:!bg-transparent hover:text-accent transition-colors focus:!bg-transparent focus-visible:!bg-transparent active:!bg-transparent data-[state=open]:!bg-transparent" asChild>
                  <Link href="/privacy" className="flex items-center space-x-3">
                    <Shield className="w-4 h-4" />
                    <span>Privacy Policy</span>
                  </Link>
                </Button>
                
                <Button variant="ghost" className="w-full justify-start !bg-transparent hover:!bg-transparent hover:text-accent transition-colors focus:!bg-transparent focus-visible:!bg-transparent active:!bg-transparent data-[state=open]:!bg-transparent" asChild>
                  <Link href="/license" className="flex items-center space-x-3">
                    <Scale className="w-4 h-4" />
                    <span>License</span>
                  </Link>
                </Button>
                
                <Button variant="ghost" className="w-full justify-start !bg-transparent hover:!bg-transparent hover:text-accent transition-colors focus:!bg-transparent focus-visible:!bg-transparent active:!bg-transparent data-[state=open]:!bg-transparent" asChild>
                  <Link href="/imprint" className="flex items-center space-x-3">
                    <Building2 className="w-4 h-4" />
                    <span>Imprint</span>
                  </Link>
                </Button>
              </nav>
            </aside>

            {/* Scrollable Main Content */}
            <main className="lg:col-span-3 overflow-y-auto">
              {children}
            </main>
          </div>
        </div>
      </div>
    </div>
  )
}