import type { Metadata } from "next";
import { buildMetadata } from "@/shared/config/site";
import StudentsStandingPage from "@/views/students-standing/ui/StudentsStandingPage";

export const metadata: Metadata = buildMetadata({
  title: "상설 체험",
  description: "사전신청 없이 누구나 자유롭게 참여할 수 있는 상시 운영 체험존입니다.",
  path: "/students/standing",
});

export default function Page() {
  return <StudentsStandingPage />;
}
