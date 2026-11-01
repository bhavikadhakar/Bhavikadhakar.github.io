import { SectionHeading } from "@/components/portfolio/SectionHeading";
import { Lightbox, useLightbox } from "@/components/portfolio/Lightbox";
import { MediaItem, work, workCarousel } from "@/lib/portfolio-assets";
import Masonry from "../ui/Masonry";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import React from "react";
import { WorkCarouselCard } from "../ui/Carousel/WorkCarouselCard";

export function Work() {
  const plugin = React.useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));
  const lightbox = useLightbox();
  const transformPostsToProjects: any = workCarousel.flat().map((reel) => ({
    src: reel.url,
    video: reel.type === "Video" ? reel.url : "",
    alt: reel.title,
    desc: reel?.description,
  }));
  let i = 0;

  return (
    <section id="work" className="section">
      <div className="shell">
        <SectionHeading index="06" eyebrow="Selected Work" note="Social Media Posts">
          My work
        </SectionHeading>
        <div className="mt-6">
          Focused on creative direction, content planning, and copywriting. Every post and carousel
          is built on a clear concept and messaging structure designed to align with brand identity
          and drive audience engagement.{" "}
        </div>
        <div className="mt-16 grid grid-cols-2 gap-x-6 gap-y-14 sm:gap-x-8 md:grid-cols-4 md:gap-8 lg:gap-20">
          {workCarousel.map((work) => (
            <Carousel
              plugins={[plugin.current]}
              className="mx-auto w-full max-w-xs"
              onMouseEnter={plugin.current.stop}
              onMouseLeave={plugin.current.reset}
            >
              <CarouselContent>
                {work?.map((post) => (
                  <CarouselItem key={post.id}>
                    <div className="p-0">
                      <Card>
                        <CardContent className="flex aspect-4/5 items-center justify-center p-0 select-none">
                          <WorkCarouselCard
                            project={post}
                            active={true}
                            index={i++}
                            lightbox={lightbox}
                          />
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              {/* <CarouselPrevious className="hidden lg-flex" />
              <CarouselNext className="hidden lg-flex" /> */}
              <CarouselDots className="mt-4" />
            </Carousel>
          ))}
        </div>
        <div className="mt-16 relative h-full">
          <Masonry
            items={work}
            ease="power1.out"
            duration={0.9}
            stagger={0.15}
            animateFrom="random"
            scaleOnHover
            hoverScale={0.95}
            blurToFocus
            colorShiftOnHover={false}
          />
        </div>
      </div>
      <Lightbox items={transformPostsToProjects} kind="workPosts" state={lightbox} />
    </section>
  );
}
