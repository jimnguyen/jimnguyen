import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-5xl flex-col gap-2 px-6 text-sm text-text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {site.name}
        </p>
        <a href="#top" className="hover:text-accent-500">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
