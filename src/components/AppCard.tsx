import Image from "next/image";
import type { PlaygroundApp } from "@/types/app";

export function AppCard({ app }: { app: PlaygroundApp }) {
  return (
    <a
      href={app.href}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-bg-raised transition-colors hover:border-accent-500"
    >
      <div className="relative aspect-[3/2] overflow-hidden bg-bg-raised">
        <Image
          src={app.image}
          alt={app.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(min-width: 768px) 33vw, 100vw"
        />
        <span className="absolute left-3 top-3 text-2xl drop-shadow" aria-hidden>
          {app.emoji}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-lg font-semibold">{app.title}</h3>
        <p className="mt-2 text-sm text-text-muted">{app.description}</p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent-500 group-hover:text-accent-600">
          Open
          <svg viewBox="0 0 16 16" fill="none" strokeWidth="1.6" stroke="currentColor" className="h-3.5 w-3.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 3h8v8M13 3 3 13" />
          </svg>
        </span>
      </div>
    </a>
  );
}
