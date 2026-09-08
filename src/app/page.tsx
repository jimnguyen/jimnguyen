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
        <div>
          <h3 className="font-label text-xs uppercase tracking-wider text-text-muted">Live</h3>
          <p className="mt-2 max-w-2xl text-sm text-text-muted">
            Small tools I actively build and maintain — quick ideas, live for anyone to use.
          </p>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {apps.map((app) => (
              <AppCard key={app.slug} app={app} />
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h3 className="font-label text-xs uppercase tracking-wider text-text-muted">Legacy</h3>
          <p className="mt-2 max-w-2xl text-sm text-text-muted">
            Earlier full-stack projects from when I was starting out.
          </p>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
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
