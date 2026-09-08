import type { StaticImageData } from "next/image";

export type PlaygroundApp = {
  slug: string;
  title: string;
  description: string;
  emoji: string;
  image: StaticImageData;
  href: string;
};
