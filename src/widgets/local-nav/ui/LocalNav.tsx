"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export interface LocalNavItem {
  key: string;
  label: string;
  href?: string;
  onClick?: () => void;
  active?: boolean;
}

export default function LocalNav({ title, items }: { title: string; items: LocalNavItem[] }) {
  const pathname = usePathname();

  return (
    <nav className="shrink-0 sm:sticky sm:top-[84px] sm:w-52 sm:self-start">
      <p className="px-3 text-xs font-bold uppercase tracking-wide text-gray-400">{title}</p>
      <ul className="mt-2 flex gap-1 overflow-x-auto px-1 pb-2 sm:mt-3 sm:flex-col sm:gap-1 sm:overflow-visible sm:px-0 sm:pb-0">
        {items.map((item) => {
          const isActive = item.onClick ? item.active : item.active ?? (item.href ? pathname === item.href : false);
          const className = `block whitespace-nowrap rounded-lg px-3 py-2 text-sm font-medium transition ${
            isActive ? "bg-brand-light font-semibold text-brand" : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
          }`;

          if (item.onClick) {
            return (
              <li key={item.key} className="shrink-0">
                <button type="button" onClick={item.onClick} className={className}>
                  {item.label}
                </button>
              </li>
            );
          }

          if (item.href?.startsWith("#")) {
            return (
              <li key={item.key} className="shrink-0">
                <a href={item.href} className={className}>
                  {item.label}
                </a>
              </li>
            );
          }

          return (
            <li key={item.key} className="shrink-0">
              <Link href={item.href ?? "#"} className={className}>
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
