import type { Metadata } from "next";
import { buildMetadata } from "@/shared/config/site";
import ApplyTeacherTrainingPage from "@/views/apply-teacher-training/ui/ApplyTeacherTrainingPage";

export const metadata: Metadata = buildMetadata({
  title: "교사 연수 신청",
  description: "삼성·애플·구글 3개 세션 중 최대 2개까지 신청 가능합니다. 세션별 세부 일정은 추후 안내될 예정입니다.",
  path: "/apply/teacher-training",
});

export default function Page() {
  return <ApplyTeacherTrainingPage />;
}
