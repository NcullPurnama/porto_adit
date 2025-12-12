"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Download } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export default function Hero() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section
      ref={ref}
      id="home"
      className={`pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto transition-all duration-700 ${
        isVisible ? "animate-scroll-up" : "scroll-hidden"
      }`}
    >
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="mb-8">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-cyan-400 bg-clip-text text-transparent">
              Radith Alkaffa
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-2">Full Stack Developer</p>
            <p className="text-foreground/70 text-lg leading-relaxed">
              I craft elegant digital solutions with modern technologies. Passionate about building scalable
              applications and creating seamless user experiences.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button className="bg-primary hover:bg-primary/90">
              Get In Touch <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 bg-transparent">
              <Download className="w-4 h-4 mr-2" />
              Resume
            </Button>
          </div>
        </div>
        <div className="relative">
          <div className="w-full h-96 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center overflow-hidden border border-primary/30">
            <img src="/radith-potrait.jpg" alt="Profile" className="w-full h-full object-cover" />
          </div>
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-primary/0 via-transparent to-accent/10 pointer-events-none" />
        </div>
      </div>
    </section>
  )
}
