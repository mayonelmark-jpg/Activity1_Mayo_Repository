import heroImg from '../assets/nke-removebg-preview.png';

function Hero() {
  return (
    <section className="relative z-[1] flex min-h-[calc(100vh-72px)] flex-col justify-center gap-12 px-8 lg:flex-row lg:items-center lg:justify-between">
      {/* Content Column */}
      <div className="max-w-[560px]">
        <div className="mb-5 flex items-center gap-3">
          <span className="h-px w-8 bg-lime-300" />
          <p className="text-[13px] font-bold uppercase tracking-[0.12em] text-lime-300">
            Est. 2026 — Kabankalan, PH
          </p>
        </div>

        <h1 className="mb-6 text-[clamp(40px,7vw,96px)] font-black uppercase leading-[0.92] tracking-[-0.04em] text-neutral-100">
          Just build<br />
          it<span className="text-transparent [-webkit-text-stroke:1.5px_#f5f5f5]">.</span>
        </h1>

        <p className="mb-10 max-w-[440px] text-[17px] leading-relaxed text-neutral-400">
          Track your progress, break your personal best, and turn every effort into achievement.
        </p>

        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-5">
          <button className="rounded-full bg-neutral-100 px-8 py-4 text-sm font-bold uppercase tracking-wide text-neutral-950 transition-all duration-200 hover:-translate-y-0.5 hover:bg-lime-300">
            View work
          </button>

          <a
            href="#"
            className="border-b-2 border-neutral-100 pb-1 text-sm font-bold uppercase tracking-wide text-neutral-100 transition-colors duration-200 hover:border-lime-300 hover:text-lime-300"
          >
            About me
          </a>
        </div>
      </div>

      {/* Image Column - Centered & Slightly Enlarged */}
      <div className="relative mx-auto flex w-full max-w-[540px] items-center justify-center lg:mx-0 lg:w-1/2">
        <div className="absolute h-[320px] w-[320px] rounded-full bg-lime-300/5 blur-3xl" />
        <img
          src={heroImg}
          alt="Featured shoe"
          className="relative w-full scale-105 -rotate-6 transition-transform duration-500 ease-out hover:scale-110 hover:rotate-0"
        />
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 right-8 hidden flex-col items-center gap-2 sm:flex">
        <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-neutral-600">
          Scroll
        </span>
        <span className="h-10 w-px animate-pulse bg-neutral-700" />
      </div>
    </section>
  );
}

export default Hero;