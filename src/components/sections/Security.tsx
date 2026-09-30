import { securityTools } from "@/data/projects";
import { SectionLabel, Panel } from "@/components/ui/primitives";

const domains = [
  {
    n: "01",
    title: "Penetration Testing & Web VAPT",
    body: "Systematic, zero-trust assessment of web applications — auth bypass, injection, access-control flaws — with OSINT and Python tooling for reconnaissance and vulnerability analysis.",
    meta: "OWASP · Bug Bounty",
  },
  {
    n: "02",
    title: "Digital & Mobile Forensics",
    body: "Hands-on mobile forensics with UFED — evidence extraction and analysis — supporting real-world cybercrime investigations with law enforcement, including online and financial fraud.",
    meta: "UFED · Chain of Custody",
  },
  {
    n: "03",
    title: "OSINT & Reconnaissance",
    body: "Open-source intelligence gathering and attack-surface enumeration to map exposure, uncover leaked assets, and inform assessments before active testing.",
    meta: "Passive Recon",
  },
  {
    n: "04",
    title: "Responsible Disclosure",
    body: "Identifying and reporting vulnerabilities responsibly — from the L. R. Tiwari college website to portals I've assessed — with reproducible findings and remediation guidance.",
    meta: "Coordinated Fixes",
  },
];

export function Security() {
  return (
    <section id="security" className="px-5 md:px-14 py-24 mx-auto max-w-content scroll-mt-20">
      <SectionLabel index="03">Security Lab</SectionLabel>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        <div className="lg:col-span-4">
          <h2 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-tight text-warm-white">
            Break &amp; Secure
          </h2>
          <p className="mt-5 text-grey leading-relaxed">
            Security work beyond scanner output — understanding how systems actually fail, from web logic flaws to mobile evidence, and how to defend them.
          </p>
          <div className="mt-8">
            <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-outline mb-3">Security tooling</p>
            <div className="flex flex-col gap-2">
              {securityTools.map((t) => (
                <a key={t.name} href={t.href} target="_blank" rel="noopener noreferrer"
                   className="group flex items-center justify-between rounded border border-white/[0.06] bg-surface-low/60 px-3 py-2 hover:border-accent/30 transition-colors">
                  <span className="font-mono text-xs text-warm-white group-hover:text-accent transition-colors">{t.name}</span>
                  <span className="font-mono text-[10px] text-outline">{t.desc}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-5">
          {domains.map((d) => (
            <Panel key={d.n} className="p-6 flex flex-col justify-between hover:border-accent/30 transition-colors">
              <div>
                <span className="font-mono text-[11px] tracking-[0.2em] text-accent">DOMAIN {d.n}</span>
                <h3 className="font-display text-xl font-bold text-warm-white mt-2">{d.title}</h3>
                <p className="mt-3 text-sm text-grey leading-relaxed">{d.body}</p>
              </div>
              <p className="mt-5 font-mono text-[11px] tracking-wide text-outline uppercase">{d.meta}</p>
            </Panel>
          ))}
        </div>
      </div>
    </section>
  );
}
