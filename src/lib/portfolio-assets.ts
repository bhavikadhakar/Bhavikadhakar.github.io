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
  id?: number;
  src: string;
  alt: string;
  height?: number;
  /** Intrinsic pixel width — paired with height, reserves layout space for lazy-loaded <img> tags so they don't shift content (and break in-page anchor scrolling) while loading. */
  width?: number;
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
  "Meta Business Suite",
  "Google workspace",
  "Meta Ad Library",
  "Google Trends",
  "Instagram Native Insights"
]

export const work: MediaItem[] = [
  { src: work01, alt: "Addressing everyday office burnout to inspire working professionals to take a well-deserved break and unwind on a stress-free journey.", desc: "", height: 609 },
  { src: work02, alt: "School campaign post — hands that build, minds that imagine", desc: "A student-centric creative highlighting hands-on, fun learning to build trust with parents.", height: 509 },
  { src: work03, alt: "Festive post", desc: "An emotional festive post promoting a free Rakhi delivery offer", height: 550 },
  { src: work04, alt: "New menu launch food styling post", desc: "A craving-focused food visual designed to trigger instant cravings. ", height: 600 },
  { src: work05, alt: "Occasion Based post", desc: "Occasion-led creative showcasing candid hangout moments with sweet treats to position the cafe as the go-to spot for friendly reunions.", height: 510 },
  { src: work06, alt: "Passionfruit Picante cocktail post", desc:"A craving-focused beverage visual designed to trigger drink cravings.", height: 510 },
  { src: work08, alt: "Meme-inspired post", desc: "A meme-inspired consumer loop creative capturing the instant obsession and buying cycle of statement accent chairs.", height: 414 },
  { src: work10, alt: "Craving-focused food post", desc: "A craving-focused food visual designed to trigger instant cravings. ", height: 514 },
  { src: work11, alt: "Health-awareness post", desc: "A health-awareness creative addressing joint and back pain to drive clinical appointments. ", height: 600 },
  { src: work12, alt: "What We Offer post", desc: "A student-centric creative highlighting hands-on, fun learning to build trust with parents.", height: 509 },
  { src: work13, alt: "Blended with Love", desc:"A craving-focused beverage visual designed to trigger drink cravings.", height: 550 },
  // { src: work09, alt: "Furniture that's out of this world post 00", height: 414 },
  // { src: work07, alt: "Beat the heat sofa campaign post", height: 414 },
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
  { id: 1, src: grid01, alt: " Grid planning for a restaurant brand", width: 390, height: 526 },
  { id: 2,src: grid03, alt: " Grid planning for a restaurant brand", width: 391, height: 526 },
  { id: 3,src: grid06, alt: " Grid planning for a Cafe", width: 2421, height: 4310 },
  { id: 4,src: grid04, alt: " Grid planning for Hospital", width: 1179, height: 1568 },
  { id: 5,src: grid05, alt: " Grid planning for a Villa", width: 1179, height: 1576 },
  { id: 6,src: grid02, alt: " Grid strategy for a bag brand", width: 391, height: 526 },
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
    { id:'bottegaa-1', url: workCarousel2, type: "Video", title:"A storytelling carousel capturing comfort food and slow moments to showcase the cafe's warm, everyday dining vibe." },
    { id:'bottegaa-2', url: workCarousel16, type: "Video", title:"A storytelling carousel capturing comfort food and slow moments to showcase the cafe's warm, everyday dining vibe."  },
    { id:'bottegaa-3', url: workCarousel3, type: "Video", title:"A storytelling carousel capturing comfort food and slow moments to showcase the cafe's warm, everyday dining vibe."  },
    { id:'bottegaa-4', url: workCarousel4, type: "Video", title:"A storytelling carousel capturing comfort food and slow moments to showcase the cafe's warm, everyday dining vibe."  },
    { id:'bottegaa-5', url: workCarousel1, type: "Image", title:"A storytelling carousel capturing comfort food and slow moments to showcase the cafe's warm, everyday dining vibe."  },
  ],
  [
    { id:'GG-1', url: workCarousel5, type: "Image", title: "A sequential hook carousel capturing the cozy cafe vibes to invite guests to relax, unwind, and dine in." },
    { id:'GG-2', url: workCarousel6, type: "Image", title: "A sequential hook carousel capturing the cozy cafe vibes to invite guests to relax, unwind, and dine in." },
    { id:'GG-3', url: workCarousel7, type: "Image", title: "A sequential hook carousel capturing the cozy cafe vibes to invite guests to relax, unwind, and dine in." },
    { id:'GG-4', url: workCarousel8, type: "Image", title: "A sequential hook carousel capturing the cozy cafe vibes to invite guests to relax, unwind, and dine in." },
  ],
  [
    { id:'GG-5', url: workCarousel9, type: "Video", title:"A sensory, craving-led storytelling post using close-up pours and slow bites to turn the brand's pancakes into an irresistible must-try dessert." },
    { id:'GG-6', url: workCarousel10, type: "Video", title:"A sensory, craving-led storytelling post using close-up pours and slow bites to turn the brand's pancakes into an irresistible must-try dessert." },
    { id:'GG-7', url: workCarousel11, type: "Video", title:"A sensory, craving-led storytelling post using close-up pours and slow bites to turn the brand's pancakes into an irresistible must-try dessert." },
    { id:'GG-8', url: workCarousel12, type: "Video", title:"A sensory, craving-led storytelling post using close-up pours and slow bites to turn the brand's pancakes into an irresistible must-try dessert." },
  ],
  [
    { id:'Amary-1', url: workCarousel13, type: "Video", title: "A carousel post showing that true skin health happens both from the inside and outside, positioning the serum as the core daily essential." },
    { id:'Amary-2', url: workCarousel14, type: "Video", title: "A carousel post showing that true skin health happens both from the inside and outside, positioning the serum as the core daily essential." },
    { id:'Amary-3', url: workCarousel15, type: "Video", title: "A carousel post showing that true skin health happens both from the inside and outside, positioning the serum as the core daily essential." },
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
