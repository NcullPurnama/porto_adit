"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export default function About() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section
      ref={ref}
      id="about"
      className={`py-20 px-4 sm:px-6 lg:px-8 bg-secondary/5 border-y border-border transition-all duration-700 ${
        isVisible ? "animate-scroll-up" : "scroll-hidden"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div
            className={`p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors ${
              isVisible ? "animate-scroll-left" : "scroll-hidden"
            }`}
            style={{ animationDelay: isVisible ? "0.1s" : "0s" }}
          >
            <h3 className="text-xl font-semibold mb-3 text-primary">Background</h3>
            <p className="text-foreground/70 leading-relaxed">
              Computer Science graduate with a passion for web development. I have been building web applications for
              over 3 years, focusing on React, Node.js, and modern web technologies.
            </p>
          </div>
          <div
            className={`p-6 rounded-lg bg-card border border-border hover:border-accent/50 transition-colors ${
              isVisible ? "animate-scroll-up" : "scroll-hidden"
            }`}
            style={{ animationDelay: isVisible ? "0.2s" : "0s" }}
          >
            <h3 className="text-xl font-semibold mb-3 text-accent">Technology Interests</h3>
            <p className="text-foreground/70 leading-relaxed">
              Deeply interested in TypeScript, Next.js, and cloud technologies. I enjoy exploring new tools and
              frameworks that enhance productivity and code quality.
            </p>
          </div>
          <div
            className={`p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors ${
              isVisible ? "animate-scroll-right" : "scroll-hidden"
            }`}
            style={{ animationDelay: isVisible ? "0.3s" : "0s" }}
          >
            <h3 className="text-xl font-semibold mb-3 text-primary">Soft Skills</h3>
            <p className="text-foreground/70 leading-relaxed">
              Strong problem-solver with excellent communication and team collaboration skills. I thrive in agile
              environments and love mentoring junior developers.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
