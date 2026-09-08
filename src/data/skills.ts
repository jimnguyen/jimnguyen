export type SkillGroup = {
  label: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    label: "Languages",
    skills: ["Python", "Scala", "Java", "SQL", "JavaScript/TypeScript", "Bash"],
  },
  {
    label: "Data & Streaming",
    skills: ["Apache Spark", "Kafka", "Flink", "Kinesis", "Iceberg", "Delta Lake"],
  },
  {
    label: "Cloud & Platforms",
    skills: ["AWS", "Databricks", "Snowflake", "S3", "Glue", "Lambda", "EMR", "MSK"],
  },
  {
    label: "Infrastructure",
    skills: ["Kubernetes", "Docker", "Terraform", "CI/CD", "IAM"],
  },
  {
    label: "Observability",
    skills: ["Datadog", "Grafana", "Splunk", "CloudWatch"],
  },
  {
    label: "Web (personal projects)",
    skills: ["React", "Next.js", "Redux", "Django REST Framework", "Firebase"],
  },
];
