import type { PlaygroundApp } from "@/types/app";

import chickenPreview from "@/assets/chicken-preview.webp";
import apartmentFinderPreview from "@/assets/apartment-finder-preview.webp";
import dailyAllowancePreview from "@/assets/daily-allowance-preview.webp";
import workoutTrackerPreview from "@/assets/workout-tracker-preview.webp";
import koreanTrackerPreview from "@/assets/korean-tracker-preview.webp";

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
  {
    slug: "daily-allowance",
    title: "Daily Allowance",
    description: "What's safe to spend today, rolling yesterday's leftovers forward. Demo with sample data — the real one tracks my actual budget.",
    emoji: "💸",
    image: dailyAllowancePreview,
    href: "/apps/daily-allowance/",
  },
  {
    slug: "workout-tracker",
    title: "Workout Tracker",
    description: "Live calendar of what I'm training and how the weight goal is going — updated as I log it.",
    emoji: "🏋️",
    image: workoutTrackerPreview,
    href: "/apps/workout-tracker/",
  },
  {
    slug: "korean-tracker",
    title: "Korean Study Tracker",
    description: "A self-taught, university-style schedule toward conversational Korean — live calendar, updated as I log it.",
    emoji: "🇰🇷",
    image: koreanTrackerPreview,
    href: "/apps/korean-tracker/",
  },
];
