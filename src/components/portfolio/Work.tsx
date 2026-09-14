import { SectionHeading } from "@/components/portfolio/SectionHeading";
import { Lightbox, useLightbox } from "@/components/portfolio/Lightbox";
import { MediaItem, work, workCarousel } from "@/lib/portfolio-assets";
import Masonry from "../ui/Masonry";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import React from "react";
import { WorkCarouselCard } from "../ui/Carousel/WorkCarouselCard";

export function Work() {
  const plugin = React.useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));
  const lightbox = useLightbox();
const transformPostsToProjects: MediaItem[] =  workCarousel.flat().map((reel) => ({
      src: reel.url,
      video: reel.type === "Video" ? reel.url : "",
      alt: reel.title,
    }));

  return (
    <section id="work" className="section">
      <div className="shell">
        <SectionHeading index="06" eyebrow="Selected Work" note="Social Media Posts">
          My work
        </SectionHeading>
        <div className="mt-6">Focused on creative direction, content planning, and copywriting. Every post and carousel is built on a clear concept and messaging structure designed to align with brand identity and drive audience engagement. </div>
        <div className="mt-16 flex flex-wrap gap-20">
          <Carousel
            plugins={[plugin.current]}
            className="w-1/5 max-w-1/5 sm:max-w-xs"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent>
              {workCarousel?.[0]?.map((post, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-4/5 items-center justify-center p-0">
                        <WorkCarouselCard project={post} active={true} index={index} lightbox={lightbox} />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
          <Carousel
            plugins={[plugin.current]}
            className="w-1/5 max-w-1/5 sm:max-w-xs"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent>
              {workCarousel?.[1]?.map((post, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-4/5 items-center justify-center p-0">
                        <WorkCarouselCard project={post} index={index} lightbox={lightbox} />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
          <Carousel
            plugins={[plugin.current]}
            className="w-1/5 max-w-1/5 sm:max-w-xs"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent>
              {workCarousel?.[2]?.map((post, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-4/5 items-center justify-center p-0">
                        <WorkCarouselCard project={post} index={index} lightbox={lightbox} />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
          <Carousel
            plugins={[plugin.current]}
            className="w-1/5 max-w-1/5 sm:max-w-xs"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent>
              {workCarousel?.[3]?.map((post, index) => (
                <CarouselItem key={index}>
                  <div className="p-0">
                    <Card>
                      <CardContent className="flex aspect-4/5 items-center justify-center p-0">
                        <WorkCarouselCard project={post} index={index} lightbox={lightbox} />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
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
