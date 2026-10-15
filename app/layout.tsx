import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { personalInfo } from "@/data/portfolio";
import { MotionEnhancer } from "@/components/MotionEnhancer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#07090e",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "Mohammad Walid | Full-Stack Web Developer",
    template: "%s | Mohammad Walid",
  },
  description: `${personalInfo.headline}. ${personalInfo.tagline}`,
  keywords: [
    "Mohammad Walid",
    "Full-Stack Web Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Node.js",
    "MongoDB",
    "Tailwind CSS",
    "Frontend Engineer",
    "Portfolio",
    "Web Developer Bangladesh",
  ],
  authors: [{ name: personalInfo.name, url: personalInfo.github }],
  creator: personalInfo.name,
  metadataBase: new URL("https://mohammad-walid.vercel.app"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mohammad-walid.vercel.app",
    title: "Mohammad Walid — Full-Stack Web Developer",
    description: "Building modern, responsive, and user-friendly web applications with React, Next.js, and TypeScript.",
    siteName: "Mohammad Walid Portfolio",
    images: [
      {
        url: "/images/profile.jpg",
        width: 1200,
        height: 630,
        alt: "Mohammad Walid — Full-Stack Web Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohammad Walid | Full-Stack Web Developer",
    description: personalInfo.headline,
    images: ["/images/profile.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

import { ThemeProvider } from "@/components/ThemeProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var theme = localStorage.getItem('theme');
                if (theme === 'light') {
                  document.documentElement.classList.remove('dark');
                  document.documentElement.classList.add('light');
                } else {
                  document.documentElement.classList.remove('light');
                  document.documentElement.classList.add('dark');
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body className="min-h-screen bg-[#040508] text-slate-100 antialiased selection:bg-violet-600 selection:text-white transition-colors duration-300">
        <ThemeProvider>
          <MotionEnhancer />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
