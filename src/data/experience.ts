export type Job = {
  period: string;
  role: string;
  org: string;
  location?: string;
  detail: string;
  tags: string[];
  current?: boolean;
};

export const experience: Job[] = [
  {
    period: "Apr 2026 — Present",
    role: "Senior Software Engineer",
    org: "Blink Technologies",
    location: "Mira-Bhayandar · Full-time · On-site",
    detail:
      "Building scalable full-stack web and Android applications with a focus on performance optimisation and user-centric design.",
    tags: ["Full-Stack", "React", "System Design"],
    current: true,
  },
  {
    period: "Feb — Apr 2026",
    role: "Software Quality Assurance Intern",
    org: "BITBLUE Technology Pvt. Ltd.",
    location: "Vasai · On-site",
    detail:
      "Manual QA and testing of web applications; identified and reported bugs; supported the team in improving application performance and reliability.",
    tags: ["QA", "Manual Testing", "Bug Reporting"],
  },
  {
    period: "Mar 2025 — Present",
    role: "Intern — Cyber Cell",
    org: "MBVV Police Commissionerate",
    location: "Mira-Bhayandar · On-site",
    detail:
      "Digital forensics, UFED mobile extraction, and cybercrime investigation (online and financial fraud). Secured the backend of the MBVV Workforce Portal serving 5,000+ police personnel.",
    tags: ["Digital Forensics", "UFED", "Law Enforcement", "OSINT"],
  },
  {
    period: "Jun 2023 — Jun 2026",
    role: "B.Sc. Information Technology",
    org: "Shree L. R. Tiwari College of Engineering · University of Mumbai",
    detail:
      "Focus on cybersecurity, ethical hacking, and digital forensics.",
    tags: ["Cybersecurity", "Forensics", "Networks"],
  },
  {
    period: "Nov — Dec 2022",
    role: "Summer Intern",
    org: "Mindler",
    location: "Remote · Mumbai",
    detail:
      "Business development and management exposure — understanding how a tech company operates.",
    tags: ["Business Dev", "Management"],
  },
];

export type Award = { title: string; issuer: string; date: string; detail: string };

export const awards: Award[] = [
  {
    title: "Letter of Recommendation — MBVV Police Commissionerate",
    issuer: "PI Sujitkumar Gunjkar, Cyber Police Station",
    date: "Jul 2025",
    detail:
      "Recognised for technical contributions to the state-level MBVV Workforce Management System, serving 5,000+ personnel with enhanced security protocols.",
  },
  {
    title: "IBM SkillsBuild Maharashtra Hackathon 2025 — Top 30 Teams",
    issuer: "IBM SkillsBuild · State level, Pune",
    date: "2025",
    detail:
      "Selected among the top 30 teams state-wide for solving real-world challenges with IBM Cloud technologies.",
  },
  {
    title: "Hosted the Capture The Flag (CTF) — TECHNOVA 2K25",
    issuer: "Shree L. R. Tiwari Degree College",
    date: "2025",
    detail:
      "Designed and ran the CTF competition at a fest drawing 1,000+ students — challenge authoring and event operations.",
  },
  {
    title: "3rd Place — “Digital Dastaan”, Festyn Era 2.0",
    issuer: "Sailee Degree College",
    date: "2025",
    detail: "Awarded third place in a creative-technical competition.",
  },
  {
    title: "Responsible Bug Reporting",
    issuer: "Shree L. R. Tiwari College of Engineering",
    date: "Jan 2024",
    detail:
      "Identified and responsibly reported vulnerabilities in the college website, contributing to security improvements.",
  },
];

export type Cert = { name: string; issuer: string; date: string; id?: string };

export const certifications: Cert[] = [
  { name: "Cybercrime Investigation (Forensic Track)", issuer: "CyberDost / I4C (NCRB)", date: "Jan 2026", id: "BoJ8Pgxw5T" },
  { name: "Cyber Risk Management", issuer: "Cyber Shakti Foundation", date: "Dec 2025", id: "60b6b989-…-6707aa013e7e" },
  { name: "Artificial Intelligence", issuer: "Edunet Foundation", date: "Mar 2025", id: "S4F25_140833" },
  { name: "IBM Hackathon", issuer: "IBM SkillsBuild (Student Ambassador Program)", date: "Jan 2025" },
  { name: "ISEA Certified Cyber Hygiene Practitioner", issuer: "MeitY, Govt. of India", date: "Jan 2023", id: "CDACHYD/ISEA/CHP/118462" },
];
