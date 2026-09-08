import type { Metadata } from "next";
import Script from "next/script";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { ScrollReset } from "@/components/ScrollReset";
import { site } from "@/data/site";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jimnguyen.dev"),
  title: `${site.name} — ${site.role}`,
  description: site.tagline,
  openGraph: {
    title: `${site.name} — ${site.role}`,
    description: site.tagline,
    url: "https://jimnguyen.dev",
    siteName: site.name,
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: `${site.name} — ${site.role}` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.role}`,
    description: site.tagline,
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen bg-bg text-text antialiased selection:bg-accent-500 selection:text-[#0f1319]">
        <Script id="reset-scroll-on-load" strategy="beforeInteractive">
          {`try{var navEntry=performance.getEntriesByType&&performance.getEntriesByType("navigation")[0];var isReload=navEntry?navEntry.type==="reload":(performance.navigation&&performance.navigation.type===1);if(isReload&&location.hash){history.replaceState(null,"",location.pathname+location.search)}}catch(e){}`}
        </Script>
        <ThemeProvider attribute="data-theme" defaultTheme="dark" enableSystem={false}>
          <ScrollReset />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
