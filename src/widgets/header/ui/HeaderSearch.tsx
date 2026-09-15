"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { searchIndex } from "@/shared/config/search-index";

export default function HeaderSearch({ open, onClose }: { open: boolean; onClose: () => void }) {
  const router = useRouter();
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return searchIndex.filter((item) => `${item.title} ${item.desc} ${item.group}`.toLowerCase().includes(q)).slice(0, 8);
  }, [query]);

  const handleClose = () => {
    setQuery("");
    onClose();
  };

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-start justify-center bg-black/40 px-4 pt-24 backdrop-blur-sm sm:pt-32"
      onClick={handleClose}
    >
      <div className="w-full max-w-xl rounded-2xl bg-white p-2" onClick={(e) => e.stopPropagation()}>
        <form
          className="flex items-center gap-3 rounded-xl border border-gray-200 px-4 py-3.5"
          onSubmit={(e) => {
            e.preventDefault();
            if (results[0]) {
              router.push(results[0].href);
              handleClose();
            }
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="h-5 w-5 shrink-0 text-gray-400"
          >
            <circle cx="11" cy="11" r="7" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M21 21l-4.3-4.3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            type="text"
            placeholder="검색어를 입력하세요"
            className="w-full bg-transparent text-sm text-gray-700 outline-none placeholder:text-gray-400"
          />
          <button
            type="button"
            onClick={handleClose}
            className="shrink-0 rounded-full bg-gray-100 px-2.5 py-1 text-xs font-semibold text-gray-400 hover:text-gray-600"
          >
            ESC
          </button>
        </form>

        {query.trim() && (
          <div className="mt-2 max-h-80 overflow-y-auto">
            {results.length === 0 ? (
              <p className="px-4 py-6 text-center text-xs text-gray-400">&ldquo;{query}&rdquo;에 대한 검색 결과가 없습니다.</p>
            ) : (
              <ul className="flex flex-col gap-1 p-1">
                {results.map((r) => (
                  <li key={`${r.group}-${r.href}-${r.title}`}>
                    <Link
                      href={r.href}
                      onClick={handleClose}
                      className="flex items-start gap-3 rounded-xl px-3 py-2.5 transition hover:bg-brand-light"
                    >
                      <span className="mt-0.5 shrink-0 rounded-full bg-brand-light px-2 py-0.5 text-[10px] font-bold text-brand">{r.group}</span>
                      <span className="min-w-0">
                        <span className="block truncate text-xs font-semibold text-gray-800">{r.title}</span>
                        <span className="block truncate text-xs text-gray-400">{r.desc}</span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
