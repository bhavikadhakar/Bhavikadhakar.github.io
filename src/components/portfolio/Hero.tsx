import { heroTextureUrl } from "@/lib/portfolio-assets";
import CanvasCharacter from "./CanvasCharacter"
import { useState } from "react";

export function Hero() {
  const [frameData, setFrameData] = useState({
    frameIndex: 0,
    angleDeg: 0,
    isCenter: true,
    fps: 60,
  });
  return (
    <section
      id="top"
      className="surface-wine grain relative flex min-h-svh flex-col md:justify-between md:gap-0 justify-center gap-[20dvh]  overflow-hidden px-6 py-10 md:px-16 md:pt-28 md:pb-14 [@media(max-height:500px)]:pt-20 [@media(max-height:500px)]:pb-6"
      style={{ ["--wine-texture" as string]: `url(${heroTextureUrl})` }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_100%_at_15%_45%,transparent_0%,color-mix(in_oklab,var(--wine-deep)_78%,transparent)_100%)]"
      />

      {/* <div className="absolute top-0 left-0">
         <CanvasCharacter
        onFrameUpdate={setFrameData}
      />
      </div> */}

      <div className="relative mx-auto hidden w-full max-w-300 items-baseline justify-between md:flex">
        <p className="label text-ivory/60 text-[20px]"></p>
        <p className="label text-ivory/40  text-[16px] md:block">Portfolio</p>
      </div>

      <div className="relative w-full flex flex-col select-none gap-10">
        <div className="relative mx-auto flex w-full max-w-300 items-baseline justify-between md:hidden">
          <p className="label text-ivory/60 text-[20px]"></p>
          <p className="label text-ivory/40  text-[16px] md:block">Portfolio</p>
        </div>
        <h1 className="text-ivory mta-14 w-full">
          <span className="display block text-[20vw] leading-[0.86] md:text-[14vw] [@media(max-height:500px)]:text-[min(17vw,17svh)]">
            Bhavika
          </span>
          <span className="display flex justify-end mt-1 md:block pl-[4%] text-[20vw] text-left leading-[0.86] md:mt-2 md:pl-[8%] md:text-[14vw] [@media(max-height:500px)]:text-[min(17vw,17svh)]">
            Dhakar
          </span>
        </h1>
        <div className="relative mx-auto flex w-full max-w-300 items-baseline justify-between md:hidden">
          <p className="label text-ivory/40  text-[16px] md:block">Social Media Manager</p>
          <p className="label text-ivory/60 text-[20px]"></p>
        </div>
      </div>

      <div className="md:relative! md:mx-auto flex md:w-full max-w-300 items-center justify-between flex-col md:flex-row md:gap-6 absolute bottom-5 left-1/2 -translate-x-1/2">
        {/* <p className="label text-ivory/50 text-[20px] leading-relaxed">Social Media Manager</p> */}
        <div className="relative mx-auto hidden w-full max-w-300 items-baseline justify-between md:flex">
          <p className="label text-ivory/40  text-[16px] md:block">Social Media Manager</p>
          <p className="label text-ivory/60 text-[20px]"></p>
        </div>

        <a
          href="#about"
          aria-label="Scroll to about"
          className="text-ivory/50 hover:text-ivory/85 flex flex-col items-center gap-3 transition-colors"
        >
          <span className="label text-[9px]">Scroll</span>
          <span
            aria-hidden
            className="scroll-line block h-14 w-px overflow-hidden bg-current/25 [@media(max-height:500px)]:h-8"
          />
        </a>
      </div>
    </section>
  );
}
