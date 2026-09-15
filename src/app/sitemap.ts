import type { MetadataRoute } from "next";
import { SITE_URL } from "@/shared/config/site";
import { notices } from "@/entities/notice/model/data";

const ROUTES: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  { path: "/", priority: 1, changeFrequency: "daily" },
  { path: "/guide", priority: 0.9, changeFrequency: "weekly" },
  { path: "/guide/schedule", priority: 0.7, changeFrequency: "weekly" },
  { path: "/guide/map", priority: 0.6, changeFrequency: "weekly" },
  { path: "/guide/directions", priority: 0.6, changeFrequency: "monthly" },
  { path: "/guide/status", priority: 0.7, changeFrequency: "hourly" },
  { path: "/students", priority: 0.8, changeFrequency: "weekly" },
  { path: "/students/golden-bell", priority: 0.6, changeFrequency: "weekly" },
  { path: "/students/ai-tour", priority: 0.6, changeFrequency: "weekly" },
  { path: "/students/standing", priority: 0.5, changeFrequency: "weekly" },
  { path: "/teachers", priority: 0.8, changeFrequency: "weekly" },
  { path: "/teachers/training", priority: 0.6, changeFrequency: "weekly" },
  { path: "/teachers/lecture", priority: 0.6, changeFrequency: "weekly" },
  { path: "/apply/register", priority: 0.9, changeFrequency: "weekly" },
  { path: "/apply/golden-bell", priority: 0.7, changeFrequency: "weekly" },
  { path: "/apply/ai-tour", priority: 0.7, changeFrequency: "weekly" },
  { path: "/apply/teacher-training", priority: 0.7, changeFrequency: "weekly" },
  { path: "/apply/teacher-lecture", priority: 0.7, changeFrequency: "weekly" },
  { path: "/apply/check", priority: 0.5, changeFrequency: "weekly" },
  { path: "/notice", priority: 0.7, changeFrequency: "daily" },
  { path: "/notice/faq", priority: 0.6, changeFrequency: "weekly" },
  { path: "/notice/parking", priority: 0.5, changeFrequency: "monthly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes = ROUTES.map(({ path, priority, changeFrequency }) => ({
    url: `${SITE_URL}${path === "/" ? "" : path}`,
    lastModified,
    changeFrequency,
    priority,
  }));

  const noticeRoutes = notices.map((notice) => ({
    url: `${SITE_URL}/notice/${notice.id}`,
    lastModified: new Date(notice.date.replace(/\./g, "-")),
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  return [...staticRoutes, ...noticeRoutes];
}
