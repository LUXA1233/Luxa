import { ServiceDetail } from "@/components/service-detail"

export default function CoreWebsitesPage() {
  return (
    <ServiceDetail
      badge="Core Websites"
      title="Fast, modern websites that"
      highlight="convert"
      description="Multiple-page websites built to showcase your services and capture client bookings. Every site is high-performing, mobile-first, SEO-ready, and comes with a booking form that sends inquiries straight to your email."
      features={[
        "Multiple pages",
        "Booking form to your email",
        "SEO optimized",
        "Mobile-first",
        "Logo & branding included",
      ]}
      examples={[
        {
          image: "/portfolio/nextnotes-preview.png",
          title: "NextNotes — Music Lessons",
          tag: "Education",
        },
        {
          image: "/examples/website-dental.png",
          title: "Bright Smile Dental",
          tag: "Healthcare",
        },
        {
          image: "/examples/website-fitness.png",
          title: "Peak Performance Training",
          tag: "Fitness",
        },
        {
          image: "/examples/website-cafe.png",
          title: "Corner Coffee Co.",
          tag: "Hospitality",
        },
      ]}
      ctaLabel="Start Your Website"
      ctaHref="/get-started/web"
    />
  )
}
