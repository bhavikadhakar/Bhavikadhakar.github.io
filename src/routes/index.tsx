import { createFileRoute } from "@tanstack/react-router";

import { lazy, Suspense } from "react";

const Nav = lazy(() => import("@/components/portfolio/Nav").then((m) => ({ default: m.Nav })));

const Hero = lazy(() => import("@/components/portfolio/Hero").then((m) => ({ default: m.Hero })));

const About = lazy(() =>
  import("@/components/portfolio/About").then((m) => ({ default: m.About })),
);

const Experience = lazy(() =>
  import("@/components/portfolio/Experience").then((m) => ({
    default: m.Experience,
  })),
);

const Skills = lazy(() =>
  import("@/components/portfolio/Skills").then((m) => ({
    default: m.Skills,
  })),
);

const Work = lazy(() => import("@/components/portfolio/Work").then((m) => ({ default: m.Work })));

const GridPlanning = lazy(() =>
  import("@/components/portfolio/GridPlanning").then((m) => ({
    default: m.GridPlanning,
  })),
);

const Reels = lazy(() =>
  import("@/components/portfolio/Reels").then((m) => ({ default: m.Reels })),
);

const Contact = lazy(() =>
  import("@/components/portfolio/Contact").then((m) => ({
    default: m.Contact,
  })),
);

const ViewCursor = lazy(() =>
  import("@/components/portfolio/ViewCursor").then((m) => ({
    default: m.ViewCursor,
  })),
);

const title = "Bhavika Dhakar — Social Media Manager Portfolio";
const description =
  "Editorial portfolio of Bhavika Dhakar, a social media manager crafting content strategy, grid plannings, reels and campaigns for brands.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <Suspense fallback={null}>
      <Nav />
      <ViewCursor />

      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <GridPlanning />
        <Work />
        <Reels />
        <Contact />
      </main>
    </Suspense>
    
  );
}
