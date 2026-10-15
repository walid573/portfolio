# Mohammad Walid — Full-Stack Web Developer Portfolio

> **Building Modern Web Experiences.**  
> Full-Stack Developer | React • Next.js • TypeScript • Node.js • MongoDB • Tailwind CSS  
> **Tagline:** Building ideas into meaningful digital experiences.

A production-ready personal developer portfolio built with Next.js App Router, TypeScript, and Tailwind CSS. Designed with a dark aesthetic inspired by developer-focused portfolios, featuring glassmorphism cards, ambient lighting, authentic development journeys, and comprehensive project case study pages.

---

## 🌟 Key Highlights & Features

- **Developer-Focused Dark Aesthetic**: Deep charcoal backgrounds (`#07090e`), violet-to-cyan subtle gradients, frosted-glass cards, and ambient lighting.
- **Sticky, Blur-on-Scroll Navbar**: Smooth scrolling, active section indicators, external GitHub & LinkedIn links, and a responsive mobile menu.
- **Hero Section**:
  - Greeting pill and headline
  - Three prominent buttons: *Explore My Projects*, *View GitHub*, and *Download Resume*
  - Dedicated accessible *Resume Modal* explaining update status and pointing to `/resume.pdf`
  - Portrait container with glowing borders and floating tech badges (React, Next.js, TypeScript, Node.js, MongoDB)
- **About Me ("A Little About Me")**:
  - Authentic narrative of programming journey, project passions, and future goals
  - Interactive syntax-highlighted code editor widget (`walid.config.ts`) with copy button
  - Clearly marked editable placeholder for hobbies and interests outside coding
- **Skills Section ("My Tech Stack")**:
  - Filterable by categories: *Frontend*, *Backend*, *Database*, *Tools & Workflow*
  - Genuine SVG technology logos (no fabricated skill percentages or fake progress bars)
- **Education Section ("Education")**:
  - Higher Secondary Certificate (HSC) / College level
  - Structured cards with editable placeholders for institution, group, and passing year
- **Experience ("My Development Journey")**:
  - Authentic 5-phase timeline tracking progression from web core to production deployments
  - Extensible container ready for verified employment, internships, and freelance roles
- **Featured Projects ("Projects I've Built")**:
  - Real screenshots captured directly from production deployments
  - Live demo & GitHub repository buttons
  - Direct links to dedicated individual case study pages
- **Individual Project Detail Pages (`/projects/[slug]`)**:
  - `/projects/the-news-room`: Modern Bengali news portal with real-time ticker
  - `/projects/bazar-dor`: Commodity price tracker with fluctuation highlights
  - `/projects/fitlog`: Gym workout library and routine planner with neon accents
  - Complete technical breakdown: Purpose, problem solved, implemented features, challenges & solutions, and future improvements roadmap
- **Contact Section ("Let's Build Something Together")**:
  - Working email links to `mdwalid19833@gmail.com` with one-click copy toast
  - Transparent contact form with client-side validation that prepares structured mail client dispatch
- **Custom 404 Page (`/not-found`)**:
  - Graceful handling for non-existent routes or invalid project slugs

---

## 🛠️ Technology Stack

| Layer | Technologies |
|---|---|
| **Framework** | Next.js 16 (App Router, Server & Client Components) |
| **Language** | TypeScript (Strict Mode) |
| **Styling** | Tailwind CSS v4, Custom Design Tokens, Glassmorphism |
| **Icons** | Lucide React, Custom Pure SVG Brand Logos |
| **Fonts** | Geist Sans, Geist Mono |
| **Deployment** | Vercel Ready (Optimized Turbopack Build) |

---

## 📂 Project Directory Structure

```text
mohammad-walid-portfolio/
├── app/
│   ├── globals.css              # Custom design tokens, glassmorphism, animations
│   ├── layout.tsx               # Root layout, SEO metadata, OpenGraph tags
│   ├── not-found.tsx            # Custom 404 Not Found page
│   ├── page.tsx                 # Full portfolio homepage assembling all sections
│   └── projects/
│       └── [slug]/
│           └── page.tsx         # Dynamic project case study details page
├── components/
│   ├── About.tsx                # About Me narrative, terminal widget, hobbies
│   ├── Contact.tsx              # Contact details, verified links, contact form
│   ├── Education.tsx            # HSC education timeline with editable placeholders
│   ├── Experience.tsx           # Honest development journey milestones
│   ├── Footer.tsx               # Brand credits, dynamic year, back to top
│   ├── Hero.tsx                 # Hero headline, action buttons, portrait container
│   ├── Navbar.tsx               # Sticky responsive navigation with mobile drawer
│   ├── ProjectCard.tsx          # Reusable project card with screenshot & links
│   ├── Projects.tsx             # Featured projects section grid
│   ├── ResumeModal.tsx          # Accessible modal for future resume notification
│   ├── Skills.tsx               # Categorized tech stack with real SVG logos
│   ├── SocialIcons.tsx          # GitHub and LinkedIn SVG brand icons
│   └── TechIcon.tsx             # Technology logos (React, Next.js, Node, Mongo, etc.)
├── data/
│   ├── portfolio.ts             # Source of truth: Personal info, skills, education, journey
│   └── projects.ts              # Typed dataset for The News Room, Bazar Dor, and FitLog
└── public/
    ├── images/
    │   ├── profile.jpg          # Professional photograph / avatar placeholder
    │   └── projects/
    │       ├── news-room.png    # Live screenshot of The News Room
    │       ├── bazar-dor.png    # Live screenshot of Bazar Dor
    │       └── fitlog.png       # Live screenshot of FitLog
    └── resume.pdf               # Resume document placeholder
```

---

## 🚀 Local Development Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/walid573/mohammad-walid-portfolio.git
   cd mohammad-walid-portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start local development server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` in your browser.

4. **Verify production build**:
   ```bash
   npm run build
   npm run start
   ```

---

## 🚢 Step-by-Step Vercel Deployment Instructions

1. **Push your code to GitHub**:
   ```bash
   git add .
   git commit -m "feat: complete full-stack portfolio for Mohammad Walid"
   git remote add origin https://github.com/walid573/portfolio.git # (or your preferred repo name)
   git branch -M main
   git push -u origin main
   ```

2. **Deploy via Vercel**:
   - Go to [https://vercel.com/new](https://vercel.com/new).
   - Log in with your GitHub account.
   - Select and import the repository.
   - Framework Preset: **Next.js** (automatically detected).
   - Root Directory: `./` (leave default).
   - Build Command: `next build` (leave default).
   - Output Directory: `.next` (leave default).
   - Click **Deploy**.

3. **Domain & DNS**:
   - Once deployed, Vercel will generate your live production URL (e.g., `https://mohammad-walid.vercel.app`).
   - You can assign a custom domain in Vercel under *Project Settings -> Domains*.

---

## ✏️ Customizing Personal Information

All data is decoupled into typed configuration files:
- **Personal Details & Social Links**: Edit `data/portfolio.ts` (`personalInfo`).
- **Profile Photo**: Replace `public/images/profile.jpg` with your photo.
- **Formal Resume**: Replace `public/resume.pdf` with your PDF file.
- **Education Information**: Update `educationData` in `data/portfolio.ts` with your college name and passing year.
- **New Projects**: Add new project entries to `projectsData` in `data/projects.ts` — routes and cards will generate automatically!

---

## 📄 License
This portfolio is open source and available under the [MIT License](LICENSE).
