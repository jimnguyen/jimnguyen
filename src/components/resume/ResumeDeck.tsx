"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { site } from "@/data/site";
import { education, experience, impactHighlights, resumeHighlights } from "@/data/resume";
import { skillGroups } from "@/data/skills";

const cardIds = ["intro", "experience", "impact", "education", "skills", "projects", "contact"] as const;
type CardId = (typeof cardIds)[number];

const cardLabels: Record<CardId, string> = {
  intro: "Intro",
  experience: "Experience",
  impact: "Impact",
  education: "Education",
  skills: "Skills",
  projects: "Projects",
  contact: "Contact",
};

function MapPinIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" strokeWidth="1.6" stroke="currentColor" className="h-3.5 w-3.5">
      <path d="M8 14.5S13 10 13 6.5a5 5 0 1 0-10 0C3 10 8 14.5 8 14.5Z" strokeLinejoin="round" />
      <circle cx="8" cy="6.5" r="1.8" />
    </svg>
  );
}

export function ResumeDeck() {
  const [index, setIndex] = useState(0);

  const goTo = (i: number) => setIndex(Math.max(0, Math.min(cardIds.length - 1, i)));
  const next = () => goTo(index + 1);
  const prev = () => goTo(index - 1);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  const cardId = cardIds[index];

  return (
    <div className="mx-auto flex min-h-screen max-w-3xl flex-col px-6 py-10">
      <div className="flex items-center justify-between">
        <Link href="/" className="inline-flex items-center gap-1.5 text-sm font-medium text-text-muted hover:text-accent-500">
          <svg viewBox="0 0 16 16" fill="none" strokeWidth="1.8" stroke="currentColor" className="h-3.5 w-3.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 13 5 8l5-5" />
          </svg>
          jimnguyen.dev
        </Link>
        <a
          href={site.resumeUrl}
          download
          className="inline-flex items-center gap-1.5 text-sm font-medium text-text-muted hover:text-accent-500"
        >
          Download PDF
        </a>
      </div>

      <div className="mt-8 flex items-center justify-center gap-2">
        {cardIds.map((id, i) => (
          <button
            key={id}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Go to ${cardLabels[id]}`}
            aria-current={i === index}
            className={`h-1.5 rounded-full transition-all ${
              i === index ? "w-8 bg-accent-500" : "w-1.5 bg-border hover:bg-accent-400"
            }`}
          />
        ))}
      </div>

      <div className="flex flex-1 items-center justify-center py-10">
        <div
          key={cardId}
          className="w-full animate-[fadeIn_.35s_ease] rounded-3xl border border-border bg-bg-raised p-8 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.4)] sm:p-12"
        >
          {cardId === "intro" && (
            <div>
              <p className="font-label text-xs uppercase tracking-wider text-accent-500">01 / Resume</p>
              <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
                {site.name}
              </h1>
              <p className="mt-3 text-lg text-text-muted">
                {experience[0].title} · {experience[0].company}
              </p>
              <p className="mt-6 max-w-lg text-text-muted">
                5+ years specializing in cloud data platforms, distributed systems, and real-time
                streaming infrastructure, plus a habit of shipping small web projects on the side.
                Click through &mdash; job locations open on Maps, and tech tags highlight on hover.
              </p>
              <p className="mt-8 text-sm text-text-muted">
                Use the arrow keys, the dots above, or the button below to move around.
              </p>
            </div>
          )}

          {cardId === "experience" && (
            <div>
              <p className="font-label text-xs uppercase tracking-wider text-accent-500">02 / Experience</p>
              <div className="mt-6 space-y-10">
                {experience.map((job) => (
                  <div key={job.company}>
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h2 className="font-display text-2xl font-semibold">{job.title}</h2>
                      <span className="font-label text-xs uppercase tracking-wider text-text-muted">
                        {job.start} &ndash; {job.end}
                      </span>
                    </div>
                    <p className="mt-1 font-medium text-text-muted">{job.company}</p>
                    <a
                      href={job.mapsUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-2 inline-flex items-center gap-1.5 text-sm text-accent-500 hover:text-accent-600"
                    >
                      <MapPinIcon />
                      {job.location}
                    </a>
                    <ul className="mt-5 space-y-3">
                      {job.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-3 text-sm text-text-muted">
                          <span className="mt-2 h-1 w-1 flex-none rounded-full bg-accent-500" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {job.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full border border-border px-3 py-1 font-label text-[0.65rem] uppercase tracking-wide text-text-muted transition-colors hover:border-accent-500 hover:text-accent-500"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {cardId === "impact" && (
            <div>
              <p className="font-label text-xs uppercase tracking-wider text-accent-500">03 / Impact</p>
              <h2 className="mt-6 font-display text-2xl font-semibold">Highlights</h2>
              <p className="mt-2 text-sm text-text-muted">The quick-scan version of the work above.</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {impactHighlights.map((item) => (
                  <div key={item.title} className="rounded-2xl border border-border p-5">
                    <p className="font-medium">{item.title}</p>
                    <p className="mt-1.5 text-sm text-text-muted">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {cardId === "education" && (
            <div>
              <p className="font-label text-xs uppercase tracking-wider text-accent-500">04 / Education</p>
              <h2 className="mt-6 font-display text-2xl font-semibold">{education.school}</h2>
              <p className="mt-1 text-text-muted">
                {education.degree} &middot; {education.graduated}
              </p>
            </div>
          )}

          {cardId === "skills" && (
            <div>
              <p className="font-label text-xs uppercase tracking-wider text-accent-500">05 / Skills</p>
              <div className="mt-6 space-y-6">
                {skillGroups.map((group) => (
                  <div key={group.label}>
                    <h3 className="font-label text-xs uppercase tracking-wider text-text-muted">{group.label}</h3>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {group.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full border border-border px-3 py-1.5 text-sm transition-colors hover:border-accent-500 hover:bg-accent-500/10 hover:text-accent-600"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {cardId === "projects" && (
            <div>
              <p className="font-label text-xs uppercase tracking-wider text-accent-500">06 / Projects</p>
              <ul className="mt-6 space-y-5">
                {resumeHighlights.map((item) => (
                  <li key={item.title} className="border-l-2 border-border pl-4">
                    <p className="font-medium">{item.title}</p>
                    <p className="text-sm text-text-muted">{item.summary}</p>
                  </li>
                ))}
              </ul>
              <Link
                href="/#projects"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent-500 hover:text-accent-600"
              >
                See all projects on the site
              </Link>
            </div>
          )}

          {cardId === "contact" && (
            <div>
              <p className="font-label text-xs uppercase tracking-wider text-accent-500">07 / Say hi</p>
              <h2 className="mt-6 font-display text-2xl font-semibold">Let&apos;s talk</h2>
              <a
                href={`mailto:${site.email}`}
                className="mt-4 inline-block text-lg font-medium text-accent-500 hover:text-accent-600"
              >
                {site.email}
              </a>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={site.social.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-border px-4 py-2 text-sm font-medium hover:border-accent-500 hover:text-accent-500"
                >
                  LinkedIn
                </a>
                <a
                  href={site.social.github}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-border px-4 py-2 text-sm font-medium hover:border-accent-500 hover:text-accent-500"
                >
                  GitHub
                </a>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={prev}
          disabled={index === 0}
          className="rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:border-accent-500 hover:text-accent-500 disabled:pointer-events-none disabled:opacity-0"
        >
          &larr; Back
        </button>
        <span className="font-label text-xs uppercase tracking-wider text-text-muted">
          {cardLabels[cardId]} &middot; {index + 1} / {cardIds.length}
        </span>
        {index === cardIds.length - 1 ? (
          <Link
            href="/"
            className="rounded-full bg-accent-500 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-600"
          >
            Back to site &rarr;
          </Link>
        ) : (
          <button
            type="button"
            onClick={next}
            className="rounded-full bg-accent-500 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-600"
          >
            Next &rarr;
          </button>
        )}
      </div>
    </div>
  );
}
