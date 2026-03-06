"use client";

import { ChainLanding } from "@/components/ChainLanding";
import { I18nProvider } from "@/lib/i18n";

export default function Home() {
  return (
    <I18nProvider>
      <ChainLanding onLogin={() => window.location.href = "https://20022chain.com"} />
    </I18nProvider>
  );
}
