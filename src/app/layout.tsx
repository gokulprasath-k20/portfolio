import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Gokulprasath - Portfolio",
  description: "Full Stack Developer specializing in React, Next.js, and modern web technologies. View my projects, skills, and experience.",
  keywords: ["portfolio", "developer", "react", "nextjs", "typescript", "web development"],
  authors: [{ name: "Gokulprasath" }],
  creator: "Gokulprasath",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://gokulprasath-portfolio.com",
    title: "Gokulprasath - Portfolio",
    description: "Full Stack Developer Portfolio",
    siteName: "Gokulprasath Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gokulprasath - Portfolio",
    description: "Full Stack Developer Portfolio",
    creator: "@gokulprasath",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} font-sans antialiased min-h-screen portfolio-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
