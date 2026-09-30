import { experience } from "@/data/experience";
import { SectionLabel, Tag, Panel } from "@/components/ui/primitives";
import { SplitReveal } from "@/components/motion/SplitReveal";

export function Timeline() {
  return (
    <section id="timeline" className="px-5 md:px-14 py-24 mx-auto max-w-content scroll-mt-20">
      <SectionLabel index="04">Timeline</SectionLabel>
      <SplitReveal as="h2" text="Trajectory" className="font-display text-4xl md:text-6xl font-bold uppercase tracking-tight text-warm-white mb-12" />
      <ol className="flex flex-col gap-4">
        {experience.map((job) => (
          <li key={job.role + job.period}>
            <Panel className="p-6 md:p-7 hover:border-accent/30 transition-colors" data-reveal="up">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-start">
                <div className="lg:col-span-3">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-sm font-bold text-accent">{job.period}</span>
                    {job.current && (
                      <span className="font-mono text-[10px] tracking-wide uppercase text-accent bg-accent/10 px-1.5 py-0.5 rounded">Now</span>
                    )}
                  </div>
                  {job.location && <p className="mt-1 font-mono text-[11px] text-outline">{job.location}</p>}
                </div>
                <div className="lg:col-span-6">
                  <h3 className="font-display text-xl font-bold text-warm-white">{job.role}</h3>
                  <p className="font-medium text-accent/90">{job.org}</p>
                  <p className="mt-2 text-sm text-grey leading-relaxed">{job.detail}</p>
                </div>
                <div className="lg:col-span-3 flex flex-wrap gap-2 lg:justify-end">
                  {job.tags.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
              </div>
            </Panel>
          </li>
        ))}
      </ol>
    </section>
  );
}
