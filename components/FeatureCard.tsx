import { ReactNode } from "react";

export default function FeatureCard({ icon, title, desc }:{ icon: ReactNode; title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-neutral-200 p-6 hover:shadow-soft transition">
      <div className="text-brand">{icon}</div>
      <h3 className="mt-3 text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-neutral-600">{desc}</p>
    </div>
  );
}
