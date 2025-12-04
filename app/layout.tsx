import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Manrope } from "next/font/google"

const manrope = Manrope({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-manrope",
})

export const metadata: Metadata = {
  title: "NIRD - Numérique Inclusif, Responsable et Durable",
  description: "Application libre pour apprendre le reconditionnement, la sobriété numérique et l'inclusion. Compatible matériel ancien et Linux.",
  keywords: ["reconditionnement", "linux", "sobriété numérique", "inclusion", "logiciels libres", "open source"],
  authors: [{ name: "NIRD Community" }],
  themeColor: "#22c55e",
  manifest: "/manifest.json",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={`${manrope.className} antialiased flex flex-col min-h-screen`}
      >
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
