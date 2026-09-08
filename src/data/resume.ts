export const education = {
  school: "Western Washington University",
  degree: "B.S. Computer Science",
  graduated: "August 2018",
};

export type ExperienceEntry = {
  company: string;
  title: string;
  location: string;
  mapsUrl: string;
  start: string;
  end: string;
  bullets: string[];
  skills: string[];
};

export const experience: ExperienceEntry[] = [
  {
    company: "Sony Interactive Entertainment (PlayStation)",
    title: "Software Engineer III",
    location: "San Francisco, CA",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=San+Francisco%2C+CA",
    start: "Sep 2021",
    end: "Present",
    bullets: [
      "Design, develop, and maintain backend systems and data infrastructure supporting PlayStation services and internal platform needs.",
      "Own technical projects end-to-end, from requirements and system design through implementation, testing, deployment, and maintenance.",
      "Lead modernization efforts across data platforms, including migrating legacy DynamoDB workloads to Snowflake to improve data accessibility and simplify long-term maintenance.",
      "Build and maintain data workflows and integrations connecting production systems, databases, and analytics platforms.",
      "Investigate production and data-quality issues, identify root causes, and implement reliable long-term fixes across distributed systems.",
      "Collaborate with engineers and cross-functional stakeholders to scope projects, evaluate technical tradeoffs, and review designs.",
      "Reduce operational overhead by simplifying architecture and retiring underutilized infrastructure.",
    ],
    skills: ["Python", "AWS", "DynamoDB", "Snowflake", "SQL", "Distributed Systems"],
  },
];

export const resumeHighlights = [
  {
    title: "Amazon Clone",
    summary:
      "Full-stack storefront with Firebase auth, realtime order history, and Stripe checkout.",
  },
  {
    title: "Burger Builder",
    summary:
      "Redux-driven SPA for building custom orders, with persistent state across refreshes.",
  },
  {
    title: "This site",
    summary:
      "Personal portfolio and app playground, built with Next.js, TypeScript, and Tailwind CSS.",
  },
];
