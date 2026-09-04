export interface SubNavItem {
  id: string;
  label: string;
}

export default function SubNav({ items }: { items: SubNavItem[] }) {
  return (
    <nav className="sticky top-[68px] z-30 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl gap-1 overflow-x-auto px-4 py-2 text-sm sm:px-6">
        {items.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="shrink-0 rounded-full px-4 py-1.5 font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900"
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
