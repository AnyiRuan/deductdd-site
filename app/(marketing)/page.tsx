"use client";
import { Camera, FileSpreadsheet, FileArchive, History, ShieldCheck } from "lucide-react";
import Section from "@/components/Section";
import DownloadButtons from "@/components/DownloadButtons";
import FeatureCard from "@/components/FeatureCard";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Page() {
  const { t } = useLanguage();
  
  return (
    <div>
      {/* Hero */}
      <section className="container-x py-16 sm:py-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-gradient">
              {t('hero.title').split('\n').map((line, index) => (
                <span key={index}>
                  {line}
                  {index === 0 && <br />}
                </span>
              ))}
            </h1>
            <p className="mt-4 text-lg text-neutral-700">
              {t('hero.subtitle')}
            </p>
            <div className="mt-8">
              <DownloadButtons />
            </div>
            <div className="mt-3 text-sm text-neutral-500">
              {t('hero.note')}
            </div>
          </div>
          <div className="relative">
            <div className="relative mx-auto w-full max-w-md aspect-[10/19] rounded-[2rem] border border-neutral-200 overflow-hidden shadow-soft">
              <Image src="/logo.png" alt="App preview" width={400} height={400} className="object-contain p-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Core features */}
      <Section title={t('features.title')} subtitle={t('features.subtitle')}>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard icon={<Camera />} title={t('features.photo.title')}
            desc={t('features.photo.desc')} />
          <FeatureCard icon={<History />} title={t('features.serial.title')}
            desc={t('features.serial.desc')} />
          <FeatureCard icon={<FileSpreadsheet />} title={t('features.export.title')}
            desc={t('features.export.desc')} />
          <FeatureCard icon={<FileArchive />} title={t('features.zip.title')}
            desc={t('features.zip.desc')} />
        </div>
      </Section>

      {/* Pain & solution */}
      <Section title={t('pain.title')}>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="rounded-2xl border p-6">
            <h3 className="font-semibold">{t('pain.messy.title')}</h3>
            <p className="mt-2 text-neutral-600">{t('pain.messy.desc')}</p>
          </div>
          <div className="rounded-2xl border p-6">
            <h3 className="font-semibold">{t('pain.tax.title')}</h3>
            <p className="mt-2 text-neutral-600">{t('pain.tax.desc')}</p>
          </div>
          <div className="rounded-2xl border p-6">
            <h3 className="font-semibold">{t('pain.entry.title')}</h3>
            <p className="mt-2 text-neutral-600">{t('pain.entry.desc')}</p>
          </div>
        </div>
      </Section>

      {/* Trust */}
      <Section title={t('security.title')} subtitle={t('security.subtitle')}>
        <div className="rounded-2xl border p-6 flex items-center gap-4">
          <ShieldCheck className="text-brand" />
          <p className="text-neutral-700">{t('security.desc')}</p>
        </div>
      </Section>

      {/* CTA */}
      <Section id="cta" title={t('cta.title')}>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 rounded-2xl border p-8">
          <div>
            <h3 className="text-2xl font-semibold">{t('cta.subtitle')}</h3>
            <p className="mt-2 text-neutral-600">{t('cta.desc')}</p>
          </div>
          <DownloadButtons />
        </div>
        <div className="mt-6 text-sm text-neutral-500">
          {t('cta.contact')} <a className="underline" href="mailto:hello@deductdd.com">hello@deductdd.com</a>
        </div>
      </Section>
    </div>
  );
}
