import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { WhatsAppFloat } from "@/components/whatsapp-float";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://ubuntuafyalink.com'),
  title: "Ubuntu AfyaLink - Fix Faster. Deliver Faster. Save Lives.",
  description: "End-to-end solutions for healthcare facilities, pharmacies, and patients — all on one platform. Equipment maintenance, green energy, and patient booking solutions.",
  keywords: "healthcare, medical equipment, maintenance, green energy, Tanzania, healthcare technology",
  authors: [{ name: "Ubuntu AfyaLink" }],
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/images/logo.png", sizes: "192x192", type: "image/png" },
    ],
    shortcut: "/favicon.png",
    apple: "/images/logo.png",
  },
  openGraph: {
    title: "Ubuntu AfyaLink - Fix Faster. Deliver Faster. Save Lives.",
    description: "End-to-end solutions for healthcare facilities, pharmacies, and patients — all on one platform.",
    type: "website",
    locale: "en_US",
    siteName: "Ubuntu AfyaLink",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Ubuntu AfyaLink Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ubuntu AfyaLink - Fix Faster. Deliver Faster. Save Lives.",
    description: "End-to-end solutions for healthcare facilities, pharmacies, and patients — all on one platform.",
    images: ["/images/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakartaSans.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/images/logo.png" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
          <WhatsAppFloat />
        </div>
      </body>
    </html>
  );
}

