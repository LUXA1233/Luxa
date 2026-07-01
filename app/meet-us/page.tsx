"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import {
  MapPin,
  Code2,
  Palette,
  Heart,
  ArrowRight,
  ExternalLink,
  Sparkles,
  Rocket,
} from "lucide-react"

const highlights = [
  {
    icon: Code2,
    title: "Technical Builder",
    description:
      "Years of hands-on programming experience turning complex ideas into fast, reliable products.",
  },
  {
    icon: Palette,
    title: "Design-Minded",
    description:
      "A sharp eye for modern, clean design that balances aesthetics with real usability.",
  },
  {
    icon: Heart,
    title: "Community Impact",
    description:
      "Co-founder of HopeBridge, a nonprofit dedicated to supporting teen mental health.",
  },
]

export default function MeetUsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 md:pt-32 pb-20 overflow-hidden">
        {/* Hero */}
        <section className="container mx-auto px-4 md:px-6 mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 mb-6">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                The People Behind Luxa OS
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              Meet the Founder
            </h1>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed text-pretty">
              Luxa OS is led by driven creators who care deeply about the work
              they ship. Get to know the person steering the vision.
            </p>
          </motion.div>
        </section>

        {/* Founder Card */}
        <section className="container mx-auto px-4 md:px-6 mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <div className="glass rounded-3xl p-6 md:p-10 lg:p-12">
              <div className="grid gap-8 md:gap-12 md:grid-cols-[auto_1fr] items-start">
                {/* Monogram Avatar */}
                <div className="flex flex-col items-center md:items-start">
                  <div className="relative">
                    <div className="flex h-32 w-32 md:h-40 md:w-40 items-center justify-center rounded-3xl bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-lg shadow-primary/20">
                      <span className="text-4xl md:text-5xl font-bold tracking-tight">
                        SP
                      </span>
                    </div>
                    <div className="absolute -bottom-3 -right-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-card border border-border shadow-md">
                      <Rocket className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                  <div className="mt-6 flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span className="text-sm">Washington, USA</span>
                  </div>
                </div>

                {/* Bio */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                    Samvid Prabhu
                  </h2>
                  <p className="mt-1 text-primary font-medium">
                    Founder &amp; CEO
                  </p>

                  <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed text-pretty">
                    <p>
                      Samvid Prabhu is a young entrepreneur with a strong
                      technical foundation and a passion for building products
                      that make a real difference. With several years of
                      programming and design experience, he founded Luxa OS to
                      help businesses turn ambitious ideas into beautiful,
                      high-performance digital experiences.
                    </p>
                    <p>
                      Beyond running Luxa OS, Samvid is a co-founder of{" "}
                      <a
                        href="https://hopebridgeservices.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary font-medium inline-flex items-center gap-1 hover:underline"
                      >
                        HopeBridge
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                      , a nonprofit dedicated to supporting teen mental health.
                      That same commitment to service shapes how he leads Luxa
                      OS, treating every client project as if it were his own.
                    </p>
                    <p>
                      His mission is simple: combine modern technical insight,
                      thoughtful design, and genuine care to help clients{" "}
                      <span className="text-foreground font-medium">
                        Learn, Build, and Grow.
                      </span>
                    </p>
                  </div>

                  <div className="mt-8 flex flex-col sm:flex-row gap-3">
                    <Button
                      className="bg-primary text-primary-foreground hover:bg-primary/90"
                      asChild
                    >
                      <a href="mailto:tryluxa@gmail.com">
                        Work With Us
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                    <Button variant="outline" asChild>
                      <a
                        href="https://hopebridgeservices.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Visit HopeBridge
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Highlights */}
        <section className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {highlights.map((item, index) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="glass rounded-2xl p-6"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </section>

        {/* CTA */}
        <section className="container mx-auto px-4 md:px-6 mt-16 md:mt-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center rounded-3xl bg-gradient-to-br from-primary to-accent p-8 md:p-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4 text-balance">
              Ready to build something great together?
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto text-pretty">
              Whether you need a stunning website or social growth, let&apos;s
              turn your vision into reality.
            </p>
            <Button
              size="lg"
              variant="secondary"
              className="bg-background text-foreground hover:bg-background/90"
              asChild
            >
              <Link href="/#services">
                Explore Our Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  )
}
