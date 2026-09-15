import type { Metadata } from "next";
import { buildMetadata } from "@/shared/config/site";
import StudentsAiTourPage from "@/views/students-ai-tour/ui/StudentsAiTourPage";

export const metadata: Metadata = buildMetadata({
  title: "AI교육원 탐방 (오디세이 투어)",
  description: "실제 AI교육원 시설을 둘러보는 견학 프로그램입니다. 10.31(토) 3개 회차로 운영되며 회차별 2팀, 팀당 8명 한정입니다.",
  path: "/students/ai-tour",
});

export default function Page() {
  return <StudentsAiTourPage />;
}
