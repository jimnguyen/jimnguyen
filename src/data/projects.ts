import type { Project } from "@/types/project";

import burgerImage from "@/assets/burger.webp";
import restaurantImage from "@/assets/restaurant.webp";
import profilesImage from "@/assets/profiles.webp";

export const projects: Project[] = [
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
