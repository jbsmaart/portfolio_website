import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JB crea8tive — Innovate. Create. Elevate.",
  description:
    "JB crea8tive is a creative design studio specialising in graphic design, branding, print design, and visual communication.",
  keywords: [
    "JB crea8tive",
    "graphic designer",
    "branding",
    "logo design",
    "print design",
    "social media design",
    "Nigeria",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}