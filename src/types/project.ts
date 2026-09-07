import type { StaticImageData } from "next/image";

export type Project = {
  slug: string;
  title: string;
  description: string;
  tech: string[];
  image: StaticImageData;
  liveUrl?: string;
  repoUrl?: string;
  archived?: boolean;
};
