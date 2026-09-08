import type { PlaygroundApp } from "@/types/app";

import chickenPreview from "@/assets/chicken-preview.webp";
import apartmentFinderPreview from "@/assets/apartment-finder-preview.webp";

// Each app is a self-contained static page under public/apps/<slug>/index.html
// (no build step — plain HTML/CSS/JS). To add a new one:
//   1. Drop the page at public/apps/<slug>/index.html
//   2. Give it a "back-link" anchor to https://jimnguyen.dev/
//      (see public/apps/chicken/index.html for the pattern)
//   3. Add a screenshot to src/assets/<slug>-preview.webp
//   4. Add an entry below
export const apps: PlaygroundApp[] = [
  {
    slug: "chicken",
    title: "Chicken, Scaled.",
    description: "Scale a braised chicken sauce and slurry to whatever weight of chicken you're holding.",
    emoji: "🍗",
    image: chickenPreview,
    href: "/apps/chicken/",
  },
  {
    slug: "apartment-finder",
    title: "SF Apartment Finder",
    description: "Live feed from a Craigslist scraper running on a schedule, filtered to exactly what I'm looking for.",
    emoji: "🏠",
    image: apartmentFinderPreview,
    href: "/apps/apartment-finder/",
  },
];
