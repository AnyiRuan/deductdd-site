"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import clsx from "clsx";

const links = [
  { href: "/", label: "首页" },
  { href: "/features", label: "功能" },
  { href: "/faq", label: "FAQ" },
  { href: "/blog", label: "博客" },
];

export default function NavBar() {
  const pathname = usePathname();
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
