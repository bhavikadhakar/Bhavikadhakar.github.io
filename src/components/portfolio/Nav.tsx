import { useEffect, useRef, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#work", label: "Work" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [past, setPast] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setPast(window.scrollY > window.innerHeight * 0.75);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Escape closes the mobile menu and returns focus to the toggle
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  // Move focus into the panel when it opens
  useEffect(() => {
    if (!open) return;
    panelRef.current?.querySelector<HTMLAnchorElement>("a")?.focus();
  }, [open]);

  const closeAndReturnFocus = () => {
    setOpen(false);
    toggleRef.current?.focus();
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        past ? "bg-background/90 backdrop-blur-[2px]" : "bg-transparent"
      }`}
    >
      <a href="#about" className="skip-link label focus:skip-link-focus">
        Skip to content
      </a>

      <div className="mx-auto flex max-w-300 items-center justify-between px-6 py-5 md:px-10">
        <a
          href="#top"
          className={`label rounded-sm transition-colors ${past ? "text-foreground" : "text-ivory/0"}`}
        >
          Bhavika Dhakar
        </a>

        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-9">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`label rounded-sm transition-all duration-500 hover:tracking-[0.34em] hover:opacity-70 ${
                    past
                      ? "text-foreground focus-visible:outline-burgundy"
                      : "text-ivory/80 focus-visible:outline-ivory"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          ref={toggleRef}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
          className={`flex h-11 w-11 flex-col items-end justify-center gap-[6px] rounded-sm md:hidden ${
            past ? "focus-visible:outline-burgundy" : "focus-visible:outline-ivory"
          }`}
        >
          <span
            className={`block h-px w-6 transition-transform ${past ? "bg-foreground" : "bg-ivory"} ${
              open ? "translate-y-[3.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-px w-6 transition-transform ${past ? "bg-foreground" : "bg-ivory"} ${
              open ? "-translate-y-[3.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {open ? (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          ref={panelRef}
          className="border-border bg-background border-t md:hidden"
        >
          <ul className="flex flex-col px-6 py-4">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={closeAndReturnFocus}
                  className="label text-foreground block min-h-11 rounded-sm py-3"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
