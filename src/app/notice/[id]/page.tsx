import type { Metadata } from "next";
import { buildMetadata, SITE_DESCRIPTION } from "@/shared/config/site";
import { notices } from "@/entities/notice/model/data";
import NoticeDetailPage from "@/views/notice-detail/ui/NoticeDetailPage";

export async function generateMetadata(props: PageProps<"/notice/[id]">): Promise<Metadata> {
  const { id } = await props.params;
  const notice = notices.find((n) => n.id === id);

  if (!notice) {
    return buildMetadata({ title: "공지사항", description: SITE_DESCRIPTION, path: `/notice/${id}` });
  }

  return buildMetadata({ title: notice.title, description: notice.content[0], path: `/notice/${id}` });
}

export default async function Page(props: PageProps<"/notice/[id]">) {
  const { id } = await props.params;
  return <NoticeDetailPage id={id} />;
}
