"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ArrowRight, Check } from "lucide-react"

type Example = {
  image: string
  title: string
  tag: string
}

type ServiceDetailProps = {
  badge: string
  title: string
  highlight: string
  description: string
  features: string[]
  examples: Example[]
  ctaLabel: string
  ctaHref: string
}

export function ServiceDetail({
  badge,
  title,
  highlight,
  description,
  features,
  examples,
  ctaLabel,
  ctaHref,
}: ServiceDetailProps) {
  return (
    <>
      <Navbar />
      <main className="pt-28 md:pt-32 pb-20">
        {/* Hero */}
        <section className="container mx-auto px-4 md:px-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <Link
              href="/#services"
              className="mb-6 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to services
            </Link>
            <Badge variant="secondary" className="mb-4 block w-fit mx-auto">
              {badge}
            </Badge>
            <h1 className="mb-5 text-balance text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
              {title} <span className="text-primary">{highlight}</span>
            </h1>
            <p className="mx-auto max-w-2xl text-pretty text-base md:text-lg text-muted-foreground leading-relaxed">
              {description}
            </p>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-3"
          >
            {features.map((feature, index) => (
              <span
                key={index}
                className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm text-foreground"
              >
                <Check className="h-4 w-4 text-primary" />
                {feature}
              </span>
            ))}
          </motion.div>
        </section>

        {/* Examples Gallery */}
        <section className="container mx-auto px-4 md:px-6 mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-8 text-center text-2xl md:text-3xl font-bold text-foreground"
          >
            Example Work
          </motion.h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {examples.map((example, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group overflow-hidden rounded-2xl border border-border bg-card"
              >
                <div className="relative aspect-video overflow-hidden bg-secondary">
                  <Image
                    src={example.image || "/placeholder.svg"}
                    alt={example.title}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <span className="text-xs font-medium uppercase tracking-wide text-primary">
                    {example.tag}
                  </span>
                  <h3 className="mt-1 text-base font-semibold text-card-foreground">
                    {example.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-4xl rounded-3xl bg-gradient-to-br from-primary to-accent p-8 md:p-12 text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground">
              Ready to get started?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-primary-foreground/80">
              Tell us about your project and we&apos;ll bring your vision to
              life.
            </p>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="mt-6 group"
            >
              <Link href={ctaHref}>
                {ctaLabel}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  )
}
