import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/portfolio/SectionHeading";
import { skills, tools } from "@/lib/portfolio-assets";

export function Skills() {
  return (
    <section id="skills" className="section">
      <div className="shell">
        <SectionHeading index="04" eyebrow="Skills" note="Capabilities">
          Skills & Tools
        </SectionHeading>
        <div className="mt-16 grid gap-10 md:mt-24 md:grid-cols-12">

        <ul className="md:col-span-6">
          <p className="label text-muted-foreground text-[10px]">Skills</p>
          {skills.map((skill, i) => (
            <Reveal
              as="li"
              key={skill}
              delay={140 + i * 50}
              className="border-border/70 flex items-baseline gap-6 border-t py-5 md:col-span-7 md:col-start-6 md:py-6"
            >
              <span className="label text-muted-foreground shrink-0 text-[10px]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-[1.0625rem] leading-relaxed md:text-xl">{skill}</span>
            </Reveal>
          ))}
        </ul>
        <ul className=" md:col-span-4 md:col-start-8">
          <p className="label text-muted-foreground text-[10px]">Tools</p>
          {tools.map((tool, i) => (
            <Reveal
              as="li"
              key={tool}
              delay={140 + i * 50}
              className="border-border/70 flex items-baseline gap-6 border-t py-5 md:col-span-7 md:col-start-6 md:py-6"
            >
              <span className="label text-muted-foreground shrink-0 text-[10px]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-[1.0625rem] leading-relaxed md:text-xl">{tool}</span>
            </Reveal>
          ))}
        </ul>
      </div>
      </div>
    </section>
  );
}
