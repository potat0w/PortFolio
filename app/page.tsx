"use client"

import { useState } from "react"
import Image from "next/image"
import { Github, Linkedin, Mail, Twitter, Download } from "lucide-react"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"

const tabs = ["About", "Skills", "Projects"] as const
type Tab = (typeof tabs)[number]

export default function Home() {
  const [tab, setTab] = useState<Tab>("About")

  return (
    <div className="min-h-screen">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:grid-cols-[280px_1fr] md:gap-16 md:py-20">
        <aside className="relative z-0 shrink-0 md:sticky md:top-12 md:self-start">
          <div className="flex flex-col items-start gap-5">
            <div className="relative h-24 w-24 overflow-hidden rounded-full ring-1 ring-border">
              <Image
                src="https://i.ibb.co.com/PGn5P0Y/download-16.jpg"
                alt="Kahon Binte Zaman"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h1 className="font-display text-4xl leading-none tracking-tight">
                Kahon
                <br />
                Binte Zaman
              </h1>
              <p className="mt-3 text-sm text-muted-foreground">
                Full Stack Developer
              </p>
              <p className="mt-1 text-xs italic text-muted-foreground/70">
                Learning AI &amp; machine learning
              </p>
            </div>
            <div className="flex gap-2">
              {[
                {
                  icon: Github,
                  href: "https://github.com/kaho0",
                  label: "GitHub",
                },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/kahon-binte-zaman-9414432b4/",
                  label: "LinkedIn",
                },
                { icon: Twitter, href: "https://x.com/Kahoo_z", label: "Twitter" },
                {
                  icon: Mail,
                  href: "mailto:kahonbintezaman@gmail.com",
                  label: "Email",
                },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto:") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid h-9 w-9 cursor-pointer place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90"
            >
              <Download size={15} />
              Download Resume
            </a>
          </div>
        </aside>

        <main className="relative z-10 min-w-0">
          <nav className="mb-10 inline-flex w-full max-w-full gap-1 overflow-x-auto rounded-full border border-border bg-card/40 p-1 text-sm sm:w-auto">
            {tabs.map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setTab(t)}
                aria-pressed={tab === t}
                className={`shrink-0 cursor-pointer rounded-full px-4 py-2 transition-colors ${
                  tab === t
                    ? "bg-foreground text-background"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {t}
              </button>
            ))}
          </nav>

          <div className={tab === "About" ? "block" : "hidden"}>
            <About />
          </div>
          <div className={tab === "Skills" ? "block" : "hidden"}>
            <Skills />
          </div>
          <div className={tab === "Projects" ? "block" : "hidden"}>
            <Projects />
          </div>
        </main>
      </div>
    </div>
  )
}
