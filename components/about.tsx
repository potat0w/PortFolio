import { Section } from "@/components/section"

function Subsection({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div>
      <h3 className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
        {title}
      </h3>
      <div className="mt-4 border-t border-border pt-4">{children}</div>
    </div>
  )
}

function EntryRow({
  title,
  lines,
  date,
}: {
  title: string
  lines: string[]
  date: string
}) {
  return (
    <div className="grid grid-cols-1 gap-2 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-start sm:gap-x-6">
      <div className="min-w-0 space-y-1">
        <p className="font-medium leading-snug">{title}</p>
        {lines.map((line) => (
          <p key={line} className="text-sm leading-relaxed text-muted-foreground">
            {line}
          </p>
        ))}
      </div>
      <p className="shrink-0 text-sm text-muted-foreground sm:pt-0.5 sm:text-right">
        {date}
      </p>
    </div>
  )
}

export function About() {
  return (
    <Section title="About me.">
      <div className="max-w-2xl space-y-10">
        <div className="space-y-5">
          <p className="font-display text-2xl leading-snug text-foreground/90 md:text-3xl">
            Hi, I&apos;m Kahon.
          </p>
          <p className="text-[15px] leading-relaxed text-muted-foreground">
            I&apos;m a full-stack developer passionate about building clean,
            user-focused applications. Currently exploring AI and machine
            learning, including data processing, model development, and integrating
            intelligent systems into real projects.
          </p>
        </div>

        <div className="rounded-2xl border border-accent/30 bg-accent/5 p-5">
          <p className="text-xs uppercase tracking-[0.18em] text-accent">
            Award, AnimalHack 2025
          </p>
          <p className="mt-2 font-medium leading-snug">
            Emerging Talent Award for OneEarth
          </p>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Honored at AnimalHack 2025, a global wildlife conservation hackathon,
            standing out among 190+ submissions for connecting consumer behavior
            with real conservation impact.
          </p>
        </div>

        <Subsection title="Experience">
          <EntryRow
            title="Frontend Developer, Internship"
            lines={["KirjaSwappi", "Remote, Jyväskylä, Finland"]}
            date="May to Jul 2025"
          />
        </Subsection>

        <Subsection title="Education">
          <EntryRow
            title="Bachelor of Computer Science & Telecommunication Engineering"
            lines={["Noakhali Science And Technology University"]}
            date="2023 to 2027"
          />
        </Subsection>

        <Subsection title="Let's connect">
          <div className="space-y-4">
            <p className="text-[15px] leading-relaxed text-muted-foreground">
              Whether you&apos;d like to collaborate, discuss an opportunity, or
              simply share an idea. Feel free to reach out. I&apos;d love to
              hear from you.
            </p>
            <div className="space-y-1">
              <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                Email
              </p>
              <a
                href="mailto:kahonbintezaman@gmail.com"
                className="text-sm font-medium text-foreground transition-colors hover:text-accent"
              >
                kahonbintezaman@gmail.com
              </a>
            </div>
          </div>
        </Subsection>
      </div>
    </Section>
  )
}
