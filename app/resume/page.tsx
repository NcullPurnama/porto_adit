import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Download, ArrowLeft } from "lucide-react"

export default function Resume() {
  return (
    <main className="min-h-screen bg-background text-foreground pt-20 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/" className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to Portfolio
        </Link>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-2">Resume</h1>
            <p className="text-lg text-foreground/70">Download or view my professional resume</p>
          </div>
          <Button className="mt-6 sm:mt-0 bg-primary hover:bg-primary/90">
            <Download className="w-4 h-4 mr-2" />
            Download PDF
          </Button>
        </div>

        <div className="rounded-lg border border-border bg-card p-8 md:p-12 space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4 text-primary">John Doe</h2>
            <p className="text-foreground/70">john@example.com | +1 (555) 123-4567 | linkedin.com/in/johndoe</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <span className="w-1 h-6 bg-accent mr-3 rounded" />
              Professional Summary
            </h2>
            <p className="text-foreground/70 leading-relaxed">
              Experienced Full Stack Developer with 4+ years of expertise in building scalable web applications.
              Proficient in React, Node.js, and cloud technologies. Proven track record of delivering high-quality
              projects on time and mentoring junior developers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <span className="w-1 h-6 bg-accent mr-3 rounded" />
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="font-semibold text-foreground mb-2">Frontend:</p>
                <p className="text-foreground/70">React, Next.js, TypeScript, TailwindCSS, HTML5, CSS3</p>
              </div>
              <div>
                <p className="font-semibold text-foreground mb-2">Backend:</p>
                <p className="text-foreground/70">Node.js, Express, PostgreSQL, MongoDB, REST APIs</p>
              </div>
              <div>
                <p className="font-semibold text-foreground mb-2">Tools & Platforms:</p>
                <p className="text-foreground/70">Git, GitHub, Docker, AWS, CI/CD Pipelines</p>
              </div>
              <div>
                <p className="font-semibold text-foreground mb-2">Soft Skills:</p>
                <p className="text-foreground/70">Communication, Leadership, Problem Solving, Agile</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <span className="w-1 h-6 bg-accent mr-3 rounded" />
              Work Experience
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-foreground">Senior Full Stack Developer</h3>
                <p className="text-accent text-sm">Tech Innovations Inc. | 2023 - Present</p>
                <ul className="mt-2 space-y-1 text-foreground/70 text-sm">
                  <li>• Architected and implemented scalable microservices</li>
                  <li>• Improved application performance by 40%</li>
                  <li>• Mentored 3 junior developers</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Full Stack Developer</h3>
                <p className="text-accent text-sm">Digital Solutions Ltd. | 2021 - 2023</p>
                <ul className="mt-2 space-y-1 text-foreground/70 text-sm">
                  <li>• Developed 5+ full-stack applications</li>
                  <li>• Implemented CI/CD pipelines</li>
                  <li>• Collaborated with design teams</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <span className="w-1 h-6 bg-accent mr-3 rounded" />
              Education
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-foreground">Bachelor of Science in Computer Science</h3>
                <p className="text-accent text-sm">State University | 2016 - 2020</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">AWS Certified Solutions Architect</h3>
                <p className="text-accent text-sm">Amazon Web Services | 2023</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
