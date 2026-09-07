import { education, resumeHighlights } from "@/data/resume";
import { site } from "@/data/site";

export function ResumeSummary() {
  return (
    <div className="grid gap-10 md:grid-cols-[1fr_1.3fr]">
      <div>
        <h3 className="font-label text-xs uppercase tracking-wider text-text-muted">Education</h3>
        <p className="mt-3 font-medium">{education.school}</p>
        <p className="text-sm text-text-muted">
          {education.degree} · {education.graduated}
        </p>

        <a
          href={site.resumeUrl}
          download
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-600"
        >
          Download full resume (PDF)
          <svg viewBox="0 0 16 16" fill="none" strokeWidth="1.6" stroke="currentColor" className="h-3.5 w-3.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 2v8m0 0 3-3m-3 3-3-3M3 12.5h10" />
          </svg>
        </a>
      </div>

      <div>
        <h3 className="font-label text-xs uppercase tracking-wider text-text-muted">Selected work</h3>
        <ul className="mt-3 space-y-4">
          {resumeHighlights.map((item) => (
            <li key={item.title} className="border-l-2 border-border pl-4">
              <p className="font-medium">{item.title}</p>
              <p className="text-sm text-text-muted">{item.summary}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
