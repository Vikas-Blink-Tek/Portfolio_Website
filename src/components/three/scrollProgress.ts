// Global scroll progress (0..1) shared with the r3f render loop without React re-renders.
export const scrollState = { progress: 0, mouseX: 0, mouseY: 0 };

let bound = false;
export function bindScroll() {
  if (bound || typeof window === "undefined") return () => {};
  bound = true;
  const onScroll = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    scrollState.progress = max > 0 ? Math.min(Math.max(window.scrollY / max, 0), 1) : 0;
  };
  const onMove = (e: MouseEvent) => {
    scrollState.mouseX = (e.clientX / window.innerWidth) * 2 - 1;
    scrollState.mouseY = -((e.clientY / window.innerHeight) * 2 - 1);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("mousemove", onMove, { passive: true });
  return () => {
    window.removeEventListener("scroll", onScroll);
    window.removeEventListener("mousemove", onMove);
    bound = false;
  };
}
