import { skillGroups } from "@/data/skills";

export function SkillGrid() {
  return (
    <div className="grid gap-8 sm:grid-cols-3">
      {skillGroups.map((group) => (
        <div key={group.label}>
          <h3 className="font-label text-xs uppercase tracking-wider text-text-muted">{group.label}</h3>
          <ul className="mt-3 flex flex-wrap gap-2">
            {group.skills.map((skill) => (
              <li
                key={skill}
                className="rounded-full border border-border bg-bg-raised px-3 py-1.5 text-sm"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
