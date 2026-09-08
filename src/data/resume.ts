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
    title: "Software Engineer II",
    location: "San Francisco, CA",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=San+Francisco%2C+CA",
    start: "Sep 2021",
    end: "Present",
    bullets: [
      "Engineer and operate petabyte-scale production data platforms across AWS, Databricks, and Snowflake, supporting large-scale batch, streaming, and analytics workloads.",
      "Design, build, and maintain distributed event-streaming pipelines using Apache Kafka, Apache Flink, Amazon Kinesis, Kubernetes, and Snowflake to process and deliver high-volume production event data.",
      "Led a large-scale Amazon S3 Intelligent-Tiering optimization initiative that reduced steady-state storage costs by 32.7% and delivered approximately $710K in validated annualized savings, with a recent run rate approaching $926K annually.",
      "Modernize legacy data infrastructure by migrating workloads to Databricks, Apache Iceberg, and lakehouse architectures, improving scalability, maintainability, and accessibility of enterprise data.",
      "Develop and operate Kafka-to-Snowflake ingestion architectures using Kafka Connect and Snowflake Iceberg tables, enabling production event streams to flow into analytics-ready data stores.",
      "Support the modernization of enterprise analytics workloads from legacy EMR and Zeppelin environments to Databricks SQL, simplifying access to cloud-scale data and reducing reliance on legacy platforms.",
      "Own production reliability and incident troubleshooting across distributed data systems, diagnosing issues involving Kafka consumer lag, Flink state, Kinesis processing, Kubernetes workloads, and IAM/KMS permissions.",
      "Implement and troubleshoot security and access controls across AWS, Databricks, and Snowflake, including IAM roles and policies, KMS encryption, RBAC, cross-account access, and catalog-level data permissions.",
      "Partner with engineering and analytics teams across SIE to onboard data producers and consumers, investigate data discrepancies, and support production integrations across shared data infrastructure.",
    ],
    skills: ["AWS", "Databricks", "Snowflake", "Kafka", "Flink", "Kubernetes"],
  },
];

export type ImpactHighlight = {
  title: string;
  description: string;
};

export const impactHighlights: ImpactHighlight[] = [
  {
    title: "S3 Storage Optimization",
    description: "32.7% cost reduction — ~$710K/year validated, trending toward ~$926K/year.",
  },
  {
    title: "Real-Time Event Platform",
    description: "Kafka → Flink → Kinesis → Kubernetes → Snowflake → Iceberg.",
  },
  {
    title: "Data Platform Modernization",
    description: "Legacy EMR/Zeppelin → Databricks, Spark, DBSQL.",
  },
  {
    title: "Cloud Data Infrastructure",
    description: "AWS → S3, Glue, Athena, Lambda, MSK, IAM.",
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
