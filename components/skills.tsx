import { Section } from "@/components/section"

const skills = {
  Frontend: [
    "React.js",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "TailwindCSS",
    "Redux",
    "CSS3",
    "HTML5",
    "Chart.js",
    "MUI",
    "Bootstrap",
  ],
  Backend: [
    "Node.js",
    "Express.js",
    "FastAPI",
    "Python",
    "JWT",
  ],
  Database: ["MongoDB", "PostgreSQL", "Prisma", "MySQL", "Firebase"],
  "DevOps & Tools": [
    "Git",
    "GitHub",
    "Vercel",
    "Heroku",
    "Render",
    "Vite",
    "Figma",
    "Canva",
  ],
}

export function Skills() {
  return (
    <Section title="Tech stack.">
      <div className="grid gap-6 sm:grid-cols-2">
        {Object.entries(skills).map(([group, items]) => (
          <div
            key={group}
            className="rounded-2xl border border-border bg-card/40 p-5"
          >
            <h3 className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
              {group}
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {items.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-border px-3 py-1 text-xs text-foreground/85"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
