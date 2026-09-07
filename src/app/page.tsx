import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { ProjectCard } from "@/components/ProjectCard";
import { AppCard } from "@/components/AppCard";
import { SkillGrid } from "@/components/SkillBadge";
import { About } from "@/components/About";
import { ResumeSummary } from "@/components/ResumeSummary";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { projects } from "@/data/projects";
import { apps } from "@/data/apps";

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

      <Section id="playground" eyebrow="02 / Just for fun" title="Playground">
        <p className="mb-8 max-w-2xl text-text-muted">
          Small standalone tools I build instead of mobile apps — quick ideas,
          live for anyone to use.
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {apps.map((app) => (
            <AppCard key={app.slug} app={app} />
          ))}
        </div>
      </Section>

      <Section id="skills" eyebrow="03 / Toolbox" title="Skills">
        <SkillGrid />
      </Section>

      <Section id="about" eyebrow="04 / Me" title="About">
        <About />
      </Section>

      <Section id="resume" eyebrow="05 / Background" title="Resume">
        <ResumeSummary />
      </Section>

      <Section id="contact" eyebrow="06 / Say hi" title="Contact">
        <Contact />
      </Section>

      <Footer />
    </>
  );
}
