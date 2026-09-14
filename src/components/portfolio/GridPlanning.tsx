import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/portfolio/SectionHeading";
import { Lightbox, useLightbox } from "@/components/portfolio/Lightbox";
import { gridPlannings } from "@/lib/portfolio-assets";

export function GridPlanning() {
  const lightbox = useLightbox();
  const gridPlanningsLeftSection = gridPlannings.slice(0, Math.ceil(gridPlannings.length / 3));
  const gridPlanningsMiddleSection = gridPlannings.slice(
    Math.ceil(gridPlannings.length / 3),
    Math.ceil((2 * gridPlannings.length) / 3),
  );
  const gridPlanningsRightSection = gridPlannings.slice(Math.ceil((2 * gridPlannings.length) / 3));

  return (
    <section id="grid-plannings" className="section">
      <div className="shell">
        <SectionHeading index="05" eyebrow="Grid Plannings" note="Brand Identity">
          Glimpse of grid
          <br />
          plannings
        </SectionHeading>

        <div className="mt-16 grid gap-14 md:mt-28 md:grid-cols-3 md:gap-8">
          <div className="flex flex-col gap-14">
            {gridPlanningsLeftSection.map((item, i) => (
              <Reveal key={item.src} delay={120 + i * 90}>
                <figure
                  data-view-cursor="View"
                  className="media group focus-within:outline-burgundy focus-within:outline-2 focus-within:outline-offset-3"
                >
                  <button
                    type="button"
                    onClick={() => lightbox.open(i)}
                    aria-label={`Open larger view — ${item.alt}`}
                    className="block w-full cursor-pointer overflow-hidden focus:outline-none"
                  >
                    <img
                      src={item.src}
                      alt={item.alt}
                      loading="lazy"
                      decoding="async"
                      className="media-img w-full"
                    />
                  </button>
                  <figcaption className="label text-muted-foreground mt-4 text-[10px]">
                    {String(i + 1).padStart(2, "0")} / Feed planning
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <div className="flex flex-col gap-14 mt-20">
            {gridPlanningsMiddleSection.map((item, i) => (
              <Reveal key={item.src} delay={120 + i * 90}>
                <figure
                  data-view-cursor="View"
                  className="media group focus-within:outline-burgundy focus-within:outline-2 focus-within:outline-offset-3"
                >
                  <button
                    type="button"
                    onClick={() => lightbox.open(i)}
                    aria-label={`Open larger view — ${item.alt}`}
                    className="block w-full cursor-pointer overflow-hidden focus:outline-none"
                  >
                    <img
                      src={item.src}
                      alt={item.alt}
                      loading="lazy"
                      decoding="async"
                      className="media-img w-full"
                    />
                  </button>
                  <figcaption className="label text-muted-foreground mt-4 text-[10px]">
                    {String(i + 1).padStart(2, "0")} / Feed planning
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <div className="flex flex-col gap-14">
            {gridPlanningsRightSection.map((item, i) => (
              <Reveal key={item.src} delay={120 + i * 90}>
                <figure
                  data-view-cursor="View"
                  className="media group focus-within:outline-burgundy focus-within:outline-2 focus-within:outline-offset-3"
                >
                  <button
                    type="button"
                    onClick={() => lightbox.open(i)}
                    aria-label={`Open larger view — ${item.alt}`}
                    className="block w-full cursor-pointer overflow-hidden focus:outline-none"
                  >
                    <img
                      src={item.src}
                      alt={item.alt}
                      loading="lazy"
                      decoding="async"
                      className="media-img w-full"
                    />
                  </button>
                  <figcaption className="label text-muted-foreground mt-4 text-[10px]">
                    {String(i + 1).padStart(2, "0")} / Feed planning
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <Lightbox items={gridPlannings} kind="Grid planning" state={lightbox} />
    </section>
  );
}
