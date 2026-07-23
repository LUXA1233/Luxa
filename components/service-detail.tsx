"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ArrowRight, Check, ExternalLink, Maximize2, X } from "lucide-react"

type Example = {
  image: string
  title: string
  tag: string
  href?: string
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
  const [lightboxImage, setLightboxImage] = useState<Example | null>(null)

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
            {examples.map((example, index) => {
              const isLink = Boolean(example.href)
              const cardInner = (
                <>
                  <div className="relative aspect-video overflow-hidden bg-secondary">
                    <Image
                      src={example.image || "/placeholder.svg"}
                      alt={example.title}
                      fill
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-background/60 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                      <span className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground">
                        {isLink ? (
                          <>
                            <ExternalLink className="h-4 w-4" />
                            Visit site
                          </>
                        ) : (
                          <>
                            <Maximize2 className="h-4 w-4" />
                            View full
                          </>
                        )}
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <span className="text-xs font-medium uppercase tracking-wide text-primary">
                      {example.tag}
                    </span>
                    <h3 className="mt-1 text-base font-semibold text-card-foreground">
                      {example.title}
                    </h3>
                  </div>
                </>
              )

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="group overflow-hidden rounded-2xl border border-border bg-card"
                >
                  {isLink ? (
                    <a
                      href={example.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      {cardInner}
                    </a>
                  ) : (
                    <button
                      type="button"
                      onClick={() => setLightboxImage(example)}
                      className="block w-full text-left"
                    >
                      {cardInner}
                    </button>
                  )}
                </motion.div>
              )
            })}
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

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-background/90 p-4 backdrop-blur-sm"
            onClick={() => setLightboxImage(null)}
          >
            <button
              type="button"
              onClick={() => setLightboxImage(null)}
              className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-card text-foreground transition-colors hover:bg-secondary"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative max-h-[85vh] w-full max-w-4xl overflow-hidden rounded-2xl border border-border bg-card"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={lightboxImage.image || "/placeholder.svg"}
                alt={lightboxImage.title}
                width={1200}
                height={800}
                className="h-auto w-full object-contain"
              />
              <div className="p-5">
                <span className="text-xs font-medium uppercase tracking-wide text-primary">
                  {lightboxImage.tag}
                </span>
                <h3 className="mt-1 text-lg font-semibold text-card-foreground">
                  {lightboxImage.title}
                </h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
