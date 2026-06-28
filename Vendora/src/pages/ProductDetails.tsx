import Logo from "../components/logo";
import { Link, useParams } from "wouter";
import { products, vendors } from "../data/mockData";

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

export default function ProductDetails() {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === Number(id));
  const vendor = vendors.find((v) => v.id === product?.vendorId);
  const related = products.filter((p) => p.category === product?.category && p.id !== product?.id).slice(0, 3);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center py-20">
        <div className="text-6xl mb-4">😕</div>
        <h2 className="text-2xl font-black mb-2" style={{ color: "#1A1A2E" }}>Product not found</h2>
        <Link href="/products">
          <button className="btn-primary mt-4 px-6 py-3 rounded-xl font-bold text-sm">Back to Products</button>
        </Link>
      </div>
    );
  }

  return (
    <div style={{ background: "#F9F5FF", minHeight: "100vh" }}>
      {/* Breadcrumb */}
      <div className="vendora-gradient py-10 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>
            <Link href="/"><span className="cursor-pointer hover:text-white">Home</span></Link>
            <span className="mx-2">/</span>
            <Link href="/products"><span className="cursor-pointer hover:text-white">Products</span></Link>
            <span className="mx-2">/</span>
            <span style={{ color: "#F5C842" }}>{product.name}</span>
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Main Product Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Image */}
          <div className="rounded-3xl overflow-hidden" style={{ boxShadow: "0 20px 60px rgba(74,14,143,0.15)", height: "480px" }}>
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          </div>

          {/* Details */}
          <div className="flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-4 w-fit" style={{ background: "rgba(74,14,143,0.1)", border: "1px solid rgba(74,14,143,0.2)" }}>
              <span className="text-xs font-bold" style={{ color: "#4A0E8F" }}>{product.category}</span>
            </div>

            <h1 className="text-4xl font-black mb-3" style={{ color: "#1A1A2E", lineHeight: "1.2" }}>{product.name}</h1>

            <div className="flex items-center gap-4 mb-4">
              <StarRating rating={product.rating} size="lg" />
              <span className="text-sm" style={{ color: "#9CA3AF" }}>({product.reviews} reviews)</span>
            </div>

            <p className="text-4xl font-black mb-5" style={{ color: "#4A0E8F" }}>
              ₦{product.price.toLocaleString()}
            </p>

            <p className="text-sm leading-relaxed mb-7" style={{ color: "#6B7280", lineHeight: "1.8" }}>
              {product.description}
            </p>

            {/* Availability */}
            <div className="flex items-center gap-2 mb-7">
              <span className={`w-3 h-3 rounded-full ${product.inStock ? "bg-green-500" : "bg-red-400"}`} />
              <span className="text-sm font-bold" style={{ color: product.inStock ? "#16A34A" : "#EF4444" }}>
                {product.inStock ? "In Stock" : "Out of Stock"}
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mb-4">
              <a
                href={`https://wa.me/${vendor?.phone?.replace(/\D/g, "")}?text=${encodeURIComponent(`Hello ${vendor?.name || ""}! I saw your *${product.name}* on Vendora (₦${product.price.toLocaleString()}). I'd like to order. Is it available?`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold flex-1 py-4 rounded-2xl font-black text-center text-sm"
              >
                📱 Order via WhatsApp
              </a>
              <Link href={`/vendor/${product.vendorId}`}>
                <button className="btn-primary flex-1 py-4 rounded-2xl font-bold text-sm w-full">
                  View Vendor Store →
                </button>
              </Link>
            </div>
            <p className="text-xs mb-4 text-center" style={{ color: "#9CA3AF" }}>
              Or{" "}
              <a
                href={`https://wa.me/${OWNER_WHATSAPP}?text=${encodeURIComponent(`Hello Vendora! I'm interested in *${product.name}* from ${vendor?.name || "a vendor"}. Can you help me?`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="underline font-semibold"
                style={{ color: "#4A0E8F" }}
              >
                contact us through Vendora
              </a>{" "}
              and we'll assist you
            </p>

            {/* Vendor Card */}
            {vendor && (
              <Link href={`/vendor/${vendor.id}`}>
                <div className="flex items-center gap-4 p-4 rounded-2xl cursor-pointer transition-all hover:shadow-md" style={{ background: "white", border: "1px solid #f0e8ff" }}>
                  <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                    <img src={vendor.image} alt={vendor.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-semibold mb-0.5" style={{ color: "#9CA3AF" }}>SOLD BY</p>
                    <p className="font-black text-sm" style={{ color: "#1A1A2E" }}>{vendor.name}</p>
                    <p className="text-xs" style={{ color: "#4A0E8F" }}>{vendor.location}</p>
                  </div>
                  {vendor.verified && (
                    <span className="badge-verified px-2 py-1 rounded-full text-xs font-bold">✓ Verified</span>
                  )}
                </div>
              </Link>
            )}
          </div>
        </div>

        {/* Related Products */}
        {related.length > 0 && (
          <div>
            <h2 className="text-2xl font-black mb-8 section-title" style={{ color: "#1A1A2E" }}>Related Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-4">
              {related.map((p) => (
                <Link key={p.id} href={`/product/${p.id}`}>
                  <div className="product-card-hover bg-white rounded-2xl overflow-hidden cursor-pointer" style={{ boxShadow: "0 4px 20px rgba(74,14,143,0.07)", border: "1px solid #f0e8ff" }}>
                    <div className="overflow-hidden" style={{ height: "200px" }}>
                      <img src={p.image} alt={p.name} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
                    </div>
                    <div className="p-4">
                      <h4 className="font-bold text-sm mb-1 truncate" style={{ color: "#1A1A2E" }}>{p.name}</h4>
                      <p className="font-black text-base" style={{ color: "#4A0E8F" }}>₦{p.price.toLocaleString()}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
