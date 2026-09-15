import type { Metadata } from "next";
import { buildMetadata } from "@/shared/config/site";
import ApplyAiTourPage from "@/views/apply-ai-tour/ui/ApplyAiTourPage";

export const metadata: Metadata = buildMetadata({
  title: "AI교육원 탐방 (오디세이 투어) 신청",
  description:
    "실제 AI교육원 시설을 둘러보는 견학 프로그램입니다. 10.31(토) 3개 회차, 회차별 2팀·팀당 8명 한정으로 조기 마감될 수 있습니다.",
  path: "/apply/ai-tour",
});

export default function Page() {
  return <ApplyAiTourPage />;
}
