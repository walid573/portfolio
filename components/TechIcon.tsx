import React from "react";

interface TechIconProps {
  name: string;
  className?: string;
  size?: number;
}

export function TechIcon({ name, className = "w-5 h-5", size = 20 }: TechIconProps) {
  const normalized = name.toLowerCase().replace(/[^a-z0-9]/g, "");

  switch (normalized) {
    case "react":
    case "reactjs":
      return (
        <svg
          viewBox="-11.5 -10.23174 23 20.46348"
          width={size}
          height={size}
          className={className}
          fill="none"
        >
          <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
          <g stroke="#61DAFB" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
      );

    case "nextjs":
    case "next":
      return (
        <svg viewBox="0 0 180 180" width={size} height={size} className={className} fill="none">
          <mask height="180" id="mask-next" maskUnits="userSpaceOnUse" width="180" x="0" y="0">
            <circle cx="90" cy="90" fill="#000" r="90" />
          </mask>
          <g mask="url(#mask-next)">
            <circle cx="90" cy="90" fill="#000" r="90" stroke="#fff" strokeWidth="6" />
            <path
              d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z"
              fill="url(#paint0_linear)"
            />
            <rect fill="url(#paint1_linear)" height="72" width="12" x="115" y="54" />
          </g>
          <defs>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear"
              x1="109"
              x2="144.5"
              y1="116.5"
              y2="160.5"
            >
              <stop stopColor="#fff" />
              <stop offset="1" stopColor="#fff" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint1_linear"
              x1="121"
              x2="120.799"
              y1="54"
              y2="106.875"
            >
              <stop stopColor="#fff" />
              <stop offset="1" stopColor="#fff" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      );

    case "typescript":
    case "ts":
      return (
        <svg viewBox="0 0 256 256" width={size} height={size} className={className}>
          <rect width="256" height="256" rx="36" fill="#3178C6" />
          <path
            d="M148.97 122.92h-40.45v84.34H88.35v-84.34H47.9V104.4h101.07v18.52zm86.96 46.5c0 10.97-4.14 19.53-12.42 25.68-8.28 6.15-19.46 9.22-33.55 9.22-9.74 0-19.26-1.57-28.56-4.71v-20.24c9.19 4.14 18.06 6.21 26.61 6.21 7.4 0 13.06-1.42 16.98-4.26 3.92-2.84 5.88-6.91 5.88-12.21 0-4.63-1.62-8.35-4.86-11.16-3.24-2.81-8.74-5.74-16.5-8.79-11.44-4.5-19.68-9.45-24.72-14.85-5.04-5.4-7.56-12.56-7.56-21.48 0-10.16 3.97-18.17 11.91-24.03 7.94-5.86 18.42-8.79 31.44-8.79 8.65 0 17.06 1.34 25.23 4.02v19.43c-8.03-3.2-16.03-4.8-24-4.8-6.52 0-11.55 1.3-15.09 3.9-3.54 2.6-5.31 6.29-5.31 11.07 0 4.15 1.5 7.47 4.5 9.96 3 2.49 8.24 5.15 15.72 7.98 11.56 4.38 19.98 9.32 25.26 14.82 5.28 5.5 7.92 12.83 7.92 21.99z"
            fill="#ffffff"
          />
        </svg>
      );

    case "javascript":
    case "js":
      return (
        <svg viewBox="0 0 256 256" width={size} height={size} className={className}>
          <rect width="256" height="256" rx="36" fill="#F7DF1E" />
          <path
            d="M67.312 213.932l19.59-11.856c3.78 6.701 7.218 12.371 15.465 12.371 7.905 0 12.89-3.094 12.89-15.12v-81.798H140.2v82.141c0 23.37-13.748 33.682-32.994 33.682-14.779 0-25.776-7.561-30.932-19.42h.038zm97.778-2.612l19.418-11.341c5.671 9.279 13.06 16.153 23.37 16.153 9.795 0 16.153-5.157 16.153-12.372 0-8.592-6.874-11.685-18.387-16.669l-6.357-2.75c-18.388-7.733-30.588-17.528-30.588-38.148 0-18.903 14.434-33.167 36.945-33.167 16.154 0 27.667 5.5 35.572 19.42l-18.043 11.513c-4.125-7.218-8.592-10.139-17.529-10.139-8.077 0-13.403 5.157-13.403 11.341 0 7.906 5.157 11.001 16.326 15.81l6.357 2.75c21.824 9.279 33.168 18.904 33.168 39.524 0 22.511-17.528 34.712-39.866 34.712-22.167 0-36.43-11.001-44.587-26.636z"
            fill="#000000"
          />
        </svg>
      );

    case "nodejs":
    case "node":
      return (
        <svg viewBox="0 0 256 288" width={size} height={size} className={className}>
          <path
            d="M128 0L9 68.6v150.8L128 288l119-68.6V68.6L128 0zm97.7 206.5L128 262.8l-97.7-56.3V94.2L128 37.9l97.7 56.3v112.3z"
            fill="#5FA04E"
          />
          <path
            d="M128 65.5L46.4 112.6v94.2L128 254l81.6-47.2v-94.2L128 65.5zm61.2 122.5L128 223.1l-61.2-35.1v-70.2L128 82.7l61.2 35.1v70.2z"
            fill="#83CD29"
          />
        </svg>
      );

    case "express":
    case "expressjs":
      return (
        <svg viewBox="0 0 256 256" width={size} height={size} className={className}>
          <rect width="256" height="256" rx="36" fill="#18181b" />
          <path
            d="M48 128c0-44.183 35.817-80 80-80s80 35.817 80 80-35.817 80-80 80-80-35.817-80-80z"
            fill="none"
            stroke="#ffffff"
            strokeWidth="12"
            strokeDasharray="4 8"
            opacity="0.3"
          />
          <text
            x="128"
            y="142"
            textAnchor="middle"
            fill="#ffffff"
            fontSize="46"
            fontWeight="800"
            fontFamily="system-ui, -apple-system, sans-serif"
            letterSpacing="-1px"
          >
            express
          </text>
          <text
            x="128"
            y="178"
            textAnchor="middle"
            fill="#8b5cf6"
            fontSize="18"
            fontWeight="700"
            fontFamily="monospace"
          >
            .JS
          </text>
        </svg>
      );

    case "tailwind":
    case "tailwindcss":
      return (
        <svg viewBox="0 0 256 154" width={size} height={size} className={className}>
          <path
            d="M128 0C93.867 0 72.533 17.067 64 51.2 76.8 34.133 91.733 27.733 108.8 32c9.736 2.434 16.697 9.499 24.401 17.318C145.753 62.001 161.43 77.867 192 77.867c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.736-2.434-16.697-9.499-24.401-17.318C174.247 15.866 158.57 0 128 0zM64 76.8C29.867 76.8 8.533 93.867 0 128c12.8-17.067 27.733-23.467 44.8-19.2 9.736 2.434 16.697 9.499 24.401 17.318C81.753 138.801 97.43 154.667 128 154.667c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.736-2.434-16.697-9.499-24.401-17.318C110.247 92.666 94.57 76.8 64 76.8z"
            fill="#38BDF8"
          />
        </svg>
      );

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

    case "mongodb":
    case "mongo":
      return (
        <svg viewBox="0 0 256 550" width={size} height={size} className={className}>
          {/* Official MongoDB Leaf */}
          <path
            d="M127.5 0C127.5 0 35.7 122.3 35.7 268.2c0 102.7 63.6 195.3 91.8 245.9 2.4 4.3 6.9 7 11.9 7 5 0 9.5-2.7 11.9-7 28.2-50.6 91.8-143.2 91.8-245.9C243.1 122.3 127.5 0 127.5 0z"
            fill="#13AA52"
          />
          <path
            d="M127.5 0v521.1c5 0 9.5-2.7 11.9-7 28.2-50.6 91.8-143.2 91.8-245.9C231.2 122.3 127.5 0 127.5 0z"
            fill="#116149"
          />
          <path
            d="M127.5 448.2c-1.3 0-2.6-.5-3.6-1.5-12.7-12.8-59.5-64.7-59.5-168.1 0-77.9 44.5-144.1 63.1-168.1v337.7z"
            fill="#FFFFFF"
            opacity="0.35"
          />
        </svg>
      );

    case "git":
      return (
        <svg viewBox="0 0 256 256" width={size} height={size} className={className}>
          <path
            d="M249.2 115.6L140.4 6.8c-9.1-9.1-23.8-9.1-32.9 0L87.8 26.5l34.8 34.8c9.7-3.3 21 0 28.3 7.3 7.4 7.4 10.5 18.7 7.2 28.4l33.5 33.5c9.7-3.3 21 0 28.4 7.4 12.1 12.1 12.1 31.8 0 43.9s-31.8 12.1-43.9 0c-8.6-8.6-11.3-21.2-6.5-32.3l-31.2-31.2v69.9c2.7 1.8 5.2 4.1 7.3 6.3 12.1 12.1 12.1 31.8 0 43.9s-31.8 12.1-43.9 0-12.1-31.8 0-43.9c2.8-2.8 6.1-4.8 9.7-6.2v-71.1c-3.6-1.4-6.9-3.4-9.7-6.2-7.8-7.8-10.7-19.4-7.1-29.3L26.5 87.8 6.8 107.5c-9.1 9.1-9.1 23.8 0 32.9l108.8 108.8c9.1 9.1 23.8 9.1 32.9 0l100.7-100.7c9.1-9.1 9.1-23.8 0-32.9z"
            fill="#F05032"
          />
        </svg>
      );

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

    case "vscode":
      return (
        <svg viewBox="0 0 256 256" width={size} height={size} className={className}>
          <path
            d="M174.1 3.5c-4.4-2.1-9.7-1.7-13.8 1.1L84.8 59.8 45.4 29.5c-4.5-3.5-10.9-3.4-15.3.3l-24 20.6c-4.3 3.7-5.9 9.6-4 14.8L44.8 128 2.1 190.8c-1.9 5.2-.3 11.1 4 14.8l24 20.6c4.4 3.7 10.8 3.8 15.3.3l39.4-30.3 75.5 55.2c4.1 2.8 9.4 3.2 13.8 1.1 4.5-2.1 7.3-6.6 7.3-11.6V15.1c0-5-2.8-9.5-7.3-11.6zM153 194.2l-64.4-49.8 64.4-49.8v99.6z"
            fill="#007ACC"
          />
        </svg>
      );

    case "restapis":
    case "restapi":
    case "api":
      return (
        <svg viewBox="0 0 256 256" width={size} height={size} className={className}>
          <rect width="256" height="256" rx="36" fill="#1e1b4b" />
          <path
            d="M58 88h140M58 128h140M58 168h140"
            stroke="#a855f7"
            strokeWidth="12"
            strokeLinecap="round"
          />
          <circle cx="98" cy="88" r="16" fill="#06b6d4" />
          <circle cx="158" cy="128" r="16" fill="#8b5cf6" />
          <circle cx="118" cy="168" r="16" fill="#ec4899" />
        </svg>
      );

    default:
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" stroke="#818CF8" />
          <path d="M12 6v6l4 2" stroke="#A78BFA" />
        </svg>
      );
  }
}
