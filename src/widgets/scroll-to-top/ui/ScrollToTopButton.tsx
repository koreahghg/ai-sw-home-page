"use client";

export default function ScrollToTopButton() {
  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="맨 위로 이동"
      className="fixed bottom-6 right-6 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-gray-800 text-white transition hover:bg-brand"
    >
      <span className="text-lg">↑</span>
    </button>
  );
}
