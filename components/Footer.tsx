"use client";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  
  return (
    <footer className="mt-20 border-t border-neutral-100">
      <div className="container-x py-10 text-sm text-neutral-500">
        <div className="flex flex-col md:flex-row justify-between gap-4">
          <p>{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
}
