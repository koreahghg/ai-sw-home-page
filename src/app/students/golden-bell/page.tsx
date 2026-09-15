import type { Metadata } from "next";
import { buildMetadata } from "@/shared/config/site";
import StudentsGoldenBellPage from "@/views/students-golden-bell/ui/StudentsGoldenBellPage";

export const metadata: Metadata = buildMetadata({
  title: "AI·SW 골든벨",
  description: "초등부 · 중등부로 나누어 진행되는 퀴즈 배틀. 우승팀에게는 상품이 제공됩니다.",
  path: "/students/golden-bell",
});

export default function Page() {
  return <StudentsGoldenBellPage />;
}
