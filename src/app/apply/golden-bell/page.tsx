import type { Metadata } from "next";
import { buildMetadata } from "@/shared/config/site";
import ApplyGoldenBellPage from "@/views/apply-golden-bell/ui/ApplyGoldenBellPage";

export const metadata: Metadata = buildMetadata({
  title: "AI·SW 골든벨 신청",
  description: "초등부와 중등부로 나누어 진행됩니다. 참가 대상에 맞게 정보를 입력해 주세요.",
  path: "/apply/golden-bell",
});

export default function Page() {
  return <ApplyGoldenBellPage />;
}
