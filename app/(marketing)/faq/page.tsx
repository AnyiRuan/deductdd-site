import Section from "@/components/Section";

export default function FAQPage() {
  return (
    <div>
      <Section title="常见问题 FAQ">
        <div className="space-y-6">
          <div className="rounded-2xl border p-6">
            <h3 className="font-semibold">数据是否安全？</h3>
            <p className="mt-2 text-neutral-700">数据默认仅保存在本地，导出由您手动触发；可选择导出到 iCloud 或本地文件。</p>
          </div>
          <div className="rounded-2xl border p-6">
            <h3 className="font-semibold">支持哪些导出格式？</h3>
            <p className="mt-2 text-neutral-700">CSV / Excel / PDF / 照片 ZIP。</p>
          </div>
          <div className="rounded-2xl border p-6">
            <h3 className="font-semibold">换手机会丢数据吗？</h3>
            <p className="mt-2 text-neutral-700">建议在旧设备上导出数据文件后转移到新设备。</p>
          </div>
        </div>
      </Section>
    </div>
  );
}
