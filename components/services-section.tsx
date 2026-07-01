"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, Globe, TrendingUp, GraduationCap, Sparkles, Percent, Heart } from "lucide-react"

const services = [
  {
    id: 1,
    icon: Globe,
    title: "Premium Web Development",
    price: "$490",
    priceType: "One-Time Payment",
    description:
      "Custom high-converting designs built for performance and results.",
    features: [
      "Custom high-converting designs",
      "Lightning-fast performance",
      "Full SEO setup included",
      "Mobile-first responsive",
      "Analytics integration",
    ],
    featured: true,
    available: true,
    formUrl: "/get-started/web",
  },
  {
    id: 2,
    icon: TrendingUp,
    title: "Social Growth & SMM",
    price: "190",
    priceType: "/Month",
    description:
      "Strategic social media management to grow your brand organically.",
    features: [
      "3-4 hyper-targeted posts/week",
      "Organic growth strategies",
      "Custom graphic design",
      "Engagement optimization",
      "Monthly analytics reports",
    ],
    featured: false,
    available: true,
    formUrl: "/get-started/smm",
  },
  {
    id: 3,
    icon: GraduationCap,
    title: "Student Enrichment Program",
    price: "TBA",
    priceType: "",
    description:
      "Business, marketing, and modern coding workshops for youth.",
    features: [
      "Business fundamentals",
      "Digital marketing basics",
      "Modern coding workshops",
      "Hands-on projects",
      "Mentorship included",
    ],
    featured: false,
    available: false,
    formUrl: "#",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

export function ServicesSection() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="mb-16 text-center"
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
            Choose from our carefully crafted service packages designed to
            elevate your digital presence and accelerate growth.
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
              <strong className="text-primary">15% OFF</strong> when you bundle Web + SMM
            </span>
          </div>
          <div className="glass flex items-center gap-3 rounded-full px-5 py-2.5 text-sm">
            <Heart className="h-4 w-4 text-primary" />
            <span className="text-foreground">
              <strong className="text-primary">50% OFF</strong> for nonprofits
            </span>
          </div>
        </motion.div>

        {/* Bento Grid - Single column on mobile, 2 cols on tablet, 3 on desktop */}
        <motion.div
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              whileHover={{ scale: service.available ? 1.02 : 1, y: service.available ? -5 : 0 }}
              className={`relative overflow-hidden rounded-2xl border bg-card p-8 transition-all ${
                service.featured
                  ? "border-primary/50 shadow-lg shadow-primary/10"
                  : "border-border"
              } ${!service.available ? "overflow-hidden" : ""}`}
            >
              {/* Coming Soon Overlay */}
              {!service.available && (
                <div className="absolute inset-0 z-10 flex items-center justify-center bg-background/80 backdrop-blur-sm">
                  <motion.div
                    className="flex flex-col items-center"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <div className="animate-glow rounded-full bg-primary px-6 py-3 text-lg font-bold text-primary-foreground">
                      <Sparkles className="mr-2 inline h-5 w-5" />
                      Coming Soon
                    </div>
                    <p className="mt-3 text-sm text-muted-foreground">
                      Stay tuned for updates
                    </p>
                  </motion.div>
                </div>
              )}

              {/* Featured Badge */}
              {service.featured && (
                <div className="absolute right-4 top-4">
                  <Badge className="bg-primary text-primary-foreground">
                    Most Popular
                  </Badge>
                </div>
              )}

              {/* Icon */}
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                <service.icon className="h-7 w-7 text-primary" />
              </div>

              {/* Title */}
              <h3 className="mb-2 text-xl font-bold text-card-foreground">
                {service.title}
              </h3>

              {/* Price */}
              <div className="mb-4">
                <span className="text-3xl font-bold text-primary">
                  {service.price}
                </span>
                <span className="text-muted-foreground">{service.priceType}</span>
              </div>

              {/* Description */}
              <p className="mb-6 text-sm text-muted-foreground">
                {service.description}
              </p>

              {/* Features */}
              <ul className="mb-8 space-y-3">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3 text-sm">
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10">
                      <Check className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-card-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              {service.available ? (
                <Button
                  asChild
                  className={`w-full ${
                    service.featured
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  }`}
                >
                  <Link href={service.formUrl}>Get Started</Link>
                </Button>
              ) : (
                <Button
                  className="w-full bg-secondary text-secondary-foreground"
                  disabled
                >
                  Coming Soon
                </Button>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
