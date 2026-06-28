import { useState } from "react";
import { Link, useLocation } from "wouter";
import Logo from "./logo";

export default function Navbar() {
  const [location] = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: "/", label: "HOME" },
    { href: "/products", label: "PRODUCTS" },
    { href: "/vendors", label: "VENDORS" },
    { href: "/pricing", label: "PRICING" },
    { href: "/contact", label: "CONTACT" },
  ];

  return (
    <nav
      style={{
        background: "linear-gradient(135deg, #2D0860 0%, #4A0E8F 100%)",
      }}
      className="sticky top-0 z-50 shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <Link href="/">
          <div className="flex items-center cursor-pointer">
            <Logo />
          </div>
        </Link>


        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              <span
                className="nav-link text-sm font-bold tracking-wider cursor-pointer"
                style={{
                  color:
                    location === link.href
                      ? "#F5C842"
                      : "rgba(255,255,255,0.85)",
                }}
              >
                {link.label}
              </span>
            </Link>
          ))}

          <Link href="/apply">
            <button className="btn-gold px-5 py-2 rounded-full text-sm font-bold">
              List Your Store
            </button>
          </Link>
        </div>


        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`hamburger-line ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`hamburger-line ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`hamburger-line ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>

      </div>


      {menuOpen && (
        <div
          className="md:hidden px-6 pb-6 flex flex-col gap-4"
          style={{
            borderTop: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              <span
                onClick={() => setMenuOpen(false)}
                className="block text-sm font-bold tracking-wider py-2 cursor-pointer"
              >
                {link.label}
              </span>
            </Link>
          ))}

          <Link href="/apply">
            <button
              onClick={() => setMenuOpen(false)}
              className="btn-gold px-5 py-2 rounded-full text-sm font-bold w-full"
            >
              List Your Store
            </button>
          </Link>
        </div>
      )}

    </nav>
  );
}