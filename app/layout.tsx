import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/Layout/NavBar";
import Footer from "@/components/Layout/Footer";
import SmoothScrolling from "@/components/Utilities/SmoothScrolling";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    (process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com").replace(/\/$/, "")
  ),
  title: {
    default: "Antachia Olive Oil | Ethiopia",
    template: "%s | Antachia",
  },
  description:
    "Antachia produces premium olive oil in Ethiopia — crafted with care, rooted in tradition, and bottled for everyday use.",
  keywords: [
    "olive oil Ethiopia",
    "Ethiopian olive oil",
    "extra virgin olive oil Ethiopia",
    "cold pressed olive oil",
    "Antachia olive oil",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Antachia",
    title: "Antachia Olive Oil | Ethiopia",
    description:
      "Premium olive oil in Ethiopia — crafted with care, rooted in tradition.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Antachia Olive Oil | Ethiopia",
    description:
      "Premium olive oil in Ethiopia — crafted with care, rooted in tradition.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white relative`}
      >
        <SmoothScrolling>
          <NavBar />
          {children}
          <Footer />
        </SmoothScrolling>
        <Toaster
          position="top-center"
          richColors
          closeButton
          toastOptions={{
            className: "font-garamond-lt-narrow",
          }}
        />
      </body>
    </html>
  );
}
