import { Reveal } from "@/components/Reveal";
import { heroTextureUrl } from "@/lib/portfolio-assets";

export function Contact() {
  return (
    <section
      id="contact"
      className="surface-wine grain relative flex min-h-svh flex-col justify-between overflow-hidden px-6 py-20 md:px-16 md:py-28"
      style={{ ["--wine-texture" as string]: `url(${heroTextureUrl})` }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_100%_at_20%_50%,transparent_0%,color-mix(in_oklab,var(--wine-deep)_74%,transparent)_100%)]"
      />

      <Reveal className="relative mx-auto flex w-full max-w-[1200px] items-baseline justify-between">
        <p className="label text-ivory/60 text-[10px]">07 / Contact</p>
        <p className="label text-ivory/40 hidden text-[10px] md:block">Available for projects</p>
      </Reveal>

      <div className="relative mx-auto w-full max-w-[1200px] py-20 md:py-24">
        <Reveal as="h2" className="display text-ivory text-[15vw] leading-[0.88] md:text-[11vw]">
          Let's
          <br />
          <span className="block md:pl-[10%]">get started</span>
        </Reveal>
      </div>

      <div className="relative mx-auto grid w-full max-w-[1200px] gap-10 md:grid-cols-12 md:items-end">
        <Reveal delay={120} className="md:col-span-5 md:col-start-8">
          <h3 className="label text-ivory/50 text-[10px]">Contact</h3>
          <ul className="border-ivory/15 mt-6 border-t">
            <li className="border-ivory/15 border-b">
              <a
                href="tel:+919521333499"
                className="text-ivory/85 hover:text-ivory font-serif block py-4 text-xl tracking-wide transition-all duration-500 hover:tracking-wider md:text-2xl"
              >
                9521333499
              </a>
            </li>
            <li className="border-ivory/15 border-b">
              <a
                href="mailto:bhavikadhakar70@gmail.com"
                className="text-ivory/85 hover:text-ivory font-serif block py-4 text-lg tracking-wide transition-all duration-500 hover:tracking-wider md:text-2xl"
              >
                <span className="break-all">bhavikadhakar70@gmail.com</span>
              </a>
            </li>
          </ul>
        </Reveal>

        <Reveal delay={60} className="md:col-span-4 md:row-start-1">
          <p className="label text-ivory/40 text-[10px] leading-relaxed">
            Bhavika Dhakar
            <br />
            Social Media Manager
            <br />
            2026
          </p>
        </Reveal>
      </div>
    </section>
  );
}
