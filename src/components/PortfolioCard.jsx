import { ArrowUpRight, ExternalLink } from "lucide-react";
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function PortfolioCard({ item }) {
  return (
    <article className="flex min-h-[330px] w-[88%] shrink-0 snap-start flex-col rounded-2xl border border-white/10 bg-surface p-7 transition duration-300 hover:-translate-y-1 hover:border-accent/50 sm:w-[calc((100%-20px)/2)] lg:w-[calc((100%-40px)/3)]">
      
      {/* Category */}
      <span className="w-fit rounded-full border border-accent/30 bg-accent/10 px-3 py-2 text-[10px] font-bold uppercase tracking-wider text-accent">
        {item.category}
      </span>

      {/* Title */}
      <h3 className="mt-6 text-xl font-bold tracking-tight">
        {item.title}
      </h3>

      {/* Subtitle */}
      {item.subtitle && (
        <p className="mt-2 text-sm font-medium text-gray-300">
          {item.subtitle}
        </p>
      )}

      {/* Date */}
      {item.date && (
        <p className="mt-2 text-xs text-muted">
          {item.date}
        </p>
      )}

      {/* Description */}
      <p className="mt-5 text-sm leading-7 text-muted">
        {item.description}
      </p>

      {/* Technologies */}
      {item.technologies && (
        <div className="mt-auto flex flex-wrap gap-2 pt-6">
          {item.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-md border border-white/15 px-3 py-1.5 text-xs text-gray-300"
            >
              {technology}
            </span>
          ))}
        </div>
      )}

      {/* Links */}
      {(item.github || item.demo || item.link) && (
        <div className="mt-auto flex flex-wrap gap-5 pt-6">
          {item.github && (
            <a
              href={item.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-accent hover:text-white"
            >
              <FaGithub size={17} />
              GitHub
            </a>
          )}

          {item.demo && (
            <a
              href={item.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-accent hover:text-white"
            >
              <ExternalLink size={17} />
              Live Demo
            </a>
          )}

          {item.link && (
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-accent hover:text-white"
            >
              View Certificate
              <ArrowUpRight size={17} />
            </a>
          )}
        </div>
      )}
    </article>
  );
}