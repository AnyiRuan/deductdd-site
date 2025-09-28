"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import clsx from "clsx";
import { useLanguage } from "@/contexts/LanguageContext";
import { Globe } from "lucide-react";

const links = [
  { href: "/", labelKey: "nav.home" },
  { href: "/features", labelKey: "nav.features" },
  { href: "/faq", labelKey: "nav.faq" },
  { href: "/blog", labelKey: "nav.blog" },
] as const;

export default function NavBar() {
  const pathname = usePathname();
  const { language, setLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'zh' : 'en');
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-neutral-100">
      <div className="container-x flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" width={30} height={30} alt="DeductDD" />
          <span className="font-semibold">DeductDD</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <Link key={l.href} href={l.href}
              className={clsx("text-sm hover:text-brand", pathname === l.href && "text-brand font-medium")}>
              {t(l.labelKey)}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1 px-2 py-1 text-sm text-neutral-600 hover:text-brand transition-colors"
            aria-label="Toggle language"
          >
            <Globe size={16} />
            <span className="font-medium">{language === 'en' ? 'EN' : '中'}</span>
          </button>
          <Link href="#download" className="btn btn-primary text-sm">{t('nav.download')}</Link>
        </div>
      </div>
    </header>
  );
}
