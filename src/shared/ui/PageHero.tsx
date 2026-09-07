export default function PageHero({ title, desc }: { title: string; desc: string }) {
  return (
    <section className="bg-gradient-to-br from-brand via-brand-deep to-accent text-white">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <h1 className="text-2xl font-black sm:text-3xl">{title}</h1>
        <p className="mt-2 text-sm text-sky-100 sm:text-base">{desc}</p>
      </div>
    </section>
  );
}
