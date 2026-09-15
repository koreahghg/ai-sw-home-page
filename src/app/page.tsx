import type { Metadata } from "next";
import { buildMetadata, SITE_NAME, SITE_DESCRIPTION } from "@/shared/config/site";
import HomePage from "@/views/home/ui/HomePage";

export const metadata: Metadata = buildMetadata({
  title: SITE_NAME,
  description: SITE_DESCRIPTION,
  path: "/",
});

export default function Page() {
  return <HomePage />;
}
