import { ReactNode } from "react";

export default function Section({ id, title, subtitle, children }:{ id?: string; title: string; subtitle?: string; children: ReactNode }) {
  return (
    <section id={id} className="container-x py-16">
      <div className="max-w-2xl mb-8">
        <h2 className="text-3xl font-bold">{title}</h2>
        {subtitle && <p className="mt-3 text-neutral-600">{subtitle}</p>}
      </div>
      {children}
    </section>
  );
}
