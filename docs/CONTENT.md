# Vikas Maurya — Portfolio content deck (Phase 2)

Status: **draft for your review.** Every line here is drawn from your GitHub repos and what you told me in chat.
Anything I could not verify is marked **`[CONFIRM]`**. Nothing is invented — where a fact is missing, I left a blank, not a guess.

Source of truth: your public repos under `github.com/Vikas-Blink-Tek` (read 2026-09-30) + your chat answers.

---

## ⚠️ Action items pulled out of the research (not content)

1. **Live API key exposed.** `Health-Insurance-AI-ChatBot/script_with_chroma.py` has a hard-coded IBM watsonx `api_key` and `project_id`, committed to a **public** repo. Revoke/rotate the key in IBM Cloud and remove it from the file + git history. Until then I will **not** link that repo publicly from the site.
2. **Contact email mismatch.** README shows `vikasmaurya916728@gmail.com`; this session is under `sj954583@gmail.com`. **`[CONFIRM]`** which to display.
3. Several repos are under the older username `Vikas-Maurya-hack` in their links but now live under `Vikas-Blink-Tek`. I'll use `Vikas-Blink-Tek` URLs.

---

## 1. Identity / hero

- **Name:** Vikas Maurya
- **Role line:** Full-Stack Developer & Security Researcher
- **Location:** Mumbai (Mira-Bhayandar), India
- **Short intro (hero):**
  > I build production software and break it on purpose — full-stack apps on one side, security research and digital forensics on the other.
- **Tagline (from your asset sheet):** BUILD · BREAK · SECURE
- **Links:**
  - GitHub: https://github.com/Vikas-Blink-Tek
  - LinkedIn: https://www.linkedin.com/in/vikas-maurya-0a3ba2279/
  - Email: `[CONFIRM — which address]`

## 2. About

Drawn from your profile README + chat:

> I'm a developer and security researcher based in Mumbai, currently building products at Blink Technologies. I'm pursuing a B.Sc. in Information Technology at the University of Mumbai, with a focus on cybersecurity, ethical hacking, and digital forensics.
>
> I've worked alongside law enforcement on real-world cybercrime investigations — including mobile forensics (UFED) and vulnerability analysis — and I build full-stack products end to end, from React and Electron front-ends to PHP, Node, and Python back-ends.

**Skills** (verified from repo languages/stacks):
- **Frontend:** React 18/19, TypeScript, Vite, Tailwind, Ionic, Framer Motion, Zustand
- **Desktop/Mobile:** Electron, Capacitor, Flutter
- **Backend:** Node.js, Python, PHP, MySQL, MongoDB
- **AI:** LangChain, Chroma, Qdrant (vector DB), RAG/CAG, IBM watsonx, Google Gemini
- **Security:** VAPT, digital forensics, mobile forensics (UFED), OSINT, Python security tooling
- **Languages:** Python, C++, TypeScript, PHP, Bash

## 3. Timeline

| Year | Entry | Detail (from your chat — please tighten) |
|---|---|---|
| 2022 | **Intern — Mindler** (online) | During 12th std. Learned how a tech company operates from a business perspective. `[CONFIRM dates]` |
| 2023 | **B.Sc. Information Technology — University of Mumbai** | `[CONFIRM: start/grad year — README says currently pursuing]` |
| 2024 | **Intern — MBVV Police Cyber Cell** (~10 months) | 2nd year of college. Worked on cybercrime cases; built the MBVV Workforce app + web portal for senior officers to view personnel details. |
| 2024–25 | **Software QA — `[CONFIRM company name]`** (3 months) | Final year. Tested company websites/products, reported critical bugs. |
| Apr 2025 – present | **Software Developer — Blink Technologies** | Currently building full-stack products (Blink Finance site, Go-Unlisted, internal tools). `[CONFIRM your exact title]` |

**`[CONFIRM]`** Your asset sheet said "2025: Senior Developer" — but you joined Apr 2025. Is the title "Senior Developer" or "Software Developer"? I'll use whatever you confirm.

## 4. Featured projects

### 4.1 MBVV Workforce & Officer Directory
- **What:** Mobile + web workforce app for the MBVV Police Cyber Cell — lets senior officers view personnel details and directory records.
- **Stack:** Ionic + React, Capacitor (Android), TypeScript, PHP API backend (`mbvvworkforce.in`), Cypress + Vitest tests.
- **Your role:** Built the app and portal during your ~10-month cyber-cell internship.
- **Link:** private/gov — describe only, no public repo link. `[CONFIRM ok to name MBVV]`

### 4.2 Work Pipeline — Lead Management System
- **What:** Electron desktop CRM. Kanban lead board (New→Contacted→Qualified→Proposal→Won), local Excel storage with daily auto-backup, pie/bar analytics, Indian currency formatting (Cr/L).
- **Stack:** Electron, React 18, TypeScript, Vite, Tailwind, Recharts, XLSX, Radix UI.
- **Repo:** https://github.com/Vikas-Blink-Tek/Work_PipeLine
- (This is the "Finance Leads Management / CRM" from your asset sheet.)

### 4.3 Universal Document Extractor (File → JSON)
- **What:** Desktop tool converting 80+ file formats (PDF, DOCX, images/OCR, code, archives) into structured JSON. Multi-threaded (8 workers), MD5 checksums, batch processing.
- **Stack:** Python, packaged as a Windows `.exe`.
- **Repo:** https://github.com/Vikas-Blink-Tek/ANY-files-to-JSON

### 4.4 Keylogger — Defensive Research *(framing: defensive research, per your choice)*
- **What:** A minimal Python keystroke logger built to study how keyloggers capture input — used as the basis for understanding detection and defense.
- **Stack:** Python (`pynput`).
- **Framing on site:** "How a keylogger works, and how to detect it." No download/CTA. `[CONFIRM: link repo, or describe only?]`
- **Repo:** https://github.com/Vikas-Blink-Tek/Key-Logger-Malware-

### 4.5 Health Insurance AI Assistant (RAG)
- **What:** Conversational assistant that answers health-insurance/policy questions from uploaded documents (PDF/text) using retrieval-augmented generation.
- **Stack:** Python, LangChain, Chroma vector DB, IBM watsonx (embeddings + LLM), PyPDF2.
- **Repo:** **withheld until the API key is rotated** (see action items).

### 4.6 AI Pentesting Assistant *(added, per your choice)*
- **What:** Desktop AI assistant for bug-bounty / pentest workflows. RAG + CAG over a CVE/security-doc knowledge base; interprets tool output (subfinder, nuclei, Burp), guides testing, drafts reports. Explicitly *guidance, not automated exploitation.*
- **Stack:** Electron, React 18, TypeScript, Qdrant vector DB, SQLite, Google Gemini 2.5 Flash.
- **Repos:** https://github.com/Vikas-Blink-Tek/AI_Pentesting_Enhanced- (and earlier `AI-Pentesting-`)

### 4.7 Go-Unlisted *(added, per your choice)*
- **What:** `[CONFIRM one-liner — unlisted-shares / finance platform?]` Full-stack web + mobile app.
- **Stack:** React 19, TypeScript, Vite, Zustand, TanStack Query, Chart.js, Framer Motion front-end; PHP API; Flutter mobile.
- **Repo:** https://github.com/Vikas-Blink-Tek/Go-Unlisted `[CONFIRM: public-facing ok?]`

### 4.8 Security tools strip *(added, per your choice)*
Small Python tools from your PRODIGY Infotech cybersecurity internship + others:
- **Caesar Cipher GUI**, **Password Complexity Checker**, **Pixel-Manipulation Image Encryption** (repo `PRODIGY_CY`)
- **Port Scanner** (`PORT-Scanner-`)
- **`[CONFIRM]`** PRODIGY Infotech internship — add to timeline too? (I found `PRODIGY_CY` but you didn't mention it.)

## 5. Achievements — **needs your input**

I can't reach LinkedIn from here (blocked + login-walled), so please paste the exact wording:
- **Hackathon Top 30:** `[CONFIRM which hackathon + year]` (your asset sheet says "Top 30")
- **CTF, 1000+:** `[CONFIRM: ranked among 1000+? which CTF/platform?]`
- **Letter of Recommendation:** `[CONFIRM from whom — MBVV?]`
- **Responsible Disclosure:** `[CONFIRM org(s), if nameable]`
- **Certifications:** `[CONFIRM exact names + issuers]` (PRODIGY Infotech? Edunet/AICTE AI-ML? I see repos suggesting both)

## 6. Contact
- CTA: "Let's build something resilient."
- Email `[CONFIRM]`, GitHub, LinkedIn.
- Remove the fabricated PGP/coordinates/metrics from the old prototype.

---

## What I need to finalise this (quick)
1. Rotate the IBM key (then I can feature the Health chatbot).
2. Confirm: email, job title at Blink, QA company name, degree years.
3. Paste the 5 achievement lines.
4. OK to name MBVV / link Go-Unlisted / link the keylogger?
5. Add PRODIGY Infotech to the timeline?

Once these are in, I finalise copy and start **Phase 7** (the Next.js build, content-first, works without 3D).
