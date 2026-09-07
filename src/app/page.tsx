import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { ProjectCard } from "@/components/ProjectCard";
import { SkillGrid } from "@/components/SkillBadge";
import { About } from "@/components/About";
import { ResumeSummary } from "@/components/ResumeSummary";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />

      <Section id="projects" eyebrow="01 / Work" title="Projects">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Section>

      <Section id="skills" eyebrow="02 / Toolbox" title="Skills">
        <SkillGrid />
      </Section>

      <Section id="about" eyebrow="03 / Me" title="About">
        <About />
      </Section>

      <Section id="resume" eyebrow="04 / Background" title="Resume">
        <ResumeSummary />
      </Section>

      <Section id="contact" eyebrow="05 / Say hi" title="Contact">
        <Contact />
      </Section>

      <Footer />
    </>
  );
}
