import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import Header from "@/widgets/header/ui/Header";
import Footer from "@/widgets/footer/ui/Footer";
import ScrollToTopButton from "@/widgets/scroll-to-top/ui/ScrollToTopButton";

const notoSansKr = Noto_Sans_KR({
  variable: "--font-noto-kr",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "2026 전남광주 AI·SW체험한마당",
  description: "학생·학부모와 교원을 위한 2026 전남광주 AI·SW체험한마당 공식 홈페이지 - 체험 부스, AI·SW 골든벨, 교사 연수, 미래교육 특강 사전신청 안내",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ko" className={`${notoSansKr.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <ScrollToTopButton />
      </body>
    </html>
  );
}
