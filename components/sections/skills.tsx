"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export default function Skills() {
  const { ref, isVisible } = useScrollAnimation()

  const technicalSkills = [
    "JavaScript / TypeScript",
    "React / Next.js",
    "Node.js / Express",
    "TailwindCSS",
    "PostgreSQL",
    "MongoDB",
    "Git / GitHub",
    "REST APIs",
  ]

  const softSkills = [
    "Problem Solving",
    "Communication",
    "Team Leadership",
    "Project Management",
    "Adaptability",
    "Critical Thinking",
  ]

  return (
    <section
      ref={ref}
      id="skills"
      className={`py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto transition-all duration-700 ${
        isVisible ? "animate-scroll-up" : "scroll-hidden"
      }`}
    >
      <h2 className="text-4xl font-bold mb-12 text-center">Skills</h2>
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-semibold mb-6 flex items-center">
            <span className="w-1 h-8 bg-primary mr-3 rounded" />
            Technical Skills
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {technicalSkills.map((skill, idx) => (
              <div
                key={skill}
                className={`px-4 py-3 rounded-lg bg-primary/10 border border-primary/30 hover:border-primary/60 transition-all text-sm font-medium text-foreground hover:bg-primary/20 ${
                  isVisible ? "animate-scroll-left" : "scroll-hidden"
                }`}
                style={{ animationDelay: isVisible ? `${idx * 0.05}s` : "0s" }}
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-6 flex items-center">
            <span className="w-1 h-8 bg-accent mr-3 rounded" />
            Soft Skills
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {softSkills.map((skill, idx) => (
              <div
                key={skill}
                className={`px-4 py-3 rounded-lg bg-accent/10 border border-accent/30 hover:border-accent/60 transition-all text-sm font-medium text-foreground hover:bg-accent/20 ${
                  isVisible ? "animate-scroll-right" : "scroll-hidden"
                }`}
                style={{ animationDelay: isVisible ? `${idx * 0.05}s` : "0s" }}
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
