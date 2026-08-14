import { useState } from 'react';

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    
    // Reset input fields including the name input
    setFormData({ name: '', email: '', message: '' });

    // Auto-hide the success message pop-up after 4 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  return (
    <section id="contact" className="flex min-h-screen flex-col justify-between px-none pt-none pb-0 scroll-mt-[72px]">
      <div className="mx-auto w-full max-w-[1200px] py-5">
        
        {/* Main Grid: Left Column (Header + Info) vs Right Column (Form) */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start">
          
          {/* Left Column: Header & Info */}
          <div className="flex flex-col">
            {/* Section Header Tag */}
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-lime-300" />
              <p className="text-[13px] font-bold uppercase tracking-[0.12em] text-lime-300">
                Get in Touch
              </p>
            </div>

            <h1 className="mb-12 text-[clamp(32px,5vw,64px)] font-black uppercase leading-[0.92] tracking-[-0.04em] text-neutral-100">
              Let's talk <br />
              kicks<span className="text-transparent [-webkit-text-stroke:1.5px_#f5f5f5]">.</span>
            </h1>

            <div className="flex flex-col gap-8">
              <p className="text-[17px] leading-relaxed text-neutral-400">
                Have a question about a drop, need sizing assistance, or want to collaborate? Drop us a message and our team will get back to you within 24 hours.
              </p>

              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-neutral-800 bg-neutral-900/40 text-lime-300 font-bold">
                    📍
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wider text-neutral-100">Location</h4>
                    <p className="text-sm text-neutral-400">Kabankalan City, Negros Occidental, PH</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-neutral-800 bg-neutral-900/40 text-lime-300 font-bold">
                    ✉️
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wider text-neutral-100">Email Us</h4>
                    <p className="text-sm text-neutral-400">support@nikeshoes.ph</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-neutral-800 bg-neutral-900/40 text-lime-300 font-bold">
                    📞
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wider text-neutral-100">Call Us</h4>
                    <p className="text-sm text-neutral-400">+63 (900) 123-4567</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form (Aligned neatly to match top spacing flow) */}
          <form 
            onSubmit={handleSubmit} 
            className="relative flex flex-col gap-6 rounded-3xl border border-neutral-800 bg-neutral-900/40 p-8 lg:mt-10 lg:p-10"
          >
            {/* Success Pop-up Banner */}
            {submitted && (
              <div className="absolute inset-x-8 -top-14 flex items-center justify-between rounded-2xl border border-lime-300/40 bg-neutral-900 px-6 py-4 shadow-lg backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-lime-300 text-xs font-bold text-neutral-950">✓</span>
                  <p className="text-sm font-bold uppercase tracking-wide text-lime-300">Message has been sent!</p>
                </div>
                <button 
                  type="button" 
                  onClick={() => setSubmitted(false)} 
                  className="text-neutral-400 hover:text-neutral-100"
                >
                  ✕
                </button>
              </div>
            )}

            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold uppercase tracking-wider text-neutral-300">Your Name</label>
              <input 
                type="text" 
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe" 
                className="rounded-xl border border-neutral-800 bg-neutral-950 px-4 py-3.5 text-sm text-neutral-100 placeholder-neutral-600 focus:border-lime-300 focus:outline-none transition-colors"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold uppercase tracking-wider text-neutral-300">Email Address</label>
              <input 
                type="email" 
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com" 
                className="rounded-xl border border-neutral-800 bg-neutral-950 px-4 py-3.5 text-sm text-neutral-100 placeholder-neutral-600 focus:border-lime-300 focus:outline-none transition-colors"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold uppercase tracking-wider text-neutral-300">Message</label>
              <textarea 
                rows={4} 
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="Type your message here..." 
                className="rounded-xl border border-neutral-800 bg-neutral-950 px-4 py-3.5 text-sm text-neutral-100 placeholder-neutral-600 focus:border-lime-300 focus:outline-none transition-colors resize-none"
              />
            </div>

            <button 
              type="submit" 
              className="mt-2 rounded-full bg-neutral-100 px-8 py-4 text-sm font-bold uppercase tracking-wide text-neutral-950 transition-all duration-200 hover:-translate-y-0.5 hover:bg-lime-300"
            >
              Send Message
            </button>
          </form>

        </div>
      </div>

      {/* Footer Section */}
      <footer className="w-full border-t border-neutral-800/80 bg-neutral-950/60 mt-16 py-10 px-8">
        <div className="mx-auto max-w-[1200px] flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Left: Brand/Logo info */}
          <div className="flex flex-col items-center md:items-start gap-1">
            <span className="text-lg font-black tracking-tight uppercase text-neutral-100">
              NIKE<span className="text-lime-300">.</span>PH
            </span>
            <p className="text-xs text-neutral-500">
              Your ultimate destination for premier sneaker drops and street culture.
            </p>
          </div>

          {/* Middle: Follow Us with Nike Official Social Links */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-neutral-300">Follow Us</span>
            <div className="flex items-center gap-3">
              <a 
                href="https://www.facebook.com/nike" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Nike Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-neutral-800 bg-neutral-900/40 text-neutral-400 transition-colors hover:border-lime-300/40 hover:text-lime-300"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              <a 
                href="https://www.instagram.com/nike" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Nike Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-neutral-800 bg-neutral-900/40 text-neutral-400 transition-colors hover:border-lime-300/40 hover:text-lime-300"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              <a 
                href="https://x.com/nike" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Nike Twitter / X"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-neutral-800 bg-neutral-900/40 text-neutral-400 transition-colors hover:border-lime-300/40 hover:text-lime-300"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>

              <a 
                href="https://www.tiktok.com/@nike" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Nike TikTok"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-neutral-800 bg-neutral-900/40 text-neutral-400 transition-colors hover:border-lime-300/40 hover:text-lime-300"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.242V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002-.001a2.895 2.895 0 0 1 3.144-4.53v-3.49a6.341 6.341 0 0 0-6.335 6.335 6.338 6.338 0 0 0 6.335 6.335 6.34 6.34 0 0 0 6.336-6.335V8.69a8.163 8.163 0 0 0 4.77 1.529V6.777a4.78 4.78 0 0 1-1.004-.091z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Right: Copyright */}
          <div className="text-xs text-neutral-600 text-center md:text-right">
            &copy; {new Date().getFullYear()} NikeShoes PH. All rights reserved.
          </div>

        </div>
      </footer>
    </section>
  );
}

export default Contact;