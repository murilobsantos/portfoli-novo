import type { Metadata } from "next";
import { Anton, Inter } from "next/font/google";
import "./globals.css";

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: ["400"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Murilo Santos — Tecelão de Interfaces",
  description: "Portfolio Wuxia Futurista - Mestre das Artes Digitais. O código deve ser como água — fluido, adaptável, cortando o caos com elegância.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${anton.variable} ${inter.variable} antialiased bg-black text-white min-h-screen overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
