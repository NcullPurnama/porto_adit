"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export default function Experience() {
  const { ref, isVisible } = useScrollAnimation()

  const experiences = [
    {
      id: "1",
      title: "Administrative Support",
      company: "State Treasury Service Office",
      period: "2023 - Present",
      description: "Supports smooth office operations through document management, archive management, report preparation, and daily administrative coordination. Responsible for ensuring that the administrative process runs neatly, accurately and efficiently.",
      bullets: [
        "Organizing archives",
        "Calculating and recording stock of goods there",
        "Writing scientific papers"
      ],
    }
  ]

  return (
    <section
      ref={ref}
      id="experience"
      className={`py-20 px-4 sm:px-6 lg:px-8 bg-secondary/5 border-y border-border transition-all duration-700 ${
        isVisible ? "animate-scroll-up" : "scroll-hidden"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Experience</h2>
        <Accordion type="single" collapsible className="space-y-4">
          {experiences.map((exp, idx) => (
            <AccordionItem
              key={exp.id}
              value={exp.id}
              className={`border border-border rounded-lg px-6 data-[state=open]:bg-primary/5 transition-all ${
                isVisible ? "animate-scroll-left" : "scroll-hidden"
              }`}
              style={{ animationDelay: isVisible ? `${idx * 0.1}s` : "0s" }}
            >
              <AccordionTrigger className="hover:no-underline py-6">
                <div className="flex flex-col items-start gap-2">
                  <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
                  <div className="flex flex-wrap gap-2 text-sm">
                    <span className="text-primary">{exp.company}</span>
                    <span className="text-muted-foreground">•</span>
                    <span className="text-muted-foreground">{exp.period}</span>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-6">
                <p className="text-foreground/70 mb-4">{exp.description}</p>
                <ul className="space-y-2">
                  {exp.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex gap-3 text-foreground/70 text-sm">
                      <span className="text-accent mt-1">▸</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
