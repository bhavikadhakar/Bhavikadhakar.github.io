import { heroTextureUrl } from "@/lib/portfolio-assets";

export function Hero() {
  return (
    <section
      id="top"
      className="surface-wine grain relative flex min-h-svh flex-col justify-between overflow-hidden px-6 pt-32 pb-10 md:px-16 md:pt-28 md:pb-14"
      style={{ ["--wine-texture" as string]: `url(${heroTextureUrl})` }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_100%_at_15%_45%,transparent_0%,color-mix(in_oklab,var(--wine-deep)_78%,transparent)_100%)]"
      />

      <div className="relative mx-auto flex w-full max-w-300 items-baseline justify-between">
        <p className="label text-ivory/60 text-[20px]"></p>
        <p className="label text-ivory/40 hidden text-[16px] md:block">Portfolio</p>
      </div>

      <div className="relative mx-auto w-full max-w-300 flex-1 md:flex md:flex-col md:justify-center select-none">
        <h1 className="text-ivory mt-14 md:mt-0">
          <span className="display block text-[17vw] leading-[0.86] md:text-[14vw]">Bhavika</span>
          <span className="display mt-1 block pl-[4%] text-[17vw] leading-[0.86] md:mt-2 md:pl-[8%] md:text-[14vw]">
            Dhakar
          </span>
        </h1>
      </div>

      <div className="relative mx-auto flex w-full max-w-300 items-center justify-between gap-6">
        <p className="label text-ivory/50 text-[20px] leading-relaxed">Social Media Manager</p>

        <a
          href="#about"
          aria-label="Scroll to about"
          className="text-ivory/50 hover:text-ivory/85 flex flex-col items-center gap-3 transition-colors"
        >
          <span className="label text-[9px]">Scroll</span>
          <span aria-hidden className="scroll-line block h-14 w-px overflow-hidden bg-current/25" />
        </a>
      </div>
    </section>
  );
}
