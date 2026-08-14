function About() {
  return (
    <section id="about" className="min-h-screen px-8 pt-4 pb- scroll-mt-[72px]">
      <div className="mx-auto max-w-[1200px]">
        {/* Section Header */}
        <div className="mb-5 flex items-center gap-3">
          <span className="h-px w-8 bg-lime-300" />
          <p className="text-[13px] font-bold uppercase tracking-[0.12em] text-lime-300">
            Our Story & Vision
          </p>
        </div>

        {/* Unified Grid aligning both h1 & card on top, and p & empty space below */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start">
          {/* Left Column: Heading and Text Paragraphs */}
          <div className="flex flex-col gap-6">
            <h1 className="inline-block w-fit text-[clamp(32px,5vw,64px)] font-black uppercase leading-[0.92] tracking-[-0.04em] text-neutral-100 m-0 transition-all duration-300 hover:translate-x-3 cursor-pointer">
              Built for the <br />
              culture<span className="text-transparent [-webkit-text-stroke:1.5px_#f5f5f5]">.</span>
            </h1>

            <div className="flex flex-col gap-6 text-[17px] leading-relaxed text-neutral-400 mt-6">
              <p>
                Founded in 2026 in the heart of Kabankalan, <strong className="text-neutral-100 font-semibold">Nike Shoes</strong> was born out of a relentless passion for street fashion, performance, and sneaker culture. We believe footwear isn't just about walking—it's about expression.
              </p>
              <p>
                Every pair we curate and design bridges the gap between high-end athletic technology and everyday urban lifestyle. From the court to the concrete, we empower you to own every stride with uncompromising quality and comfort.
              </p>

              <div className="mt-4 flex gap-10">
                <div>
                  <h4 className="text-3xl font-black text-lime-300">100%</h4>
                  <p className="text-xs uppercase tracking-wider text-neutral-500">Authentic Kicks</p>
                </div>
                <div>
                  <h4 className="text-3xl font-black text-neutral-100">24/7</h4>
                  <p className="text-xs uppercase tracking-wider text-neutral-500">Street Ready</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Highlight Card aligned with the h1 at the top */}
          <div className="relative flex flex-col justify-between rounded-3xl border border-neutral-800 bg-neutral-900/40 p-8 lg:p-12">
            <div className="absolute -right-10 -top-10 h-[240px] w-[240px] rounded-full bg-lime-300/5 blur-3xl pointer-events-none" />
            <div className="mb-8">
              <h3 className="mb-4 text-2xl font-black uppercase tracking-tight text-neutral-100">
                The Mission
              </h3>
              <p className="text-neutral-400">
                To deliver world-class sneaker selections right to your doorstep, keeping you ahead of the curve with drops that define modern style.
              </p>
            </div>
            <div>
              <h3 className="mb-4 text-2xl font-black uppercase tracking-tight text-neutral-100">
                The Vision
              </h3>
              <p className="text-neutral-400">
                To build the ultimate epicenter for sneaker culture, uniting communities and shaping the future of streetwear expression worldwide.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;