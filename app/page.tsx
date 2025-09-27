import { Camera, FileSpreadsheet, FileArchive, History, ShieldCheck } from "lucide-react";
import Section from "@/components/Section";
import DownloadButtons from "@/components/DownloadButtons";
import FeatureCard from "@/components/FeatureCard";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div>
      {/* Hero */}
      <section className="container-x py-16 sm:py-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
              一键拍收据，<br/>轻松报税无忧
            </h1>
            <p className="mt-4 text-lg text-neutral-700">
              DeductDD — 专为 1099 自雇人士打造的智能收据与费用管理助手。
              拍收据自动生成记录，年度流水号，支持 Excel / PDF / CSV 导出，收据还能打包 ZIP。
            </p>
            <div className="mt-8">
              <DownloadButtons />
            </div>
            <div className="mt-3 text-sm text-neutral-500">
              * 目前开放 iOS 申请，Android 版本准备中
            </div>
          </div>
          <div className="relative">
            <div className="relative mx-auto w-full max-w-md aspect-[10/19] rounded-[2rem] border border-neutral-200 overflow-hidden shadow-soft">
              <Image src="/app-icon.svg" alt="App preview" width={400} height={400} className="object-contain p-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Core features */}
      <Section title="核心卖点" subtitle="以“拍收据 + 流水号 + 导出”为核心能力，覆盖报税全流程。">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard icon={<Camera />} title="一键收据拍照"
            desc="拍下收据即生成记录并绑定流水号；仅拍照也会自动创建占位记录。" />
          <FeatureCard icon={<History />} title="年度统一流水号"
            desc="YYYY-00001 规范编号，避免重复与遗漏，便于稽核对账。" />
          <FeatureCard icon={<FileSpreadsheet />} title="Excel/PDF/CSV 导出"
            desc="一键导出给会计师或 IRS 申报，记录清晰可追溯。" />
          <FeatureCard icon={<FileArchive />} title="收据 ZIP 打包"
            desc="自动收集所选年份的所有收据并打包为 ZIP，含 README 说明。" />
        </div>
      </Section>

      {/* Pain & solution */}
      <Section title="常见痛点，我们来解决">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="rounded-2xl border p-6">
            <h3 className="font-semibold">收据太乱？</h3>
            <p className="mt-2 text-neutral-600">拍照即存自动归档，照片与记录双向关联。</p>
          </div>
          <div className="rounded-2xl border p-6">
            <h3 className="font-semibold">报税太难？</h3>
            <p className="mt-2 text-neutral-600">统一流水号 + 多格式导出，结构化清晰。</p>
          </div>
          <div className="rounded-2xl border p-6">
            <h3 className="font-semibold">录入低效？</h3>
            <p className="mt-2 text-neutral-600">历史建议智能排序，常用字段一键带入。</p>
          </div>
        </div>
      </Section>

      {/* Trust */}
      <Section title="安全与本地优先" subtitle="数据默认保存在本地，可按需导出至 iCloud/本地文件。">
        <div className="rounded-2xl border p-6 flex items-center gap-4">
          <ShieldCheck className="text-brand" />
          <p className="text-neutral-700">我们重视您的数据隐私与安全，仅在您主动导出时才会离开设备。</p>
        </div>
      </Section>

      {/* CTA */}
      <Section id="cta" title="立即下载 DeductDD">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 rounded-2xl border p-8">
          <div>
            <h3 className="text-2xl font-semibold">让报税更轻松，从现在开始</h3>
            <p className="mt-2 text-neutral-600">拍收据、管流水、出报表，一站式搞定。</p>
          </div>
          <DownloadButtons />
        </div>
        <div className="mt-6 text-sm text-neutral-500">
          沟通合作：<a className="underline" href="mailto:hello@deductdd.com">hello@deductdd.com</a>
        </div>
      </Section>
    </div>
  );
}
