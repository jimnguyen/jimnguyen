import { site } from "@/data/site";

export function Hero() {
  return (
    <section id="top" className="mx-auto max-w-5xl px-6 pb-16 pt-20 sm:pt-28">
      <p className="font-label text-xs uppercase tracking-wider text-accent-500">
        {site.role} · {site.location}
      </p>
      <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
        Hi, I&apos;m {site.name.split(" ")[0]}.
        <br />
        <span className="text-text-muted">{site.tagline}</span>
      </h1>
      <div className="mt-8 flex flex-wrap gap-4">
        <a
          href="#projects"
          className="rounded-full bg-accent-500 px-6 py-3 font-medium text-white transition-colors hover:bg-accent-600"
        >
          See my work
        </a>
        <a
          href="#contact"
          className="rounded-full border border-border px-6 py-3 font-medium transition-colors hover:border-accent-500 hover:text-accent-500"
        >
          Get in touch
        </a>
      </div>
      <p className="mt-10 max-w-xl rounded-2xl border border-border bg-bg-raised px-5 py-4 text-sm text-text-muted">
        {site.now}
      </p>
    </section>
  );
}
