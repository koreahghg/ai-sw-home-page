import type { Metadata } from "next";
import { buildMetadata } from "@/shared/config/site";
import TeachersTrainingPage from "@/views/teachers-training/ui/TeachersTrainingPage";

export const metadata: Metadata = buildMetadata({
  title: "교사 연수",
  description: "현직 교원을 위한 연수 프로그램입니다. 삼성·애플·구글 3개 세션으로 운영되며 세부 일정은 추후 안내됩니다.",
  path: "/teachers/training",
});

export default function Page() {
  return <TeachersTrainingPage />;
}
