export type SkillGroup = {
  label: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    label: "Languages",
    skills: ["JavaScript/TypeScript", "Python", "Java", "C/C++"],
  },
  {
    label: "Frontend",
    skills: ["React", "Next.js", "Redux", "Tailwind CSS"],
  },
  {
    label: "Backend & Infra",
    skills: ["Node.js", "Django REST Framework", "Firebase", "AWS", "Git"],
  },
];
