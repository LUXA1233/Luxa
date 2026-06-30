"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Globe, Check, Loader2 } from "lucide-react"

export default function WebFormPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    const form = e.currentTarget
    const formData = new FormData(form)
    
    // TODO: Replace with your Formspree endpoint
    // Example: https://formspree.io/f/your-form-id
    try {
      const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })
      
      if (response.ok) {
        setIsSubmitted(true)
      }
    } catch (error) {
      console.error("Form submission error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-md"
        >
          <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
            <Check className="h-10 w-10 text-primary" />
          </div>
          <h1 className="text-2xl font-bold text-foreground mb-4">
            Request Submitted!
          </h1>
          <p className="text-muted-foreground mb-8">
            Thanks for reaching out! We&apos;ll review your project details and get back to you within 24-48 hours.
          </p>
          <Button asChild>
            <Link href="/">Back to Home</Link>
          </Button>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 glass">
        <div className="container mx-auto flex items-center justify-between h-20 px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="h-4 w-4" />
            <span className="text-sm">Back</span>
          </Link>
          <Image
            src="/luxa-full-logo.png"
            alt="Luxa OS"
            width={160}
            height={40}
            className="h-10 w-auto object-contain"
          />
          <div className="w-16" />
        </div>
      </header>

      {/* Form Section */}
      <main className="container mx-auto px-4 md:px-6 py-12 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto"
        >
          {/* Form Header */}
          <div className="text-center mb-10">
            <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
              <Globe className="h-7 w-7 text-primary" />
            </div>
            <Badge variant="secondary" className="mb-4">
              Web Development
            </Badge>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Let&apos;s Build Your Website
            </h1>
            <p className="text-muted-foreground">
              Tell us about your project and we&apos;ll create something amazing together.
            </p>
            <div className="mt-4 inline-flex items-center gap-2 text-sm text-primary">
              <span className="font-semibold">$270</span>
              <span className="text-muted-foreground">One-Time Payment</span>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="glass rounded-2xl p-6 md:p-8 space-y-6">
            {/* Contact Info */}
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-foreground">
                  Full Name *
                </label>
                <Input
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-foreground">
                  Email Address *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  required
                />
              </div>
            </div>

            {/* Business Info */}
            <div className="space-y-2">
              <label htmlFor="business" className="text-sm font-medium text-foreground">
                Business / Project Name *
              </label>
              <Input
                id="business"
                name="business"
                placeholder="Your Business Name"
                required
              />
            </div>

            {/* Website Type */}
            <div className="space-y-2">
              <label htmlFor="website-type" className="text-sm font-medium text-foreground">
                What type of website do you need? *
              </label>
              <select
                id="website-type"
                name="website_type"
                required
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <option value="">Select an option</option>
                <option value="landing">Landing Page</option>
                <option value="portfolio">Portfolio / Personal Site</option>
                <option value="business">Business Website</option>
                <option value="ecommerce">E-Commerce Store</option>
                <option value="webapp">Web Application</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Pages Needed */}
            <div className="space-y-2">
              <label htmlFor="pages" className="text-sm font-medium text-foreground">
                What pages do you need? *
              </label>
              <textarea
                id="pages"
                name="pages"
                placeholder="e.g., Home, About, Services, Contact, Blog..."
                required
                rows={3}
                className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              />
            </div>

            {/* Features */}
            <div className="space-y-2">
              <label htmlFor="features" className="text-sm font-medium text-foreground">
                Any specific features you want?
              </label>
              <textarea
                id="features"
                name="features"
                placeholder="e.g., Contact form, Newsletter signup, Gallery, Booking system..."
                rows={3}
                className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              />
            </div>

            {/* Design References */}
            <div className="space-y-2">
              <label htmlFor="design" className="text-sm font-medium text-foreground">
                Any design references or inspiration?
              </label>
              <textarea
                id="design"
                name="design_references"
                placeholder="Share links to websites you like or describe your preferred style..."
                rows={3}
                className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              />
            </div>

            {/* Nonprofit Checkbox */}
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="nonprofit"
                name="nonprofit"
                value="yes"
                className="h-4 w-4 rounded border-input"
              />
              <label htmlFor="nonprofit" className="text-sm text-foreground">
                This is for a nonprofit organization <span className="text-primary">(50% discount applies)</span>
              </label>
            </div>

            {/* Bundle Interest */}
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="bundle"
                name="bundle_interest"
                value="yes"
                className="h-4 w-4 rounded border-input"
              />
              <label htmlFor="bundle" className="text-sm text-foreground">
                I&apos;m also interested in Social Media Management <span className="text-primary">(15% bundle discount)</span>
              </label>
            </div>

            {/* Additional Notes */}
            <div className="space-y-2">
              <label htmlFor="notes" className="text-sm font-medium text-foreground">
                Anything else we should know?
              </label>
              <textarea
                id="notes"
                name="additional_notes"
                placeholder="Timeline, budget considerations, specific requirements..."
                rows={3}
                className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                "Submit Request"
              )}
            </Button>

            <p className="text-center text-xs text-muted-foreground">
              We&apos;ll respond within 24-48 hours with next steps.
            </p>
          </form>
        </motion.div>
      </main>
    </div>
  )
}
