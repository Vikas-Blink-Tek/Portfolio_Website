"use client";
import { useEffect, useRef } from "react";

export function CustomCursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return; // touch devices: skip
    const d = dot.current!, r = ring.current!;
    let rx = 0, ry = 0, tx = 0, ty = 0;
    const move = (e: MouseEvent) => {
      tx = e.clientX; ty = e.clientY;
      d.style.transform = `translate(${tx}px, ${ty}px)`;
    };
    let raf = 0;
    const loop = () => {
      rx += (tx - rx) * 0.15; ry += (ty - ry) * 0.15;
      r.style.transform = `translate(${rx}px, ${ry}px)`;
      raf = requestAnimationFrame(loop);
    };
    const over = (e: Event) => {
      const t = e.target as HTMLElement;
      if (t.closest("a,button,[data-cursor]")) r.classList.add("cursor-ring--active");
    };
    const out = (e: Event) => {
      const t = e.target as HTMLElement;
      if (t.closest("a,button,[data-cursor]")) r.classList.remove("cursor-ring--active");
    };
    window.addEventListener("mousemove", move, { passive: true });
    document.addEventListener("mouseover", over);
    document.addEventListener("mouseout", out);
    loop();
    document.documentElement.classList.add("has-custom-cursor");
    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", over);
      document.removeEventListener("mouseout", out);
      cancelAnimationFrame(raf);
      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, []);
  return (
    <>
      <div ref={dot} className="cursor-dot" aria-hidden />
      <div ref={ring} className="cursor-ring" aria-hidden />
    </>
  );
}
