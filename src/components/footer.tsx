"use client"

import { Github, Linkedin, Twitter, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background py-16">
      <div className="wrap">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div>
            <h5 className="text-sm uppercase tracking-wider text-muted-foreground mb-2.5 font-semibold">G.</h5>
            <div className="subtle text-xs">Open Source Unity Collection</div>
            <div className="flex gap-4 mt-4">
              <a
                href="https://github.com/gamechisel"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com/company/gamechisel"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://twitter.com/gamechisel"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={24} />
              </a>
              <a
                href="mailto:support@gamechisel.com"
                className="text-muted-foreground hover:text-accent transition-colors"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
          <div>
            <h5 className="text-sm uppercase tracking-wider text-muted-foreground mb-2.5 font-semibold">Platform</h5>
            <div className="space-y-2">
              <a href="/github" className="block text-foreground hover:text-accent transition-colors py-2 relative after:content-[''] after:absolute after:left-0 after:bottom-1 after:h-0.5 after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full">
                GitHub Repository
              </a>
              <a href="/team" className="block text-foreground hover:text-accent transition-colors py-2 relative after:content-[''] after:absolute after:left-0 after:bottom-1 after:h-0.5 after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full">
                Team
              </a>
              <a href="/download" className="block text-foreground hover:text-accent transition-colors py-2 relative after:content-[''] after:absolute after:left-0 after:bottom-1 after:h-0.5 after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full">
                Download
              </a>
            </div>
          </div>
          <div>
            <h5 className="text-sm uppercase tracking-wider text-muted-foreground mb-2.5 font-semibold">Community</h5>
            <div className="space-y-2">
              <a href="https://github.com/gamechisel/gamechisel" target="_blank" rel="noopener noreferrer" className="block text-foreground hover:text-accent transition-colors py-2 relative after:content-[''] after:absolute after:left-0 after:bottom-1 after:h-0.5 after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full">
                GitHub Repository
              </a>
              <a href="https://github.com/gamechisel/gamechisel/discussions" target="_blank" rel="noopener noreferrer" className="block text-foreground hover:text-accent transition-colors py-2 relative after:content-[''] after:absolute after:left-0 after:bottom-1 after:h-0.5 after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full">
                GitHub Discussions
              </a>
              <a href="https://github.com/gamechisel/gamechisel/issues" target="_blank" rel="noopener noreferrer" className="block text-foreground hover:text-accent transition-colors py-2 relative after:content-[''] after:absolute after:left-0 after:bottom-1 after:h-0.5 after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full">
                Report Issues
              </a>
            </div>
          </div>
          <div>
            <h5 className="text-sm uppercase tracking-wider text-muted-foreground mb-2.5 font-semibold">Support</h5>
            <div className="space-y-2">
              <a href="https://github.com/gamechisel/gamechisel/wiki" target="_blank" rel="noopener noreferrer" className="block text-foreground hover:text-accent transition-colors py-2 relative after:content-[''] after:absolute after:left-0 after:bottom-1 after:h-0.5 after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full">
                Documentation
              </a>
              <a href="mailto:support@gamechisel.com" className="block text-foreground hover:text-accent transition-colors py-2 relative after:content-[''] after:absolute after:left-0 after:bottom-1 after:h-0.5 after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full">
                Contact
              </a>
              <a href="/license" className="block text-foreground hover:text-accent transition-colors py-2 relative after:content-[''] after:absolute after:left-0 after:bottom-1 after:h-0.5 after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full">
                License
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright and Legal Links */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} GameChisel. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a 
                href="/privacy" 
                className="text-sm text-muted-foreground hover:text-accent transition-colors"
              >
                Privacy Policy
              </a>
              <a 
                href="/terms" 
                className="text-sm text-muted-foreground hover:text-accent transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}