import BackgroundLines from "@/shared/ui/BackgroundLines";

export default function PageHero({ title, desc }: { title: string; desc: string }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-dark to-brand text-white">
      <BackgroundLines
        className="pointer-events-none absolute inset-x-0 top-1/2 w-full min-w-[1600px] -translate-y-1/2 opacity-30"
        color="#FFFFFF"
      />
      <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/25 blur-3xl" />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 30 30"
        className="pointer-events-none absolute right-6 top-1/2 h-20 w-20 -translate-y-1/2 fill-white opacity-30 sm:right-10 sm:h-28 sm:w-28"
        aria-hidden="true"
      >
        <path d="M14.217,19.707l-1.112,2.547c-0.427,0.979-1.782,0.979-2.21,0l-1.112-2.547c-0.99-2.267-2.771-4.071-4.993-5.057	L1.73,13.292c-0.973-0.432-0.973-1.848,0-2.28l2.965-1.316C6.974,8.684,8.787,6.813,9.76,4.47l1.126-2.714	c0.418-1.007,1.81-1.007,2.228,0L14.24,4.47c0.973,2.344,2.786,4.215,5.065,5.226l2.965,1.316c0.973,0.432,0.973,1.848,0,2.28	l-3.061,1.359C16.988,15.637,15.206,17.441,14.217,19.707z" />
        <path d="M24.481,27.796l-0.339,0.777c-0.248,0.569-1.036,0.569-1.284,0l-0.339-0.777c-0.604-1.385-1.693-2.488-3.051-3.092	l-1.044-0.464c-0.565-0.251-0.565-1.072,0-1.323l0.986-0.438c1.393-0.619,2.501-1.763,3.095-3.195l0.348-0.84	c0.243-0.585,1.052-0.585,1.294,0l0.348,0.84c0.594,1.432,1.702,2.576,3.095,3.195l0.986,0.438c0.565,0.251,0.565,1.072,0,1.323	l-1.044,0.464C26.174,25.308,25.085,26.411,24.481,27.796z" />
      </svg>
      <div className="relative px-4 py-10 sm:px-6">
        <h1 className="text-2xl font-black sm:text-3xl">{title}</h1>
        <p className="mt-2 text-sm text-sky-100 sm:text-base">{desc}</p>
      </div>
    </section>
  );
}
