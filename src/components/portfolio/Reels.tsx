import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/portfolio/SectionHeading";
import { Lightbox, useLightbox } from "@/components/portfolio/Lightbox";
import { projects, reels, type MediaItem } from "@/lib/portfolio-assets";
import { Carousel } from "../ui/Carousel/Carousel";
import { PortfolioCard } from "../ui/Carousel/PortfolioCard";

function PlayMark() {
  return (
    <span
      aria-hidden
      className="border-ivory/70 bg-ivory/10 absolute top-1/2 left-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border backdrop-blur-[1px] transition-opacity duration-500 group-hover:opacity-0"
    >
      <svg viewBox="0 0 24 24" className="fill-ivory ml-0.5 h-4 w-4">
        <path d="M8 5.5v13l11-6.5z" />
      </svg>
    </span>
  );
}

function ReelCard({ item, i, onOpen }: { item: MediaItem; i: number; onOpen: () => void }) {
  return (
    <figure
      data-view-cursor="Play"
      className="media group focus-within:outline-burgundy relative focus-within:outline-2 focus-within:outline-offset-3"
    >
      <button
        type="button"
        onClick={onOpen}
        aria-label={`Open larger view — ${item.alt}`}
        className="relative block w-full cursor-pointer overflow-hidden focus:outline-none"
      >
        <img
          src={item.src}
          alt={item.alt}
          loading="lazy"
          decoding="async"
          className="media-img w-full"
        />
        <PlayMark />
      </button>
      <figcaption className="mt-4 flex items-baseline justify-between">
        <span className="label text-muted-foreground text-[10px]">
          {String(i + 1).padStart(2, "0")} / Reel
        </span>
        <span className="label text-muted-foreground text-[10px] opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          Play reel ↗
        </span>
      </figcaption>
    </figure>
  );
}

export function Reels() {
  const lightbox = useLightbox();

  const transformReelsToProjects:MediaItem[] =  projects.map((reel) => ({
      src: reel.url,
      video: reel.type === "Video" ? reel.url : "",
      alt: reel.title,
      desc: reel.description,
    }));

  return (
    <section id="reels" className="section">
      <div className="shell">
        <SectionHeading index="07" eyebrow="Reels" note="Creative Archive">
          Reels
        </SectionHeading>

        <div className="mt-6 ">
          Each reel is created with a clear strategy focusing on scriptwriting, trend adaptation, and creative direction. Planned with detailed shoot execution, model coordination, and audio selection to maximize organic reach and viewer retention. 
        </div>

        <div className="mt-16">
          <Carousel
            items={projects}
            initialIndex={0}
            loop
            swipe
            keyboard
            lazyLoad
            preload={2}
            renderItem={(project, index, { active }) => (
              <PortfolioCard project={project} active={active} index={index} lightbox={lightbox} />
            )}
          />
        </div>
      </div>

      <Lightbox items={transformReelsToProjects} kind="Reel" state={lightbox} />
    </section>
  );
}
