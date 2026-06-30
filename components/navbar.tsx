"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "glass" : "bg-background/80 backdrop-blur-sm"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className={`container mx-auto flex items-center justify-between px-4 md:px-6 transition-all duration-300 ${
          scrolled ? "h-16 md:h-20" : "h-18 md:h-24"
        }`}>
          <motion.div
            className="flex items-center"
            animate={{ scale: scrolled ? 0.9 : 1 }}
            transition={{ duration: 0.3 }}
          >
            <Link href="/">
              <Image
                src="/luxa-full-logo.png"
                alt="Luxa OS - Learn · Build · Grow"
                width={280}
                height={70}
                className="h-10 md:h-14 w-auto object-contain"
                priority
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-10 md:flex">
            <Link
              href="/"
              className={`text-base font-medium transition-colors ${
                pathname === "/"
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Home & Services
            </Link>
            <Link
              href="/proofs-roots"
              className={`text-base font-medium transition-colors ${
                pathname === "/proofs-roots"
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Proofs & Roots
            </Link>
            <Button
              size="sm"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
              asChild
            >
              <a href="mailto:tryluxa@gmail.com">Get Started</a>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex items-center justify-center h-10 w-10 rounded-lg text-foreground hover:bg-muted transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-x-0 top-16 md:hidden z-40"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="glass mx-4 mt-2 rounded-2xl border border-border/50 p-6 shadow-xl">
              <nav className="flex flex-col gap-6">
                <Link
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-lg font-medium transition-colors ${
                    pathname === "/"
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Home & Services
                </Link>
                <Link
                  href="/proofs-roots"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-lg font-medium transition-colors ${
                    pathname === "/proofs-roots"
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Proofs & Roots
                </Link>
                <div className="pt-2 border-t border-border/50">
                  <Button
                    size="lg"
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                    asChild
                  >
                    <a href="mailto:tryluxa@gmail.com">Get Started</a>
                  </Button>
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop for mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-background/60 backdrop-blur-sm z-30 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  )
}
