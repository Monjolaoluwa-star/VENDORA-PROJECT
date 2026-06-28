import { Link } from "wouter";

export default function Footer() {
  return (
    <footer style={{ background: "linear-gradient(135deg, #1A0040 0%, #2D0860 100%)" }}>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: "linear-gradient(135deg, #D4A017, #F5C842)" }}>
                <span className="text-lg font-black" style={{ color: "#2D0860" }}>V</span>
              </div>
              <span className="text-2xl font-black tracking-wide text-white">VENDORA</span>
            </div>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.6)" }}>
              Your trusted marketplace for discovering the best fashion vendors in Lagos.
              Quality products, verified sellers, seamless shopping.
            </p>
            <div className="flex gap-3">
              {["Instagram", "Twitter", "WhatsApp"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="px-4 py-2 rounded-full text-xs font-bold transition-all hover:opacity-80"
                  style={{ background: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.8)" }}
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-sm tracking-widest mb-5" style={{ color: "#F5C842" }}>QUICK LINKS</h4>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "Products", href: "/products" },
                { label: "Vendors", href: "/vendors" },
                { label: "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>
                    <span className="text-sm cursor-pointer transition-colors hover:text-white" style={{ color: "rgba(255,255,255,0.6)" }}>
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-bold text-sm tracking-widest mb-5" style={{ color: "#F5C842" }}>CATEGORIES</h4>
            <ul className="space-y-3">
              {["Women's Fashion", "Men's Fashion", "Shoes", "Bags", "Accessories", "African Wear"].map((cat) => (
                <li key={cat}>
                  <Link href="/products">
                    <span className="text-sm cursor-pointer transition-colors hover:text-white" style={{ color: "rgba(255,255,255,0.6)" }}>
                      {cat}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4" style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
            © 2026 Vendora. All Rights Reserved.
          </p>
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
            Made with love in Lagos, Nigeria 🇳🇬
          </p>
        </div>
      </div>
    </footer>
  );
}
