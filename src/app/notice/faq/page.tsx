import type { Metadata } from "next";
import { buildMetadata } from "@/shared/config/site";
import NoticeFaqPage from "@/views/notice-faq/ui/NoticeFaqPage";

export const metadata: Metadata = buildMetadata({
  title: "FAQ",
  description: "자주 묻는 질문을 확인하세요.",
  path: "/notice/faq",
});

export default function Page() {
  return <NoticeFaqPage />;
}
