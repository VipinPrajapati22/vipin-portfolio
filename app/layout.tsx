import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";

import { ThemeProvider } from "@/components/theme-provider";
import { profile } from "@/lib/portfolio-data";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vipin-portfolio.vercel.app"),
  title: {
    default: "VIPIN | B.Pharm Graduate and Data Analyst ",
    template: "%s | VIPIN"
  },
  description:
    "Premium portfolio for VIPIN, a B.Pharm student at JSS Academy of Technical Education, Noida, focused on Pharmacovigilance, regulatory affairs, Clinical Data Associate, and Data analyst roles.",
  keywords: [
    "VIPIN",
    "B.Pharm student",
    "pharmacy portfolio",
    "pharmacovigilance",
    "regulatory affairs",
    "pharmacology",
    "JSS Academy of Technical Education Noida"
  ],
  authors: [{ name: profile.name }],
  creator: profile.name,
  openGraph: {
    title: "VIPIN | B.Pharm Graduate and Data Analyst",
    description:
      "Recruiter-focused pharmacy portfolio showcasing education, skills, projects, achievements, and career goals.",
    url: "https://vipin-portfolio.vercel.app",
    siteName: "VIPIN Portfolio",
    images: [
      {
        url: "/assets/vipin-portrait.png",
        width: 1200,
        height: 1200,
        alt: "VIPIN professional portrait"
      }
    ],
    locale: "en_IN",
    type: "profile"
  },
  twitter: {
    card: "summary_large_image",
    title: "VIPIN | Pharmacy Portfolio",
    description:
      "B.Pharm Graduate focused on drug safety, regulatory affairs, and public healthcare.",
    images: ["/assets/vipin-portrait.png"]
  },
  alternates: {
    canonical: "/"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
