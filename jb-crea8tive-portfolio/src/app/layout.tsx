import type { Metadata } from "next";
import "./globals.css";
import PageTransition from "@/components/providers/PageTransition";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL("https://jbcrea8tive.vercel.app"),

  title: {
    default: siteConfig.seo.title,
    template: `%s | ${siteConfig.name}`,
  },

  description: siteConfig.seo.description,

  keywords: siteConfig.seo.keywords,

  authors: [
    {
      name: siteConfig.name,
    },
  ],

  creator: siteConfig.name,

  publisher: siteConfig.name,

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jbcrea8tive.vercel.app",
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    siteName: siteConfig.name,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-background text-foreground antialiased">
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
