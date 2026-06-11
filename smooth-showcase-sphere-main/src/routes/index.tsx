import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Github, Linkedin, Mail, Twitter, ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Alex Carter — Full Stack Developer" },
      { name: "description", content: "Full stack developer crafting clean, user-focused web applications." },
    ],
  }),
  component: Portfolio,
});

const tabs = ["About", "Skills", "Projects"] as const;
type Tab = (typeof tabs)[number];

const skills = {
  Frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux", "Vite"],
  Backend: ["Node.js", "Express", "FastAPI", "Python", "JWT"],
  Database: ["PostgreSQL", "MongoDB", "Prisma", "Firebase"],
  Tools: ["Git", "GitHub", "Vercel", "Figma", "Docker"],
};

const projects = [
  {
    name: "Elora",
    desc: "Skincare e-commerce platform with product catalog, cart, and secure checkout.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    live: "#",
    code: "#",
  },
  {
    name: "Attendly",
    desc: "QR-based attendance management with role-based dashboards and JWT auth.",
    tags: ["React", "Node.js", "PostgreSQL"],
    live: "#",
    code: "#",
  },
  {
    name: "Naptec",
    desc: "Healthcare services platform with appointment booking and patient records.",
    tags: ["Next.js", "FastAPI", "Prisma"],
    live: "#",
    code: "#",
  },
  {
    name: "Lumen",
    desc: "Minimal note-taking app with markdown support and offline-first sync.",
    tags: ["React", "IndexedDB", "PWA"],
    live: "#",
    code: "#",
  },
];

function Portfolio() {
  const [tab, setTab] = useState<Tab>("About");

  return (
    <div className="min-h-screen">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:grid-cols-[280px_1fr] md:gap-16 md:py-20">
        <Sidebar />
        <main>
          <nav className="mb-10 inline-flex w-full max-w-full gap-1 overflow-x-auto rounded-full border border-border bg-card/40 p-1 text-sm sm:w-auto">
            {tabs.map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`shrink-0 rounded-full px-4 py-2 transition-colors ${
                  tab === t
                    ? "bg-foreground text-background"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {t}
              </button>
            ))}
          </nav>

          {tab === "About" && <About />}
          {tab === "Skills" && <Skills />}
          {tab === "Projects" && <Projects />}
          
        </main>
      </div>

      <footer className="border-t border-border py-8 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Alex Carter — Built with care.
      </footer>
    </div>
  );
}

function Sidebar() {
  return (
    <aside className="md:sticky md:top-12 md:self-start">
      <div className="flex flex-col items-start gap-5">
        <div className="h-24 w-24 overflow-hidden rounded-full bg-gradient-to-br from-accent/40 to-muted ring-1 ring-border" />
        <div>
          <h1 className="font-display text-4xl leading-none tracking-tight">
            Alex<br />Carter
          </h1>
          <p className="mt-3 text-sm text-muted-foreground">Full Stack Developer</p>
          <p className="mt-1 text-xs italic text-muted-foreground/70">
            Learning AI &amp; machine learning
          </p>
        </div>
        <div className="flex gap-2">
          {[
            { icon: Github, href: "#", label: "GitHub" },
            { icon: Linkedin, href: "#", label: "LinkedIn" },
            { icon: Twitter, href: "#", label: "Twitter" },
            { icon: Mail, href: "mailto:hello@example.com", label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="grid h-9 w-9 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
            >
              <Icon size={15} />
            </a>
          ))}
        </div>
        <a
          href="#"
          className="inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90"
        >
          Download Resume
        </a>
      </div>
    </aside>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="font-display text-3xl tracking-tight md:text-4xl">{title}</h2>
      <div className="mt-6">{children}</div>
    </section>
  );
}

function About() {
  return (
    <Section title="About me.">
      <p className="font-display text-2xl leading-snug text-foreground/90 md:text-3xl">
        Hi, I'm Alex.
      </p>
      <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
        I'm a full-stack developer passionate about building clean, user-focused
        applications. Currently exploring AI and machine learning — data
        processing, model development, and integrating intelligent systems into
        real projects.
      </p>

      <div className="mt-10">
        <h3 className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
          Education
        </h3>
        <div className="mt-4 flex flex-wrap items-baseline justify-between gap-2 border-t border-border pt-4">
          <div>
            <p className="font-medium">BSc in Computer Science</p>
            <p className="text-sm text-muted-foreground">Northfield University</p>
          </div>
          <p className="text-sm text-muted-foreground">2023 — 2027</p>
        </div>
      </div>

      <div className="mt-10">
        <h3 className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
          Contact
        </h3>
        <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
          Have a project in mind, or just want to say hi? My inbox is always open.
        </p>
        <a
          href="mailto:hello@example.com"
          className="mt-4 inline-flex items-center gap-2 font-display text-2xl tracking-tight underline decoration-accent decoration-2 underline-offset-[6px] hover:text-accent md:text-3xl"
        >
          hello@example.com
          <ArrowUpRight size={22} />
        </a>
        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          {[
            { label: "Based in", value: "Remote · GMT+6" },
            { label: "Status", value: "Open to work" },
            { label: "Response", value: "Within 24h" },
          ].map((i) => (
            <div key={i.label} className="rounded-2xl border border-border bg-card/40 p-4">
              <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                {i.label}
              </p>
              <p className="mt-1 text-sm">{i.value}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Skills() {
  return (
    <Section title="Tech stack.">
      <div className="grid gap-6 sm:grid-cols-2">
        {Object.entries(skills).map(([group, items]) => (
          <div key={group} className="rounded-2xl border border-border bg-card/40 p-5">
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
  );
}

function Projects() {
  return (
    <Section title="Selected work.">
      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((p) => (
          <a
            key={p.name}
            href={p.live}
            className="group relative flex flex-col rounded-2xl border border-border bg-card/40 p-5 transition-colors hover:border-foreground/40"
          >
            <div className="mb-4 aspect-[16/10] overflow-hidden rounded-xl bg-gradient-to-br from-accent/20 via-muted to-background ring-1 ring-border" />
            <div className="flex items-start justify-between gap-3">
              <h3 className="font-display text-2xl tracking-tight">{p.name}</h3>
              <ArrowUpRight
                size={18}
                className="mt-1 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground"
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
  );
}

function Contact() {
  return (
    <Section title="Let's talk.">
      <p className="max-w-xl text-[15px] leading-relaxed text-muted-foreground">
        Have a project in mind, or just want to say hi? My inbox is always open.
      </p>
      <a
        href="mailto:hello@example.com"
        className="mt-6 inline-flex items-center gap-2 font-display text-3xl tracking-tight underline decoration-accent decoration-2 underline-offset-[6px] hover:text-accent md:text-4xl"
      >
        hello@example.com
        <ArrowUpRight size={26} />
      </a>
      <div className="mt-10 grid gap-3 sm:grid-cols-3">
        {[
          { label: "Based in", value: "Remote · GMT+6" },
          { label: "Status", value: "Open to work" },
          { label: "Response", value: "Within 24h" },
        ].map((i) => (
          <div key={i.label} className="rounded-2xl border border-border bg-card/40 p-4">
            <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
              {i.label}
            </p>
            <p className="mt-1 text-sm">{i.value}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
