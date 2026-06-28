import Logo from "../components/logo";
import { useState } from "react";
import { Link } from "wouter";

const OWNER_WHATSAPP = "2348026570746";

const plans = [
  {
    name: "Early Bird",
    price: 5000,
    highlight: true,
    badge: "LIMITED — 10 SLOTS ONLY",
    icon: "⭐",
    slotsTotal: 10,
    slotsLeft: 7,
    description: "Perfect for new vendors ready to launch fast and save money.",
    features: [
      "Full vendor store page",
      "Unlimited product listings",
      "Direct buyer WhatsApp link",
      "Featured on homepage",
      "Customer reviews & ratings",
      "Vendora verified badge",
      "WhatsApp support from us",
    ],
  },
  {
    name: "Standard",
    price: 8000,
    highlight: false,
    badge: "MOST POPULAR",
    icon: "🚀",
    slotsTotal: null,
    slotsLeft: null,
    description: "The go-to plan for established Lagos fashion vendors.",
    features: [
      "Full vendor store page",
      "Unlimited product listings",
      "Direct buyer WhatsApp link",
      "Customer reviews & ratings",
      "Vendora verified badge",
      "WhatsApp support from us",
      "Monthly performance insights",
    ],
  },
];

const faqs = [
  {
    q: "How do I pay my subscription?",
    a: "Simply click the button and send us a WhatsApp message. We'll confirm your slot and share our bank account details for a direct bank transfer. No card or app needed.",
  },
  {
    q: "Can I cancel my subscription?",
    a: "Yes, you can cancel anytime before your next billing date. Your store stays live until the end of your paid period.",
  },
  {
    q: "What happens after the 10 Early Bird slots are taken?",
    a: "New vendors will only be able to join at the Standard ₦8,000/month rate. If you're seeing this, act fast — slots are limited!",
  },
  {
    q: "Do I need a physical store?",
    a: "No! You can be an online-only vendor. All you need is a phone and your products. We handle the platform, you handle the sales.",
  },
  {
    q: "How long does it take to get listed?",
    a: "Your store goes live within 24 hours of payment confirmation. You'll get a WhatsApp message from us with your store link.",
  },
  {
    q: "Will buyers contact me directly?",
    a: "Yes! Buyers can WhatsApp you directly from your store page. You can also receive their messages through us if you prefer.",
  },
];

const testimonials = [
  { name: "Chioma A.", store: "Chioma's Boutique", text: "I got my first 3 orders within a week of listing. Vendora is real!", avatar: "CA" },
  { name: "Tunde F.", store: "TF Styles", text: "The Early Bird price is a steal. I was spending more on Instagram ads.", avatar: "TF" },
  { name: "Ngozi M.", store: "Ngozi Fashion House", text: "Buyers message me directly on WhatsApp. It's so easy to close sales.", avatar: "NM" },
];

export default function Pricing() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubscribe = (planName: string, price: number) => {
    const message = `Hello Vendora! 👋\n\nI'd like to subscribe to the *${planName} Plan* (₦${price.toLocaleString()}/month).\n\nPlease send me your bank details so I can make payment.\n\nThank you!`;
    window.open(`https://wa.me/${OWNER_WHATSAPP}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <div style={{ background: "#F9F5FF", minHeight: "100vh" }}>
      {/* Header */}
      <div className="vendora-gradient py-16 px-6 text-center relative overflow-hidden">
        <div className="relative z-10 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{ background: "rgba(212,160,23,0.2)", border: "1px solid rgba(212,160,23,0.4)" }}>
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#D4A017" }} />
            <span className="text-xs font-bold tracking-widest" style={{ color: "#F5C842" }}>LIST YOUR STORE ON VENDORA</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
            Simple, Honest <span style={{ color: "#F5C842" }}>Pricing</span>
          </h1>
          <p className="text-lg" style={{ color: "rgba(255,255,255,0.75)" }}>
            Join Lagos' fastest-growing fashion marketplace. Start selling to thousands of shoppers today.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-72 h-72 rounded-full opacity-10" style={{ background: "#D4A017", transform: "translate(30%, -30%)" }} />
        <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full opacity-10" style={{ background: "#F5C842", transform: "translate(-30%, 30%)" }} />
      </div>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 py-4">
        <p className="text-sm" style={{ color: "#6B7280" }}>
          <Link href="/"><span className="cursor-pointer hover:underline" style={{ color: "#4A0E8F" }}>Home</span></Link>
          <span className="mx-2">/</span>
          <span style={{ color: "#1A1A2E" }}>Pricing</span>
        </p>
      </div>

      {/* Urgency Banner */}
      <div className="max-w-4xl mx-auto px-6 mb-10">
        <div className="flex items-center gap-3 p-4 rounded-2xl" style={{ background: "#FFF8E7", border: "1.5px solid #F5C842" }}>
          <span className="text-2xl">🔥</span>
          <p className="text-sm font-semibold" style={{ color: "#1A1A2E" }}>
            Only <span className="font-black" style={{ color: "#D4A017" }}>7 Early Bird slots remaining</span> at ₦5,000/month. After these are gone, the price goes to ₦8,000 permanently.
          </p>
        </div>
      </div>

      {/* Plans */}
      <div className="max-w-4xl mx-auto px-6 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="rounded-3xl overflow-hidden"
              style={{
                boxShadow: plan.highlight ? "0 20px 60px rgba(212,160,23,0.25)" : "0 10px 40px rgba(74,14,143,0.12)",
                border: plan.highlight ? "2px solid #D4A017" : "2px solid #4A0E8F",
                background: plan.highlight ? "linear-gradient(135deg, #D4A017, #F5C842)" : "linear-gradient(135deg, #4A0E8F, #6B21A8)",
              }}
            >
              {/* Plan header */}
              <div className="p-6 pb-5">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-black tracking-widest px-3 py-1 rounded-full" style={{ background: "rgba(0,0,0,0.15)", color: plan.highlight ? "#1A1A2E" : "white" }}>
                    {plan.badge}
                  </span>
                  <span className="text-2xl">{plan.icon}</span>
                </div>
                <h3 className="text-2xl font-black mb-1" style={{ color: plan.highlight ? "#1A1A2E" : "white" }}>
                  {plan.name}
                </h3>
                <p className="text-xs mb-4" style={{ color: plan.highlight ? "rgba(26,26,46,0.7)" : "rgba(255,255,255,0.7)" }}>
                  {plan.description}
                </p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-black" style={{ color: plan.highlight ? "#1A1A2E" : "white" }}>₦{plan.price.toLocaleString()}</span>
                  <span className="text-sm font-semibold" style={{ color: plan.highlight ? "rgba(26,26,46,0.6)" : "rgba(255,255,255,0.6)" }}>/month</span>
                </div>
                {plan.slotsLeft !== null && (
                  <div className="mt-3">
                    <div className="flex justify-between text-xs mb-1" style={{ color: "rgba(26,26,46,0.6)" }}>
                      <span>Slots filling up</span>
                      <span className="font-bold">{plan.slotsLeft}/{plan.slotsTotal} left</span>
                    </div>
                    <div className="rounded-full h-2" style={{ background: "rgba(0,0,0,0.15)" }}>
                      <div className="h-2 rounded-full" style={{ width: `${((plan.slotsTotal! - plan.slotsLeft) / plan.slotsTotal!) * 100}%`, background: "#1A1A2E", opacity: 0.4 }} />
                    </div>
                  </div>
                )}
              </div>

              {/* Features */}
              <div className="bg-white p-6 flex-1">
                <ul className="space-y-3 mb-6">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm" style={{ color: "#374151" }}>
                      <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: plan.highlight ? "linear-gradient(135deg, #D4A017, #F5C842)" : "linear-gradient(135deg, #4A0E8F, #6B21A8)" }}>
                        <svg className="w-3 h-3" fill="none" stroke="white" viewBox="0 0 24 24" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => handleSubscribe(plan.name, plan.price)}
                  className="w-full py-4 rounded-2xl font-black text-sm transition-all hover:opacity-90 hover:shadow-lg"
                  style={{
                    background: plan.highlight
                      ? "linear-gradient(135deg, #D4A017, #F5C842)"
                      : "linear-gradient(135deg, #4A0E8F, #6B21A8)",
                    color: plan.highlight ? "#1A1A2E" : "white",
                  }}
                >
                  📱 WhatsApp Us to Subscribe →
                </button>
                <p className="text-xs text-center mt-3" style={{ color: "#9CA3AF" }}>
                  We'll send our bank details — pay by transfer
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* How it works */}
        <div className="mt-10 bg-white rounded-3xl p-8" style={{ border: "1px solid #f0e8ff", boxShadow: "0 4px 20px rgba(74,14,143,0.06)" }}>
          <h3 className="text-lg font-black text-center mb-6" style={{ color: "#1A1A2E" }}>How to Get Listed — 3 Simple Steps</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { step: "1", title: "WhatsApp Us", desc: "Click the button above and we'll receive your subscription request directly on WhatsApp." },
              { step: "2", title: "Pay by Transfer", desc: "We'll send our bank account details. Transfer your subscription fee — no card or app needed." },
              { step: "3", title: "Go Live in 24hrs", desc: "Send us your store details and products. Your store goes live on Vendora within 24 hours." },
            ].map((s) => (
              <div key={s.step} className="text-center">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 font-black text-lg text-white" style={{ background: "linear-gradient(135deg, #4A0E8F, #6B21A8)" }}>
                  {s.step}
                </div>
                <h4 className="font-black text-sm mb-1" style={{ color: "#1A1A2E" }}>{s.title}</h4>
                <p className="text-xs leading-relaxed" style={{ color: "#6B7280" }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="max-w-4xl mx-auto px-6 mb-16">
        <h2 className="text-2xl font-black text-center mb-8 section-title" style={{ color: "#1A1A2E" }}>
          What Our Vendors Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-white rounded-2xl p-6" style={{ boxShadow: "0 4px 20px rgba(74,14,143,0.08)", border: "1px solid #f0e8ff" }}>
              <p className="text-sm leading-relaxed mb-5 italic" style={{ color: "#374151" }}>"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center font-black text-sm text-white" style={{ background: "linear-gradient(135deg, #4A0E8F, #D4A017)" }}>
                  {t.avatar}
                </div>
                <div>
                  <p className="font-black text-sm" style={{ color: "#1A1A2E" }}>{t.name}</p>
                  <p className="text-xs" style={{ color: "#9CA3AF" }}>{t.store}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div className="max-w-2xl mx-auto px-6 mb-16">
        <h2 className="text-2xl font-black text-center mb-8 section-title" style={{ color: "#1A1A2E" }}>
          Frequently Asked Questions
        </h2>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-2xl overflow-hidden" style={{ border: "1px solid #f0e8ff", boxShadow: "0 2px 10px rgba(74,14,143,0.05)" }}>
              <button
                className="w-full text-left px-6 py-4 flex items-center justify-between gap-4"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <span className="font-bold text-sm" style={{ color: "#1A1A2E" }}>{faq.q}</span>
                <span className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all" style={{ background: openFaq === i ? "#4A0E8F" : "#f0e8ff", color: openFaq === i ? "white" : "#4A0E8F", transform: openFaq === i ? "rotate(45deg)" : "none" }}>
                  +
                </span>
              </button>
              {openFaq === i && (
                <div className="px-6 pb-5">
                  <p className="text-sm leading-relaxed" style={{ color: "#6B7280", lineHeight: "1.8" }}>{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Final CTA */}
      <div className="max-w-4xl mx-auto px-6 mb-16">
        <div className="vendora-gradient rounded-3xl p-10 text-center relative overflow-hidden">
          <h3 className="text-2xl font-black text-white mb-3">Ready to Start Selling on Vendora?</h3>
          <p className="mb-8 text-lg" style={{ color: "rgba(255,255,255,0.75)" }}>
            Don't miss your Early Bird slot. Only 7 left at ₦5,000/month.
          </p>
          <button
            onClick={() => handleSubscribe("Early Bird", 5000)}
            className="btn-gold px-10 py-4 rounded-2xl font-black text-base inline-block"
          >
            📱 Claim My ₦5,000 Slot on WhatsApp →
          </button>
          <p className="text-xs mt-4" style={{ color: "rgba(255,255,255,0.5)" }}>
            No card needed. Pay by bank transfer. Store goes live in 24 hours.
          </p>
          <div className="absolute top-0 right-0 w-56 h-56 rounded-full opacity-10" style={{ background: "#D4A017", transform: "translate(30%, -30%)" }} />
        </div>
      </div>
    </div>
  );
}
