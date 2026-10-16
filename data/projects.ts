export interface ProjectTech {
  name: string;
  category: "Frontend" | "Backend" | "Styling" | "Database" | "Workflow";
  badgeColor?: string;
}

export interface ProjectFeature {
  title: string;
  description: string;
  iconName?: string;
}

export interface ProjectChallenge {
  title: string;
  description: string;
  solution: string;
}

export interface ProjectImprovement {
  title: string;
  description: string;
  status: "Planned" | "In Development";
}

export interface ProjectData {
  slug: string;
  title: string;
  tagline: string;
  shortDescription: string;
  longDescription: string;
  purpose: string;
  problemSolved: string;
  image: string;
  liveUrl: string;
  githubUrl: string;
  category: string;
  featured: boolean;
  technologies: ProjectTech[];
  features: ProjectFeature[];
  challenges: ProjectChallenge[];
  improvements: ProjectImprovement[];
  metrics: { label: string; value: string }[];
}

export const projectsData: ProjectData[] = [
  {
    slug: "the-news-room",
    title: "The News Room",
    tagline: "A Modern Bengali News & Editorial Publishing Web Platform",
    shortDescription:
      "A modern Bengali news website designed to present news in a clean, accessible, and responsive interface. Built using Next.js, TypeScript, and Tailwind CSS.",
    longDescription:
      "The News Room (Bangla News 24) is a production-deployed digital news publication platform tailored for Bengali-speaking audiences. It delivers a fast, newspaper-inspired reading experience across political reporting, international affairs, economic insights, health, sports, and technology bulletins. Built on Next.js App Router and TypeScript, the application prioritizes readable Bengali typography, real-time news tickers, and structured editorial categories.",
    purpose:
      "Provide readers with an authentic, clutter-free digital news hub that respects modern web performance standards while honoring traditional Bengali journalistic layouts.",
    problemSolved:
      "Many traditional regional news portals are encumbered by intrusive popups, slow loading times, unoptimized scripts, and fragmented mobile typography. The News Room addresses this by providing a clean, responsive, fast-loading interface with smooth headline navigation and dedicated category feeds.",
    image: "/images/projects/news-room.png",
    liveUrl: "https://news-room-orcin.vercel.app/",
    githubUrl: "https://github.com/walid573/The-News-Room",
    category: "Full-Stack Web App",
    featured: true,
    technologies: [
      { name: "Next.js", category: "Frontend" },
      { name: "TypeScript", category: "Frontend" },
      { name: "Tailwind CSS", category: "Styling" },
      { name: "React Icons", category: "Frontend" },
      { name: "Next Font / Noto Serif", category: "Styling" },
      { name: "Vercel Platform", category: "Workflow" },
    ],
    features: [
      {
        title: "Breaking News Ticker (সর্বশেষ)",
        description:
          "Continuous, smooth marquee ticker broadcasting real-time headlines with pause-on-hover interaction.",
      },
      {
        title: "Categorized Editorial Sections",
        description:
          "Distinct content channels for রাজনীতি (Politics), বিশ্ব (World), অর্থনীতি (Economy), স্বাস্থ্য (Health), খেলা (Sports), and প্রযুক্তি (Tech).",
      },
      {
        title: "Responsive Editorial Grid",
        description:
          "Multi-column newspaper layout that adapts gracefully from desktop editorial columns down to single-column mobile reading cards.",
      },
      {
        title: "Article Reading Route (/news/[id])",
        description:
          "Dynamic routing for individual news stories with optimized line heights, high-resolution imagery, and structured metadata.",
      },
      {
        title: "Bengali Typography Hierarchy",
        description:
          "Carefully curated Noto Serif Bengali and Sans font pairings ensuring legibility across complex conjunct characters.",
      },
      {
        title: "Authentication Portal Access",
        description:
          "Integrated Sign-in and Sign-up route entry points prepared for personalized reader profiles and commentary.",
      },
    ],
    challenges: [
      {
        title: "Bengali Unicode Font Rendering & Line Heights",
        description:
          "Bengali script contains complex vowel markers (kar) and ligatures that frequently cause vertical clipping or irregular line spacing in standard CSS line-height resets.",
        solution:
          "Configured Google Noto Serif Bengali with tailored leading classes and explicit font metric fallbacks to maintain uniform vertical rhythm across devices.",
      },
      {
        title: "Responsive Newspaper Hierarchy on Mobile",
        description:
          "Translating a multi-card editorial layout with lead stories, side columns, and image thumbnails into a cohesive mobile view without overwhelming the user.",
        solution:
          "Leveraged Tailwind CSS Grid with responsive breakpoint switching (1-column on mobile, 2-column on tablet, 3-column on desktop) and visual priority sorting for lead articles.",
      },
      {
        title: "Smooth Marquee Animation Without Layout Shift",
        description:
          "Implementing a marquee banner that does not trigger expensive browser reflows or disrupt the page layout during dynamic data hydration.",
        solution:
          "Utilized CSS keyframes with GPU-accelerated transforms (translate3d) and dedicated overflow containment containers.",
      },
    ],
    improvements: [
      {
        title: "Full-Text Search & Topic Filtering",
        description:
          "Implement an instant search bar with live auto-suggest for keywords and historical news archives.",
        status: "Planned",
      },
      {
        title: "Bookmarking & Offline Reader Mode",
        description:
          "Add local storage bookmarked articles and Progressive Web App (PWA) offline reading support.",
        status: "Planned",
      },
      {
        title: "Reader Reaction & Commentary System",
        description:
          "Integrate a moderated user commenting system with interactive sentiment reactions (helpful, insightful, urgent).",
        status: "In Development",
      },
      {
        title: "Audio Read-Aloud (Text-to-Speech)",
        description:
          "Explore Bengali text-to-speech integration to allow commuters to listen to news broadcasts on the go.",
        status: "Planned",
      },
    ],
    metrics: [
      { label: "Design System", value: "Tailwind CSS" },
      { label: "Content Language", value: "Bengali (বাংলা)" },
      { label: "Framework", value: "Next.js App Router" },
      { label: "Deployment", value: "Vercel Production" },
    ],
  },
  {
    slug: "bazar-dor",
    title: "Bazar Dor",
    tagline: "Real-Time Everyday Commodity & Market-Price Intelligence Platform",
    shortDescription:
      "A Bengali market-price web application designed to help users explore everyday product prices through categorized listings and detailed product information.",
    longDescription:
      "Bazar Dor (বাজার দর) is a consumer-focused commodity tracking web platform that brings daily price transparency to staple groceries and produce in Bangladesh. It catalogs everyday market essentials—such as rice, lentils, edible oils, seasonal vegetables, fresh fish, meat, dairy, and spices—and highlights notable daily fluctuations, indicating which items have seen price increases or decreases.",
    purpose:
      "Empower household shoppers, vendors, and consumers with reliable, daily market-price insights, eliminating price opacity and facilitating smarter shopping decisions.",
    problemSolved:
      "Daily commodity prices in local retail bazaars fluctuate rapidly due to seasonal shifts and supply chains. Bazar Dor consolidates real-time price reports into an intuitive bilingual interface where consumers can instantly check whether onions, garlic, or fish are trending up or down before heading to market.",
    image: "/images/projects/bazar-dor.png",
    liveUrl: "https://bazar-dor-z.vercel.app/",
    githubUrl: "https://github.com/walid573/Bazar-Dor",
    category: "Full-Stack Web App",
    featured: true,
    technologies: [
      { name: "Next.js", category: "Frontend" },
      { name: "TypeScript", category: "Frontend" },
      { name: "Tailwind CSS", category: "Styling" },
      { name: "API Integration", category: "Backend" },
      { name: "React Aria", category: "Frontend" },
      { name: "Vercel Platform", category: "Workflow" },
    ],
    features: [
      {
        title: "Categorized Commodity Browsing",
        description:
          "Horizontal scrollable category tabs with icons: চাল (Rice), ডাল (Lentils), তেল (Oil), সবজি (Vegetables), মাছ (Fish), মাংস (Meat), ডিম-দুধ (Dairy), and মসলা (Spices).",
      },
      {
        title: "Price Fluctuation Highlighting",
        description:
          "Clear visual callouts for 'আজ দাম বেড়েছে' (Prices Rose) and 'আজ দাম কমেছে' (Prices Fell) with percentage indicators and directional color badges.",
      },
      {
        title: "Detailed Product Page (/details/[id])",
        description:
          "Individual product views displaying current price per kg/unit, unit measurements, and market-level price ranges.",
      },
      {
        title: "Bilingual Number & Currency Display",
        description:
          "Consistent formatting for Bengali numerals, currency units (টাকা), and percentage adjustments.",
      },
      {
        title: "Responsive Market Grid",
        description:
          "Card-based UI crafted with clean borders, category emojis, and subtle hover interactions optimized for mobile and desktop screens.",
      },
      {
        title: "Skeleton Loading Feedback",
        description:
          "Smooth shimmer placeholders during data fetching preventing jarring layout shifts during client hydration.",
      },
    ],
    challenges: [
      {
        title: "Data Modeling for Diverse Agricultural Commodities",
        description:
          "Handling varied units of measure (per kg, per dozen, per 100g, per piece) alongside dynamic price shifts and localized descriptions.",
        solution:
          "Architected a strongly-typed TypeScript product schema with unit normalization and directional percentage calculation helpers.",
      },
      {
        title: "Mobile-First Horizontal Category Scrolling",
        description:
          "Ensuring category pill navigation remains scrollable without clipping, while maintaining touch accessibility and clean scrollbar styling.",
        solution:
          "Utilized Tailwind utility scrollbar-none with CSS scroll-snap points and touch event delegation for smooth smartphone navigation.",
      },
      {
        title: "Managing Loading & Empty States Gracefully",
        description:
          "Preventing layout flickers when pricing data or dynamic categories are being resolved from server endpoints.",
        solution:
          "Created modular React shimmer skeleton cards mirroring the exact dimensions of final commodity price cards.",
      },
    ],
    improvements: [
      {
        title: "Interactive Price Trend Graphs",
        description:
          "Add 7-day and 30-day historical price movement line charts to visualize inflation and seasonal commodity trends.",
        status: "Planned",
      },
      {
        title: "Market-by-Market Comparisons",
        description:
          "Enable users to compare prices between wholesale markets (e.g., Karwan Bazar) and local neighbourhood retail shops.",
        status: "Planned",
      },
      {
        title: "Community Price Reporting & Verification",
        description:
          "Build a crowdsourced submission portal allowing verified shoppers to report local spot prices with receipt proof.",
        status: "In Development",
      },
      {
        title: "Price Alert Notifications",
        description:
          "Allow users to set price drop alerts via browser push notifications or email for essential household items.",
        status: "Planned",
      },
    ],
    metrics: [
      { label: "Target Audience", value: "Household Shoppers" },
      { label: "Key Categories", value: "8 Staple Groups" },
      { label: "Framework", value: "Next.js & TypeScript" },
      { label: "Deployment", value: "Vercel Production" },
    ],
  },
  {
    slug: "fitlog",
    title: "FitLog",
    tagline: "Dark-Themed Gym Companion, Workout Library & Routine Planner",
    shortDescription:
      "A fitness and workout-planning application designed to help users organize and manage their fitness-related plans.",
    longDescription:
      "FitLog is a modern, high-intensity workout library and routine planner built for athletes and fitness enthusiasts. Featuring an immersive dark aesthetic with electric-lime accents (#C2F800), FitLog catalogs compound and isolation lifts across all major muscle groups (chest, back, legs, shoulders, arms, and core). It provides detailed lift instructions, caloric burn estimations, time benchmarks, and an interactive 'My Plan' system.",
    purpose:
      "Provide a focused, distraction-free companion for gym-goers to browse exercises, curate personalized daily routines, and monitor workout commitment.",
    problemSolved:
      "Traditional fitness applications are frequently bloated with social feeds, paywalls, and complicated setup flows. FitLog strips away friction: users can pick an exercise, lock it into their daily plan, review target sets and calories, and stay focused entirely on their workout.",
    image: "/images/projects/fitlog.png",
    liveUrl: "https://fit-log-jade.vercel.app/",
    githubUrl: "https://github.com/walid573/fit-log",
    category: "Full-Stack Web App",
    featured: true,
    technologies: [
      { name: "React.js / Next.js", category: "Frontend" },
      { name: "TypeScript", category: "Frontend" },
      { name: "Tailwind CSS", category: "Styling" },
      { name: "Lucide React", category: "Frontend" },
      { name: "State Management", category: "Frontend" },
      { name: "Vercel Platform", category: "Workflow" },
    ],
    features: [
      {
        title: "Curated Exercise Library",
        description:
          "12 core lifts covering Barbell Bench Press, Pull-Up, Back Squat, Overhead Press, Dumbbell Bicep Curl, Plank, Burpee, Deadlift, Push-Up, Walking Lunge, Russian Twist, and Kettlebell Swing.",
      },
      {
        title: "Muscle Group Categorization",
        description:
          "High-contrast badge tags classifying each lift by primary and secondary targets (Chest, Back, Legs, Shoulders, Arms, Core, Full Body).",
      },
      {
        title: "Exercise Metric Badges",
        description:
          "Clear breakdown for each movement showing estimated duration (min), calorie burn estimate (kcal), and difficulty rating.",
      },
      {
        title: "My Plan & Saved Tabs (/my-plan)",
        description:
          "Interactive dual-tab management allowing users to assemble an active day plan or bookmark exercises to their personal saved vault.",
      },
      {
        title: "Workout Detail View (/workouts/[id])",
        description:
          "Dedicated exercise pages showing required equipment (Barbell, Rack, Bench, Dumbbells, Bodyweight) and step-by-step form execution.",
      },
      {
        title: "High-Contrast Cyber-Dark Aesthetic",
        description:
          "Deep charcoal backgrounds (#090A0D, #12141A) paired with electric neon lime accents (#C2F800) and bold typography.",
      },
    ],
    challenges: [
      {
        title: "State Synchronization for Plan vs Saved Routines",
        description:
          "Managing dynamic workout addition and removal between active daily training sessions and persistent saved libraries without state collision.",
        solution:
          "Structured dedicated state stores with immutable array updates, counter synchronization, and persistent browser storage.",
      },
      {
        title: "Maintaining Visual Hierarchy in Pure Dark Mode",
        description:
          "Preventing dark UI elements from muddying together across varying display panels while ensuring high readability under gym lighting.",
        solution:
          "Utilized precise border delineations (border-gray-800/80), contrasting dark panels (#12141A vs #15171D), and electric lime accent highlights.",
      },
      {
        title: "Responsive Card Grids with Dynamic Image Ratios",
        description:
          "Ensuring exercise thumbnail images load without layout jumping while maintaining uniform card heights across tablet and mobile viewports.",
        solution:
          "Configured Next.js responsive image containers with fixed aspect-ratios (aspect-video) and Tailwind flexbox column stretching.",
      },
    ],
    improvements: [
      {
        title: "Rest Timer & Interval Audio Cues",
        description:
          "Add an interactive in-app rest stopwatch with audio chime alerts between sets.",
        status: "Planned",
      },
      {
        title: "Weight & Rep Log Tracking",
        description:
          "Introduce a real-time set log allowing users to record actual weights lifted and rep counts for progression charts.",
        status: "In Development",
      },
      {
        title: "Custom Workout Creation",
        description:
          "Allow users to author their own custom exercises with equipment notes, photo uploads, and muscle group tagging.",
        status: "Planned",
      },
      {
        title: "Cloud Sync with User Authentication",
        description:
          "Connect user profiles to MongoDB database to sync workout logs across mobile phone and desktop browser.",
        status: "Planned",
      },
    ],
    metrics: [
      { label: "Core Exercises", value: "12 Curated Lifts" },
      { label: "Muscle Groups", value: "Full Anatomy" },
      { label: "UI Theme", value: "Dark Cyber-Lime" },
      { label: "Deployment", value: "Vercel Production" },
    ],
  },
];

export function getProjectBySlug(slug: string): ProjectData | undefined {
  return projectsData.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projectsData.map((p) => p.slug);
}
