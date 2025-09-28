import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/contexts/LanguageContext";

export const metadata: Metadata = {
  title: "DeductDD — 一键拍收据 · 轻松报税",
  description: "DeductDD：专为 1099 自雇人士打造的智能收据与费用管理。拍收据自动生成记录，年度流水号，Excel/PDF/CSV/照片ZIP一键导出。",
  icons: { icon: "/favicon.ico" },
  keywords: ["DeductDD","receipt","1099","tax","expense tracker","报税","自雇","收据"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body>
        <link rel="manifest" href="/site.webmanifest" />
        <LanguageProvider>
          <NavBar />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
