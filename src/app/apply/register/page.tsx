import type { Metadata } from "next";
import { buildMetadata } from "@/shared/config/site";
import ApplyRegisterPage from "@/views/apply-register/ui/ApplyRegisterPage";

export const metadata: Metadata = buildMetadata({
  title: "학생 사전등록",
  description: "AI·SW 한마당 방문을 위한 사전등록 입니다.",
  path: "/apply/register",
});

export default function Page() {
  return <ApplyRegisterPage />;
}
