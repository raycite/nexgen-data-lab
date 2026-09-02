import type { Metadata } from "next";
import { Bricolage_Grotesque, Newsreader } from "next/font/google";
import RouteTransition from "@/components/RouteTransition";
import { getSiteUrl, siteDescription, siteName } from "@/lib/site";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: getSiteUrl(),
  title: {
    default: "NextGen Data Lab | AI, Data Science & Research",
    template: "%s | NextGen Data Lab",
  },
  description: siteDescription,
  applicationName: siteName,
  authors: [{ name: "NextGen Data Lab" }],
  creator: "NextGen Data Lab",
  publisher: "NextGen Data Lab",
  keywords: ["artificial intelligence", "data science", "machine learning", "mathematics", "Python", "African datasets", "research", "mentorship", "Ghana"],
  openGraph: {
    type: "website",
    locale: "en_GH",
    url: "/",
    siteName,
    title: "NextGen Data Lab | AI, Data Science & Research",
    description: siteDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: "NextGen Data Lab | AI, Data Science & Research",
    description: siteDescription,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteName,
    url: getSiteUrl().toString(),
    description: siteDescription,
    founder: { "@type": "Person", name: "Raymond Ntow" },
    email: "nextgendatalab@gmail.com",
    telephone: "+233559633286",
    sameAs: ["https://www.linkedin.com/company/nextgen-data-lab/", "https://github.com/raycite"],
  };

  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${newsreader.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <a href="#main-content" className="fixed left-4 top-3 z-[100] -translate-y-20 rounded-lg bg-white px-4 py-3 font-semibold text-[#00102B] shadow-xl transition focus:translate-y-0">Skip to main content</a>
        <RouteTransition>{children}</RouteTransition>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData).replace(/</g, "\\u003c") }} />
      </body>
    </html>
  );
}
