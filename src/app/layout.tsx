import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ServiceWorkerRegister } from "@/components/ServiceWorkerRegister";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "DetteFacile — Reconnaissance de dette en 60 secondes",
  description:
    "Créez une reconnaissance de dette légale entre particuliers en moins d'une minute. Conforme au Code Civil français. Gratuit, privé, téléchargeable.",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "DetteFacile",
  },
};

export const viewport: Viewport = {
  themeColor: "#1A3D2B",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${instrumentSerif.variable} ${plusJakarta.variable} h-full`}
      data-scroll-behavior="smooth"
    >
      <head>
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
        <style>{`
          :root {
            --font-display: var(--font-instrument), Georgia, serif;
            --font-body: var(--font-jakarta), system-ui, sans-serif;
          }
          body { font-family: var(--font-body); }
        `}</style>
      </head>
      <body className="min-h-full antialiased">
        <ServiceWorkerRegister />
        {children}
      </body>
    </html>
  );
}
