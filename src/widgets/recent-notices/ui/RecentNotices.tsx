import Link from "next/link";
import { notices } from "@/entities/notice/model/data";

export default function RecentNotices() {
  const recentNotices = [...notices].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 3);

  return (
    <div className="divide-y divide-gray-100 overflow-hidden rounded-2xl border border-gray-100 bg-white">
      {recentNotices.map((n) => (
        <Link key={n.id} href={`/notice/${n.id}`} className="flex items-center gap-4 px-5 py-4 transition-colors hover:bg-gray-50 sm:gap-6 sm:px-6">
          <span className="w-20 shrink-0 text-xs font-medium text-brand sm:w-24 sm:text-sm">{n.date}</span>
          <p className="min-w-0 flex-1 truncate text-sm font-bold text-gray-900 sm:text-base">{n.title}</p>
          <span className="shrink-0 text-gray-300">→</span>
        </Link>
      ))}
    </div>
  );
}
