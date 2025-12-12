import Link from "next/link"
import { ExternalLink, ArrowLeft } from "lucide-react"

export default function PortfolioDesign() {
  const designs = [
    {
      title: "Mobile App UI Design",
      description: "Complete UI design system for a fitness tracking application",
      category: "Mobile Design",
      imageUrl: "/mobile-app-design.jpg",
      url: "#",
    },
    {
      title: "E-commerce Website Redesign",
      description: "Modern redesign of an online shopping platform",
      category: "Web Design",
      imageUrl: "/ecommerce-design.jpg",
      url: "#",
    },
    {
      title: "SaaS Dashboard Design",
      description: "Analytics and management dashboard for B2B platform",
      category: "Dashboard",
      imageUrl: "/saas-dashboard.jpg",
      url: "#",
    },
    {
      title: "Brand Identity System",
      description: "Complete branding guidelines and identity system",
      category: "Branding",
      imageUrl: "/brand-identity.jpg",
      url: "#",
    },
  ]

  return (
    <main className="min-h-screen bg-background text-foreground pt-20 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/" className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to Portfolio
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">Design Portfolio</h1>
        <p className="text-lg text-foreground/70 mb-12">
          Showcase of design projects including UI/UX, branding, and digital experiences.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {designs.map((design, idx) => (
            <div
              key={idx}
              className="rounded-lg overflow-hidden border border-border hover:border-primary/50 transition-all hover:shadow-lg group"
            >
              <div className="relative overflow-hidden h-64">
                <img
                  src={design.imageUrl || "/placeholder.svg"}
                  alt={design.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 bg-card">
                <p className="text-xs font-semibold text-primary uppercase mb-2">{design.category}</p>
                <h3 className="text-xl font-semibold text-foreground mb-2">{design.title}</h3>
                <p className="text-foreground/70 text-sm mb-4">{design.description}</p>
                <a
                  href={design.url}
                  className="inline-flex items-center text-accent hover:text-primary transition-colors text-sm font-medium"
                >
                  View Project
                  <ExternalLink className="w-3 h-3 ml-2" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
