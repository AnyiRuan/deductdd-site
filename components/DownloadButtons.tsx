"use client";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

export default function DownloadButtons() {
  const { t } = useLanguage();
  
  return (
    <div id="download" className="flex flex-col sm:flex-row items-center gap-4">
      <a className="btn btn-primary w-full sm:w-auto" href="#" aria-label="App Store">{t('download.ios')}</a>
      <a className="btn btn-outline w-full sm:w-auto" href="#" aria-label="Google Play">{t('download.android')}</a>
      <div className="text-xs text-neutral-500">* {t('download.coming')}</div>
    </div>
  );
}
