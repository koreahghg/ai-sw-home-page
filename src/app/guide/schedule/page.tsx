import type { Metadata } from "next";
import { buildMetadata } from "@/shared/config/site";
import GuideSchedulePage from "@/views/guide-schedule/ui/GuideSchedulePage";

export const metadata: Metadata = buildMetadata({
  title: "전체 일정표",
  description: "2026 전남광주 AI·SW체험한마당의 일자별·시간대별 프로그램 일정을 확인하세요.",
  path: "/guide/schedule",
});

export default function Page() {
  return <GuideSchedulePage />;
}
