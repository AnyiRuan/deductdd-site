import Section from "@/components/Section";

export default function FeaturesPage() {
  return (
    <div>
      <Section title="功能总览" subtitle="覆盖 Trip / Reception / Office / Others / Summary 全流程">
        <div className="prose max-w-none">
          <h3>Trip（差旅）</h3>
          <ul>
            <li>字段：日期、起点、终点、里程、备注</li>
            <li>历史建议：起点/终点/备注 Top-5 频率排序</li>
            <li>收据照片：拍照/相册选图/缩略图/删除</li>
          </ul>
          <h3>Reception（接待）</h3>
          <ul>
            <li>字段：日期、客户、地点、金额、备注</li>
            <li>历史建议：客户/地点 Top-5</li>
            <li>收据照片：同 Trip</li>
          </ul>
          <h3>Office / Others（办公 / 其他）</h3>
          <ul>
            <li>字段：日期、描述、金额、备注</li>
            <li>收据照片：同上</li>
          </ul>
          <h3>Summary（汇总）</h3>
          <ul>
            <li>年度切换（如 2024/2025），记录倒序展示</li>
            <li>导出 CSV / Excel / PDF，照片 ZIP</li>
            <li>导出后可选删除本地旧年数据</li>
          </ul>
          <h3>统一流水号</h3>
          <ul>
            <li>格式：YYYY-00001，保存时占号，预览下一号</li>
            <li>编辑推进：手动输入更大号位会推进计数器防冲突</li>
          </ul>
        </div>
      </Section>
    </div>
  );
}
