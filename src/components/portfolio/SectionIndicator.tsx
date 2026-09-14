import { useEffect, useState } from "react";

const sections = [
  { id: "about", num: "01" },
  { id: "experience", num: "02" },
  { id: "skills", num: "03" },
  { id: "work", num: "04" },
  { id: "grid-plannings", num: "05" },
  { id: "reels", num: "06" },
  { id: "contact", num: "07" },
];

/** Minimal vertical section index, desktop only. */
export function SectionIndicator() {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const nodes = sections
      .map((s) => document.getElementById(s.id))
      .filter((n): n is HTMLElement => Boolean(n));
    if (!nodes.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.2, 0.6] },
    );
    nodes.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="Section index"
      className="fixed top-1/2 right-5 z-40 hidden -translate-y-1/2 lg:block"
    >
      <ul className="flex flex-col items-end gap-3">
        {sections.map((s) => {
          const on = active === s.id;
          return (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                aria-current={on ? "true" : undefined}
                className={`label text-ivory block text-[9px] mix-blend-difference transition-opacity duration-500 ${
                  on ? "opacity-100" : "opacity-40 hover:opacity-75"
                }`}
              >
                {s.num}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
