"use client";
import { I18nProvider } from "@/lib/i18n";

export default function WhitepaperLayout({ children }: { children: React.ReactNode }) {
  return <I18nProvider>{children}</I18nProvider>;
}
