import type { Metadata } from "next";
import { Noto_Sans_SC, Noto_Serif_SC } from "next/font/google";
import "./globals.css";

const notoSans = Noto_Sans_SC({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const notoSerif = Noto_Serif_SC({
  variable: "--font-noto-serif",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Portfolio Wuxia - Mestre das Artes Digitais",
  description: "Portfolio oriental com devlog e demonstrações de projetos - Uma vitrina de habilidades em desenvolvimento web e design",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${notoSans.variable} ${notoSerif.variable} antialiased bg-gradient-to-br from-red-900 via-black to-red-800 text-white min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
