import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Navigation/Nav";
import Footer from "@/components/Footer/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--montserrat",
  weight: ["400", "500", "600", "700", "800", "900"],
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--inter",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Boost Web",
  description:
    "We're taking your digital strategy to the next level, together. Website Design, Development, Marketing and SEO.",
  openGraph: {
    type: "website",
    title: "Boost Web",
    description:
      "We're taking your digital strategy to the next level, together. Website Design, Development, Marketing and SEO. #WebsiteAgency #WebDesignAgency",
    url: "https://boostweb.io",
  },
  keywords:
    "Website Development Design SEO BarberShopWebsiteAgency AcommodationsWebsiteAgency ApartmentsWebsiteAgency RestaurantsWebsiteAgency Marketing",
  metadataBase: new URL("https://acme.com"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      "de-DE": "/de-DE",
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
      <body
        className={`bg-black ${montserrat.variable} ${inter.variable} font-sans`}
      >
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
