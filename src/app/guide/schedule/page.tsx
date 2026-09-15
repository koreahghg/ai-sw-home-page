import type { Metadata } from "next";
import { buildMetadata } from "@/shared/config/site";
import GuideSchedulePage from "@/views/guide-schedule/ui/GuideSchedulePage";

export const metadata: Metadata = buildMetadata({
  title: "전체 일정표",
  description: "2026 전남광주통합특별시교육청 AI미래교육박람회의 일자별·시간대별 프로그램 일정을 확인하세요.",
  path: "/guide/schedule",
});

export default function Page() {
  return <GuideSchedulePage />;
}
