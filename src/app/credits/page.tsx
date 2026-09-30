import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Credits" };

const models = [
  { name: "Laptop", author: "J-Toastie", id: "UGOWjMUC5U" },
  { name: "Phone", author: "Alex Safayan", id: "1L9oJAw6nY2" },
  { name: "Keyboard", author: "Akira Ohmachi", id: "dM8MokabmkE" },
];

export default function Credits() {
  return (
    <main className="mx-auto max-w-content px-5 md:px-14 py-28 min-h-screen">
      <Link href="/" className="font-mono text-xs text-accent hover:text-warm-white">&larr; Back</Link>
      <h1 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-tight text-warm-white mt-6 mb-3">Credits</h1>
      <p className="text-grey max-w-2xl mb-10">
        3D models used in the interactive scenes, sourced from Poly Pizza and attributed to their creators under their respective Creative Commons licenses.
      </p>
      <ul className="flex flex-col divide-y divide-white/[0.06] border-y border-white/[0.06]">
        {models.map((m) => (
          <li key={m.id} className="py-4 flex items-center justify-between">
            <div>
              <p className="text-warm-white font-medium">{m.name}</p>
              <p className="font-mono text-[11px] text-grey mt-0.5">by {m.author}</p>
            </div>
            <a href={`https://poly.pizza/m/${m.id}`} target="_blank" rel="noopener noreferrer"
               className="font-mono text-xs text-accent hover:text-warm-white">poly.pizza &rarr;</a>
          </li>
        ))}
      </ul>
      <p className="font-mono text-[11px] text-outline mt-8">
        Fonts: Syne, Space Grotesk, JetBrains Mono (Google Fonts, OFL).
      </p>
    </main>
  );
}
