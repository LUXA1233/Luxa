"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, TrendingUp, Check, Loader2 } from "lucide-react"

export default function SMMFormPage() {
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
            Thanks for reaching out! We&apos;ll review your brand details and schedule a discovery call with you soon.
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
              <TrendingUp className="h-7 w-7 text-primary" />
            </div>
            <Badge variant="secondary" className="mb-4">
              Social Media Management
            </Badge>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Let&apos;s Grow Your Brand
            </h1>
            <p className="text-muted-foreground">
              Tell us about your brand and social media goals so we can create a winning strategy.
            </p>
            <div className="mt-4 inline-flex items-center gap-2 text-sm text-primary">
              <span className="font-semibold">$70</span>
              <span className="text-muted-foreground">/Month</span>
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

            {/* Brand Info */}
            <div className="space-y-2">
              <label htmlFor="brand" className="text-sm font-medium text-foreground">
                Brand / Business Name *
              </label>
              <Input
                id="brand"
                name="brand"
                placeholder="Your Brand Name"
                required
              />
            </div>

            {/* Industry */}
            <div className="space-y-2">
              <label htmlFor="industry" className="text-sm font-medium text-foreground">
                What industry are you in? *
              </label>
              <select
                id="industry"
                name="industry"
                required
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <option value="">Select an option</option>
                <option value="retail">Retail / E-Commerce</option>
                <option value="food">Food & Beverage</option>
                <option value="health">Health & Wellness</option>
                <option value="tech">Technology</option>
                <option value="creative">Creative / Arts</option>
                <option value="education">Education</option>
                <option value="nonprofit">Nonprofit</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Current Social Media */}
            <div className="space-y-2">
              <label htmlFor="current-social" className="text-sm font-medium text-foreground">
                Current social media presence *
              </label>
              <textarea
                id="current-social"
                name="current_social"
                placeholder="e.g., Instagram @yourbrand (500 followers), No TikTok yet..."
                required
                rows={3}
                className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              />
            </div>

            {/* Platforms */}
            <div className="space-y-3">
              <label className="text-sm font-medium text-foreground">
                Which platforms do you want us to manage? *
              </label>
              <div className="grid grid-cols-2 gap-3">
                {["Instagram", "TikTok", "Twitter/X", "Facebook", "LinkedIn", "YouTube"].map((platform) => (
                  <label key={platform} className="flex items-center gap-2 text-sm">
                    <input
                      type="checkbox"
                      name="platforms"
                      value={platform.toLowerCase()}
                      className="h-4 w-4 rounded border-input"
                    />
                    {platform}
                  </label>
                ))}
              </div>
            </div>

            {/* Target Audience */}
            <div className="space-y-2">
              <label htmlFor="audience" className="text-sm font-medium text-foreground">
                Describe your target audience *
              </label>
              <textarea
                id="audience"
                name="target_audience"
                placeholder="e.g., Young professionals aged 25-35 interested in fitness and wellness..."
                required
                rows={3}
                className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              />
            </div>

            {/* Goals */}
            <div className="space-y-2">
              <label htmlFor="goals" className="text-sm font-medium text-foreground">
                What are your social media goals? *
              </label>
              <textarea
                id="goals"
                name="goals"
                placeholder="e.g., Increase followers, drive traffic to website, build brand awareness, generate leads..."
                required
                rows={3}
                className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              />
            </div>

            {/* Brand Voice */}
            <div className="space-y-2">
              <label htmlFor="voice" className="text-sm font-medium text-foreground">
                How would you describe your brand voice?
              </label>
              <select
                id="voice"
                name="brand_voice"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <option value="">Select an option</option>
                <option value="professional">Professional & Formal</option>
                <option value="friendly">Friendly & Approachable</option>
                <option value="playful">Playful & Fun</option>
                <option value="bold">Bold & Edgy</option>
                <option value="inspirational">Inspirational & Motivational</option>
                <option value="educational">Educational & Informative</option>
              </select>
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
                I&apos;m also interested in Web Development <span className="text-primary">(15% bundle discount)</span>
              </label>
            </div>

            {/* Prefer a Call */}
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="call"
                name="prefer_call"
                value="yes"
                className="h-4 w-4 rounded border-input"
              />
              <label htmlFor="call" className="text-sm text-foreground">
                I&apos;d prefer to schedule a discovery call to discuss my needs
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
                placeholder="Competitors you admire, content ideas, specific campaigns in mind..."
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
              We&apos;ll respond within 24-48 hours to schedule a strategy call.
            </p>
          </form>
        </motion.div>
      </main>
    </div>
  )
}
