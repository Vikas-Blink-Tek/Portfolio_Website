import { profile, skillGroups } from "@/data/profile";
import { awards, certifications } from "@/data/experience";
import { SectionLabel, Tag, Panel } from "@/components/ui/primitives";

export function About() {
  return (
    <section id="about" className="px-5 md:px-14 py-24 mx-auto max-w-content scroll-mt-20">
      <SectionLabel index="05">About &amp; Ecosystem</SectionLabel>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-5">
          <h2 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-tight text-warm-white mb-6">
            Who is Vikas?
          </h2>
          {profile.about.map((p, i) => (
            <p key={i} className="text-grey leading-relaxed mb-4">{p}</p>
          ))}
          <div className="mt-6 flex flex-wrap gap-2">
            {profile.communities.map((c) => (
              <Tag key={c} accent>{c}</Tag>
            ))}
          </div>

          <div className="mt-10">
            <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-outline mb-4">Honors &amp; Awards</p>
            <div className="flex flex-col gap-3">
              {awards.map((a) => (
                <Panel key={a.title} className="p-4">
                  <div className="flex items-start justify-between gap-3">
                    <h4 className="font-semibold text-warm-white text-sm leading-snug">{a.title}</h4>
                    <span className="font-mono text-[10px] text-outline whitespace-nowrap">{a.date}</span>
                  </div>
                  <p className="mt-1 font-mono text-[11px] text-accent/80">{a.issuer}</p>
                  <p className="mt-2 text-sm text-grey leading-relaxed">{a.detail}</p>
                </Panel>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <Panel className="p-6 md:p-8">
            <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-outline mb-6">Technical Stack</p>
            <div className="flex flex-col gap-6">
              {skillGroups.map((g) => (
                <div key={g.label}>
                  <p className="font-mono text-[11px] tracking-wide uppercase text-accent mb-2">{g.label}</p>
                  <div className="flex flex-wrap gap-2">
                    {g.items.map((s) => (
                      <span key={s} className="font-mono text-[11px] px-2.5 py-1 rounded bg-surface-high text-warm-white/90">{s}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Panel>

          <Panel className="p-6 md:p-8 mt-5">
            <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-outline mb-5">Certifications</p>
            <ul className="flex flex-col divide-y divide-white/[0.06]">
              {certifications.map((c) => (
                <li key={c.name} className="py-3 flex items-start justify-between gap-4 first:pt-0 last:pb-0">
                  <div>
                    <p className="text-sm text-warm-white font-medium">{c.name}</p>
                    <p className="font-mono text-[11px] text-accent/80">{c.issuer}</p>
                    {c.id && <p className="font-mono text-[10px] text-outline mt-0.5">ID: {c.id}</p>}
                  </div>
                  <span className="font-mono text-[11px] text-grey whitespace-nowrap">{c.date}</span>
                </li>
              ))}
            </ul>
          </Panel>
        </div>
      </div>
    </section>
  );
}
