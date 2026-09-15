import type { Metadata } from "next";
import { buildMetadata } from "@/shared/config/site";
import ApplyTeacherLecturePage from "@/views/apply-teacher-lecture/ui/ApplyTeacherLecturePage";

export const metadata: Metadata = buildMetadata({
  title: "미래교육 특강 신청",
  description: "AI 시대 교실을 위한 교원 대상 특강입니다. 10.31(토) 오전 11시 단일 회차, 선착순 300명입니다.",
  path: "/apply/teacher-lecture",
});

export default function Page() {
  return <ApplyTeacherLecturePage />;
}
