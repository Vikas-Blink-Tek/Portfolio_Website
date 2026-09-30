import { CountUp } from "@/components/motion/CountUp";

const stats = [
  { end: 5000, suffix: "+", label: "Police personnel served", sub: "MBVV Workforce Portal" },
  { end: 80, suffix: "+", label: "File formats parsed", sub: "Universal Extractor" },
  { end: 1000, suffix: "+", label: "CTF participants hosted", sub: "TECHNOVA 2K25" },
  { end: 5, suffix: "", label: "Certifications earned", sub: "Forensics · AI · Cyber" },
];

const marquee = ["ETHICAL HACKING", "DIGITAL FORENSICS", "OSINT", "PENETRATION TESTING", "FULL-STACK", "REACT", "PYTHON", "UFED", "RAG / AI", "NETWORK SECURITY"];

export function Stats() {
  return (
    <section className="relative z-10 my-24">
      {/* light band */}
      <div className="bg-cream text-ink py-20 md:py-24">
        <div className="mx-auto max-w-content px-5 md:px-14">
          <p className="font-mono text-[11px] tracking-[0.25em] uppercase text-ink/50 mb-12">
            [ By the numbers ]
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8 md:gap-x-10">
            {stats.map((s, i) => (
              <div key={s.label} data-delay={(i * 0.1).toString()}>
                <div className="font-display font-extrabold text-4xl md:text-6xl tracking-tight text-ink leading-none tabular-nums whitespace-nowrap">
                  <span className="text-accent"><CountUp end={s.end} suffix={s.suffix} /></span>
                </div>
                <p className="mt-3 font-semibold text-ink text-sm md:text-base">{s.label}</p>
                <p className="font-mono text-[11px] text-ink/50 mt-1">{s.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* keyword strip */}
      <div className="bg-accent text-void py-5">
        <div className="mx-auto max-w-content px-5 md:px-14 flex flex-wrap justify-center gap-x-6 gap-y-2 font-display font-bold text-sm md:text-lg tracking-tight uppercase">
          {marquee.map((m) => (
            <span key={m} className="flex items-center gap-6">{m}<span className="text-void/40">/</span></span>
          ))}
        </div>
      </div>
    </section>
  );
}
