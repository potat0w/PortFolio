"use client"

import { ArrowUpRight } from "lucide-react"
import { Section } from "@/components/section"

type Project = {
  name: string
  desc: string
  tags: string[]
  live: string
  image: string
  award?: string
}

const projects: Project[] = [
  {
    name: "OneEarth",
    award: "Emerging Talent Award, AnimalHack 2025",
    desc: "Winner among 190+ submissions at AnimalHack 2025. Connects consumer behavior with wildlife conservation through real-time IUCN Red List data, an AI-powered cruelty-free shopping assistant, and tools that promote sustainable, informed decision-making.",
    tags: ["Next.js", "FastAPI", "Gemini", "FAISS", "IUCN", "TypeScript"],
    live: "https://oneearthh.vercel.app/",
    image: "/1.png",
  },
  {
    name: "Elora",
    desc: "Skincare e-commerce platform with product catalog, shopping cart, and secure checkout.",
    tags: ["Next.js", "TypeScript", "TailwindCSS"],
    live: "https://elira-qq21.vercel.app/",
    image: "/4.png",
  },
  {
    name: "Attendly",
    desc: "QR-based attendance management with role-based dashboards and JWT authentication.",
    tags: ["React", "Node.js", "PostgreSQL", "JWT"],
    live: "https://dbms-project-mocha-eta.vercel.app/",
    image: "/5.png",
  },
  {
    name: "Naptec Healthcare",
    desc: "Healthcare recruitment platform with SEO optimization, streamlined hiring workflows, and lead generation.",
    tags: ["Next.js", "TypeScript", "TailwindCSS", "SEO"],
    live: "https://www.naptechealthcareservices.co.uk/",
    image:
      "https://res.cloudinary.com/dw1n6qugv/image/upload/v1781098031/naptec_cmszng.png",
  },
  {
    name: "CliniQ",
    desc: "Clinic management system with multi-role functionality, appointment booking, and real-time dashboards.",
    tags: ["Next.js", "Node.js", "Supabase", "JWT"],
    live: "https://cliiniq.vercel.app/",
    image:
      "https://i.ibb.co.com/ymyp4hcQ/Screenshot-from-2026-03-27-10-22-58.png",
  },
  {
    name: "VerdictAI",
    desc: "AI-driven legal assistant offering real-time Q&A on Bangladesh law using Gemini and FAISS.",
    tags: ["Next.js", "FastAPI", "Gemini", "FAISS", "Python"],
    live: "https://verdict-a-n61d.vercel.app/",
    image: "/2.png",
  },
  {
    name: "AquaFin",
    desc: "E-commerce platform for aquatic products with authentication, cart, reviews, and real-time updates.",
    tags: ["React", "Express", "Firebase", "PostgreSQL"],
    live: "https://aqua-fin-34ev.vercel.app/",
    image: "/3.png",
  },
  {
    name: "Voyage Vista",
    desc: "Travel booking platform to explore destinations, view details, and book trips with ease.",
    tags: ["React", "Node.js", "MongoDB", "DaisyUI"],
    live: "https://vista-omega.vercel.app/",
    image: "https://i.ibb.co.com/H12ph08/image.png",
  },
  {
    name: "Gradiaaa",
    desc: "Full-stack app enhancing communication and resource sharing between students and teachers.",
    tags: ["React", "Node.js", "MongoDB", "JWT"],
    live: "https://gradiaaa.vercel.app/",
    image: "https://i.ibb.co.com/9k37Cqjc/image.png",
  },
  {
    name: "Skylaa",
    desc: "Real-time chat application built with the MERN stack and Socket.IO.",
    tags: ["React", "Node.js", "MongoDB", "Socket.IO"],
    live: "https://skyla-7t80.onrender.com/",
    image: "https://i.ibb.co.com/bgzBhqKJ/image.png",
  },
  {
    name: "My Vid",
    desc: "YouTube-inspired app with video search, categories, and smooth playback.",
    tags: ["React", "Node.js", "MongoDB", "DaisyUI"],
    live: "https://you-vid-xi.vercel.app/",
    image: "https://i.ibb.co.com/RkDfPRc3/image.png",
  },
]

export function Projects() {
  return (
    <Section title="Selected work.">
      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((p) => (
          <a
            key={p.name}
            href={p.live}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex cursor-pointer flex-col rounded-2xl border border-border bg-card/40 p-5 transition-colors hover:border-foreground/40"
          >
            <div className="relative mb-4 aspect-[16/10] overflow-hidden rounded-xl bg-gradient-to-br from-accent/20 via-muted to-background ring-1 ring-border">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={p.image}
                alt={p.name}
                className="h-full w-full object-cover transition-transform group-hover:scale-[1.02]"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.style.display = "none"
                }}
              />
            </div>
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                {p.award && (
                  <span className="mb-2 inline-block rounded-full bg-accent/15 px-2.5 py-0.5 text-[11px] font-medium text-accent">
                    {p.award}
                  </span>
                )}
                <h3 className="font-display text-2xl tracking-tight">{p.name}</h3>
              </div>
              <ArrowUpRight
                size={18}
                className="mt-1 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground"
              />
            </div>
            <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-muted px-2.5 py-0.5 text-[11px] text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </Section>
  )
}
