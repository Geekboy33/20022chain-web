import type { Metadata } from "next";
import "./globals.css";

const SITE_URL = "https://20022chain.com";
const TITLE = "20022Chain — The RWA Settlement Blockchain";
const DESC = "The world's first blockchain built for institutional Real World Asset tokenization and settlement. 50K+ TPS, instant finality, 128 validators, cross-chain bridges.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s | 20022Chain",
  },
  description: DESC,
  keywords: [
    "20022Chain", "blockchain", "RWA", "Real World Assets", "tokenization",
    "settlement", "institutional", "mining", "gold", "lithium",
    "real estate", "bonds", "gemstones", "ISIN", "ViewsRight",
    "smart contracts", "cross-chain", "bridge", "DeFi", "staking",
    "proof of stake", "fintech", "digital assets", "ARCHT",
    "cryptocurrency", "web3", "decentralized finance",
  ],
  authors: [{ name: "20022Chain", url: SITE_URL }],
  creator: "20022Chain",
  publisher: "20022Chain",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "20022Chain",
    title: TITLE,
    description: DESC,
    images: [
      {
        url: `${SITE_URL}/og.svg`,
        width: 1200,
        height: 630,
        alt: "20022Chain — The RWA Settlement Blockchain",
        type: "image/svg+xml",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@20022chain",
    creator: "@20022chain",
    title: TITLE,
    description: DESC,
    images: [`${SITE_URL}/og.svg`],
  },
  alternates: {
    canonical: SITE_URL,
    languages: {
      "en": SITE_URL,
      "es": `${SITE_URL}?lang=es`,
      "pt": `${SITE_URL}?lang=pt`,
      "fr": `${SITE_URL}?lang=fr`,
      "ru": `${SITE_URL}?lang=ru`,
      "zh": `${SITE_URL}?lang=zh`,
      "ar": `${SITE_URL}?lang=ar`,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  category: "technology",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "20022Chain",
    url: SITE_URL,
    description: DESC,
    applicationCategory: "BlockchainApplication",
    operatingSystem: "Web",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    creator: { "@type": "Organization", name: "20022Chain", url: SITE_URL },
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@300;400;500;600;700&family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body suppressHydrationWarning className="antialiased">
        {children}
      </body>
    </html>
  );
}
