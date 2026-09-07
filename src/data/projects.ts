import type { Project } from "@/types/project";

import chickenImage from "@/assets/chicken.webp";
import amazonImage from "@/assets/amazon.webp";
import burgerImage from "@/assets/burger.webp";
import restaurantImage from "@/assets/restaurant.webp";
import profilesImage from "@/assets/profiles.webp";

export const projects: Project[] = [
  {
    slug: "chicken-scaled",
    title: "Chicken, Scaled.",
    description:
      "A single-file recipe calculator that scales a braised chicken sauce and slurry to whatever weight of chicken you're holding — type a number, watch every ingredient update live.",
    tech: ["Vanilla JS", "HTML", "CSS"],
    image: chickenImage,
    liveUrl: "/chicken/",
  },
  {
    slug: "amazon-clone",
    title: "Amazon Clone",
    description:
      "A full-stack storefront clone with real authentication and checkout — Firebase handles login, realtime order history, and Stripe processes payments end to end.",
    tech: ["React", "Firebase", "Stripe", "Material-UI"],
    image: amazonImage,
    liveUrl: "https://amazon-clone.jimnguyen.dev",
  },
  {
    slug: "burger-builder",
    title: "Burger Builder",
    description:
      "A responsive single-page app for stacking a custom burger order — Redux drives the running total, and auth state survives a refresh.",
    tech: ["React", "Redux", "Firebase"],
    image: burgerImage,
    liveUrl: "https://burger-builder.jimnguyen.dev",
  },
  {
    slug: "restaurant-reviews",
    title: "Restaurant Reviews",
    description:
      "A full-stack review platform with a Spring Boot API backing a React frontend, deployed on AWS. The original S3-hosted demo has since been decommissioned.",
    tech: ["React", "Spring Boot", "MySQL", "AWS"],
    image: restaurantImage,
    archived: true,
  },
  {
    slug: "profiles-api",
    title: "Profiles REST API",
    description:
      "A backend-only REST API for user profile creation and management, with token auth and full CRUD via Django Viewsets.",
    tech: ["Python", "Django REST Framework"],
    image: profilesImage,
  },
];
