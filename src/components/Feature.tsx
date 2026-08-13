function Feature() {
  const features = [
    {
      num: '01',
      title: 'Built for speed',
      desc: 'Fast load times and clean code, no bloat slowing things down.',
    },
    {
      num: '02',
      title: 'Made to move',
      desc: 'Responsive across devices, from phone to widescreen.',
    },
    {
      num: '03',
      title: 'No shortcuts',
      desc: 'Every detail considered, from spacing to motion.',
    },
  ]

  return (
    <section className="relative z-[1] px-8 py-[120px]">
      <p className="mb-4 text-[13px] font-bold uppercase tracking-[0.12em] text-lime-300">
        What you get
      </p>
      <h2 className="mb-16 max-w-[600px] text-[clamp(32px,5vw,56px)] font-black uppercase leading-none tracking-[-0.03em] text-neutral-100">
        Built different
      </h2>

      <div className="grid grid-cols-1 gap-px border-t border-white/[0.08] bg-white/[0.08] md:grid-cols-3">
        {features.map((f) => (
          <div
            key={f.num}
            className="bg-neutral-950 px-8 py-10 transition-colors duration-200 hover:bg-neutral-900"
          >
            <p className="mb-6 text-sm font-bold text-neutral-500">{f.num}</p>
            <p className="mb-3 text-xl font-black uppercase tracking-tight text-neutral-100">
              {f.title}
            </p>
            <p className="text-sm leading-relaxed text-neutral-400">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Feature