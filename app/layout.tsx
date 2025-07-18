import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NavHeader } from "@/components/NavHeader";
import { Footer } from "@/components/Footer";
import { PackageProvider } from "@/components/PackageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rio Travels India",
  description:
    "Discover curated travel experiences across India with Rio Travels India. Book your next adventure today!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="bg-white text-black dark:bg-gray-900 dark:text-white"
    >
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen antialiased`}
      >
        <PackageProvider>
          <NavHeader />
          {children}
          <Footer />
        </PackageProvider>
      </body>
    </html>
  );
}
