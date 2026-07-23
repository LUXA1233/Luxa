import { ServiceDetail } from "@/components/service-detail"

export default function LogosBrandingPage() {
  return (
    <ServiceDetail
      badge="Logos & Branding"
      title="Clean, professional branding that"
      highlight="lasts"
      description="Professional logo bundles including a main symbol, a text layout, and an app icon for your business — all tied together with one cohesive branded feel and color palette. Included free with any website or social package."
      features={[
        "Main symbol mark",
        "Text wordmark layout",
        "App icon",
        "Cohesive color palette",
        "Free with Web & Social packages",
      ]}
      examples={[
        {
          image: "/examples/logos-grid.png",
          title: "Modern Brand System",
          tag: "Full Bundle",
        },
        {
          image: "/examples/logo-coffee.png",
          title: "Corner Coffee Co.",
          tag: "Hospitality",
        },
        {
          image: "/examples/logo-tech.png",
          title: "Nova Tech Startup",
          tag: "Technology",
        },
      ]}
      ctaLabel="Start Your Brand"
      ctaHref="/get-started/web"
    />
  )
}
