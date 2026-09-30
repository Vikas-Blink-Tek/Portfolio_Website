import { ElementType, createElement } from "react";

export function ScrambleText({ text, className = "", as = "span" }: { text: string; className?: string; as?: ElementType }) {
  return createElement(as as ElementType, { className }, text);
}
