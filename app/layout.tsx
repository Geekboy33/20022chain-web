import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "20022Chain — ISO 20022 RWA Blockchain",
  description: "The world's first ISO 20022-native blockchain for institutional Real World Asset settlement.",
  metadataBase: new URL("https://20022chain.com"),
  openGraph: {
    title: "20022Chain — ISO 20022 RWA Blockchain",
    description: "The world's first ISO 20022-native blockchain for institutional Real World Asset settlement.",
    url: "https://20022chain.com",
    siteName: "20022Chain",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@20022chain",
    title: "20022Chain — ISO 20022 RWA Blockchain",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@300;400;500;600;700&family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body suppressHydrationWarning className="antialiased">
        {children}
      </body>
    </html>
  );
}
