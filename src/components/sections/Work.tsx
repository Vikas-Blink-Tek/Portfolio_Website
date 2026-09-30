import { projects } from "@/data/projects";
import { SectionLabel, Tag, Panel } from "@/components/ui/primitives";

export function Work() {
  const featured = projects.filter((p) => p.featured);
  const hero = featured[0];
  const rest = featured.slice(1);
  return (
    <section id="work" className="px-5 md:px-14 py-24 mx-auto max-w-content scroll-mt-20">
      <SectionLabel index="02">Selected Work</SectionLabel>
      <h2 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-tight text-warm-white mb-3">
        Engineered Specimens
      </h2>
      <p className="text-grey max-w-2xl mb-12">
        Production systems and research tools — spanning law-enforcement software, desktop apps, parsing engines, and AI.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Hero project */}
        <ProjectCard project={hero} className="lg:col-span-12" large />
        {rest.map((p) => (
          <ProjectCard key={p.slug} project={p} className="lg:col-span-6" />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project: p, className = "", large = false }: { project: (typeof projects)[number]; className?: string; large?: boolean }) {
  return (
    <Panel className={`group p-6 md:p-8 flex flex-col ${className} hover:border-accent/30 transition-colors`}>
      <div className="flex items-center justify-between mb-4">
        <span className="font-mono text-[11px] tracking-wide text-accent bg-accent/10 px-2 py-0.5 rounded font-bold">
          SPEC_{p.index}
        </span>
        <span className="font-mono text-[11px] tracking-wide uppercase text-grey">{p.kind}</span>
      </div>
      <h3 className={`font-display font-bold text-warm-white group-hover:text-accent transition-colors ${large ? "text-3xl md:text-4xl" : "text-xl md:text-2xl"}`}>
        {p.title}
      </h3>
      <p className={`mt-3 text-grey leading-relaxed ${large ? "max-w-3xl md:text-lg" : "text-sm"}`}>
        {large ? p.description : p.summary}
      </p>
      <div className="mt-5 flex flex-wrap gap-2">
        {p.stack.map((s) => (
          <Tag key={s}>{s}</Tag>
        ))}
        <Tag accent>{p.role}</Tag>
      </div>
      <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between">
        {p.link ? (
          <a
            href={p.link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-warm-white hover:text-accent inline-flex items-center gap-1.5 transition-colors"
          >
            {p.link.label} <span aria-hidden>&rarr;</span>
          </a>
        ) : (
          <span className="font-mono text-[11px] text-outline">{p.privateNote}</span>
        )}
      </div>
    </Panel>
  );
}
