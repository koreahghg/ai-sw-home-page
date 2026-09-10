export default function ExternalApplyPanel({
  href,
  label,
  title,
  tagline,
  body,
}: {
  href: string;
  label: string;
  title: string;
  tagline: string;
  body: string;
}) {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-brand to-brand-dark px-6 py-16 text-center text-white sm:px-12 sm:py-24">
      <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-16 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

      <div className="relative mx-auto max-w-2xl">
        <p className="text-xl font-black sm:text-2xl">{title}</p>
        <p className="mt-3 text-base font-semibold text-sky-100 sm:text-lg">&ldquo;{tagline}&rdquo;</p>
        <p className="mt-6 whitespace-pre-line text-sm leading-relaxed text-white/85 sm:text-base">{body}</p>

        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-white px-10 py-4 text-sm font-bold text-brand transition hover:bg-brand-light sm:text-base"
        >
          {label} →
        </a>
      </div>
    </div>
  );
}
