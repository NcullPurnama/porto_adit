import Link from "next/link"
import { Award, ArrowLeft, ExternalLink } from "lucide-react"

export default function Certificates() {
  const certificates = [
    {
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023",
      credentialUrl: "https://aws.amazon.com",
    },
    {
      title: "Full Stack Web Development",
      issuer: "Udemy",
      date: "2022",
      credentialUrl: "https://udemy.com",
    },
    {
      title: "React Advanced Patterns",
      issuer: "Frontend Masters",
      date: "2022",
      credentialUrl: "https://frontendmasters.com",
    },
    {
      title: "JavaScript Mastery",
      issuer: "Codecademy",
      date: "2021",
      credentialUrl: "https://codecademy.com",
    },
  ]

  return (
    <main className="min-h-screen bg-background text-foreground pt-20 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/" className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to Portfolio
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">Certificates & Credentials</h1>
        <p className="text-lg text-foreground/70 mb-12">
          Professional certifications and achievements demonstrating my expertise and commitment to continuous learning.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {certificates.map((cert, idx) => (
            <div
              key={idx}
              className="p-8 rounded-lg bg-card border border-border hover:border-primary/50 transition-all hover:shadow-lg"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-lg bg-primary/20">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground">{cert.title}</h3>
                  <p className="text-accent text-sm">{cert.issuer}</p>
                  <p className="text-muted-foreground text-xs mt-1">{cert.date}</p>
                </div>
              </div>
              <a
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-primary hover:text-accent transition-colors text-sm font-medium"
              >
                View Credential
                <ExternalLink className="w-3 h-3 ml-2" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
