import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] px-5 md:px-14 py-10 mx-auto max-w-content">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <p className="font-mono text-sm font-semibold text-warm-white">{profile.name}</p>
          <p className="font-mono text-[11px] text-outline mt-1">
            {profile.tagline.join(" · ")} — &copy; {new Date().getFullYear()}
          </p>
        </div>
        <div className="flex items-center gap-4 font-mono text-[11px] text-grey">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">GitHub</a>
          <span className="text-outline">/</span>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">LinkedIn</a>
          <span className="text-outline">/</span>
          <a href="/credits" className="hover:text-accent transition-colors">Credits</a>
        </div>
      </div>
    </footer>
  );
}
