function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex h-[72px] items-center justify-between border-b border-white/10 bg-neutral-950/70 px-8 backdrop-blur-md">
      <div className="text-xl font-black uppercase tracking-tight text-lime-300">
        Nike
      </div>

      <ul className="hidden items-center gap-9 sm:flex">
        <li>
          <a href="#" className="group relative pb-1 text-[13px] font-bold uppercase tracking-wide text-neutral-400 transition-colors duration-200 hover:text-neutral-100">
            Home
            <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-lime-300 transition-all duration-300 ease-out group-hover:w-full" />
          </a>
        </li>
        <li>
          <a href="#" className="group relative pb-1 text-[13px] font-bold uppercase tracking-wide text-neutral-400 transition-colors duration-200 hover:text-neutral-100">
            About
            <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-lime-300 transition-all duration-300 ease-out group-hover:w-full" />
          </a>
        </li>
        <li>
          <a href="#" className="group relative pb-1 text-[13px] font-bold uppercase tracking-wide text-neutral-400 transition-colors duration-200 hover:text-neutral-100">
            Work
            <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-lime-300 transition-all duration-300 ease-out group-hover:w-full" />
          </a>
        </li>
        <li>
          <a href="#" className="group relative pb-1 text-[13px] font-bold uppercase tracking-wide text-neutral-400 transition-colors duration-200 hover:text-neutral-100">
            Contact
            <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-lime-300 transition-all duration-300 ease-out group-hover:w-full" />
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar