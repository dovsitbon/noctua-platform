import type { Metadata, Viewport } from "next";
import { Geist, Fraunces } from "next/font/google";
import AgeGate from "@/components/AgeGate";
import { site } from "@/data/site";
import "./globals.css";

const geist = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const fraunces = Fraunces({ variable: "--font-fraunces", subsets: ["latin"], weight: ["500"] });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} · Vidéos pour adultes`, template: `%s · ${site.name}` },
  description: site.tagline,
  // Étiquette « contenu adulte » lue par les filtres parentaux et les moteurs (RTA + rating).
  other: { rating: "adult", RATING: "RTA-5042-1996-1400-1577-RTA" },
};

export const viewport: Viewport = { themeColor: "#0f0e0d", colorScheme: "dark" };

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className={`${geist.variable} ${fraunces.variable} antialiased`}>
      <body className="flex min-h-dvh flex-col font-sans">
        <AgeGate />
        {children}
      </body>
    </html>
  );
}
