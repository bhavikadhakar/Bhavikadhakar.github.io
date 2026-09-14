// Portfolio media. All files live on the CDN via .asset.json pointers in
// src/assets/portfolio/. To swap an image, upload a new asset and change the
// import below — nothing else needs to move.

import heroTexture from "@/assets/portfolio/hero-texture.jpg";
import logoVivir from "@/assets/portfolio/logo-vivir-media.png";
import logoFreelance from "@/assets/portfolio/logo-freelance.png";
import logoNismaaya from "@/assets/portfolio/logo-nismaaya-decor.png";

import work01 from "@/assets/portfolio/work-01.jpg";
import work02 from "@/assets/portfolio/work-02.jpg";
import work03 from "@/assets/portfolio/work-03.jpg";
import work04 from "@/assets/portfolio/work-04.jpg";
import work05 from "@/assets/portfolio/work-05.jpg";
import work06 from "@/assets/portfolio/work-06.jpg";
import work07 from "@/assets/portfolio/work-07.jpg";
import work08 from "@/assets/portfolio/work-08.jpg";
import work09 from "@/assets/portfolio/work-09.jpg";
import work10 from "@/assets/portfolio/work-10.jpg";
import work11 from "@/assets/portfolio/work-11.jpg";
import work12 from "@/assets/portfolio/work-12.jpg";
import work13 from "@/assets/portfolio/work-13.jpg";

import workCarousel1 from "@/assets/portfolio/bottegaa posts 4.png";
import workCarousel2 from "@/assets/portfolio/bottegaa posts (1).mp4";
import workCarousel3 from "@/assets/portfolio/bottegaa posts (2).mp4";
import workCarousel4 from "@/assets/portfolio/bottegaa posts (3).mp4";
import workCarousel16 from "@/assets/portfolio/bottegaa posts (4).mp4";

import workCarousel5 from "@/assets/portfolio/GG Posts 1.png";
import workCarousel6 from "@/assets/portfolio/GG Posts 2.png";
import workCarousel7 from "@/assets/portfolio/GG Posts 3.png";
import workCarousel8 from "@/assets/portfolio/GG Posts 4.png";

import workCarousel9 from "@/assets/portfolio/GG Posts 1.mp4";
import workCarousel10 from "@/assets/portfolio/GG Posts 2.mp4";
import workCarousel11 from "@/assets/portfolio/GG Posts 3.mp4";
import workCarousel12 from "@/assets/portfolio/GG Posts 4.mp4";

import workCarousel13 from "@/assets/portfolio/Amary Beaute Posts 1.mp4";
import workCarousel14 from "@/assets/portfolio/Amary Beaute Posts 2.mp4";
import workCarousel15 from "@/assets/portfolio/Amary Beaute Posts 3.mp4";

import grid01 from "@/assets/portfolio/grid-01.jpg";
import grid02 from "@/assets/portfolio/grid-02.jpg";
import grid03 from "@/assets/portfolio/grid-03.jpg";
import grid04 from "@/assets/portfolio/grid-04.jpeg";
import grid05 from "@/assets/portfolio/grid-05.jpeg";
import grid06 from "@/assets/portfolio/grid-06.jpeg";
import grid07 from "@/assets/portfolio/grid-07.jpeg";

// import reel01 from "@/assets/portfolio/reel-01.jpg";
// import reel02 from "@/assets/portfolio/reel-02.jpg";
// import reel03 from "@/assets/portfolio/reel-03.jpg";
// import reel04 from "@/assets/portfolio/reel-04.jpg";
// import reel05 from "@/assets/portfolio/reel-05.jpg";
// import reel06 from "@/assets/portfolio/reel-06.jpg";
// import reel07 from "@/assets/portfolio/reel-07.jpg";
// import reel08 from "@/assets/portfolio/reel-08.jpg";
import reel11 from "@/assets/portfolio/reel-01.jpg";
import reel01 from "@/assets/portfolio/Reel-1.mp4";
import reel02 from "@/assets/portfolio/Reel-2.mp4";
import reel03 from "@/assets/portfolio/Reel-3.mp4";
import reel04 from "@/assets/portfolio/Reel-4.mp4";
import reel05 from "@/assets/portfolio/Reel-5.mp4";
import reel06 from "@/assets/portfolio/Reel-6.mp4";
import reel07 from "@/assets/portfolio/Reel-7.mp4";
import reel08 from "@/assets/portfolio/Reel-8.mp4";
import reel09 from "@/assets/portfolio/Reel-9.mp4";
import reel10 from "@/assets/portfolio/Reel-10.mp4";

import logo1 from "@/assets/portfolio/logos/Aesthete by Ruchika Jagan.jpg";
import logo2 from "@/assets/portfolio/logos/Amary Beaute.jpg";
import logo3 from "@/assets/portfolio/logos/Botanical Cafe.jpg";
import logo4 from "@/assets/portfolio/logos/Bottegaa Cafe.jpg";
import logo5 from "@/assets/portfolio/logos/Bounce salon.jpg";
import logo6 from "@/assets/portfolio/logos/Burger Bro.jpg";
import logo7 from "@/assets/portfolio/logos/Dilli Tandoor House.jpg";
import logo8 from "@/assets/portfolio/logos/Green Grotto Bistro.jpg";
import logo9 from "@/assets/portfolio/logos/Miranda School.jpg";
import logo10 from "@/assets/portfolio/logos/Mr Sandwich.jpg";
import logo11 from "@/assets/portfolio/logos/Natraj Emporium.jpg";
import logo12 from "@/assets/portfolio/logos/PIMS Hospital Umarda.jpg";
import logo13 from "@/assets/portfolio/logos/Pacific Institute of Medical Science College.jpg";
import logo14 from "@/assets/portfolio/logos/Pristine Manor.jpg";
import logo15 from "@/assets/portfolio/logos/Sands.jpg";
import logo16 from "@/assets/portfolio/logos/Screenshot 2026-08-07 170200.png";
import logo17 from "@/assets/portfolio/logos/The Big Pot.jpg";
import logo18 from "@/assets/portfolio/logos/The Pot Garden.jpg";
import logo19 from "@/assets/portfolio/logos/Wardrobe atelier by jacklyn.jpg";

import { PortfolioCardData } from "@/components/ui/Carousel/PortfolioCard";

export const heroTextureUrl = heroTexture;
export type MediaItem = {
  src: string;
  alt: string;
  height?: number;
  /** Optional Video source — reel cards play it when present. */
  video?: string;
  desc?: string;
};

export const experience = [
  {
    company: "Freelancing",
    logo: logoFreelance,
    period: "Feb 2026 — Present",
  },
  {
    company: "VIVIR MEDIA",
    logo: logoVivir,
    period: "May 2025 — Sept 2025",
  },
  {
    company: "Nismaaya Decor",
    logo: logoNismaaya,
    period: "Aug 2023 — Feb 2025",
  },
];

export const skills = [
  "Content Planning & Strategy",
  "Script Writing",
  "Social Media Copywriting",
  "Content Calendar Management",
  "Multi-Platform Content Adaptation",
  "Performance Tracking & Analytics",
  "Community Management",
  "Designing & Video Editing",
];

export const tools = [
  "Canva",
  "Edits app",
  "VN",
]

export const work: MediaItem[] = [
  { src: work01, alt: "Travel campaign post — leave the stress behind", height: 709 },
  { src: work02, alt: "School campaign post — hands that build, minds that imagine", height: 509 },
  { src: work03, alt: "Raksha Bandhan courier campaign carousel", height: 709 },
  { src: work04, alt: "Mango menu launch food styling post", height: 600 },
  { src: work05, alt: "Friendship Day café campaign post", height: 510 },
  { src: work06, alt: "Passionfruit Picante cocktail post", height: 410 },
  // { src: work07, alt: "Beat the heat sofa campaign post", height: 414 },
  { src: work08, alt: "Furniture discovery cycle post", height: 414 },
  // { src: work09, alt: "Furniture that's out of this world post 00", height: 414 },
  { src: work10, alt: "Furniture that's out of this world post 1", height: 414 },
  { src: work11, alt: "Furniture that's out of this world post 2", height: 600 },
  { src: work12, alt: "Furniture that's out of this world post 30", height: 509 },
  { src: work13, alt: "Blended with Love", height: 500 },
];

export const projects: PortfolioCardData[] = [
  {
    id: "project-1",
    title: "Project One",
    description:
      "Trending meme-format execution tapping into popular Gen-Z dietary banter to drive high relatability and organic cafe engagement.",
    url: reel01,
    type: "Video",
    category: "Frontend",
  },
  {
    id: "project-2",
    title: "Project Two",
    description:
      "Playful dating-meme format tapping into trending relationship banter to seamlessly showcase product application and daily skincare habits.",
    url: reel02,
    type: "Video",
    category: "Frontend",
  },
  {
    id: "project-3",
    title: "Project Three",
    description:
      "Elegant aesthetic showcase pairing slow cinematic angles with trending ethnic audio to highlight the makeup and hair styling details for bridal bookings.",
    url: reel03,
    type: "Video",
    category: "Frontend",
  },
  {
    id: "project-4",
    title: "Project Four",
    description:
      "Catchy bag-spill hook concept that turns a relatable everyday mishap into a direct spotlight on the brand's live discount offers.",
    url: reel04,
    type: "Video",
    category: "Frontend",
  },
  {
    id: "project-5",
    title: "Project Five",
    description:
      "Sarcastic meme-marketing leveraging viral bachelor POV banter to showcase luxury amenities and drive effortless organic shares.",
    url: reel05,
    type: "Video",
    category: "Frontend",
  },
  {
    id: "project-6",
    title: "Project Six",
    description:
      "Engaging hook that contrasts traditional hotel stays with private luxury, highlighting why staying at a villa is the ultimate Udaipur experience.",
    url: reel06,
    type: "Video",
    category: "Frontend",
  },
  {
    id: "project-7",
    title: "Project Seven",
    description:
      "High-intent spiritual storytelling decoding the sacred symbolism of the Shiva idol to elevate craftsmanship into an emotional purchase. ",
    url: reel07,
    type: "Video",
    category: "Frontend",
  },
  {
    id: "project-8",
    title: "PIMS",
    description:
      "Medical storytelling reel that debunks biopsy and cancer myths directly from an oncologist to turn patient anxiety into trust.",
    url: reel08,
    type: "Video",
    category: "Frontend",
  },
  {
    id: "project-9",
    title: "Project Nine",
    description:
      "Hook-driven food review script highlighting the unbeatable price-to-portion value to promote and hype up the cafe's new momos addition. ",
    url: reel09,
    type: "Video",
    category: "Frontend",
  },
  {
    id: "project-10",
    title: "Project Ten",
    description:
      "Fast-paced culinary showcase pairing sensory kitchen BTS with vibrant plating to spotlight the launch of the new seasonal menu. ",
    url: reel10,
    type: "Video",
    category: "Frontend",
  },
];

export const gridPlannings: MediaItem[] = [
  { src: grid01, alt: "Feed grid planning for a restaurant brand" },
  { src: grid03, alt: "Feed grid planning for a beverage and café brand" },
  { src: grid06, alt: "Feed grid planning for a technology brand" },
  { src: grid04, alt: "Feed grid planning for a fitness brand" },
  { src: grid05, alt: "Feed grid planning for a fashion brand" },
  { src: grid02, alt: "Feed grid planning for a luxury accessories brand" },
];

export const reels: MediaItem[] = [
  { src: reel01, alt: "Food plating reel", },
  { src: reel02, alt: "Outdoor bar walkthrough reel" },
  { src: reel03, alt: "Bakery behind the scenes reel" },
  { src: reel04, alt: "School classroom happiness reel" },
  { src: reel05, alt: "School campus student reel" },
  { src: reel06, alt: "Furniture craftsmanship reel" },
  { src: reel07, alt: "Office furniture setup reel" },
  { src: reel08, alt: "Nismaaya Decor sideboard styling reel" },
  { src: reel09, alt: "Nismaaya Decor quality trend reel" },
];

export const workCarousel: PortfolioCardData[][] = [
  [
    { id:'bottegaa-1', title: "Bottegaa Posts", url: workCarousel2, type: "Video" },
    { id:'bottegaa-2', title: "Bottegaa Posts", url: workCarousel16, type: "Video" },
    { id:'bottegaa-3', title: "Bottegaa Posts", url: workCarousel3, type: "Video" },
    { id:'bottegaa-4', title: "Bottegaa Posts", url: workCarousel4, type: "Video" },
    { id:'bottegaa-5', title: "Bottegaa Posts", url: workCarousel1, type: "Image" },
  ],
  [
    { id:'GG-1', title: "GG Posts", url: workCarousel5, type: "Image" },
    { id:'GG-2', title: "GG Posts", url: workCarousel6, type: "Image" },
    { id:'GG-3', title: "GG Posts", url: workCarousel7, type: "Image" },
    { id:'GG-4', title: "GG Posts", url: workCarousel8, type: "Image" },
  ],
  [
    { id:'GG-5', title: "GG Posts", url: workCarousel9, type: "Video" },
    { id:'GG-6', title: "GG Posts", url: workCarousel10, type: "Video" },
    { id:'GG-7', title: "GG Posts", url: workCarousel11, type: "Video" },
    { id:'GG-8', title: "GG Posts", url: workCarousel12, type: "Video" },
  ],
  [
    { id:'Amary-1', title: "Amary Posts", url: workCarousel13, type: "Video" },
    { id:'Amary-2', title: "Amary Posts", url: workCarousel14, type: "Video" },
    { id:'Amary-3', title: "Amary Posts", url: workCarousel15, type: "Video" },
  ],
];


export const logo = [
  { src: logo1, alt: "Company 1" },
  { src: logo2, alt: "Company 1" },
  { src: logo3, alt: "Company 1" },
  { src: logo4, alt: "Company 1" },
  { src: logo5, alt: "Company 1" },
  { src: logo6, alt: "Company 1" },
  { src: logo7, alt: "Company 1" },
  { src: logo8, alt: "Company 1" },
  { src: logo9, alt: "Company 1" },
  { src: logo10, alt: "Company 1" },
  { src: logo11, alt: "Company 1" },
  { src: logo12, alt: "Company 1" },
  { src: logo13, alt: "Company 1" },
  { src: logo14, alt: "Company 1" },
  { src: logo15, alt: "Company 1" },
  { src: logo16, alt: "Company 1" },
  { src: logo17, alt: "Company 1" },
  { src: logo18, alt: "Company 1" },
  { src: logo19, alt: "Company 1" },
];
