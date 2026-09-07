import type { PlaygroundApp } from "@/types/app";

export function AppCard({ app }: { app: PlaygroundApp }) {
  return (
    <a
      href={app.href}
      className="group flex flex-col gap-3 rounded-2xl border border-border bg-bg-raised p-6 transition-colors hover:border-accent-500"
    >
      <span className="text-3xl" aria-hidden>
        {app.emoji}
      </span>
      <h3 className="font-display text-lg font-semibold">{app.title}</h3>
      <p className="text-sm text-text-muted">{app.description}</p>
      <span className="mt-1 inline-flex items-center gap-1.5 text-sm font-medium text-accent-500 group-hover:text-accent-600">
        Open
        <svg viewBox="0 0 16 16" fill="none" strokeWidth="1.6" stroke="currentColor" className="h-3.5 w-3.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 3h8v8M13 3 3 13" />
        </svg>
      </span>
    </a>
  );
}
