"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import {
  Globe,
  Box,
  Palette,
  Megaphone,
  Target,
  Bot,
  ArrowRight,
  Sparkles,
  Percent,
  Heart,
  Star,
} from "lucide-react"

const services = [
  {
    id: 1,
    icon: Globe,
    title: "Core Websites",
    description:
      "Fast, modern multiple-page websites built to showcase your services and capture client bookings.",
    href: "/services/core-websites",
    available: true,
    popular: true,
  },
  {
    id: 2,
    icon: Box,
    title: "3D Websites",
    description:
      "High-end, interactive websites that use cinematic 3D effects to make products or houses look amazing.",
    href: "/services/3d-websites",
    available: true,
    popular: false,
  },
  {
    id: 3,
    icon: Palette,
    title: "Logos & Branding",
    description:
      "Clean, professional logo bundles including a main symbol, text layout, and app icon for your business.",
    href: "/services/logos-branding",
    available: true,
    popular: false,
  },
  {
    id: 4,
    icon: Megaphone,
    title: "Social Media & Ads",
    description:
      "Strategic content and paid campaigns to grow your brand and reach the right audience.",
    href: "#",
    available: false,
    popular: false,
  },
  {
    id: 5,
    icon: Target,
    title: "Lead Generation",
    description:
      "Systems that consistently attract and convert qualified leads for your business.",
    href: "#",
    available: false,
    popular: false,
  },
  {
    id: 6,
    icon: Bot,
    title: "AI Automation",
    description:
      "Smart automations that handle repetitive tasks so you can focus on growth.",
    href: "#",
    available: false,
    popular: false,
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
}

export function ServicesSection() {
  return (
    <section id="services" className="relative scroll-mt-24 py-24 md:py-32">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Badge variant="secondary" className="mb-4">
            Our Services
          </Badge>
          <h2 className="mb-4 text-balance text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            Premium Solutions for{" "}
            <span className="text-primary">Modern Businesses</span>
          </h2>
          <p className="mx-auto max-w-2xl text-pretty text-muted-foreground">
            Explore what we build. Click any service to see real examples of our
            work.
          </p>
        </motion.div>

        {/* Discount Banners */}
        <motion.div
          className="mb-12 flex flex-col gap-4 sm:flex-row sm:justify-center sm:gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="glass flex items-center gap-3 rounded-full px-5 py-2.5 text-sm">
            <Percent className="h-4 w-4 text-primary" />
            <span className="text-foreground">
              <strong className="text-primary">15% OFF</strong> when you bundle
              services
            </span>
          </div>
          <div className="glass flex items-center gap-3 rounded-full px-5 py-2.5 text-sm">
            <Heart className="h-4 w-4 text-primary" />
            <span className="text-foreground">
              <strong className="text-primary">50% OFF</strong> for nonprofits
            </span>
          </div>
        </motion.div>

        {/* Service Buttons */}
        <motion.div
          className="mx-auto grid max-w-5xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service) => {
            const Icon = service.icon
            const cardInner = (
              <>
                {/* Popular Badge */}
                {service.popular && (
                  <div className="absolute right-3 top-3">
                    <span className="inline-flex items-center gap-1 rounded-full bg-primary px-2.5 py-1 text-[11px] font-semibold text-primary-foreground">
                      <Star className="h-3 w-3 fill-current" />
                      Most Popular
                    </span>
                  </div>
                )}

                {/* Coming Soon Badge */}
                {!service.available && (
                  <div className="absolute right-3 top-3">
                    <span className="inline-flex items-center gap-1 rounded-full bg-secondary px-2.5 py-1 text-[11px] font-semibold text-muted-foreground">
                      <Sparkles className="h-3 w-3" />
                      Coming Soon
                    </span>
                  </div>
                )}

                <div className="flex items-start gap-4">
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${
                      service.available ? "bg-primary/10" : "bg-secondary"
                    }`}
                  >
                    <Icon
                      className={`h-6 w-6 ${
                        service.available
                          ? "text-primary"
                          : "text-muted-foreground"
                      }`}
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="flex items-center gap-2 text-lg font-bold text-card-foreground">
                      {service.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>
                    {service.available && (
                      <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary">
                        View examples
                        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                      </span>
                    )}
                  </div>
                </div>
              </>
            )

            const baseClasses =
              "group relative h-full rounded-2xl border bg-card p-6 text-left transition-all"

            return (
              <motion.div key={service.id} variants={cardVariants}>
                {service.available ? (
                  <Link
                    href={service.href}
                    className={`${baseClasses} block ${
                      service.popular
                        ? "border-primary/50 shadow-lg shadow-primary/10"
                        : "border-border"
                    } hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10`}
                  >
                    {cardInner}
                  </Link>
                ) : (
                  <div
                    className={`${baseClasses} cursor-not-allowed border-border opacity-70`}
                    aria-disabled="true"
                  >
                    {cardInner}
                  </div>
                )}
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
