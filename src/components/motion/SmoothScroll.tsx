"use client";
import { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let registered = false;

export function SmoothScroll() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!registered) { gsap.registerPlugin(ScrollTrigger); registered = true; }

    let lenis: Lenis | null = null;
    let raf: ((t: number) => void) | null = null;
    if (!reduce) {
      lenis = new Lenis({ duration: 1.1, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), smoothWheel: true });
      lenis.on("scroll", ScrollTrigger.update);
      raf = (time: number) => { lenis!.raf(time * 1000); };
      gsap.ticker.add(raf);
      gsap.ticker.lagSmoothing(0);
      (window as unknown as { __lenis?: Lenis }).__lenis = lenis;
    }

    const reveals = gsap.utils.toArray<HTMLElement>("[data-reveal]");
    reveals.forEach((el) => {
      const dir = el.dataset.reveal || "up";
      const from: gsap.TweenVars = { opacity: 0, duration: 0.9, ease: "power3.out" };
      if (dir === "up") from.y = 40;
      if (dir === "left") from.x = -50;
      if (dir === "right") from.x = 50;
      if (dir === "scale") from.scale = 0.92;
      gsap.from(el, {
        ...from,
        scrollTrigger: { trigger: el, start: "top 85%", toggleActions: "play none none none" },
        delay: parseFloat(el.dataset.delay || "0"),
      });
    });

    const paras = gsap.utils.toArray<HTMLElement>("[data-speed]");
    paras.forEach((el) => {
      const speed = parseFloat(el.dataset.speed || "0");
      gsap.to(el, {
        yPercent: speed * 100,
        ease: "none",
        scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true },
      });
    });

    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      if (raf) gsap.ticker.remove(raf);
      if (lenis) lenis.destroy();
    };
  }, []);

  return null;
}
