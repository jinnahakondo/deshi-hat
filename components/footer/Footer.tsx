import React from "react"
import Link from "next/link"
import { Globe, Network, Terminal } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full bg-background text-foreground border-t border-border py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12">
          
          {/* Left Column: Brand & Description */}
          <div className="md:col-span-6 flex flex-col gap-4">
            <h2 className="text-xl font-bold tracking-tight">Aetheria</h2>
            <p className="text-muted-foreground max-w-sm text-sm leading-relaxed">
              The world&apos;s leading marketplace for AI-enhanced hardware and intelligent software solutions. 
              Empowering humans through precision technology.
            </p>
            {/* Social / Tool Icons */}
            <div className="flex items-center gap-4 mt-2 text-muted-foreground">
              <Link href="#" className="hover:text-foreground transition-colors" aria-label="Global">
                <Globe className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-foreground transition-colors" aria-label="Network">
                <Network className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-foreground transition-colors" aria-label="Terminal">
                <Terminal className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Right Columns: Links */}
          <div className="md:col-span-6 grid grid-cols-3 gap-4">
            
            {/* Marketplace Links */}
            <div className="flex flex-col gap-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-foreground">
                Marketplace
              </h3>
              <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
                <li><Link href="#" className="hover:text-foreground transition-colors">Quantum Wear</Link></li>
                <li><Link href="#" className="hover:text-foreground transition-colors">Neural Rigs</Link></li>
                <li><Link href="#" className="hover:text-foreground transition-colors">Smart Ecosystems</Link></li>
              </ul>
            </div>

            {/* Resources Links */}
            <div className="flex flex-col gap-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-foreground">
                Resources
              </h3>
              <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
                <li><Link href="#" className="hover:text-foreground transition-colors">AI Ethics</Link></li>
                <li><Link href="#" className="hover:text-foreground transition-colors">Shipping Info</Link></li>
                <li><Link href="#" className="hover:text-foreground transition-colors">Documentation</Link></li>
              </ul>
            </div>

            {/* Legal Links */}
            <div className="flex flex-col gap-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-foreground">
                Legal
              </h3>
              <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
                <li><Link href="#" className="hover:text-foreground transition-colors">Privacy Policy</Link></li>
                <li><Link href="#" className="hover:text-foreground transition-colors">Terms of Service</Link></li>
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom Bar (Un-flipped from the source image reference) */}
        <div className="pt-6 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <div>
            &copy; {new Date().getFullYear()} Aetheria Marketplace. Powered by Precision AI.
          </div>
          <div className="flex items-center gap-6">
            <span>System Status: <span className="text-emerald-500 font-medium">Optimal</span></span>
            <span className="font-mono">v4.2.0-Alpha</span>
          </div>
        </div>
        
      </div>
    </footer>
  )
}