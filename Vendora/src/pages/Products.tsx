import Logo from "../components/logo";
import { useState, useEffect } from "react";
import { Link, useSearch } from "wouter";
import { products, categories } from "../data/mockData";

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

export default function Products() {
  const search = useSearch();
  const params = new URLSearchParams(search);
  const initialSearch = params.get("search") || "";

  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [activeCategory, setActiveCategory] = useState("All");
  const [sortBy, setSortBy] = useState("default");

  useEffect(() => {
    setSearchQuery(initialSearch);
  }, [initialSearch]);

  const filtered = products
    .filter((p) => {
      const matchSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.vendorName.toLowerCase().includes(searchQuery.toLowerCase());
      const matchCat = activeCategory === "All" || p.category === activeCategory;
      return matchSearch && matchCat;
    })
    .sort((a, b) => {
      if (sortBy === "price-asc") return a.price - b.price;
      if (sortBy === "price-desc") return b.price - a.price;
      if (sortBy === "rating") return b.rating - a.rating;
      return 0;
    });

  return (
    <div style={{ background: "#F9F5FF", minHeight: "100vh" }}>
      {/* Page Header */}
      <div className="vendora-gradient py-14 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-black text-white mb-2">All Products</h1>
          <p style={{ color: "rgba(255,255,255,0.7)" }}>
            <Link href="/"><span className="cursor-pointer hover:text-white">Home</span></Link>
            <span className="mx-2">/</span>
            <span style={{ color: "#F5C842" }}>Products</span>
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Search + Sort Bar */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 flex items-center gap-3 px-5 py-3.5 rounded-xl bg-white" style={{ border: "1px solid #e9d8ff", boxShadow: "0 2px 12px rgba(74,14,143,0.06)" }}>
            <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="#9CA3AF" viewBox="0 0 24 24" strokeWidth={2}>
              <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
            </svg>
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 text-sm bg-transparent"
              style={{ outline: "none", border: "none", color: "#1A1A2E" }}
            />
          </div>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-5 py-3.5 rounded-xl text-sm font-semibold bg-white"
            style={{ border: "1px solid #e9d8ff", color: "#4A0E8F", boxShadow: "0 2px 12px rgba(74,14,143,0.06)", outline: "none", cursor: "pointer" }}
          >
            <option value="default">Sort by: Default</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
          </select>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="category-pill px-5 py-2.5 rounded-full text-sm font-bold"
              style={{
                background: activeCategory === cat ? "linear-gradient(135deg, #4A0E8F, #6B21A8)" : "white",
                color: activeCategory === cat ? "white" : "#4A0E8F",
                border: activeCategory === cat ? "none" : "1px solid #e9d8ff",
                boxShadow: activeCategory === cat ? "0 4px 12px rgba(74,14,143,0.3)" : "none",
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Results count */}
        <p className="text-sm mb-6 font-semibold" style={{ color: "#9CA3AF" }}>
          Showing <span style={{ color: "#4A0E8F" }}>{filtered.length}</span> products
          {activeCategory !== "All" && ` in ${activeCategory}`}
          {searchQuery && ` for "${searchQuery}"`}
        </p>

        {/* Products Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-5xl mb-4">🔍</div>
            <h3 className="text-xl font-bold mb-2" style={{ color: "#1A1A2E" }}>No products found</h3>
            <p className="text-sm" style={{ color: "#9CA3AF" }}>Try a different search or category</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {filtered.map((product) => (
              <Link key={product.id} href={`/product/${product.id}`}>
                <div className="product-card-hover bg-white rounded-2xl overflow-hidden cursor-pointer" style={{ boxShadow: "0 4px 20px rgba(74,14,143,0.07)", border: "1px solid #f0e8ff" }}>
                  <div className="relative overflow-hidden" style={{ height: "220px" }}>
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
                    <div className="absolute top-3 left-3 px-2 py-1 rounded-full text-xs font-bold" style={{ background: "rgba(74,14,143,0.85)", color: "white" }}>
                      {product.category}
                    </div>
                    {!product.inStock && (
                      <div className="absolute inset-0 flex items-center justify-center" style={{ background: "rgba(0,0,0,0.5)" }}>
                        <span className="px-3 py-1 rounded-full text-xs font-bold bg-white" style={{ color: "#4A0E8F" }}>Sold Out</span>
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <h4 className="font-bold text-sm mb-1 truncate" style={{ color: "#1A1A2E" }}>{product.name}</h4>
                    <p className="text-xs mb-2 truncate" style={{ color: "#9CA3AF" }}>{product.vendorName}</p>
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
        )}
      </div>
    </div>
  );
}
