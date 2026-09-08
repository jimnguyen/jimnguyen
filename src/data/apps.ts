import type { PlaygroundApp } from "@/types/app";

// Each app is a self-contained static page under public/apps/<slug>/index.html
// (no build step — plain HTML/CSS/JS). To add a new one:
//   1. Drop the page at public/apps/<slug>/index.html
//   2. Give it a "back-link" anchor to https://jimnguyen.dev/
//      (see public/apps/chicken/index.html for the pattern)
//   3. Add an entry below
export const apps: PlaygroundApp[] = [
  {
    slug: "chicken",
    title: "Chicken, Scaled.",
    description: "Scale a braised chicken sauce and slurry to whatever weight of chicken you're holding.",
    emoji: "🍗",
    href: "/apps/chicken/",
  },
];
