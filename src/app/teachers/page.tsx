import type { Metadata } from "next";
import { buildMetadata } from "@/shared/config/site";
import TeachersPage from "@/views/teachers/ui/TeachersPage";

export const metadata: Metadata = buildMetadata({
  title: "부스 안내",
  description: "미래교육박람회 - 교원을 위한 부스 전시, 연수, 특강 프로그램을 확인하세요.",
  path: "/teachers",
});

export default function Page() {
  return <TeachersPage />;
}
