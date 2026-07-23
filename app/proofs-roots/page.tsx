"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { LoadingScreen } from "@/components/loading-screen"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ExternalLink, Zap, Lightbulb, Rocket, Heart, Code, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "NextNotes",
    description: "Affordable 1-on-1 private Zoom music lessons for students ages 7-18. Learn piano, guitar, drums, and more from passionate young instructors.",
    url: "https://v0-next-notes.vercel.app/",
    image: "/portfolio/nextnotes-preview.png",
    tags: ["Next.js", "React", "Tailwind CSS"],
  },
]

const whyUs = [
  {
    icon: Zap,
    title: "Unmatched Speed",
    description: "We move fast without breaking things. Quick turnarounds, real-time communication, and agile execution.",
  },
  {
    icon: Lightbulb,
    title: "Modern Tech Insights",
    description: "We live and breathe the latest technologies. Your project gets cutting-edge solutions, not outdated approaches.",
  },
  {
    icon: Code,
    title: "Real-World Execution",
    description: "We don't just talk - we deliver. Every project is built to perform, scale, and impress.",
  },
  {
    icon: Heart,
    title: "Your Project = Our Project",
    description: "We treat every client's vision as our own. Your success is our success, period.",
  },
]

export default function ProofsRootsPage() {
  const [loading, setLoading] = useState(true)

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {!loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Navbar />

            <main className="pt-24 md:pt-32 pb-20">
              {/* Hero Section */}
              <section className="container mx-auto px-4 md:px-6 mb-16 md:mb-20">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-center max-w-3xl mx-auto"
                >
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
                    Our Story &{" "}
                    <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      Our Work
                    </span>
                  </h1>
                  <p className="text-lg text-muted-foreground text-pretty">
                    Next-generation creators transforming ideas into reality.
                  </p>
                </motion.div>
              </section>

              {/* About Us - Main Section */}
              <section className="container mx-auto px-4 md:px-6 mb-16 md:mb-24">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="max-w-5xl mx-auto"
                >
                  <div className="glass p-6 md:p-10 lg:p-14 rounded-2xl md:rounded-3xl">
                    <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-12">
                      {/* Left: Icon and Badge */}
                      <div className="flex flex-col items-center lg:items-start gap-4">
                        <div className="relative">
                          <div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl bg-gradient-to-br from-primary to-accent p-[2px]">
                            <div className="w-full h-full rounded-2xl bg-card flex items-center justify-center">
                              <Rocket className="w-10 h-10 md:w-14 md:h-14 text-primary" />
                            </div>
                          </div>
                          <div className="absolute -bottom-2 -right-2 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                            Teen-Led
                          </div>
                        </div>
                      </div>

                      {/* Right: Content */}
                      <div className="flex-1 text-center lg:text-left">
                        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                          Who We Are
                        </h2>
                        <p className="text-muted-foreground leading-relaxed text-base md:text-lg mb-6">
                          Luxa OS is a premium digital agency founded by next-generation creators dedicated 
                          to transforming ideas into reality. We specialize in crafting beautiful, high-performance 
                          websites and driving social media growth for businesses of all sizes. As a teen-led team, 
                          we bring unmatched speed, modern tech insights, and real-world execution to the table.
                        </p>
                        <p className="text-muted-foreground leading-relaxed text-base md:text-lg mb-6">
                          Our mission is simple: help you{" "}
                          <span className="text-primary font-semibold">Learn</span>,{" "}
                          <span className="text-primary font-semibold">Build</span>, and{" "}
                          <span className="text-primary font-semibold">Grow</span>. With a commitment to 
                          excellence and a passion for innovation, we treat every project as our own, 
                          ensuring exceptional results that exceed expectations.
                        </p>
                        <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                          <a href="mailto:tryluxa@gmail.com">
                            Work With Us
                            <ExternalLink className="ml-2 h-4 w-4" />
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </section>

              {/* Why Choose Us Grid */}
              <section className="container mx-auto px-4 md:px-6 mb-16 md:mb-24">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3 text-center">
                    Why Luxa OS?
                  </h2>
                  <p className="text-muted-foreground text-center mb-8 md:mb-12 max-w-2xl mx-auto">
                    What makes us different from the rest.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {whyUs.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                        whileHover={{ y: -4 }}
                        className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all text-center"
                      >
                        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 mx-auto mb-4">
                          <item.icon className="h-7 w-7 text-primary" />
                        </div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </section>

              {/* Stats Banner */}
              <section className="container mx-auto px-4 md:px-6 mb-16 md:mb-24">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="bg-gradient-to-r from-primary/10 via-primary/5 to-accent/10 rounded-2xl md:rounded-3xl p-8 md:p-12"
                >
                  <div className="grid grid-cols-3 gap-4 md:gap-8 text-center">
                    <div>
                      <div className="text-3xl md:text-5xl font-bold text-primary mb-2">5+</div>
                      <div className="text-sm md:text-base text-muted-foreground">Projects Delivered</div>
                    </div>
                    <div>
                      <div className="text-3xl md:text-5xl font-bold text-primary mb-2">100%</div>
                      <div className="text-sm md:text-base text-muted-foreground">Client Satisfaction</div>
                    </div>
                    <div>
                      <div className="text-3xl md:text-5xl font-bold text-primary mb-2">24/7</div>
                      <div className="text-sm md:text-base text-muted-foreground">Support Available</div>
                    </div>
                  </div>
                </motion.div>
              </section>

              {/* Portfolio / Proofs Section */}
              <section className="container mx-auto px-4 md:px-6">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                >
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <TrendingUp className="h-6 w-6 text-primary" />
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                      Our Work
                    </h2>
                  </div>
                  <p className="text-muted-foreground text-center mb-8 md:mb-12 max-w-2xl mx-auto">
                    Real projects. Real results. See what we&apos;ve built for our clients.
                  </p>

                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 md:gap-8">
                    {projects.map((project, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                        whileHover={{ y: -8, scale: 1.02 }}
                        className="group relative overflow-hidden rounded-2xl bg-card border border-border"
                      >
                        <div className="relative aspect-video bg-secondary overflow-hidden">
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>

                        <div className="p-6">
                          <h3 className="text-xl font-semibold text-foreground mb-2">
                            {project.title}
                          </h3>
                          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                            {project.description}
                          </p>

                          <div className="flex flex-wrap gap-2 mb-4">
                            {project.tags.map((tag, tagIndex) => (
                              <span
                                key={tagIndex}
                                className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>

                          <Link
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                          >
                            Visit Website
                            <ExternalLink className="h-4 w-4" />
                          </Link>
                        </div>
                      </motion.div>
                    ))}

                    {/* More Coming Soon Card */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8, duration: 0.5 }}
                      className="relative overflow-hidden rounded-2xl bg-card border border-dashed border-border flex items-center justify-center min-h-[300px]"
                    >
                      <div className="text-center p-6">
                        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                          <Rocket className="h-8 w-8 text-primary" />
                        </div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">
                          More Coming Soon
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          We&apos;re working on exciting new projects. Stay tuned!
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </section>
            </main>

            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
