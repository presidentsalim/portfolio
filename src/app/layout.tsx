import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/layout/SmoothScroll";
import ScrollProgress from "@/components/layout/ScrollProgress";
import IntroLoader from "@/components/ui/IntroLoader";
import StyledComponentsRegistry from "@/lib/registry";
import { ThemeGlobalStyles } from "@/components/layout/ThemeStyles";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { OWNER } from "@/data/projects";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://salimpresident.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${OWNER.name} | Full-Stack Developer`,
    template: `%s | ${OWNER.name}`,
  },
  description: `${OWNER.name} is a Full-Stack Developer and MCA student at Uka Tarsadia University, Gujarat, India. Building scalable web applications, REST APIs, and responsive digital interfaces.`,
  keywords: [
    "Salim President",
    "Full-Stack Developer",
    "React",
    "Next.js",
    "Node.js",
    "ASP.NET Core",
    "Tailwind CSS",
    "Gujarat India Developer",
    "Uka Tarsadia University",
  ],
  authors: [{ name: OWNER.name, url: OWNER.github }],
  creator: OWNER.name,
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: `${OWNER.name} | Full-Stack Developer`,
    description: `Portfolio of ${OWNER.name}: Full-Stack Developer specializing in Next.js, React, Node.js, and ASP.NET Core applications.`,
    siteName: `${OWNER.name} Portfolio`,
    images: [
      {
        url: "/profile.jpg",
        width: 768,
        height: 1024,
        alt: `${OWNER.name} - Full-Stack Developer`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${OWNER.name} | Full-Stack Developer`,
    description: `Full-Stack Developer and MCA Student at Uka Tarsadia University, Gujarat, India.`,
    creator: "@PresidentSalim",
    images: ["/profile.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: OWNER.name,
    jobTitle: OWNER.role,
    url: siteUrl,
    image: `${siteUrl}/profile.jpg`,
    sameAs: [OWNER.github, OWNER.linkedin, OWNER.x, OWNER.instagram],
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Uka Tarsadia University",
    },
    address: {
      "@type": "PostalAddress",
      addressRegion: "Gujarat",
      addressCountry: "India",
    },
  };

  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} dark`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var s=localStorage.getItem('theme');var t=s||(window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'dark');if(t==='light'){document.documentElement.classList.remove('dark');document.documentElement.classList.add('light');}else{document.documentElement.classList.remove('light');document.documentElement.classList.add('dark');}}catch(e){}})();`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased bg-background text-foreground selection:bg-accent selection:text-[#0a0a0b]">
        {/* Skip to Content Link for Accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only fixed top-4 left-4 z-50 px-4 py-2 bg-accent text-[#0a0a0b] font-mono text-xs font-semibold rounded-md shadow-lg"
        >
          Skip to main content
        </a>

        {/* Global Progress Bar */}
        <ScrollProgress />

        {/* Intro Loader (Session-based) */}
        <IntroLoader />

        {/* Theme Context Provider */}
        <ThemeProvider>
          {/* Styled Components SSR Registry */}
          <StyledComponentsRegistry>
            <ThemeGlobalStyles />
            {/* Smooth Scroll Wrapper with Lenis */}
            <SmoothScroll>
              <div className="flex flex-col min-h-screen">
                <Navbar />
                <div className="flex-1">{children}</div>
                <Footer />
              </div>
            </SmoothScroll>
          </StyledComponentsRegistry>
        </ThemeProvider>
      </body>
    </html>
  );
}
