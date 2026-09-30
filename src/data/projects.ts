export type Project = {
  slug: string;
  index: string;
  title: string;
  kind: string;
  summary: string;
  description: string;
  role: string;
  stack: string[];
  link?: { href: string; label: string };
  privateNote?: string;
  featured: boolean;
  object: "monitor" | "laptop" | "keyboard" | "phone" | "sheets" | "none";
};

export const projects: Project[] = [
  {
    slug: "mbvv-workforce",
    index: "01",
    title: "MBVV Workforce & Officer Directory",
    kind: "Mission-critical · Law Enforcement",
    summary:
      "Mobile + web workforce and officer-directory system for the MBVV Police Cyber Cell, serving 5,000+ personnel.",
    description:
      "A workforce allocation and officer-directory platform built for the MBVV Police Crime Branch Cyber Cell. I secured the backend, handled sensitive departmental data, and helped drive the digital transformation of the MBVV police system — with hardened authentication and protected access to personnel records.",
    role: "Backend security & development",
    stack: ["Ionic", "React", "Capacitor", "TypeScript", "PHP API", "Cypress", "Vitest"],
    privateNote: "Government / sensitive system — described here, source not public.",
    featured: true,
    object: "monitor",
  },
  {
    slug: "work-pipeline",
    index: "02",
    title: "Work Pipeline — Lead Management",
    kind: "Desktop CRM",
    summary:
      "Electron desktop CRM with a Kanban pipeline, local Excel storage, auto-backups, and live analytics.",
    description:
      "A desktop lead-management app with a drag-and-drop Kanban board (New → Contacted → Qualified → Proposal → Won), full CRUD with validation, local Excel persistence with daily automatic backups, interactive pie and bar analytics, and Indian-business currency formatting (Cr / L). Local-only storage — no cloud, complete privacy.",
    role: "Full-stack developer",
    stack: ["Electron", "React 18", "TypeScript", "Vite", "Tailwind", "Recharts", "XLSX"],
    link: { href: "https://github.com/Vikas-Blink-Tek/Work_PipeLine", label: "View on GitHub" },
    featured: true,
    object: "laptop",
  },
  {
    slug: "file-to-json",
    index: "03",
    title: "Universal Document Extractor",
    kind: "Parsing Engine",
    summary:
      "Converts 80+ file formats into structured, schema-consistent JSON. Multi-threaded, checksum-verified.",
    description:
      "A desktop tool that converts 80+ file formats — PDFs, DOCX, images (OCR), source code, and archives — into clean, structured JSON for AI training and data processing. Multi-threaded with 8 workers, MD5 checksums, rich metadata, and graceful handling of unsupported files, packaged as a standalone Windows executable.",
    role: "Systems developer",
    stack: ["Python", "OCR", "Multi-threading", "PyInstaller"],
    link: { href: "https://github.com/Vikas-Blink-Tek/ANY-files-to-JSON", label: "View on GitHub" },
    featured: true,
    object: "sheets",
  },
  {
    slug: "keylogger-research",
    index: "04",
    title: "Keylogger — Defensive Research",
    kind: "Security Research",
    summary:
      "A minimal keystroke logger built to study how keyloggers capture input — and how to detect them.",
    description:
      "Defensive research: a small Python keystroke logger written to understand exactly how this class of malware intercepts input, as a foundation for detection and mitigation. Studying how the threat works is the first step to defending against it — the focus here is analysis and defence, not offence.",
    role: "Security researcher",
    stack: ["Python", "pynput", "Threat Analysis"],
    link: { href: "https://github.com/Vikas-Blink-Tek/Key-Logger-Malware-", label: "View on GitHub" },
    featured: true,
    object: "keyboard",
  },
  {
    slug: "health-insurance-ai",
    index: "05",
    title: "Health Insurance AI Assistant",
    kind: "RAG / Vector Pipeline",
    summary:
      "A retrieval-augmented chatbot that answers policy questions from uploaded insurance documents.",
    description:
      "A conversational assistant that resolves health-insurance and policy questions by grounding answers in the user's own uploaded documents (PDF / text). It chunks and embeds the documents into a vector store and retrieves the relevant context at query time, so answers stay tied to the source material rather than hallucinated coverage.",
    role: "Full-stack AI developer",
    stack: ["Python", "LangChain", "Chroma", "IBM watsonx", "PyPDF2"],
    privateNote: "Repository temporarily private pending a credentials rotation.",
    featured: true,
    object: "phone",
  },
  {
    slug: "ai-pentesting",
    index: "06",
    title: "AI Pentesting Assistant",
    kind: "Desktop · RAG + CAG",
    summary:
      "An AI assistant for bug-bounty workflows: interprets tool output, guides testing, drafts reports.",
    description:
      "A desktop assistant for penetration testing and bug bounty. It runs RAG + CAG over a CVE and security-documentation knowledge base, interprets output from tools like subfinder, nuclei, and Burp Suite into actionable intelligence, guides the tester step by step, and drafts professional reports. It provides strategic guidance — you still do the testing.",
    role: "Full-stack developer",
    stack: ["Electron", "React", "TypeScript", "Qdrant", "SQLite", "Google Gemini"],
    link: { href: "https://github.com/Vikas-Blink-Tek/AI_Pentesting_Enhanced-", label: "View on GitHub" },
    featured: true,
    object: "none",
  },
  {
    slug: "go-unlisted",
    index: "07",
    title: "Go-Unlisted",
    kind: "Full-Stack · Web + Mobile",
    summary:
      "A full-stack finance platform spanning a React web client, a PHP API, and a Flutter mobile app.",
    description:
      "A full-stack platform with a React 19 + TypeScript web client (Zustand, TanStack Query, Chart.js, Framer Motion), a PHP API backend, and a Flutter mobile app — showing end-to-end range from data layer to two client surfaces.",
    role: "Full-stack developer",
    stack: ["React 19", "TypeScript", "PHP", "Flutter", "Chart.js"],
    link: { href: "https://github.com/Vikas-Blink-Tek/Go-Unlisted", label: "View on GitHub" },
    featured: false,
    object: "none",
  },
];

export const securityTools = [
  { name: "Port Scanner", desc: "Python network port scanner", href: "https://github.com/Vikas-Blink-Tek/PORT-Scanner-" },
  { name: "Caesar Cipher GUI", desc: "Tkinter encrypt/decrypt tool", href: "https://github.com/Vikas-Blink-Tek/PRODIGY_CY" },
  { name: "Password Complexity Checker", desc: "Strength analysis tool", href: "https://github.com/Vikas-Blink-Tek/PRODIGY_CY" },
  { name: "Image Encryption", desc: "Pixel-manipulation cipher", href: "https://github.com/Vikas-Blink-Tek/PRODIGY_CY" },
];
