import type { Metadata } from "next";
import { buildMetadata } from "@/shared/config/site";
import GuideStatusPage from "@/views/guide-status/ui/GuideStatusPage";

export const metadata: Metadata = buildMetadata({
  title: "실시간 현황",
  description: "행사장 혼잡도, 주차 안내, 사전등록 현황을 실시간으로 확인하세요.",
  path: "/guide/status",
});

export default function Page() {
  return <GuideStatusPage />;
}
