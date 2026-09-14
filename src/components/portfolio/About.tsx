import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/portfolio/SectionHeading";

export function About() {
  return (
    <section id="about" className="section">
      <div className="shell">
        <SectionHeading index="01" eyebrow="About" note="Social Media Manager">
          About me
        </SectionHeading>

        <div className="mt-16 grid gap-10 md:mt-24 md:grid-cols-12">
          <Reveal delay={160} className="md:col-span-4">
            <p className="label text-muted-foreground text-[10px]">Three years of practice</p>
            <p className="font-serif mt-6 text-2xl leading-snug md:text-[1.75rem]">
              Content built on audience behaviour, not guesswork.
            </p>
          </Reveal>

          <div className="md:col-span-7 md:col-start-6">
            <Reveal delay={240}>
              <p className="text-[1.0625rem] leading-[1.85] md:text-xl md:leading-[1.8]">
                I am a Content Strategist and {" "}
                <strong className="font-semibold">Social Media Manager</strong>, with 2.5+ years of experience building and growing brands. 
                I have worked with a variety of brands across different niches, including hospitality, luxury villas, fashion apparel, skincare, 
                artifacts store, and schools, etc. managing their end-to-end social media pages.
              </p>
            </Reveal>
            <Reveal delay={320}>
              <p className="mt-8 text-[1.0625rem] leading-[1.85] md:mt-10 md:text-xl md:leading-[1.8]">
                My work includes managing content calendars, maintaining brand consistency, and
                tracking analytics to improve results. I adapt to different brand voices and focus
                on creating content that engages audiences and meets business goals.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
