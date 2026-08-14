import { useState } from 'react';
import heroImg1 from '../assets/air-removebg-preview.png';
import heroImg2 from '../assets/T-blaizer-removebg-preview.png';
import heroImg3 from '../assets/nike_airmax-removebg-preview.png';
import heroImg4 from '../assets/nike_dunks-removebg-preview.png';

export interface ProductDetails {
  colorway: string;
  material: string;
  cushioning: string;
  sole: string;
  weight: string;
}

export interface Product {
  id: number;
  name: string;
  price: string;
  category: string;
  badge?: string;
  img: string;
  description: string;
  details: ProductDetails;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface ShippingDetails {
  fullName: string;
  email: string;
  address: string;
  city: string;
  postalCode: string;
  paymentMethod: 'card' | 'cod' | 'paypal';
}

export const products: Product[] = [
  { 
    id: 1, 
    name: 'Nike Air Runner', 
    price: '$120', 
    category: 'Running',
    badge: 'Popular',
    img: heroImg1, 
    description: 'Engineered for lightweight comfort and responsive cushioning on daily runs.',
    details: {
      colorway: 'Pure Platinum / Lime Blast / Cool Grey',
      material: 'Breathable mesh upper with synthetic overlays',
      cushioning: 'Full-length Nike Air unit for impact absorption',
      sole: 'Durable rubber outsole with multi-surface traction pattern',
      weight: "9.4 oz (Men's size 9)"
    }
  },
  { 
    id: 2, 
    name: 'Nike Trail Blazer', 
    price: '$135', 
    category: 'Outdoor',
    badge: 'New',
    img: heroImg2, 
    description: 'Built tough for rugged terrain, offering supreme traction and support.',
    details: {
      colorway: 'Dark Obsidian / Khaki / Safety Orange',
      material: 'Water-resistant ballistic nylon and reinforced leather',
      cushioning: 'Plush foam midsole with rock plate protection',
      sole: 'Aggressive multidirectional lugged rubber outsole',
      weight: "11.8 oz (Men's size 9)"
    }
  },
  { 
    id: 3, 
    name: 'Nike Air Max', 
    price: '$110', 
    category: 'Lifestyle',
    badge: 'Bestseller',
    img: heroImg3, 
    description: 'Iconic cushioning meets sleek streetwear styling for all-day wearability.',
    details: {
      colorway: 'Summit White / Black / Volt',
      material: 'Mixed leather, suede, and textile upper',
      cushioning: 'Visible Max Air heel unit for classic comfort',
      sole: 'Waffle rubber outsole for heritage style and durability',
      weight: "10.2 oz (Men's size 9)"
    }
  },
  { 
    id: 4, 
    name: 'Nike Dunks', 
    price: '$99', 
    category: 'Skate',
    badge: 'Limited',
    img: heroImg4, 
    description: 'A classic hardwood icon adapted for skate culture and street style.',
    details: {
      colorway: 'University Red / White / Gum Medium Brown',
      material: 'Premium crisp leather that softens with wear',
      cushioning: 'Lightweight, responsive foam sockliner',
      sole: 'Classic rubber pivot circle outsole for boardfeel and grip',
      weight: "11.1 oz (Men's size 9)"
    }
  },
  { 
    id: 5, 
    name: 'Nike Vapor Pro', 
    price: '$150', 
    category: 'Running',
    badge: 'New',
    img: heroImg1, 
    description: 'Next-gen carbon plate technology designed to shatter your personal running records.',
    details: {
      colorway: 'Hyper Cobalt / Bright Crimson / Electric Green',
      material: 'VaporWeave mesh upper for secure, water-resistant containment',
      cushioning: 'ZoomX foam combined with a curved carbon fiber plate',
      sole: 'Thin rubber outsole optimized for high-speed energy return',
      weight: "7.8 oz (Men's size 9)"
    }
  },
  { 
    id: 6, 
    name: 'Nike Force Court', 
    price: '$115', 
    category: 'Lifestyle',
    badge: 'Popular',
    img: heroImg3, 
    description: 'Crisp leather finish with timeless vintage basketball aesthetics.',
    details: {
      colorway: 'Sail / Coconut Milk / Metallic Gold',
      material: 'Aged-look tumbled leather upper with perforated toe',
      cushioning: 'Encapsulated Nike Air cushioning unit',
      sole: 'Non-marking vintage yellowed rubber cupsole',
      weight: "12.0 oz (Men's size 9)"
    }
  },
  { 
    id: 7, 
    name: 'Nike Summit Apex', 
    price: '$140', 
    category: 'Outdoor',
    badge: 'Limited',
    img: heroImg2, 
    description: 'Weather-resistant uppers built to conquer urban elements and mountain trails alike.',
    details: {
      colorway: 'Iron Grey / Olive Aura / Total Orange',
      material: 'GORE-TEX inner sleeve with ripstop fabric shell',
      cushioning: 'React foam midsole for long-lasting smoothness',
      sole: 'Storm-tread rubber outsole providing traction on wet surfaces',
      weight: "12.4 oz (Men's size 9)"
    }
  },
  { 
    id: 8, 
    name: 'Nike Street Riot', 
    price: '$105', 
    category: 'Skate',
    badge: 'Bestseller',
    img: heroImg4, 
    description: 'Reinforced toe-box and extra-grip soles tailored for high-impact session skating.',
    details: {
      colorway: 'Black / Anthracite / Gum Light Brown',
      material: 'Suede and canvas upper with double-stitched ollie zones',
      cushioning: 'Zoom Air heel pocket for supreme impact absorption',
      sole: 'Vulcanized rubber construction for flexibility and board control',
      weight: "10.5 oz (Men's size 9)"
    }
  },
];

const categories: string[] = ['All', 'Running', 'Lifestyle', 'Outdoor', 'Skate'];

export default function Products() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [expandedDetailsId, setExpandedDetailsId] = useState<number | null>(null);
  
  // Cart state
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);

  // Checkout state
  const [isCheckoutOpen, setIsCheckoutOpen] = useState<boolean>(false);
  const [shipping, setShipping] = useState<ShippingDetails>({
    fullName: '',
    email: '',
    address: '',
    city: '',
    postalCode: '',
    paymentMethod: 'card'
  });
  const [orderComplete, setOrderComplete] = useState<boolean>(false);

  // Filter products based on category and search query
  const filteredProducts = products.filter((p) => {
    const matchesCategory = activeCategory === 'All' || p.category === activeCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2500);
  };

  const handleAddToCart = (product: Product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
    showToast(`Added ${product.name} to Cart! 🛒`);
  };

  const handleRemoveFromCart = (productId: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const handleUpdateQuantity = (productId: number, delta: number) => {
    setCart((prevCart) =>
      prevCart
        .map((item) => {
          if (item.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleBuyNow = (product: Product) => {
    // Add directly to cart or reset cart to single item, then open checkout
    setCart([{ ...product, quantity: 1 }]);
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
    setOrderComplete(false);
  };

  const toggleDetails = (id: number) => {
    setExpandedDetailsId(expandedDetailsId === id ? null : id);
  };

  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalCartPrice = cart.reduce((sum, item) => {
    const numericPrice = parseFloat(item.price.replace('$', ''));
    return sum + numericPrice * item.quantity;
  }, 0);

  const handleShippingChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setShipping({ ...shipping, [e.target.name]: e.target.value });
  };

  const handleCompleteOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setOrderComplete(true);
    setCart([]);
  };

  return (
    <section id="products" className="min-h-screen px-4 pt-4 pb-24 sm:px-8 scroll-mt-[72px] relative">
      {/* Toast Notification Banner */}
      {toastMessage && (
        <div className="fixed bottom-8 right-8 z-50 rounded-2xl border border-lime-300/40 bg-neutral-900 px-6 py-4 text-sm font-bold text-neutral-100 shadow-2xl shadow-lime-300/10 transition-all animate-bounce">
          {toastMessage}
        </div>
      )}

      {/* Header and Cart Trigger */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="flex items-center justify-between w-full md:w-auto">
          <h1 className="text-[clamp(32px,5vw,64px)] font-black uppercase leading-[0.92] tracking-[-0.04em] text-neutral-100 m-0">
            Products
          </h1>

          {/* Mobile/Tablet Cart Trigger */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative md:hidden flex items-center justify-center w-12 h-12 rounded-full border border-neutral-800 bg-neutral-900 text-neutral-100 hover:border-lime-300 transition-colors"
          >
            🛒
            {totalCartCount > 0 && (
              <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-lime-300 text-[10px] font-bold text-neutral-950">
                {totalCartCount}
              </span>
            )}
          </button>
        </div>

        <div className="flex items-center gap-4 w-full md:w-auto">
          {/* Search Bar Feature */}
          <div className="w-full md:w-72">
            <input
              type="text"
              placeholder="Search kicks..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-full border border-neutral-800 bg-neutral-900/50 px-5 py-3 text-sm text-neutral-100 placeholder-neutral-500 focus:border-lime-300 focus:outline-none transition-colors"
            />
          </div>

          {/* Desktop Cart Trigger */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="hidden md:flex items-center gap-3 rounded-full border border-neutral-800 bg-neutral-900/60 px-5 py-3 text-sm font-bold text-neutral-100 hover:border-lime-300 hover:bg-neutral-900 transition-all shrink-0"
          >
            <span>🛒 Cart</span>
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-lime-300 text-xs font-bold text-neutral-950">
              {totalCartCount}
            </span>
          </button>
        </div>
      </div>

      {/* Category Filter Tabs Feature */}
      <div className="flex flex-wrap items-center gap-3 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`rounded-full px-5 py-2 text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
              activeCategory === cat
                ? 'bg-lime-300 text-neutral-950 shadow-lg shadow-lime-300/10'
                : 'border border-neutral-800 bg-neutral-900/40 text-neutral-400 hover:border-neutral-700 hover:text-neutral-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {filteredProducts.map((p) => {
            const isDetailsOpen = expandedDetailsId === p.id;
            return (
              <div
                key={p.id}
                className="group relative flex flex-col rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-lime-300/40"
              >
                {/* Badge Feature */}
                {p.badge && (
                  <span className="absolute top-4 right-4 rounded-full bg-neutral-800/80 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-lime-300 border border-neutral-700/50">
                    {p.badge}
                  </span>
                )}

                <div className="mb-6 flex h-[180px] items-center justify-center">
                  <img
                    src={p.img}
                    alt={p.name}
                    className="w-full max-w-[160px] -rotate-6 transition-transform duration-500 group-hover:scale-105 group-hover:rotate-0"
                  />
                </div>

                <div className="mb-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-lime-300/80">
                    {p.category}
                  </span>
                  <h3 className="text-lg font-bold uppercase tracking-tight text-neutral-100 mt-0.5">
                    {p.name}
                  </h3>
                </div>

                <p className="text-xs text-neutral-400 line-clamp-2 mb-4">
                  {p.description}
                </p>

                {/* Inline Product Specifications / Details Panel */}
                {isDetailsOpen && p.details && (
                  <div className="mb-4 rounded-xl border border-neutral-800 bg-neutral-950/60 p-3 text-xs text-neutral-300 space-y-1.5 animate-fadeIn">
                    <p><strong className="text-neutral-100">Color:</strong> {p.details.colorway}</p>
                    <p><strong className="text-neutral-100">Material:</strong> {p.details.material}</p>
                    <p><strong className="text-neutral-100">Cushioning:</strong> {p.details.cushioning}</p>
                    <p><strong className="text-neutral-100">Sole:</strong> {p.details.sole}</p>
                    <p><strong className="text-neutral-100">Weight:</strong> {p.details.weight}</p>
                  </div>
                )}

                <div className="mb-4 flex items-center justify-between pt-4 border-t border-neutral-800/60">
                  <span className="text-base font-black text-neutral-100">{p.price}</span>
                  <button
                    onClick={() => toggleDetails(p.id)}
                    className="text-xs font-semibold text-lime-300/90 hover:text-lime-300 transition-colors underline underline-offset-4"
                  >
                    {isDetailsOpen ? 'Hide Specs' : 'Details'}
                  </button>
                </div>

                {/* Action Buttons: Add to Cart & Buy Now */}
                <div className="mt-auto flex flex-col gap-2">
                  <button
                    onClick={() => handleAddToCart(p)}
                    className="w-full rounded-full border border-neutral-700 bg-neutral-800/60 px-4 py-2.5 text-xs font-bold uppercase tracking-wide text-neutral-100 transition-all duration-200 hover:border-lime-300 hover:bg-neutral-800"
                  >
                    Add to Cart
                  </button>
                  <button
                    onClick={() => handleBuyNow(p)}
                    className="w-full rounded-full bg-neutral-100 px-4 py-2.5 text-xs font-bold uppercase tracking-wide text-neutral-950 transition-all duration-200 hover:bg-lime-300"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-24 text-center rounded-2xl border border-neutral-800 bg-neutral-900/20">
          <p className="text-lg font-bold text-neutral-300 uppercase mb-2">No kicks found</p>
          <p className="text-sm text-neutral-500">Try adjusting your search or category filter.</p>
        </div>
      )}

      {/* Cart Slide-Over / Modal Panel */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-neutral-950/80 backdrop-blur-sm transition-opacity">
          <div className="flex w-full max-w-md flex-col border-l border-neutral-800 bg-neutral-900 p-6 shadow-2xl h-full">
            {/* Cart Header */}
            <div className="flex items-center justify-between pb-6 border-b border-neutral-800">
              <h2 className="text-xl font-black uppercase tracking-tight text-neutral-100">
                Your Cart ({totalCartCount})
              </h2>
              <button
                onClick={() => setIsCartOpen(false)}
                className="rounded-full bg-neutral-800 p-2 text-neutral-400 hover:text-neutral-100 transition-colors"
              >
                ✕
              </button>
            </div>

            {/* Cart Items List */}
            <div className="flex-1 overflow-y-auto py-6 space-y-4">
              {cart.length > 0 ? (
                cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-4 rounded-2xl border border-neutral-800 bg-neutral-950/40 p-4"
                  >
                    <img src={item.img} alt={item.name} className="w-16 h-16 object-contain -rotate-6" />
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-bold uppercase tracking-tight text-neutral-100 truncate">
                        {item.name}
                      </h4>
                      <p className="text-xs font-black text-lime-300 mt-0.5">{item.price}</p>
                      
                      {/* Quantity Controls */}
                      <div className="flex items-center gap-3 mt-3">
                        <div className="flex items-center rounded-lg border border-neutral-800 bg-neutral-900">
                          <button
                            onClick={() => handleUpdateQuantity(item.id, -1)}
                            className="px-2.5 py-1 text-xs text-neutral-400 hover:text-neutral-100"
                          >
                            -
                          </button>
                          <span className="px-2 text-xs font-bold text-neutral-200">{item.quantity}</span>
                          <button
                            onClick={() => handleUpdateQuantity(item.id, 1)}
                            className="px-2.5 py-1 text-xs text-neutral-400 hover:text-neutral-100"
                          >
                            +
                          </button>
                        </div>
                        <button
                          onClick={() => handleRemoveFromCart(item.id)}
                          className="text-[11px] font-semibold text-red-400 hover:text-red-300 transition-colors"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="flex flex-col items-center justify-center h-full text-center py-12">
                  <span className="text-4xl mb-3">🛒</span>
                  <p className="text-sm font-bold text-neutral-300 uppercase mb-1">Your cart is empty</p>
                  <p className="text-xs text-neutral-500">Add some kicks to your cart to check them out!</p>
                </div>
              )}
            </div>

            {/* Cart Footer / Checkout Trigger */}
            {cart.length > 0 && (
              <div className="pt-6 border-t border-neutral-800 space-y-4">
                <div className="flex items-center justify-between text-base font-bold text-neutral-100">
                  <span>Subtotal:</span>
                  <span className="text-lime-300">${totalCartPrice.toFixed(2)}</span>
                </div>
                <button
                  onClick={() => {
                    setIsCartOpen(false);
                    setIsCheckoutOpen(true);
                    setOrderComplete(false);
                  }}
                  className="w-full rounded-full bg-lime-300 py-3.5 text-xs font-bold uppercase tracking-wide text-neutral-950 transition-all hover:bg-lime-400 shadow-lg shadow-lime-300/10"
                >
                  Proceed to Checkout
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Checkout Modal / Overlay */}
      {isCheckoutOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/80 backdrop-blur-sm">
          <div className="flex w-full max-w-lg flex-col rounded-3xl border border-neutral-800 bg-neutral-900 p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
            
            {/* Header */}
            <div className="flex items-center justify-between pb-6 border-b border-neutral-800 mb-6">
              <h2 className="text-xl font-black uppercase tracking-tight text-neutral-100">
                {orderComplete ? 'Order Confirmed 🎉' : 'Secure Checkout'}
              </h2>
              <button
                onClick={() => setIsCheckoutOpen(false)}
                className="rounded-full bg-neutral-800 p-2 text-neutral-400 hover:text-neutral-100 transition-colors"
              >
                ✕
              </button>
            </div>

            {orderComplete ? (
              <div className="flex flex-col items-center text-center py-8 space-y-4 animate-fadeIn">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-lime-300/10 text-lime-300 border border-lime-300/30 text-2xl font-black">
                  ✓
                </div>
                <h3 className="text-lg font-bold text-neutral-100 uppercase tracking-tight">
                  Thank you for your purchase, {shipping.fullName || 'Sneakerhead'}!
                </h3>
                <p className="text-xs text-neutral-400 max-w-xs">
                  We have received your order and are getting your fresh kicks packed for shipping to <strong className="text-neutral-200">{shipping.city || 'your address'}</strong>.
                </p>
                <button
                  onClick={() => setIsCheckoutOpen(false)}
                  className="mt-6 rounded-full bg-lime-300 px-8 py-3 text-xs font-bold uppercase tracking-wide text-neutral-950 transition-all hover:bg-lime-400"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <form onSubmit={handleCompleteOrder} className="space-y-6">
                {/* Order Summary Snippet */}
                <div className="rounded-2xl border border-neutral-800 bg-neutral-950/50 p-4 space-y-2">
                  <div className="text-xs font-bold uppercase text-neutral-400">Order Summary</div>
                  <div className="flex justify-between items-center text-sm font-bold text-neutral-100">
                    <span>Total Amount</span>
                    <span className="text-lime-300">${totalCartPrice.toFixed(2)}</span>
                  </div>
                </div>

                {/* Shipping Details Fields */}
                <div className="space-y-4">
                  <div className="text-xs font-bold uppercase text-neutral-400">Shipping Information</div>
                  
                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1">Full Name</label>
                    <input
                      type="text"
                      required
                      name="fullName"
                      value={shipping.fullName}
                      onChange={handleShippingChange}
                      placeholder="Jane Doe"
                      className="w-full rounded-xl border border-neutral-800 bg-neutral-950 px-4 py-2.5 text-xs text-neutral-100 placeholder-neutral-600 focus:border-lime-300 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1">Email Address</label>
                    <input
                      type="email"
                      required
                      name="email"
                      value={shipping.email}
                      onChange={handleShippingChange}
                      placeholder="jane@example.com"
                      className="w-full rounded-xl border border-neutral-800 bg-neutral-950 px-4 py-2.5 text-xs text-neutral-100 placeholder-neutral-600 focus:border-lime-300 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1">Street Address</label>
                    <input
                      type="text"
                      required
                      name="address"
                      value={shipping.address}
                      onChange={handleShippingChange}
                      placeholder="123 Sneaker St."
                      className="w-full rounded-xl border border-neutral-800 bg-neutral-950 px-4 py-2.5 text-xs text-neutral-100 placeholder-neutral-600 focus:border-lime-300 focus:outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-neutral-300 mb-1">City</label>
                      <input
                        type="text"
                        required
                        name="city"
                        value={shipping.city}
                        onChange={handleShippingChange}
                        placeholder="New York"
                        className="w-full rounded-xl border border-neutral-800 bg-neutral-950 px-4 py-2.5 text-xs text-neutral-100 placeholder-neutral-600 focus:border-lime-300 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-neutral-300 mb-1">Postal Code</label>
                      <input
                        type="text"
                        required
                        name="postalCode"
                        value={shipping.postalCode}
                        onChange={handleShippingChange}
                        placeholder="10001"
                        className="w-full rounded-xl border border-neutral-800 bg-neutral-950 px-4 py-2.5 text-xs text-neutral-100 placeholder-neutral-600 focus:border-lime-300 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1">Payment Method</label>
                    <select
                      name="paymentMethod"
                      value={shipping.paymentMethod}
                      onChange={handleShippingChange}
                      className="w-full rounded-xl border border-neutral-800 bg-neutral-950 px-4 py-2.5 text-xs text-neutral-100 focus:border-lime-300 focus:outline-none"
                    >
                      <option value="card">Credit / Debit Card</option>
                      <option value="cod">Cash on Delivery (COD)</option>
                      <option value="paypal">PayPal</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full rounded-full bg-lime-300 py-3.5 text-xs font-bold uppercase tracking-wide text-neutral-950 transition-all hover:bg-lime-400 shadow-lg shadow-lime-300/10"
                >
                  Place Order (${totalCartPrice.toFixed(2)})
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
}