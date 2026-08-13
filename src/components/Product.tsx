import heroImg1 from '../assets/air-removebg-preview.png';
import heroImg2 from '../assets/T-blaizer-removebg-preview.png';
import heroImg3 from '../assets/nike_airmax-removebg-preview.png';
import heroImg4 from '../assets/nike_dunks-removebg-preview.png';

const products = [
  { id: 1, name: 'Nike Air Runner', price: '$120', img: heroImg1 },
  { id: 2, name: 'Nike Trail Blazer', price: '$135', img: heroImg2 },
  { id: 3, name: 'Nike Air Max', price: '$110', img: heroImg3 },
  { id: 4, name: 'Nike Dunks', price: '$99', img: heroImg4 },
];

function Products() {
  return (
    <section className="min-h-screen px-8 py-24">
      <div className="mb-16 flex items-center gap-3">
        <span className="h-px w-8 bg-lime-300" />
        <p className="text-[13px] font-bold uppercase tracking-[0.12em] text-lime-300">
          Full Catalog
        </p>
      </div>

      <h1 className="mb-16 text-[clamp(32px,5vw,64px)] font-black uppercase leading-[0.92] tracking-[-0.04em] text-neutral-100">
        Products
      </h1>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((p) => (
          <div
            key={p.id}
            className="group flex flex-col rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-lime-300/40"
          >
            <div className="mb-6 flex h-[180px] items-center justify-center">
              <img
                src={p.img}
                alt={p.name}
                className="w-full max-w-[160px] -rotate-6 transition-transform duration-500 group-hover:scale-105 group-hover:rotate-0"
              />
            </div>
            <h3 className="mb-1 text-lg font-bold uppercase tracking-tight text-neutral-100">
              {p.name}
            </h3>
            <p className="mb-4 text-sm text-neutral-500">{p.price}</p>
            <button className="mt-auto rounded-full bg-neutral-100 px-6 py-3 text-xs font-bold uppercase tracking-wide text-neutral-950 transition-all duration-200 hover:bg-lime-300">
              Add to cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Products;