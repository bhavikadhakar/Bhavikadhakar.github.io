import LogoLoop from "@/component/ui/LogoLoop";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/portfolio/SectionHeading";
import { experience, logo } from "@/lib/portfolio-assets";

export function Experience() {
  return (
    <section id="experience" className="section">
      <div className="shell">
        <SectionHeading index="02" eyebrow="Experience" note="Industry">
          Experience
        </SectionHeading>

        <div className="mt-20 md:mt-28">
          {experience.map((item, i) => (
            <Reveal
              key={item.company}
              delay={160 + i * 90}
              className="border-border/70 grid items-center gap-8 border-t py-14 md:grid-cols-12 md:py-20"
            >
              <span className="label text-muted-foreground text-[10px] md:col-span-2">
                0{i + 1}
              </span>
              <div className="md:col-span-5 place-content-center">
                <img
                  src={item.logo}
                  alt={`${item.company} logo`}
                  loading="lazy"
                  decoding="async"
                  className="h-20 w-auto max-w-55 object-contain object-left md:h-24 mix-blend-multiply"
                />
              </div>
              <p className="font-serif text-xl tracking-wide md:col-span-5 md:text-right md:text-3xl">
                {item.period}
              </p>
            </Reveal>
          ))}
        </div>

         <SectionHeading index="03" eyebrow="Brands" note="Industry">
          Brands I Have Worked With
        </SectionHeading>

        <LogoLoop
        className="mt-16"
        logos={logo}
        speed={100}
        direction="left"
        logoHeight={100}
        gap={60}
        hoverSpeed={0}
        scaleOnHover
        fadeOut
        fadeOutColor="#ffffff00"
        ariaLabel="Technology partners"
      />
      </div>
    </section>
  );
}
