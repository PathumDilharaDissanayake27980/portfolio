import type { Metadata } from "next";
import { Archivo, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import NextAuthSessionProvider from "@/components/SessionProvider";
import ParticleBackground from "@/components/ParticleBackground";
import GlobalAurora from "@/components/GlobalAurora";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Pathum Dilhara Dissanayake | Computer Engineer & AI/ML Researcher",
  description:
    "Portfolio of Pathum Dilhara Dissanayake — Computer Engineering undergraduate at University of Peradeniya, Sri Lanka. Specializing in AI/ML, Wi-Fi 7 security research, embedded systems, and full-stack development. GPA 3.79/4.0.",
  keywords: [
    "Pathum Dilhara",
    "Pathum Dilhara Dissanayake",
    "computer engineer Sri Lanka",
    "University of Peradeniya",
    "AI ML engineer",
    "Wi-Fi 7 security research",
    "embedded systems developer",
    "full stack developer Sri Lanka",
    "machine learning portfolio",
    "software engineer portfolio",
    "CardioGuard",
    "Wi-Fi 7 MLO security",
  ],
  authors: [{ name: "Pathum Dilhara Dissanayake" }],
  creator: "Pathum Dilhara Dissanayake",
  robots: { index: true, follow: true },
  openGraph: {
    title: "Pathum Dilhara | Computer Engineer & AI/ML Researcher",
    description:
      "Computer Engineering undergraduate at University of Peradeniya, Sri Lanka. Researching Wi-Fi 7 security, building AI-driven systems, GPA 3.79/4.0.",
    type: "website",
    locale: "en_US",
    siteName: "Pathum Dilhara Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pathum Dilhara | Computer Engineer",
    description:
      "Computer Engineering undergraduate at University of Peradeniya. AI/ML, Wi-Fi 7 security research, embedded systems.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${spaceGrotesk.variable}`}
      suppressHydrationWarning
    >
      <body className="flex flex-col min-h-screen">
        <GlobalAurora />
        <ParticleBackground />
        <NextAuthSessionProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={false}
          >
            <div className="relative flex flex-col min-h-screen" style={{ zIndex: 2 }}>
              <Navbar />
              <main className="flex-grow">{children}</main>
              <Footer />
            </div>
          </ThemeProvider>
        </NextAuthSessionProvider>
      </body>
    </html>
  );
}
