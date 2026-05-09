import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/theme/ThemeContext";
import MouseGlow from "@/components/MouseGlow";

export const metadata: Metadata = {
  title: {
    default: "Voxicore | Innovative Digital Solutions & Software Development",
    template: "%s | Voxicore"
  },
  description: "Voxicore delivers high-performance web development, mobile apps, and custom software solutions designed to accelerate business growth and digital transformation.",
  keywords: ["Software Development", "Web Development", "Mobile Apps", "UI/UX Design", "Voxicore", "Digital Transformation"],
  authors: [{ name: "Voxicore Team" }],
  creator: "Voxicore",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://voxicore.com",
    title: "Voxicore | Innovative Digital Solutions",
    description: "Empowering businesses through cutting-edge technology and intelligent digital experiences.",
    siteName: "Voxicore",
  },
  twitter: {
    card: "summary_large_image",
    title: "Voxicore | Innovative Digital Solutions",
    description: "Empowering businesses through cutting-edge technology and intelligent digital experiences.",
    creator: "@voxicore",
  },
  icons: {
    icon: "/images/favicon.png",
    shortcut: "/images/favicon.png",
    apple: "/images/favicon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <MouseGlow />
        <ThemeProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
