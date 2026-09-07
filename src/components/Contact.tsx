import { site } from "@/data/site";

const socialLinks = [
  { href: site.social.github, label: "GitHub" },
  { href: site.social.linkedin, label: "LinkedIn" },
  { href: site.social.instagram, label: "Instagram" },
];

export function Contact() {
  return (
    <div className="flex flex-col items-start gap-6">
      <a
        href={`mailto:${site.email}`}
        className="font-display text-2xl font-semibold text-accent-500 hover:text-accent-600 sm:text-3xl"
      >
        {site.email}
      </a>
      <ul className="flex flex-wrap gap-4">
        {socialLinks.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-border px-4 py-2 text-sm font-medium transition-colors hover:border-accent-500 hover:text-accent-500"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
