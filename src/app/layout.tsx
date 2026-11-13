import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";

export const metadata: Metadata = {
  title: "The AI Jungle Experience | Executive Strategy & Digital Graphic Novels",
  description: "An immersive storytelling universe uniting Fortune 500 AI strategy, the Council of 10 Animal Archetypes, the 13-Chapter Safari Transformation, and prestige digital comics.",
  keywords: ["AI Strategy", "Enterprise Transformation", "Graphic Novel", "Podcast", "Council of 10", "The AI Jungle", "Dr. Amit Khandelwal"],
  authors: [{ name: "Dr. Amit Khandelwal" }],
  openGraph: {
    title: "The AI Jungle Experience",
    description: "Think Strategically. Then Let AI Roar. Where Business Meets Artificial Intelligence.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Cinzel:wght@500;600;700;800&family=Inter:wght@300;400;500;600;700&family=Newsreader:ital,opsz,wght@0,6..72,400..700;1,6..72,400..700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background text-editorial-light min-h-screen flex flex-col antialiased selection:bg-primary selection:text-background">
        <Navbar />
        <main className="flex-1 w-full pt-16 md:pt-[98px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
