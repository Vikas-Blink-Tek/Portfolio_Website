# Vikas Maurya — Portfolio content deck (Phase 2)

Status: **verified.** Sourced from your LinkedIn (pasted 2026-09-30) + your public GitHub repos. This is the single source of truth for all site copy.

---

## ⚠️ Action items (not content)

1. **Live API key exposed — still open.** `Health-Insurance-AI-ChatBot/script_with_chroma.py` has a hard-coded IBM watsonx `api_key` + `project_id` in a **public** repo. Rotate it in IBM Cloud and scrub it from git history. Until then the site describes the project but does **not** link the repo.
2. **3D character:** per your instruction, the personal photoreal face model is **dropped**. See "Hero direction" below. No face photos needed.
3. **Model licences:** poly.pizza is blocked from this environment, so I'll add a **Credits** page attributing all model authors (J-Toastie, Alex Safayan, Akira Ohmachi, Poly by Google). Crediting covers both CC-BY and CC0. Done — no action from you.

---

## 1. Identity / hero

- **Name:** Vikas Maurya (He/Him)
- **Role line:** Cybersecurity Researcher & Full-Stack Developer
- **LinkedIn headline (verbatim):** Cybersecurity Researcher | Ethical Hacking | OSINT Investigator | Penetration Testing | Network Security | B.Sc. IT Undergrad '26
- **Location:** Mira-Bhayandar, Mumbai Metropolitan Region, India
- **Email:** vikasmaurya916728@gmail.com
- **GitHub:** https://github.com/Vikas-Blink-Tek
- **LinkedIn:** https://www.linkedin.com/in/vikas-maurya-0a3ba2279/
- **Tagline:** BUILD · BREAK · SECURE
- **Hero intro:**
  > I build production software and break it on purpose — full-stack apps on one side, security research, digital forensics, and cybercrime investigation on the other.

## 2. About (from your LinkedIn "About", lightly tightened)

> I'm a cybersecurity researcher and full-stack developer based in Mira-Bhayandar, Mumbai. I have hands-on experience in web application testing, mobile forensics (UFED), and cybercrime investigation — including work with the MBVV Police Crime Branch Cyber Cell, where I helped manage sensitive data, analyse digital evidence, and secure the backend of the MBVV Workforce Portal.
>
> I hunt vulnerabilities through ethical hacking and bug bounties, use OSINT and Python scripting for vulnerability assessment, and build security tools and products end to end — from a custom port scanner and an AI health-insurance chatbot to an Excel-to-database converter and keylogger research. I'm pursuing a B.Sc. in Information Technology (University of Mumbai, '26) and I'm driven by continuous learning and building secure digital environments.

**Communities:** The Hackers Meetup (THM), Breach Force Community, NSS volunteer.

## 3. Skills (from LinkedIn + verified repo stacks)

- **Frontend:** React 18/19, TypeScript, Vite, Tailwind, Ionic, Framer Motion, Zustand, TanStack Query
- **Desktop/Mobile:** Electron, Capacitor (Android), Flutter
- **Backend:** Node.js, Python, PHP, MySQL, MongoDB
- **AI:** LangChain, Chroma, Qdrant, RAG/CAG, IBM watsonx, Google Gemini, NLP
- **Security:** Web VAPT, digital forensics, mobile forensics (UFED), OSINT, bug bounty / responsible disclosure, network security, Python security tooling
- **Domain:** NPCI / i-NCCRP portal exposure through online-fraud investigations
- **Languages (code):** Python, C++, TypeScript, PHP, Bash · **Languages (spoken):** English, Hindi, +1

## 4. Timeline / Experience (verbatim dates from LinkedIn)

> Note: your LinkedIn dates differ from what you first told me in chat. I've used **LinkedIn** as authoritative. Flag any you want changed.

| When | Role | Org | Detail |
|---|---|---|---|
| Nov–Dec 2022 | **Summer Intern** | Mindler (Remote, Mumbai) | Business development & management exposure — how a tech company operates. |
| Jun 2023 – Jun 2026 | **B.Sc. Information Technology** | Shree L. R. Tiwari College of Engineering (University of Mumbai) | Focus: cybersecurity, ethical hacking, digital forensics. |
| Mar 2025 – present | **Intern, Cyber Cell** | MBVV Police Commissionerate (Mira-Bhayandar, On-site) | Digital forensics, UFED mobile extraction, cybercrime investigation (online/financial fraud); secured backend of the MBVV Workforce Portal (5,000+ personnel). |
| Feb–Apr 2026 | **Software QA Intern** | BITBLUE Technology Pvt. Ltd. (Vasai) | Manual QA / testing of web apps; reported bugs; supported perf & reliability. |
| Apr 2026 – present | **Senior Software Engineer** | Blink Technologies (Mira-Bhayandar, Full-time, On-site) | Scalable full-stack web/Android apps; performance optimisation; user-centric design. |

## 5. Featured projects

### 5.1 MBVV Workforce & Officer Directory
- Mobile + web workforce/officer-directory system for the MBVV Police Cyber Cell; serves 5,000+ police personnel. You secured the backend and handled sensitive departmental data.
- **Stack:** Ionic + React, Capacitor (Android), TypeScript, PHP API (`mbvvworkforce.in`), Cypress + Vitest.
- **Link:** describe only (gov/sensitive) — no public repo link.

### 5.2 Work Pipeline — Lead Management (CRM)
- Electron desktop CRM: Kanban pipeline, local Excel storage + daily auto-backup, pie/bar analytics, Indian currency (Cr/L) formatting.
- **Stack:** Electron, React 18, TypeScript, Vite, Tailwind, Recharts, XLSX, Radix UI.
- **Repo:** https://github.com/Vikas-Blink-Tek/Work_PipeLine

### 5.3 Universal Document Extractor (File → JSON)
- Converts 80+ file formats (PDF, DOCX, images/OCR, code, archives) into structured JSON. Multi-threaded (8 workers), MD5 checksums, batch processing, packaged `.exe`.
- **Stack:** Python. **Repo:** https://github.com/Vikas-Blink-Tek/ANY-files-to-JSON

### 5.4 Keylogger — Defensive Research
- Minimal Python keystroke logger built to study how keyloggers capture input, as a basis for detection and defense. Framed on-site as research (no download/CTA).
- **Stack:** Python (`pynput`). **Repo:** https://github.com/Vikas-Blink-Tek/Key-Logger-Malware-

### 5.5 Health Insurance AI Assistant (RAG)
- Conversational assistant answering health-insurance/policy questions from uploaded PDFs/text via retrieval-augmented generation.
- **Stack:** Python, LangChain, Chroma, IBM watsonx, PyPDF2.
- **Repo:** withheld until the API key is rotated.

### 5.6 AI Pentesting Assistant
- Desktop AI assistant for bug-bounty/pentest workflows: RAG + CAG over a CVE/security-doc knowledge base; interprets tool output (subfinder, nuclei, Burp), guides testing, drafts reports. Guidance, not automated exploitation.
- **Stack:** Electron, React 18, TypeScript, Qdrant, SQLite, Google Gemini 2.5 Flash.
- **Repos:** https://github.com/Vikas-Blink-Tek/AI_Pentesting_Enhanced-

### 5.7 Go-Unlisted
- Full-stack web + mobile finance platform. `[one-line description — confirm what it does]`
- **Stack:** React 19, TypeScript, Vite, Zustand, TanStack Query, Chart.js, Framer Motion; PHP API; Flutter mobile.
- **Repo:** https://github.com/Vikas-Blink-Tek/Go-Unlisted

### 5.8 Security tools strip
- **Port Scanner** (`PORT-Scanner-`), **Caesar Cipher GUI**, **Password Complexity Checker**, **Pixel-Manipulation Image Encryption** (`PRODIGY_CY`, from a PRODIGY Infotech cyber-security internship).

## 6. Achievements / Honors (verified from LinkedIn)

- **Letter of Recommendation — MBVV Police Commissionerate.** Issued Jul 2025 by Police Inspector Sujitkumar Gunjkar, Cyber Police Station, for technical contributions to the MBVV Workforce Management System (recognised at state level; 5,000+ personnel).
- **IBM SkillsBuild Maharashtra Hackathon 2025 — Top 30 Teams** (state level, Pune). Team: Vikas Maurya & Riya Mewada; mentor Asst. Prof. Sophia Dcruz.
- **Hosted the Capture The Flag (CTF) competition at TECHNOVA 2K25** (Shree L. R. Tiwari Degree College) — organiser/host, not participant. (This corrects the asset-sheet's "1000+ CTF participants": the fest drew 1000+ students overall.)
- **3rd Place — "Digital Dastaan", Festyn Era 2.0** (Sailee Degree College).
- **Bug Reporting** — reported vulnerabilities in the L. R. Tiwari college website (Jan 2024).

## 7. Certifications (verified, verbatim)

| Certification | Issuer | Issued | Credential ID |
|---|---|---|---|
| Cybercrime Investigation (Forensic Track) | CyberDost / I4C (NCRB) | Jan 2026 | BoJ8Pgxw5T |
| Cyber Risk Management | Cyber Shakti Foundation | Dec 2025 | 60b6b989-7b91-404a-be2f-6707aa013e7e |
| Artificial Intelligence | Edunet Foundation | Mar 2025 | S4F25_140833 |
| IBM Hackathon | IBM SkillsBuild (Student Ambassador Program) | Jan 2025 | — |
| ISEA Certified Cyber Hygiene Practitioner | Ministry of Electronics & IT (MeitY), Govt. of India | Jan 2023 | CDACHYD/ISEA/CHP/118462 |

## 8. Contact
- CTA: "Let's build something resilient."
- Email vikasmaurya916728@gmail.com · GitHub · LinkedIn.
- No fabricated PGP/coordinates/metrics.

---

## Hero direction (character dropped)

Since the photoreal 3D "you" is off, the hero becomes a **3D sculptural still-life of your workspace** — the concrete platform, laptop, keyboard-in-glass-case, phone — with the massive "VIKAS MAURYA" typography and the BUILD · BREAK · SECURE line. Same premium/cinematic scroll journey and camera work from `PLAN.md`, minus the avatar, look-at, and blink systems. This is simpler, faster, and needs no photos. Everything else in the plan stands.

## Remaining tiny confirmations (non-blocking)
1. One line on what **Go-Unlisted** does.
2. OK to name **MBVV Police** and **BITBLUE Technology** on a public site? (Both are already public on your LinkedIn, so I'll assume yes unless you say otherwise.)
3. Confirm the **Blink title** shows as "Senior Software Engineer" (LinkedIn) vs "Senior Developer" (asset sheet).
