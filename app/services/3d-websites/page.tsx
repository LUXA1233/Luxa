import { ServiceDetail } from "@/components/service-detail"

export default function ThreeDWebsitesPage() {
  return (
    <ServiceDetail
      badge="3D Websites"
      title="Cinematic 3D experiences that"
      highlight="wow"
      description="High-end, interactive websites that use cinematic 3D effects to make your products or properties look amazing. Perfect for brands that want to stand out with immersive, scroll-stopping visuals."
      features={[
        "Interactive 3D scenes",
        "Cinematic animations",
        "Product & property showcases",
        "Optimized performance",
        "Logo & branding included",
      ]}
      examples={[
        {
          image: "/examples/3d-product.png",
          title: "Immersive Product Showcase",
          tag: "E-Commerce",
        },
        {
          image: "/examples/3d-realestate.png",
          title: "Luxury Home 3D Tour",
          tag: "Real Estate",
        },
      ]}
      ctaLabel="Start Your 3D Site"
      ctaHref="/get-started/web"
    />
  )
}
