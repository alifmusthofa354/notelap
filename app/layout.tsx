import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import NavbarHeader from "@/components/ui/NavbarHeader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Notelap",
  description: "Latihan membuat note di Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/note.svg" type="image/svg+xml" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="bg-slate-300 min-h-svh">
          <NavbarHeader />
          <div className="px-6 pt-14 lg:px-8">
            <div className="mx-auto max-w-2xl py-8 sm:py-8 lg:py-16">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
