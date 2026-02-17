"use client";
import { useState } from "react";
import Image from "next/image";
import { Github, Linkedin, Mail, Download, Twitter, Menu } from "lucide-react";
import { About } from "@/components/about";
import { Skills } from "@/components/skills";
import { Projects } from "@/components/projects";
import { Contact } from "@/components/contact";

export default function Home() {
  const [activeTab, setActiveTab] = useState("about");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex flex-col md:flex-row">
      {/* Sidebar Toggle Button */}
      <button
        className="fixed top-4 left-4 z-50 bg-secondary rounded-full p-2 shadow-md hover:bg-secondary/80 transition-colors"
        onClick={toggleSidebar}
        aria-label="Toggle sidebar"
      >
        <Menu size={20} className="text-primary" />
      </button>

      {/* Sidebar */}
      <aside
        className={`sidebar ${sidebarOpen ? "sidebar-open" : "sidebar-closed"}`}
      >
        <div className="flex flex-col items-center h-full">
          <div className="mb-4 mt-10">
            <Image
              src="https://i.ibb.co.com/PGn5P0Y/download-16.jpg"
              alt="Kahon"
              width={150}
              height={150}
              className="profile-image"
            />
          </div>
          <div className="text-center">
            <h1 className="text-2xl font-bold font-heading text-primary mb-1">
              Kahon Binte Zaman
            </h1>
            <p className="text-muted-foreground mb-6">Full Stack Developer</p>

            <p className="text-sm text-center text-muted-foreground">
              Learning machine learning algorithms and AI ML
            </p>
          </div>

          <div className="social-icons mt-auto mb-8">
            <a
              href="https://github.com/kaho0"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/kahon-binte-zaman-9414432b4/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://x.com/Kahoo_z"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <Twitter size={20} />
            </a>
            <a href="mailto:kahonbintezaman@gmail.com" className="social-icon">
              <Mail size={20} />
            </a>
          </div>

          <a
            href="/resume.pdf"
            download="Kahon_Binte_Zaman_Resume.pdf"
            className="mb-8 flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
          >
            <Download size={16} />
            Download Resume
          </a>
        </div>
      </aside>

      {/* Main Content */}
      <main
        className={`main-content mt-16 ${
          sidebarOpen ? "content-with-sidebar" : "content-full"
        }`}
      >
        <div className="tab-container">
          <button
            className={`tab-button ${activeTab === "about" ? "active" : ""}`}
            onClick={() => setActiveTab("about")}
          >
            About Me
          </button>
          <button
            className={`tab-button ${activeTab === "skills" ? "active" : ""}`}
            onClick={() => setActiveTab("skills")}
          >
            Skills
          </button>
          <button
            className={`tab-button ${activeTab === "projects" ? "active" : ""}`}
            onClick={() => setActiveTab("projects")}
          >
            Projects
          </button>
          <button
            className={`tab-button ${activeTab === "contact" ? "active" : ""}`}
            onClick={() => setActiveTab("contact")}
          >
            Contact
          </button>
        </div>

        <div className={`tab-content ${activeTab === "about" ? "active" : ""}`}>
          <About />
        </div>
        <div
          className={`tab-content ${activeTab === "skills" ? "active" : ""}`}
        >
          <Skills />
        </div>
        <div
          className={`tab-content ${activeTab === "projects" ? "active" : ""}`}
        >
          <Projects />
        </div>
        <div
          className={`tab-content ${activeTab === "contact" ? "active" : ""}`}
        >
          <Contact />
        </div>
      </main>
    </div>
  );
}
