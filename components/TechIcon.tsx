import React from "react";

interface TechIconProps {
  name: string;
  className?: string;
  size?: number;
}

export function TechIcon({ name, className = "w-5 h-5", size = 20 }: TechIconProps) {
  const normalized = name.toLowerCase().replace(/[^a-z0-9]/g, "");

  switch (normalized) {
    /* ─── React ─── */
    case "react":
    case "reactjs":
      return (
        <svg viewBox="-11.5 -10.23174 23 20.46348" width={size} height={size} className={className}>
          <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
          <g stroke="#61DAFB" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
      );

    /* ─── Next.js — NO mask/gradient IDs to avoid conflicts ─── */
    case "nextjs":
    case "next":
      return (
        <svg viewBox="0 0 180 180" width={size} height={size} className={className}>
          {/* Black circle background */}
          <circle cx="90" cy="90" r="90" fill="#000" />
          {/* White border ring */}
          <circle cx="90" cy="90" r="87" fill="none" stroke="#fff" strokeWidth="5" />
          {/* Left vertical bar of the N */}
          <rect x="54" y="54" width="12" height="72" fill="#fff" />
          {/* Diagonal stroke of the N */}
          <path d="M54 54L126 140V54h12v94.5L54 54z" fill="none" />
          <path d="M66 54L138 158" stroke="#fff" strokeWidth="12" strokeLinecap="round" />
          {/* Right vertical bar with fade — solid white */}
          <rect x="127" y="54" width="12" height="72" fill="url(#njs-fade)" />
          <defs>
            <linearGradient id="njs-fade" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#fff" stopOpacity="1" />
              <stop offset="100%" stopColor="#fff" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      );

    /* ─── TypeScript ─── */
    case "typescript":
    case "ts":
      return (
        <svg viewBox="0 0 256 256" width={size} height={size} className={className}>
          <rect width="256" height="256" rx="20" fill="#3178C6" />
          <path
            d="M150 130h-38v78H92V130H54V108h96v22zm74 44c0 9-3.5 16.5-10.5 22s-16.5 8.5-28.5 8.5c-8.5 0-16.5-1.5-24-4.5V180c7.5 3.5 14.5 5.5 21 5.5 5.5 0 9.5-1 12-3 2.5-2 3.5-4.5 3.5-7.5 0-3-1-5.5-3-8-2-2.5-6-5-12-7.5-10-4-16.5-8-20.5-12.5S158 136 158 127c0-8.5 3-15 9-20s14.5-7 25.5-7c7 0 14 1 21 3v18.5c-6.5-2.5-12.5-3.5-18-3.5-5 0-8.5 1-11 3-2.5 2-3.5 4.5-3.5 7.5 0 3 1 5.5 3 7.5s5.5 4 12 6c9 3.5 16 7 20 11 4 3.5 6 9 6 16z"
            fill="#fff"
          />
        </svg>
      );

    /* ─── JavaScript ─── */
    case "javascript":
    case "js":
      return (
        <svg viewBox="0 0 256 256" width={size} height={size} className={className}>
          <rect width="256" height="256" rx="20" fill="#F7DF1E" />
          <path
            d="M67 214l20-12c4 7 7 13 15 13 8 0 13-3 13-16V118h26v82c0 23-14 34-33 34-15 0-26-8-31-20zm98-3l19-11c6 9 13 16 23 16 10 0 16-5 16-12 0-8-7-12-18-17l-6-3c-18-8-31-18-31-38 0-19 14-33 37-33 16 0 28 5 36 19l-18 12c-4-7-9-10-18-10-8 0-13 5-13 11 0 8 5 11 16 16l6 3c22 9 33 19 33 39 0 23-17 35-40 35-22 0-37-11-45-27z"
            fill="#000"
          />
        </svg>
      );

    /* ─── Node.js — solid green hexagon with proper "node" wordmark style ─── */
    case "nodejs":
    case "node":
      return (
        <svg viewBox="0 0 448 512" width={size} height={size} className={className}>
          <path
            d="M224 508c-6.7 0-13.5-1.8-19.4-5.2l-61.7-36.5c-9.2-5.2-4.7-7-1.7-8 12.3-4.3 14.8-5.2 27.9-12.7 1.4-.8 3.2-.5 4.6.4l47.4 28.1c1.7 1 4.1 1 5.7 0l184.7-106.6c1.7-1 2.8-3 2.8-5V149.3c0-2.1-1.1-4-2.9-5.1L226.8 37.7c-1.7-1-4-1-5.7 0L36.6 144.3c-1.8 1.1-2.9 3-2.9 5.1v213.1c0 2 1.1 4 2.9 4.9l50.6 29.2c27.5 13.7 44.3-2.4 44.3-18.7V167.5c0-3 2.4-5.3 5.4-5.3h23.4c2.9 0 5.4 2.3 5.4 5.3V378c0 36.6-20 57.6-54.7 57.6-10.7 0-19.1 0-42.5-11.6l-48.4-27.9C8.3 389.2 .4 376.4 .4 362.5v-213c0-13.8 7.9-26.7 20.7-33.5l184.7-106.7c12.5-7.2 29.1-7.2 41.5 0l184.7 106.6c12.8 6.8 20.7 19.7 20.7 33.5v213.1c0 13.8-7.9 26.7-20.7 33.5L243.4 502.8c-5.9 3.4-12.6 5.2-19.4 5.2zm52.1-147.4c-80.9 0-97.8-37.2-97.8-68.4 0-3 2.4-5.3 5.4-5.3h23.9c2.7 0 4.9 1.9 5.4 4.5 3.7 25 14.6 37.5 63.3 37.5 38.9 0 55.5-8.8 55.5-29.4 0-11.9-4.7-20.7-65-26.6-50.4-5-81.5-16.1-81.5-56.4 0-37.2 31.3-59.3 83.8-59.3 58.9 0 88 20.4 91.7 64.3.1 1.5-.4 3-1.4 4.1-1 1.1-2.4 1.7-3.9 1.7h-24c-2.5 0-4.7-1.7-5.2-4.2-5.7-25.4-20.1-33.6-57.1-33.6-42.1 0-47 14.6-47 25.6 0 13.3 5.8 17.2 63.1 24.7 56.7 7.4 83.3 18 83.3 58 0 40.1-33.5 63.1-92.2 63.1z"
            fill="#5FA04E"
          />
        </svg>
      );

    /* ─── Express.js — dark square with clean "Ex" text mark ─── */
    case "express":
    case "expressjs":
      return (
        <svg viewBox="0 0 256 256" width={size} height={size} className={className}>
          <rect width="256" height="256" rx="20" fill="#18181B" />
          <text
            x="128"
            y="150"
            textAnchor="middle"
            fill="#ffffff"
            fontSize="72"
            fontWeight="700"
            fontFamily="system-ui, -apple-system, Helvetica, Arial, sans-serif"
            letterSpacing="-2"
          >
            Ex
          </text>
          <text
            x="128"
            y="196"
            textAnchor="middle"
            fill="#71717a"
            fontSize="26"
            fontWeight="400"
            fontFamily="system-ui, -apple-system, Helvetica, Arial, sans-serif"
            letterSpacing="4"
          >
            press
          </text>
        </svg>
      );

    /* ─── Tailwind CSS — official double-wave mark ─── */
    case "tailwind":
    case "tailwindcss":
      return (
        <svg viewBox="0 0 54 33" width={size} height={size} className={className}>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M27 0C19.8 0 15.3 3.6 13.5 10.8c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C30.744 12.663 33.39 15.42 39 15.42c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.514-3.522-2.004-5.147-3.653C35.256 2.757 32.61 0 27 0zM13.5 15.42C6.3 15.42 1.8 19.02 0 26.22c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C16.744 28.083 19.39 30.84 25 30.84c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.514-3.522-2.004-5.147-3.653C21.756 18.177 19.11 15.42 13.5 15.42z"
            fill="#38BDF8"
          />
        </svg>
      );

    /* ─── HTML5 ─── */
    case "html5":
    case "html":
      return (
        <svg viewBox="0 0 512 512" width={size} height={size} className={className}>
          <path d="M71 460L30 0h452l-41 460-185 52z" fill="#E44D26" />
          <path d="M256 472l149-41 35-391H256v432z" fill="#F16529" />
          <path
            d="M256 176h-60l-4-47h64V82H137l12 141h107v-47zm0 148l-1 1-52-14-3-38h-47l7 83 96 27v-59z"
            fill="#EBEBEB"
          />
          <path
            d="M256 176h60l-6 66h-54v47h50l-5 56-45 12v59l96-27 13-146 3-41 2-26H256v47z"
            fill="#FFFFFF"
          />
        </svg>
      );

    /* ─── CSS3 ─── */
    case "css3":
    case "css":
      return (
        <svg viewBox="0 0 512 512" width={size} height={size} className={className}>
          <path d="M71 460L30 0h452l-41 460-185 52z" fill="#1572B6" />
          <path d="M256 472l149-41 35-391H256v432z" fill="#33A9DC" />
          <path
            d="M256 176h-60l-4-47h64V82H137l12 141h107v-47zm0 148l-1 1-52-14-3-38h-47l7 83 96 27v-59z"
            fill="#EBEBEB"
          />
          <path
            d="M256 82v47h106l-4 47H256v47h98l-9 103-89 25v59l149-41 19-216 4-41 2-25H256z"
            fill="#FFFFFF"
          />
        </svg>
      );

    /* ─── MongoDB ─── */
    case "mongodb":
    case "mongo":
      return (
        <svg viewBox="0 0 256 549" width={size} height={size} className={className}>
          <path
            d="M177.6 231.4C163 161.1 128.5 54.6 125.3.9c0 0-2.7 17.4-13 33.2-16.5 25.5-62 96.3-69 158-6.5 57.8 20.4 109.4 59.3 136.1 2.4 1.5 4.3 4.5 3.5 7.2-2.7 9.8-5.4 25-3.5 47.5.5 5.2 4.6 8.5 9.6 8.1 4.1-.3 7.4-3.8 7.9-7.9 4.6-45 12.3-104.2 62.5-150.7-1.2-1-2.3-2-3.1-3 0 0 .4.1 1.1 1z"
            fill="#13AA52"
          />
          <path
            d="M131.5 382.5c-4.4-45-12.3-104.2-62.5-150.7 1.2-1 2.3-2 3.1-3C86.5 215.5 128.5 95 128.5.9c3.2 53.7 37.5 160.2 52.3 230.5.8 1 1.9 2 3.1 3-50.2 46.5-58.1 105.7-62.5 150.7-.4 4.1-3.8 7.6-7.9 7.9-4.9.3-9-3-9.5-8.1 0-.5.1-1 .1-1.5.5-5.3 4.4-8.6 9.4-8.1.6.1 1.2.2 1.8.4-2.8-9.8-5.5-25-.8-47.3z"
            fill="#116149"
          />
        </svg>
      );

    /* ─── Git ─── */
    case "git":
      return (
        <svg viewBox="0 0 256 256" width={size} height={size} className={className}>
          <path
            d="M249.2 115.6L140.4 6.8c-9.1-9.1-23.8-9.1-32.9 0L87.8 26.5l34.8 34.8c9.7-3.3 21 0 28.3 7.3 7.4 7.4 10.5 18.7 7.2 28.4l33.5 33.5c9.7-3.3 21 0 28.4 7.4 12.1 12.1 12.1 31.8 0 43.9s-31.8 12.1-43.9 0c-8.6-8.6-11.3-21.2-6.5-32.3l-31.2-31.2v69.9c2.7 1.8 5.2 4.1 7.3 6.3 12.1 12.1 12.1 31.8 0 43.9s-31.8 12.1-43.9 0-12.1-31.8 0-43.9c2.8-2.8 6.1-4.8 9.7-6.2v-71.1c-3.6-1.4-6.9-3.4-9.7-6.2-7.8-7.8-10.7-19.4-7.1-29.3L26.5 87.8 6.8 107.5c-9.1 9.1-9.1 23.8 0 32.9l108.8 108.8c9.1 9.1 23.8 9.1 32.9 0l100.7-100.7c9.1-9.1 9.1-23.8 0-32.9z"
            fill="#F05032"
          />
        </svg>
      );

    /* ─── GitHub ─── */
    case "github":
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="currentColor">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          />
        </svg>
      );

    /* ─── VS Code ─── */
    case "vscode":
      return (
        <svg viewBox="0 0 256 256" width={size} height={size} className={className}>
          <path
            d="M174.1 3.5c-4.4-2.1-9.7-1.7-13.8 1.1L84.8 59.8 45.4 29.5c-4.5-3.5-10.9-3.4-15.3.3l-24 20.6c-4.3 3.7-5.9 9.6-4 14.8L44.8 128 2.1 190.8c-1.9 5.2-.3 11.1 4 14.8l24 20.6c4.4 3.7 10.8 3.8 15.3.3l39.4-30.3 75.5 55.2c4.1 2.8 9.4 3.2 13.8 1.1 4.5-2.1 7.3-6.6 7.3-11.6V15.1c0-5-2.8-9.5-7.3-11.6zM153 194.2l-64.4-49.8 64.4-49.8v99.6z"
            fill="#007ACC"
          />
        </svg>
      );

    /* ─── REST API ─── */
    case "restapis":
    case "restapi":
    case "api":
      return (
        <svg viewBox="0 0 256 256" width={size} height={size} className={className}>
          <rect width="256" height="256" rx="20" fill="#1e1b4b" />
          <path d="M48 88h160M48 128h160M48 168h160" stroke="#a855f7" strokeWidth="14" strokeLinecap="round" />
          <circle cx="88" cy="88" r="18" fill="#06b6d4" />
          <circle cx="168" cy="128" r="18" fill="#8b5cf6" />
          <circle cx="108" cy="168" r="18" fill="#ec4899" />
        </svg>
      );

    /* ─── Default fallback ─── */
    default:
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" stroke="#818CF8" />
          <path d="M12 8v4l3 3" stroke="#A78BFA" />
        </svg>
      );
  }
}
