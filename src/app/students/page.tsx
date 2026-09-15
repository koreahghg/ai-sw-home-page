import type { Metadata } from "next";
import { buildMetadata } from "@/shared/config/site";
import StudentsPage from "@/views/students/ui/StudentsPage";

export const metadata: Metadata = buildMetadata({
  title: "체험 부스 안내",
  description: "AI·SW 한마당 - 체험 부스부터 골든벨, AI교육원 탐방까지 학생들을 위한 프로그램을 확인하세요.",
  path: "/students",
});

export default function Page() {
  return <StudentsPage />;
}
