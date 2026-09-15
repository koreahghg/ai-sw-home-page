import type { Metadata } from "next";
import { buildMetadata } from "@/shared/config/site";
import GuideOverviewPage from "@/views/guide-overview/ui/GuideOverviewPage";

export const metadata: Metadata = buildMetadata({
  title: "행사 개요",
  description: "행사 개요부터 오시는 길까지, 2026 전남광주통합특별시교육청 AI미래교육박람회의 모든 기본 정보를 확인하세요.",
  path: "/guide",
});

export default function Page() {
  return <GuideOverviewPage />;
}
