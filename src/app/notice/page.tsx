import type { Metadata } from "next";
import { buildMetadata } from "@/shared/config/site";
import NoticePage from "@/views/notice/ui/NoticePage";

export const metadata: Metadata = buildMetadata({
  title: "공지사항",
  description: "공지사항, 자주 묻는 질문, 주차 안내를 확인하세요.",
  path: "/notice",
});

export default async function Page(props: PageProps<"/notice">) {
  const { page } = await props.searchParams;
  return <NoticePage page={typeof page === "string" ? Number(page) : 1} />;
}
