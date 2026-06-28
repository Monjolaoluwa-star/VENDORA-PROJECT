import Logo from "../components/logo";
import { useState } from "react";
import { Link, useLocation } from "wouter";
import { vendors, products } from "../data/mockData";

function StarRating({ rating }: { rating: number }) {
  return (
    <span className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <svg key={i} className="w-3.5 h-3.5" fill={i <= Math.round(rating) ? "#D4A017" : "#e2e8f0"} viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      <span className="text-xs ml-1 font-semibold" style={{ color: "#6B7280" }}>{rating}</span>
    </span>
  );
}

export default function Home() {
  const [, setLocation] = useLocation();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Women", "Men", "Shoes", "Bags", "Accessories"];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setLocation(`/products?search=${searchQuery}`);
  };

  const featuredVendors = vendors.slice(0, 3);
  const featuredProducts = products.slice(0, 4);

  const stats = [
    { number: "200+", label: "Verified Vendors" },
    { number: "5,000+", label: "Products Listed" },
    { number: "20K+", label: "Happy Shoppers" },
    { number: "4.8★", label: "Average Rating" },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-pattern relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{ background: "rgba(212,160,23,0.2)", border: "1px solid rgba(212,160,23,0.4)" }}>
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#D4A017" }} />
              <span className="text-xs font-bold tracking-widest" style={{ color: "#F5C842" }}>LAGOS' #1 FASHION MARKETPLACE</span>
            </div>
            <h1 className="hero-title font-black leading-tight mb-6" style={{ fontSize: "3.2rem", color: "white" }}>
              Find Trusted{" "}
              <span style={{ color: "#F5C842" }}>Fashion Vendors</span>{" "}
              in Lagos
            </h1>
            <p className="text-lg mb-10" style={{ color: "rgba(255,255,255,0.75)", lineHeight: "1.7" }}>
              Discover verified vendors, explore quality products, and shop the finest fashion collections — all in one place.
            </p>

            {/* Search Bar */}
            <form onSubmit={handleSearch} className="flex gap-3 mb-8">
              <div className="flex-1 flex items-center gap-3 px-5 py-4 rounded-2xl" style={{ background: "rgba(255,255,255,0.12)", backdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.2)" }}>
                <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="rgba(255,255,255,0.6)" viewBox="0 0 24 24" strokeWidth={2}>
                  <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
                </svg>
                <input
                  type="text"
                  placeholder="Search products, vendors, categories..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 bg-transparent text-sm font-medium placeholder:text-white/40"
                  style={{ color: "white", outline: "none", border: "none", boxShadow: "none" }}
                />
              </div>
              <button type="submit" className="btn-gold px-7 py-4 rounded-2xl font-bold text-sm whitespace-nowrap">
                Search
              </button>
            </form>

            {/* Category Pills */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`category-pill px-4 py-2 rounded-full text-xs font-bold tracking-wide border ${activeCategory === cat ? "active" : ""}`}
                  style={{
                    background: activeCategory === cat ? "linear-gradient(135deg, #D4A017, #F5C842)" : "rgba(255,255,255,0.1)",
                    color: activeCategory === cat ? "#1A1A2E" : "rgba(255,255,255,0.8)",
                    border: activeCategory === cat ? "none" : "1px solid rgba(255,255,255,0.2)",
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Decorative circles */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10" style={{ background: "#D4A017", transform: "translate(30%, -30%)" }} />
        <div className="absolute bottom-0 right-20 w-64 h-64 rounded-full opacity-5" style={{ background: "white", transform: "translateY(40%)" }} />
      </section>

      {/* Stats Section */}
      <section style={{ background: "white", borderBottom: "1px solid #f0e8ff" }}>
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl font-black mb-1" style={{ color: "#4A0E8F" }}>{stat.number}</p>
                <p className="text-xs font-semibold tracking-wide uppercase" style={{ color: "#9CA3AF" }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Vendors */}
      <section className="py-16 px-6" style={{ background: "#F9F5FF" }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-3xl font-black mb-1 section-title" style={{ color: "#1A1A2E" }}>Featured Vendors</h2>
              <p className="text-sm mt-4" style={{ color: "#9CA3AF" }}>Top-rated sellers trusted by thousands</p>
            </div>
            <Link href="/vendors">
              <button className="btn-primary px-6 py-3 rounded-xl text-sm font-bold hidden md:block">
                View All Vendors →
              </button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredVendors.map((vendor) => (
              <Link key={vendor.id} href={`/vendor/${vendor.id}`}>
                <div className="vendor-card-hover bg-white rounded-2xl overflow-hidden cursor-pointer" style={{ boxShadow: "0 4px 20px rgba(74,14,143,0.08)", border: "1px solid #f0e8ff" }}>
                  <div className="relative h-44 overflow-hidden">
                    <img src={vendor.image} alt={vendor.name} className="w-full h-full object-cover" />
                    <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(45,8,96,0.7), transparent)" }} />
                    {vendor.verified && (
                      <span className="badge-verified absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                        ✓ Verified
                      </span>
                    )}
                  </div>
                  <div className="p-5">
                    <h3 className="font-black text-lg mb-1" style={{ color: "#1A1A2E" }}>{vendor.name}</h3>
                    <p className="text-xs font-semibold mb-3" style={{ color: "#4A0E8F" }}>{vendor.category}</p>
                    <div className="flex items-center justify-between">
                      <StarRating rating={vendor.rating} />
                      <span className="text-xs" style={{ color: "#9CA3AF" }}>
                        📍 {vendor.location}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-6 md:hidden">
            <Link href="/vendors">
              <button className="btn-primary w-full py-3 rounded-xl text-sm font-bold">View All Vendors →</button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 px-6" style={{ background: "white" }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-3xl font-black mb-1 section-title" style={{ color: "#1A1A2E" }}>Trending Products</h2>
              <p className="text-sm mt-4" style={{ color: "#9CA3AF" }}>What Lagos is shopping right now</p>
            </div>
            <Link href="/products">
              <button className="btn-primary px-6 py-3 rounded-xl text-sm font-bold hidden md:block">
                Shop All →
              </button>
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {featuredProducts.map((product) => (
              <Link key={product.id} href={`/product/${product.id}`}>
                <div className="product-card-hover bg-white rounded-2xl overflow-hidden cursor-pointer" style={{ boxShadow: "0 4px 20px rgba(74,14,143,0.08)", border: "1px solid #f0e8ff" }}>
                  <div className="relative overflow-hidden" style={{ height: "220px" }}>
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
                    <div className="absolute top-3 left-3 px-2 py-1 rounded-full text-xs font-bold" style={{ background: "rgba(74,14,143,0.85)", color: "white" }}>
                      {product.category}
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="font-bold text-sm mb-1 truncate" style={{ color: "#1A1A2E" }}>{product.name}</h4>
                    <p className="text-xs mb-2" style={{ color: "#9CA3AF" }}>{product.vendorName}</p>
                    <div className="flex items-center justify-between">
                      <span className="font-black text-base" style={{ color: "#4A0E8F" }}>
                        ₦{product.price.toLocaleString()}
                      </span>
                      <StarRating rating={product.rating} />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-6 md:hidden">
            <Link href="/products">
              <button className="btn-primary w-full py-3 rounded-xl text-sm font-bold">Shop All Products →</button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 px-6 vendora-gradient relative overflow-hidden">
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Are You a Fashion Vendor?
          </h2>
          <p className="text-lg mb-8" style={{ color: "rgba(255,255,255,0.75)" }}>
            Join hundreds of vendors already growing their business on Vendora. List your store for free and reach thousands of shoppers across Lagos.
          </p>
          <Link href="/contact">
            <button className="btn-gold px-10 py-4 rounded-2xl font-black text-base inline-block">
              List Your Store Today — It's Free
            </button>
          </Link>
        </div>
        <div className="absolute top-0 left-0 w-72 h-72 rounded-full opacity-10" style={{ background: "#D4A017", transform: "translate(-30%, -30%)" }} />
        <div className="absolute bottom-0 right-0 w-56 h-56 rounded-full opacity-10" style={{ background: "white", transform: "translate(20%, 30%)" }} />
      </section>
    </div>
  );
}
