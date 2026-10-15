export interface PersonalInfo {
  name: string;
  designation: string;
  headline: string;
  tagline: string;
  greeting: string;
  heroHeadline: string;
  heroDescription: string;
  aboutIntro: string[];
  email: string;
  phone: string;
  location: string;
  github: string;
  linkedin: string;
  profileImage: string;
  resumeUrl: string;
  status: string;
}

export interface SkillItem {
  name: string;
  category: "Frontend" | "Backend" | "Database" | "Tools & Workflow";
  description: string;
  iconName: string;
  color: string;
}

export interface EducationInfo {
  qualification: string;
  institution: string;
  group: string;
  passingYear: string;
  status: string;
  notes: string;
  isPlaceholder: boolean;
}

export interface JourneyMilestone {
  period: string;
  title: string;
  category: string;
  description: string;
  highlights: string[];
}

export const personalInfo: PersonalInfo = {
  name: "Mohammad Walid",
  designation: "Full-Stack Web Developer",
  headline: "Full-Stack Developer | React • Next.js • TypeScript • Node.js",
  tagline: "Building ideas into meaningful digital experiences.",
  greeting: "Hi, I'm Mohammad Walid 👋",
  heroHeadline: "Building Modern Web Experiences.",
  heroDescription:
    "I build responsive, user-friendly web applications and enjoy transforming ideas into practical digital experiences using modern web technologies.",
  aboutIntro: [
    "I'm Mohammad Walid, a passionate web developer who enjoys building modern and user-friendly web applications. My journey in web development is focused on learning by doing, experimenting with new technologies, and creating projects that solve practical problems.",
    "I enjoy working with React and Next.js to build interactive interfaces and responsive websites. I am also developing my knowledge of backend development, API integration, databases, and full-stack application architecture.",
    "Every project gives me an opportunity to learn something new, improve my problem-solving skills, and write better code. My goal is to continue growing as a developer while building useful digital experiences.",
  ],
  email: "mdwalid19833@gmail.com",
  phone: "Available upon request via email",
  location: "Bangladesh",
  github: "https://github.com/walid573",
  linkedin: "https://www.linkedin.com/in/mohammad-walid1/",
  profileImage: "/images/profile.jpg",
  resumeUrl: "/resume.pdf",
  status: "Available for new opportunities",
};

export const skillsData: SkillItem[] = [
  // Frontend Development
  {
    name: "HTML5",
    category: "Frontend",
    description: "Semantic markup, modern web standards, and accessible structure.",
    iconName: "html5",
    color: "#E34F26",
  },
  {
    name: "CSS3",
    category: "Frontend",
    description: "Modern layouts, Flexbox, CSS Grid, animations, and responsive media.",
    iconName: "css3",
    color: "#1572B6",
  },
  {
    name: "JavaScript",
    category: "Frontend",
    description: "ES6+ syntax, asynchronous programming, DOM APIs, and closures.",
    iconName: "javascript",
    color: "#F7DF1E",
  },
  {
    name: "TypeScript",
    category: "Frontend",
    description: "Static typing, generics, robust interfaces, and type safety across apps.",
    iconName: "typescript",
    color: "#3178C6",
  },
  {
    name: "React.js",
    category: "Frontend",
    description: "Component architecture, hooks, state management, and virtual DOM.",
    iconName: "react",
    color: "#61DAFB",
  },
  {
    name: "Next.js",
    category: "Frontend",
    description: "App Router, Server Components, SSR/SSG, routing, and Turbopack.",
    iconName: "nextjs",
    color: "#FFFFFF",
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    description: "Utility-first design, custom configurations, responsive dark-mode styling.",
    iconName: "tailwind",
    color: "#06B6D4",
  },

  // Backend Development
  {
    name: "Node.js",
    category: "Backend",
    description: "Server-side JavaScript runtime, file I/O, and asynchronous event loops.",
    iconName: "nodejs",
    color: "#5FA04E",
  },
  {
    name: "Express.js",
    category: "Backend",
    description: "Fast, unopinionated routing, middleware pipelines, and API creation.",
    iconName: "express",
    color: "#E2E8F0",
  },
  {
    name: "REST APIs",
    category: "Backend",
    description: "RESTful architecture, CRUD operations, JSON endpoints, and status codes.",
    iconName: "api",
    color: "#8B5CF6",
  },

  // Database
  {
    name: "MongoDB",
    category: "Database",
    description: "NoSQL document storage, collections, aggregation, and Mongoose modeling.",
    iconName: "mongodb",
    color: "#47A248",
  },

  // Tools and Workflow
  {
    name: "Git",
    category: "Tools & Workflow",
    description: "Version control, branching workflows, commits, and collaborative merges.",
    iconName: "git",
    color: "#F05032",
  },
  {
    name: "GitHub",
    category: "Tools & Workflow",
    description: "Remote code hosting, pull requests, issue tracking, and repository management.",
    iconName: "github",
    color: "#F8FAFC",
  },
  {
    name: "VS Code",
    category: "Tools & Workflow",
    description: "Primary IDE, developer tooling, extensions, terminal integration, and debugging.",
    iconName: "vscode",
    color: "#007ACC",
  },
];

export const educationData: EducationInfo = {
  qualification: "Higher Secondary Certificate (HSC)",
  institution: "To be provided",
  group: "To be confirmed",
  passingYear: "To be provided",
  status: "Completed / College Level",
  notes:
    "Currently pursuing continuous self-taught software engineering, full-stack web development curricula, and building practical web projects. Formal academic institutional details will be updated once verified.",
  isPlaceholder: true,
};

export const journeyMilestones: JourneyMilestone[] = [
  {
    period: "Phase 1 • Foundations",
    title: "Web Core & Modern JavaScript",
    category: "Foundations",
    description:
      "Built a solid foundation in semantic HTML5, modern CSS3 layouts (Flexbox, CSS Grid), and core ES6+ JavaScript. Practiced writing clean DOM logic, asynchronous promises, and responsive layouts.",
    highlights: ["Semantic HTML5 & Accessibility", "Modern Responsive CSS", "JavaScript ES6+ & Async/Await"],
  },
  {
    period: "Phase 2 • Component Driven",
    title: "React & Component Architecture",
    category: "Frontend Development",
    description:
      "Transitioned to React for declarative user interfaces. Mastered reusable component patterns, React hooks (useState, useEffect, useMemo), state lifting, and rapid UI development with Tailwind CSS.",
    highlights: ["Component Composition & Props", "React Hooks & Lifecycle", "Tailwind CSS Styling System"],
  },
  {
    period: "Phase 3 • Full-Stack Frameworks",
    title: "Next.js App Router & TypeScript",
    category: "Full-Stack Modernization",
    description:
      "Adopted Next.js App Router and TypeScript to write strongly-typed full-stack applications. Implemented server-side rendering, dynamic route handling, and optimized asset pipelines.",
    highlights: ["Next.js App Router & Server Components", "TypeScript Strict Mode", "Dynamic Routing & SEO"],
  },
  {
    period: "Phase 4 • Backend & APIs",
    title: "Node.js, Express & Database Integration",
    category: "Backend & Database",
    description:
      "Expanded into backend services with Node.js and Express.js. Designed RESTful endpoints, handled HTTP status codes, structured database schemas with MongoDB, and connected client interfaces to APIs.",
    highlights: ["REST API Design & Middleware", "MongoDB Document Modeling", "Data Validation & Error Handling"],
  },
  {
    period: "Phase 5 • Practical Delivery",
    title: "Building Real Projects & Production Deployments",
    category: "Production Projects",
    description:
      "Focused on solving real-world user problems through end-to-end web applications. Successfully engineered and deployed projects like The News Room, Bazar Dor, and FitLog on Vercel with responsive design across devices.",
    highlights: ["The News Room Bengali Portal", "Bazar Dor Market Price Tracker", "FitLog Workout & Routine Planner"],
  },
];

export const hobbiesAndInterests = {
  title: "Hobbies & Interests Outside Coding",
  isPlaceholder: true,
  placeholderText:
    "This section is reserved for Mohammad Walid's personal hobbies, recreational interests, reading, or tech community passions. It will be updated with genuine details.",
  items: [
    { label: "Tech Exploration", desc: "Discovering emerging web tools, open-source libraries, and design patterns." },
    { label: "UI/UX Analysis", desc: "Studying intuitive interaction models and minimalist visual aesthetics." },
    { label: "Problem Solving", desc: "Tackling coding challenges, logic puzzles, and architectural exercises." },
  ],
};
