import Logo from "../components/logo";
import { useState } from "react";
import { Link } from "wouter";
import { vendors } from "../data/mockData";

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

const vendorCategories = ["All", "Women's Fashion", "Men's Fashion", "Shoes & Accessories", "African Wear", "Bags", "Accessories"];

export default function Vendors() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = vendors.filter((v) => {
    const matchSearch = v.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      v.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchCat = activeCategory === "All" || v.category === activeCategory;
    return matchSearch && matchCat;
  });

  return (
    <div style={{ background: "#F9F5FF", minHeight: "100vh" }}>
      {/* Header */}
      <div className="vendora-gradient py-14 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-black text-white mb-2">All Vendors</h1>
          <p style={{ color: "rgba(255,255,255,0.7)" }}>
            <Link href="/"><span className="cursor-pointer hover:text-white">Home</span></Link>
            <span className="mx-2">/</span>
            <span style={{ color: "#F5C842" }}>Vendors</span>
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Search */}
        <div className="flex items-center gap-3 px-5 py-4 rounded-2xl bg-white mb-6" style={{ border: "1px solid #e9d8ff", boxShadow: "0 2px 12px rgba(74,14,143,0.06)" }}>
          <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="#9CA3AF" viewBox="0 0 24 24" strokeWidth={2}>
            <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
          </svg>
          <input
            type="text"
            placeholder="Search vendors by name or location..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 text-sm bg-transparent"
            style={{ outline: "none", border: "none", color: "#1A1A2E" }}
          />
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          {vendorCategories.map((cat) => (
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

        <p className="text-sm mb-6 font-semibold" style={{ color: "#9CA3AF" }}>
          Showing <span style={{ color: "#4A0E8F" }}>{filtered.length}</span> vendors
        </p>

        {/* Vendors Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-5xl mb-4">🏪</div>
            <h3 className="text-xl font-bold mb-2" style={{ color: "#1A1A2E" }}>No vendors found</h3>
            <p className="text-sm" style={{ color: "#9CA3AF" }}>Try a different search or category</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((vendor) => (
              <Link key={vendor.id} href={`/vendor/${vendor.id}`}>
                <div className="vendor-card-hover bg-white rounded-2xl overflow-hidden cursor-pointer" style={{ boxShadow: "0 4px 20px rgba(74,14,143,0.08)", border: "1px solid #f0e8ff" }}>
                  {/* Cover Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img src={vendor.image} alt={vendor.name} className="w-full h-full object-cover" />
                    <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(45,8,96,0.8), transparent)" }} />
                    {vendor.verified && (
                      <span className="badge-verified absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                        ✓ Verified
                      </span>
                    )}
                    <div className="absolute bottom-3 left-4">
                      <h3 className="font-black text-lg text-white">{vendor.name}</h3>
                      <p className="text-xs" style={{ color: "rgba(255,255,255,0.8)" }}>{vendor.category}</p>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="p-5">
                    <div className="flex items-center justify-between mb-3">
                      <StarRating rating={vendor.rating} />
                      <span className="text-xs font-semibold" style={{ color: "#9CA3AF" }}>
                        ({vendor.reviews} reviews)
                      </span>
                    </div>

                    <div className="flex items-center gap-4 text-xs mb-4" style={{ color: "#9CA3AF" }}>
                      <span>📍 {vendor.location}</span>
                      <span>🛍️ {vendor.products} products</span>
                    </div>

                    <p className="text-xs leading-relaxed line-clamp-2 mb-5" style={{ color: "#6B7280" }}>
                      {vendor.description}
                    </p>

                    <div className="flex gap-2">
                      <button className="btn-primary flex-1 py-2.5 rounded-xl text-xs font-bold">
                        View Store →
                      </button>
                      <a
                        href={`https://wa.me/${vendor.phone.replace(/\D/g, "")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="px-4 py-2.5 rounded-xl text-xs font-bold transition-all hover:opacity-90 flex items-center gap-1"
                        style={{ background: "#25D366", color: "white" }}
                      >
                        📱 WhatsApp
                      </a>
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
