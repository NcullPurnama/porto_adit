"use client"

import { GraduationCap } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export default function Education() {
  const { ref, isVisible } = useScrollAnimation()

  const educations = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "Muhammadiyah University of North Sumatra",
      year: "2025 - Now",
      gpa: "3.8/4.0",
    },
    {
      degree: "Web Developer",
      institution: "SMK Negeri 1 Takengon",
      year: "2022-2025",
      gpa: "Distinction",
    }
  ]

  return (
    <section
      ref={ref}
      id="education"
      className={`py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto transition-all duration-700 ${
        isVisible ? "animate-scroll-up" : "scroll-hidden"
      }`}
    >
      <h2 className="text-4xl font-bold mb-12 text-center">Education</h2>
      <div className="grid gap-6">
        {educations.map((edu, idx) => (
          <div
            key={idx}
            className={`p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-all hover:shadow-lg ${
              isVisible ? "animate-scroll-up" : "scroll-hidden"
            }`}
            style={{ animationDelay: isVisible ? `${idx * 0.1}s` : "0s" }}
          >
            <div className="flex gap-4">
              <div className="p-3 h-fit rounded-lg bg-primary/20">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-foreground mb-1">{edu.degree}</h3>
                <p className="text-primary text-sm mb-2">{edu.institution}</p>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <span>{edu.year}</span>
                  <span>•</span>
                  <span>{edu.gpa}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
