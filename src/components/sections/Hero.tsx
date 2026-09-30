import { profile } from "@/data/profile";
import { Tag } from "@/components/ui/primitives";

export function Hero() {
  return (
    <section id="top" className="relative min-h-[92vh] flex flex-col justify-center px-5 md:px-14 pt-28 pb-16 mx-auto max-w-content">
      <div className="pointer-events-none absolute inset-0 -z-[1] bg-gradient-to-r from-void via-void/70 to-transparent" aria-hidden />
      <div className="flex flex-wrap items-center gap-3 mb-10 reveal">
        <span className="flex items-center gap-2 font-mono text-[11px] tracking-[0.15em] uppercase text-grey bg-surface-low/70 px-3 py-1.5 rounded">
          <span className="relative flex h-2 w-2">
            <span className="pulse-dot absolute inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          {profile.location}
        </span>
        <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-accent bg-accent/10 px-3 py-1.5 rounded">
          {profile.status}
        </span>
      </div>

      <h1 className="font-display font-extrabold uppercase leading-[0.92] tracking-[-0.04em] reveal" style={{ animationDelay: "0.05s" }}>
        <span className="hero-name block text-warm-white">Vikas</span>
        <span className="hero-name block text-accent -mt-[0.06em]">Maurya</span>
      </h1>

      <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 reveal" style={{ animationDelay: "0.1s" }}>
        {profile.tagline.map((word) => (
          <span key={word} className="font-mono text-sm md:text-base tracking-[0.3em] text-warm-white">
            {word}
          </span>
        ))}
        <span className="font-mono text-xs text-outline">// {profile.roleLine}</span>
      </div>

      <p className="mt-8 max-w-2xl text-lg md:text-xl text-grey leading-relaxed reveal" style={{ animationDelay: "0.15s" }}>
        {profile.heroIntro}
      </p>

      <div className="mt-8 flex flex-wrap gap-2 reveal" style={{ animationDelay: "0.2s" }} data-speed="-0.06">
        {["Ethical Hacking", "Digital Forensics", "Full-Stack", "OSINT"].map((t) => (
          <Tag key={t}>{t}</Tag>
        ))}
      </div>

      <div className="mt-14 flex items-center gap-3 text-grey reveal" style={{ animationDelay: "0.25s" }}>
        <span className="font-mono text-[11px] tracking-[0.2em] uppercase">Scroll to explore the lab</span>
        <span className="inline-block h-10 w-px bg-gradient-to-b from-accent to-transparent" aria-hidden />
      </div>
    </section>
  );
}
