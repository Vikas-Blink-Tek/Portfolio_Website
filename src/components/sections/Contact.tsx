import { profile } from "@/data/profile";
import { SectionLabel } from "@/components/ui/primitives";

const channels = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, note: "Direct" },
  { label: "GitHub", value: "Vikas-Blink-Tek", href: profile.github, note: "Source" },
  { label: "LinkedIn", value: "vikas-maurya", href: profile.linkedin, note: "Network" },
];

export function Contact() {
  return (
    <section id="contact" className="px-5 md:px-14 py-24 mx-auto max-w-content scroll-mt-20">
      <SectionLabel index="06">Connect</SectionLabel>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        <div className="lg:col-span-7">
          <h2 className="font-display text-5xl md:text-7xl font-extrabold uppercase tracking-tight text-warm-white leading-[0.95]">
            Let&rsquo;s build something resilient.
          </h2>
          <p className="mt-6 text-lg text-grey max-w-xl">
            Open to security research, penetration testing, and full-stack engineering roles and collaborations. The fastest way to reach me is email.
          </p>
        </div>
        <div className="lg:col-span-5 w-full flex flex-col gap-3">
          {channels.map((c) => (
            <a key={c.label} href={c.href} target={c.href.startsWith("mailto") ? undefined : "_blank"} rel="noopener noreferrer"
               className="group flex items-center justify-between rounded-lg border border-white/[0.08] bg-surface-low/70 px-5 py-4 hover:border-accent/40 hover:bg-surface transition-colors">
              <div>
                <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-outline">{c.label}</p>
                <p className="text-warm-white group-hover:text-accent transition-colors mt-0.5">{c.value}</p>
              </div>
              <span className="font-mono text-[11px] text-outline group-hover:text-accent transition-colors" aria-hidden>{c.note} &rarr;</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
