import { Mail, ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { socialLinks } from "../data/portfolioData";

export default function Contact() {
  const emailLink = socialLinks.email
    ? `mailto:${socialLinks.email}`
    : null;

  return (
    <section
      id="contact"
      className="mx-auto max-w-6xl px-6 py-20"
    >
      <div className="rounded-3xl bg-accent p-8 text-background sm:p-14">
        
        <p className="text-xs font-bold uppercase tracking-[3px]">
          05 / Contact
        </p>

        <div className="mt-6 flex flex-col justify-between gap-10 md:flex-row md:items-end">
          
          <div>
            <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              Let's build something
              <br />
              meaningful together.
            </h2>

            <p className="mt-6 max-w-xl text-sm leading-7 text-background/80">
              Interested in collaborating, discussing a project,
              or just saying hello? I'd love to connect.
            </p>
          </div>

          {emailLink && (
            <a
              href={emailLink}
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl border border-background px-6 py-4 text-sm font-bold transition hover:bg-background hover:text-accent"
            >
              Say Hello
              <ArrowUpRight size={18} />
            </a>
          )}
        </div>

        {/* Social Links */}
        <div className="mt-12 flex flex-wrap gap-6 border-t border-background/20 pt-8">
          
          {socialLinks.github && (
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-semibold hover:underline"
            >
              <FaGithub size={20} />
              GitHub
            </a>
          )}

          {socialLinks.linkedin && (
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-semibold hover:underline"
            >
              <FaLinkedin size={20} />
              LinkedIn
            </a>
          )}

          {emailLink && (
            <a
              href={emailLink}
              className="flex items-center gap-2 text-sm font-semibold hover:underline"
            >
              <Mail size={20} />
              Email
            </a>
          )}

        </div>
      </div>
    </section>
  );
}