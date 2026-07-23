"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { LoadingScreen } from "@/components/loading-screen"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { Footer } from "@/components/footer"

export default function Home() {
  const [loading, setLoading] = useState(true)

  return (
    <>
      {/* Loading Screen */}
      <AnimatePresence mode="wait">
        {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {/* Main Content */}
      <AnimatePresence mode="wait">
        {!loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Navbar />

            <main>
              <HeroSection />
              <ServicesSection />
            </main>

            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
