import Logo from "../components/logo";
import { Link, useParams } from "wouter";
import { vendors, products } from "../data/mockData";

const OWNER_WHATSAPP = "2348026570746";

function StarRating({ rating, size = "sm" }: { rating: number; size?: "sm" | "lg" }) {
  const s = size === "lg" ? "w-5 h-5" : "w-3.5 h-3.5";
  return (
    <span className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((i) => (
        <svg key={i} className={s} fill={i <= Math.round(rating) ? "#D4A017" : "#e2e8f0"} viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      <span className={`ml-1 font-bold ${size === "lg" ? "text-base" : "text-xs"}`} style={{ color: "#6B7280" }}>{rating} / 5</span>
    </span>
  );
}

export default function VendorProfile() {
  const { id } = useParams<{ id: string }>();
  const vendor = vendors.find((v) => v.id === Number(id));
  const vendorProducts = products.filter((p) => p.vendorId === Number(id));

  if (!vendor) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center py-20">
        <div className="text-6xl mb-4">🏪</div>
        <h2 className="text-2xl font-black mb-2" style={{ color: "#1A1A2E" }}>Vendor not found</h2>
        <Link href="/vendors">
          <button className="btn-primary mt-4 px-6 py-3 rounded-xl font-bold text-sm">Back to Vendors</button>
        </Link>
      </div>
    );
  }

  const stats = [
    { value: `${vendor.products}+`, label: "Products" },
    { value: vendor.rating.toString(), label: "Rating" },
    { value: vendor.reviews.toString(), label: "Reviews" },
    { value: vendor.verified ? "Yes" : "No", label: "Verified" },
  ];

  return (
    <div style={{ background: "#F9F5FF", minHeight: "100vh" }}>
      {/* Hero cover */}
      <div className="relative h-72 overflow-hidden">
        <img src={vendor.image} alt={vendor.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(26,0,64,0.92) 0%, rgba(45,8,96,0.4) 60%, transparent 100%)" }} />
        <div className="absolute bottom-6 left-6 right-6">
          <div className="max-w-7xl mx-auto flex items-end justify-between gap-4 flex-wrap">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-4xl font-black text-white">{vendor.name}</h1>
                {vendor.verified && (
                  <span className="badge-verified px-3 py-1 rounded-full text-xs font-bold">✓ Verified</span>
                )}
              </div>
              <p className="text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>
                <Link href="/"><span className="cursor-pointer hover:text-white">Home</span></Link>
                <span className="mx-2">/</span>
                <Link href="/vendors"><span className="cursor-pointer hover:text-white">Vendors</span></Link>
                <span className="mx-2">/</span>
                <span style={{ color: "#F5C842" }}>{vendor.name}</span>
              </p>
            </div>
            <div className="flex gap-3 flex-wrap">
              <a
                href={`https://wa.me/${vendor.phone.replace(/\D/g, "")}?text=${encodeURIComponent(`Hello ${vendor.name}! I found your store on Vendora and I'm interested in your products. Can we talk?`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl font-bold text-sm flex items-center gap-2 transition-opacity hover:opacity-90"
                style={{ background: "#25D366", color: "white" }}
              >
                📱 Chat Vendor on WhatsApp
              </a>
              <a
                href={`https://wa.me/${OWNER_WHATSAPP}?text=${encodeURIComponent(`Hello Vendora! I'd like to ask about ${vendor.name}'s store and products.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl font-bold text-sm flex items-center gap-2 transition-opacity hover:opacity-90"
                style={{ background: "rgba(255,255,255,0.15)", color: "white", border: "1.5px solid rgba(255,255,255,0.4)" }}
              >
                💬 Contact via Vendora
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: About */}
          <div className="lg:col-span-1">
            {/* Stats */}
            <div className="bg-white rounded-2xl p-6 mb-6" style={{ boxShadow: "0 4px 20px rgba(74,14,143,0.08)", border: "1px solid #f0e8ff" }}>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center p-3 rounded-xl" style={{ background: "#F9F5FF" }}>
                    <p className="text-2xl font-black mb-1" style={{ color: "#4A0E8F" }}>{stat.value}</p>
                    <p className="text-xs font-semibold uppercase tracking-wide" style={{ color: "#9CA3AF" }}>{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* About */}
            <div className="bg-white rounded-2xl p-6 mb-6" style={{ boxShadow: "0 4px 20px rgba(74,14,143,0.08)", border: "1px solid #f0e8ff" }}>
              <h3 className="font-black text-base mb-3" style={{ color: "#1A1A2E" }}>About This Store</h3>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "#6B7280", lineHeight: "1.8" }}>
                {vendor.description}
              </p>
              <div className="space-y-2.5 text-sm" style={{ color: "#6B7280" }}>
                <div className="flex items-center gap-2">
                  <span>📍</span>
                  <span>{vendor.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>📱</span>
                  <span>{vendor.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>📸</span>
                  <span>{vendor.instagram}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>🏷️</span>
                  <span>{vendor.category}</span>
                </div>
              </div>
            </div>

            {/* Rating */}
            <div className="bg-white rounded-2xl p-6" style={{ boxShadow: "0 4px 20px rgba(74,14,143,0.08)", border: "1px solid #f0e8ff" }}>
              <h3 className="font-black text-base mb-4" style={{ color: "#1A1A2E" }}>Customer Rating</h3>
              <div className="flex items-center gap-4 mb-4">
                <p className="text-5xl font-black" style={{ color: "#4A0E8F" }}>{vendor.rating}</p>
                <div>
                  <StarRating rating={vendor.rating} size="lg" />
                  <p className="text-xs mt-1" style={{ color: "#9CA3AF" }}>Based on {vendor.reviews} reviews</p>
                </div>
              </div>
              {[5, 4, 3, 2, 1].map((star) => (
                <div key={star} className="flex items-center gap-2 mb-1.5">
                  <span className="text-xs w-3" style={{ color: "#9CA3AF" }}>{star}</span>
                  <div className="flex-1 rounded-full h-2" style={{ background: "#f0e8ff" }}>
                    <div
                      className="h-2 rounded-full"
                      style={{
                        width: `${star === 5 ? 65 : star === 4 ? 20 : star === 3 ? 10 : star === 2 ? 3 : 2}%`,
                        background: "linear-gradient(135deg, #D4A017, #F5C842)",
                      }}
                    />
                  </div>
                  <span className="text-xs w-8 text-right" style={{ color: "#9CA3AF" }}>
                    {star === 5 ? "65%" : star === 4 ? "20%" : star === 3 ? "10%" : star === 2 ? "3%" : "2%"}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Products */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-black mb-6 section-title" style={{ color: "#1A1A2E" }}>
              Products from {vendor.name}
            </h2>

            {vendorProducts.length === 0 ? (
              <div className="text-center py-16 bg-white rounded-2xl" style={{ border: "1px solid #f0e8ff" }}>
                <div className="text-4xl mb-3">📦</div>
                <p className="font-bold" style={{ color: "#1A1A2E" }}>No products listed yet</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-4">
                {vendorProducts.map((product) => (
                  <Link key={product.id} href={`/product/${product.id}`}>
                    <div className="product-card-hover bg-white rounded-2xl overflow-hidden cursor-pointer" style={{ boxShadow: "0 4px 20px rgba(74,14,143,0.07)", border: "1px solid #f0e8ff" }}>
                      <div className="overflow-hidden" style={{ height: "200px" }}>
                        <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
                      </div>
                      <div className="p-4">
                        <h4 className="font-bold text-sm mb-1 truncate" style={{ color: "#1A1A2E" }}>{product.name}</h4>
                        <div className="flex items-center justify-between mt-2">
                          <span className="font-black text-base" style={{ color: "#4A0E8F" }}>₦{product.price.toLocaleString()}</span>
                          <span className="flex items-center gap-0.5">
                            <svg className="w-3.5 h-3.5" fill="#D4A017" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <span className="text-xs font-semibold" style={{ color: "#6B7280" }}>{product.rating}</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
