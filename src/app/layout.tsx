import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta" });

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "Krushnkrupa Exporters | India's Finest Agricultural Exports",
    template: "%s | Krushnkrupa Exporters",
  },
  description: "Premier global trade corridor for India's finest agricultural products. Exporting Spices, Pulses, Mangoes, and more with precision and quality.",
  keywords: ["export", "india", "agricultural exports", "spices export", "mango export", "krushnkrupa", "global trade"],
  authors: [{ name: "Krushnkrupa Exporters" }],
  creator: "Krushnkrupa Exporters",
  publisher: "Krushnkrupa Exporters",
  metadataBase: new URL("https://krushnkrupa.com"),
  manifest: "/manifest.json",
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://krushnkrupa.com",
    siteName: "Krushnkrupa Exporters",
    title: "Krushnkrupa Exporters | Global Trade Alliance",
    description: "Superior quality agricultural exports from India to the world. Direct farmer connect and certified quality protocols.",
    images: [
      {
        url: "/assets/og-image.png",
        width: 1200,
        height: 630,
        alt: "Krushnkrupa Exporters - Global Trade",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Krushnkrupa Exporters | India's Finest Exports",
    description: "Exporting premium Spices, Grains, and Fruits globally.",
    images: ["/assets/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${jakarta.variable} antialiased min-h-screen flex flex-col font-sans bg-primary selection:bg-accent selection:text-primary`}>
        <GoogleAnalytics />
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />

        {/* Floating WhatsApp Button */}
        <a
          href="https://wa.me/919537110250"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-8 right-8 bg-[#25D366] text-white w-16 h-16 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform z-50 animate-bounce-slow border border-white/20"
          aria-label="Contact on WhatsApp"
        >
          <svg className="w-9 h-9" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824z"></path>
          </svg>
        </a>
      </body>
    </html>
  );
}
