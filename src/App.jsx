import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Section from "./components/Section";
import Contact from "./components/Contact";

import {
  experiences,
  projects,
  certificates,
  education,
} from "./data/portfolioData";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-white">
      
      {/* Navigation */}
      <Navbar />

      <main>
        {/* Introduction */}
        <Hero />

        {/* Divider */}
        <div className="mx-auto max-w-6xl border-t border-white/10" />

        {/* Experience */}
        <Section
          id="experience"
          number="01 / Career"
          title="Experience"
          subtitle="Where I've worked and what I've learned."
          data={experiences}
        />

        {/* Projects */}
        <Section
          id="projects"
          number="02 / Selected Work"
          title="Featured Projects"
          subtitle="A collection of research, applications, and experiments."
          data={projects}
        />

        {/* Certificates */}
        <Section
          id="certificates"
          number="03 / Credentials"
          title="Certificates"
          subtitle="Certifications, qualifications, and achievements."
          data={certificates.toReversed()}
        />

        {/* Education */}
        <Section
          id="education"
          number="04 / Academic Background"
          title="Education"
          subtitle="The academic foundation behind my technical journey."
          data={education}
        />

        {/* Contact */}
        <Contact />
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-8">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-4 text-sm text-muted sm:flex-row">
          <p>
            © {new Date().getFullYear()} Salim.
            All rights reserved.
          </p>

          <p>
            Built with React & Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
}