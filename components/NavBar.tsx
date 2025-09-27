"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import clsx from "clsx";

const links = [
  { href: "/" as const, label: "首页" },
  { href: "/features" as const, label: "功能" },
  { href: "/faq" as const, label: "FAQ" },
  { href: "/blog" as const, label: "博客" },
];

export default function NavBar() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-neutral-100">
      <div className="container-x flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/app-icon.svg" width={28} height={28} alt="DeductDD" />
          <span className="font-semibold">DeductDD</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <Link key={l.href} href={l.href}
              className={clsx("text-sm hover:text-brand", pathname === l.href && "text-brand font-medium")}>
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link href="#download" className="btn btn-primary text-sm">立即下载</Link>
        </div>
      </div>
    </header>
  );
}
