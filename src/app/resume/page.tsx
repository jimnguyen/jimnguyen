import type { Metadata } from "next";
import { ResumeDeck } from "@/components/resume/ResumeDeck";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: `Resume — ${site.name}`,
  description: `${site.name}'s interactive resume.`,
};

export default function ResumePage() {
  return <ResumeDeck />;
}
