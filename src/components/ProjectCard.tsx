import Image from "next/image";
import type { Project } from "@/types/project";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-border bg-bg-raised transition-colors hover:border-accent-500">
      <div className="relative aspect-[3/2] overflow-hidden bg-bg-raised">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(min-width: 768px) 33vw, 100vw"
        />
        {project.archived && (
          <span className="absolute right-3 top-3 rounded-full bg-black/70 px-3 py-1 font-label text-[0.65rem] uppercase tracking-wider text-white">
            Archived
          </span>
        )}
      </div>
      <div className="p-6">
        <h3 className="font-display text-lg font-semibold">{project.title}</h3>
        <p className="mt-2 text-sm text-text-muted">{project.description}</p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-border px-2.5 py-1 font-label text-[0.65rem] uppercase tracking-wide text-text-muted"
            >
              {tech}
            </li>
          ))}
        </ul>
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target={project.liveUrl.startsWith("/") ? undefined : "_blank"}
            rel={project.liveUrl.startsWith("/") ? undefined : "noreferrer"}
            className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent-500 hover:text-accent-600"
          >
            View live
            <svg viewBox="0 0 16 16" fill="none" strokeWidth="1.6" stroke="currentColor" className="h-3.5 w-3.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 3h8v8M13 3 3 13" />
            </svg>
          </a>
        )}
      </div>
    </article>
  );
}
