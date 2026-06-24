"use client";

import { useEffect, useRef, useState, type ReactElement, type ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "li" | "section";
}

const ROOT_MARGIN = "0px 0px -8% 0px";

export default function Reveal({
  children,
  className = "",
  delay = 0,
  as = "div",
}: RevealProps): ReactElement {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: ROOT_MARGIN }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const Tag = as;
  return (
    <Tag
      // @ts-expect-error — ref type narrows across the allowed element tags
      ref={ref}
      className={`transition-all duration-[600ms] ease-out will-change-[transform,opacity] ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
