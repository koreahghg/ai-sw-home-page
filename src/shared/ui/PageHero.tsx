export default function PageHero({ title, desc }: { title: string; desc: string }) {
  return (
    <section className="border-b border-black/5 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <h1 className="text-2xl font-black text-gray-900 sm:text-3xl">{title}</h1>
        <p className="mt-2 text-sm text-gray-500 sm:text-base">{desc}</p>
      </div>
    </section>
  );
}
