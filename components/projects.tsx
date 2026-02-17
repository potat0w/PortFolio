import Image from "next/image";
import { Github, ExternalLink } from "lucide-react";

export function Projects() {
  const projects = [
    {
      title: "Elora",
      description:
        "Skincare e-commerce platform with product catalog, shopping cart, and secure checkout.",
      imageUrl: "/4.png",
      technologies: ["Next.js", "TypeScript", "TailwindCSS", "E-commerce"],
      githubUrl: "https://github.com/potat0w/elora",
      demoUrl: "https://elira-qq21.vercel.app/",
    },
    {
      title: "Attendly",
      description:
        "QR-Based Attendance Management System with React, TypeScript, Node.js, PostgreSQL, JWT authentication, QR check-ins, and role-based dashboards.",
      imageUrl: "/5.png",
      technologies: ["React.js", "TypeScript", "Node.js", "PostgreSQL", "JWT"],
      githubUrl: "https://github.com/potat0w/attendly",
      demoUrl: "https://dbms-project-mocha-eta.vercel.app/",
    },
    {
      title: "AquaFin",
      description:
        "E-commerce platform for aquatic products with authentication, cart, reviews, and real-time updates.",
      imageUrl: "/3.png",
      technologies: [
        "React.js",
        "Express.js",
        "Firebase",
        "PostgreSQL",
        "TailwindCSS",
      ],
      githubUrl: "https://github.com/kaho0/AquaFin",
      demoUrl: "https://aqua-fin-34ev.vercel.app/",
    },

    {
      title: "My Vid",
      description:
        "A YouTube-inspired app with video search, categories, and smooth playback for an engaging viewing experience.",
      imageUrl: "https://i.ibb.co.com/RkDfPRc3/image.png",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "DaisyUI"],
      githubUrl: "https://github.com/kaho0/My-Vid",
      demoUrl: "https://you-vid-xi.vercel.app/",
    },
    {
      title: "Voyage Vista",
      description:
        "Travel booking platform that lets users explore destinations, view details, and book trips with ease.",
      imageUrl: "https://i.ibb.co.com/H12ph08/image.png",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "DaisyUI"],
      githubUrl: "https://github.com/kaho0/Voyage-vista",
      demoUrl: "https://vista-omega.vercel.app/",
    },
    {
      title: "Gradiaaa",
      description:
        "Full-stack web app that enhances communication and resource sharing between students and teachers.",
      imageUrl: "https://i.ibb.co.com/9k37Cqjc/image.png",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
      githubUrl: "https://github.com/kaho0/Gradiaaa",
      demoUrl: "https://gradiaaa.vercel.app/",
    },
    {
      title: "Skylaa",
      description:
        "Real-time chat application built with the MERN stack and Socket.IO for instant communication.",
      imageUrl: "https://i.ibb.co.com/bgzBhqKJ/image.png",
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Socket.IO",
        "Zustand",
      ],
      githubUrl: "https://github.com/kaho0/Skylaa",
      demoUrl: "https://skyla-7t80.onrender.com/",
    },
    {
      title: "VerdictAI",
      description:
        "AI-driven legal assistant offering real-time Q&A on Bangladesh law using a Gemini and FAISS backend.",
      imageUrl: "/2.png",
      technologies: [
        "Next.js",
        "FastAPI",
        "Gemini",
        "FAISS",
        "TypeScript",
        "Python",
      ],
      githubUrl: "https://github.com/kaho0/VerdictAI",
      demoUrl: "https://verdict-ai-psi.vercel.app/",
    },
  ];

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold font-heading mb-6 text-primary">
        Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-secondary rounded-lg overflow-hidden border border-primary/20 hover:border-primary/50 transition-all hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="relative h-48 w-full">
              <Image
                src={project.imageUrl || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-muted-foreground mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-background rounded-md text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-primary hover:underline"
                >
                  <Github size={16} />
                  Code
                </a>
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-primary hover:underline"
                >
                  <ExternalLink size={16} />
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
