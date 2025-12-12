import { Mail, Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Contact() {
  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com",
      label: "View my repositories",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com",
      label: "Connect with me",
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:john@example.com",
      label: "Send me an email",
    },
  ]

  return (
    <footer id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/5 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">Let's Connect</h2>
        <p className="text-center text-foreground/70 mb-12 max-w-2xl mx-auto">
          I'm always interested in hearing about new projects and opportunities. Feel free to reach out through any of
          these channels.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {socialLinks.map((link) => {
            const Icon = link.icon
            return (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-all hover:shadow-lg text-center group"
              >
                <Icon className="w-8 h-8 mx-auto mb-3 text-primary group-hover:text-accent transition-colors" />
                <h3 className="font-semibold text-foreground mb-1">{link.name}</h3>
                <p className="text-sm text-muted-foreground">{link.label}</p>
              </a>
            )
          })}
        </div>

        <div className="border-t border-border pt-12 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">© 2025 John Doe. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/certificates">
              <Button variant="outline" size="sm">
                Certificates
              </Button>
            </Link>
            <Link href="/portfolio">
              <Button variant="outline" size="sm">
                Design Portfolio
              </Button>
            </Link>
            <Link href="/resume">
              <Button size="sm">Download Resume</Button>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
