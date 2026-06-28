import Logo from "../components/logo";
import { useState } from "react";
import { Link } from "wouter";

const OWNER_WHATSAPP = "2348026570746";

const categories = [
  "Women's Fashion", "Men's Fashion", "Children's Wear", "Shoes & Footwear",
  "Bags & Accessories", "Ankara & Traditional Wear", "Sportswear", "Underwear & Lingerie",
  "Jewelry & Watches", "Fabric & Textiles", "Other",
];

const areas = [
  "Lekki", "Victoria Island", "Ikoyi", "Surulere", "Yaba", "Lagos Island",
  "Ikeja", "Ajah", "Abule Egba", "Alimosho", "Badagry", "Epe", "Ikorodu",
  "Mushin", "Oshodi", "Other",
];

export default function VendorApply() {
  const [form, setForm] = useState({
    storeName: "",
    ownerName: "",
    phone: "",
    instagram: "",
    category: "",
    area: "",
    plan: "Early Bird — ₦5,000/month",
    description: "",
    hasProducts: "yes",
  });
  const [submitted, setSubmitted] = useState(false);
  const [step, setStep] = useState(1);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const isStep1Valid = form.storeName && form.ownerName && form.phone;
  const isStep2Valid = form.category && form.area;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hello Vendora! 🏪 I want to list my store.\n\n*STORE APPLICATION*\n━━━━━━━━━━━━━━━━\n🏷️ *Store Name:* ${form.storeName}\n👤 *Owner Name:* ${form.ownerName}\n📱 *Phone:* ${form.phone}\n📸 *Instagram:* ${form.instagram || "Not provided"}\n\n📦 *Category:* ${form.category}\n📍 *Area:* ${form.area}, Lagos\n💰 *Plan:* ${form.plan}\n🛍️ *Has products ready:* ${form.hasProducts === "yes" ? "Yes" : "Not yet"}\n\n📝 *About the store:*\n${form.description || "—"}\n\nPlease send me payment details to get listed!`;
    window.open(`https://wa.me/${OWNER_WHATSAPP}?text=${encodeURIComponent(message)}`, "_blank");
    setSubmitted(true);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%", padding: "14px 16px", borderRadius: "12px",
    border: "1.5px solid #e9d8ff", fontSize: "0.875rem",
    color: "#1A1A2E", background: "white", outline: "none",
  };

  const labelStyle: React.CSSProperties = {
    display: "block", fontSize: "0.7rem", fontWeight: 700,
    textTransform: "uppercase", letterSpacing: "0.06em",
    color: "#4A0E8F", marginBottom: "8px",
  };

  return (
    <div style={{ background: "#F9F5FF", minHeight: "100vh" }}>
      {/* Header */}
      <div className="vendora-gradient py-16 px-6 text-center relative overflow-hidden">
        <div className="relative z-10 max-w-xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-5" style={{ background: "rgba(212,160,23,0.2)", border: "1px solid rgba(212,160,23,0.4)" }}>
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#D4A017" }} />
            <span className="text-xs font-bold tracking-widest" style={{ color: "#F5C842" }}>VENDOR APPLICATION</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
            List Your Store on <span style={{ color: "#F5C842" }}>Vendora</span>
          </h1>
          <p style={{ color: "rgba(255,255,255,0.75)" }}>
            Fill in your store details and we'll get you live within 24 hours of payment.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10" style={{ background: "#D4A017", transform: "translate(30%,-30%)" }} />
      </div>

      {/* Breadcrumb */}
      <div className="max-w-2xl mx-auto px-6 py-4">
        <p className="text-sm" style={{ color: "#6B7280" }}>
          <Link href="/"><span className="cursor-pointer hover:underline" style={{ color: "#4A0E8F" }}>Home</span></Link>
          <span className="mx-2">/</span>
          <Link href="/pricing"><span className="cursor-pointer hover:underline" style={{ color: "#4A0E8F" }}>Pricing</span></Link>
          <span className="mx-2">/</span>
          <span style={{ color: "#1A1A2E" }}>Apply</span>
        </p>
      </div>

      <div className="max-w-2xl mx-auto px-6 pb-20">
        {/* Steps indicator */}
        {!submitted && (
          <div className="flex items-center gap-2 mb-8">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center gap-2 flex-1">
                <div className="w-8 h-8 rounded-full flex items-center justify-center font-black text-sm flex-shrink-0" style={{
                  background: step >= s ? "linear-gradient(135deg, #4A0E8F, #6B21A8)" : "#f0e8ff",
                  color: step >= s ? "white" : "#9CA3AF",
                }}>
                  {step > s ? (
                    <svg className="w-4 h-4" fill="none" stroke="white" viewBox="0 0 24 24" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  ) : s}
                </div>
                <span className="text-xs font-bold hidden sm:block" style={{ color: step >= s ? "#4A0E8F" : "#9CA3AF" }}>
                  {s === 1 ? "Your Details" : s === 2 ? "Store Info" : "Plan & Submit"}
                </span>
                {s < 3 && <div className="flex-1 h-0.5 rounded-full" style={{ background: step > s ? "#4A0E8F" : "#f0e8ff" }} />}
              </div>
            ))}
          </div>
        )}

        <div className="bg-white rounded-3xl p-8" style={{ boxShadow: "0 10px 40px rgba(74,14,143,0.1)", border: "1px solid #f0e8ff" }}>
          {submitted ? (
            <div className="text-center py-10">
              <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-5" style={{ background: "#25D366" }}>
                <svg className="w-10 h-10" fill="white" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-black mb-3" style={{ color: "#1A1A2E" }}>Application Sent! 🎉</h3>
              <p className="text-sm mb-2" style={{ color: "#6B7280" }}>
                Your WhatsApp is now open with your full application pre-filled. Just press <strong>Send</strong>!
              </p>
              <p className="text-sm mb-2" style={{ color: "#6B7280" }}>
                We'll reply with our bank details within a few hours. Once you pay, <strong>{form.storeName}</strong> goes live in 24 hours.
              </p>
              <p className="text-xs mb-8" style={{ color: "#9CA3AF" }}>
                Didn't open?{" "}
                <a href={`https://wa.me/${OWNER_WHATSAPP}`} target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#4A0E8F" }}>
                  Click here to WhatsApp us
                </a>
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/pricing">
                  <button className="btn-primary flex-1 py-3 rounded-xl font-bold text-sm w-full">View Plans</button>
                </Link>
                <Link href="/">
                  <button className="flex-1 py-3 rounded-xl font-bold text-sm w-full" style={{ border: "1.5px solid #e9d8ff", color: "#4A0E8F" }}>Back to Home</button>
                </Link>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              {/* Step 1: Personal details */}
              {step === 1 && (
                <div>
                  <h3 className="text-xl font-black mb-1" style={{ color: "#1A1A2E" }}>Your Personal Details</h3>
                  <p className="text-xs mb-6" style={{ color: "#9CA3AF" }}>Tell us who you are so we can reach you</p>
                  <div className="space-y-5">
                    <div>
                      <label style={labelStyle}>Store / Business Name *</label>
                      <input type="text" name="storeName" value={form.storeName} onChange={handleChange} required placeholder="e.g. Amaka's Boutique" style={inputStyle} />
                    </div>
                    <div>
                      <label style={labelStyle}>Your Full Name *</label>
                      <input type="text" name="ownerName" value={form.ownerName} onChange={handleChange} required placeholder="e.g. Amaka Okonkwo" style={inputStyle} />
                    </div>
                    <div>
                      <label style={labelStyle}>WhatsApp / Phone Number *</label>
                      <input type="tel" name="phone" value={form.phone} onChange={handleChange} required placeholder="e.g. 08012345678" style={inputStyle} />
                      <p className="text-xs mt-1" style={{ color: "#9CA3AF" }}>We'll use this to confirm your payment and set you up</p>
                    </div>
                    <div>
                      <label style={labelStyle}>Instagram Handle (optional)</label>
                      <input type="text" name="instagram" value={form.instagram} onChange={handleChange} placeholder="e.g. @amakaboutique" style={inputStyle} />
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    disabled={!isStep1Valid}
                    className="w-full py-4 rounded-2xl font-black text-sm mt-8 transition-all"
                    style={{ background: isStep1Valid ? "linear-gradient(135deg, #4A0E8F, #6B21A8)" : "#f0e8ff", color: isStep1Valid ? "white" : "#9CA3AF", cursor: isStep1Valid ? "pointer" : "not-allowed" }}
                  >
                    Next — Store Info →
                  </button>
                </div>
              )}

              {/* Step 2: Store info */}
              {step === 2 && (
                <div>
                  <h3 className="text-xl font-black mb-1" style={{ color: "#1A1A2E" }}>Your Store Details</h3>
                  <p className="text-xs mb-6" style={{ color: "#9CA3AF" }}>Help buyers find you on Vendora</p>
                  <div className="space-y-5">
                    <div>
                      <label style={labelStyle}>Product Category *</label>
                      <select name="category" value={form.category} onChange={handleChange} required style={{ ...inputStyle, cursor: "pointer" }}>
                        <option value="">Select a category…</option>
                        {categories.map((c) => <option key={c} value={c}>{c}</option>)}
                      </select>
                    </div>
                    <div>
                      <label style={labelStyle}>Your Area in Lagos *</label>
                      <select name="area" value={form.area} onChange={handleChange} required style={{ ...inputStyle, cursor: "pointer" }}>
                        <option value="">Select your area…</option>
                        {areas.map((a) => <option key={a} value={a}>{a}</option>)}
                      </select>
                    </div>
                    <div>
                      <label style={labelStyle}>Do you have products ready to list?</label>
                      <div className="flex gap-3">
                        {["yes", "no"].map((v) => (
                          <label key={v} className="flex items-center gap-2 cursor-pointer flex-1 p-3 rounded-xl" style={{ border: `1.5px solid ${form.hasProducts === v ? "#4A0E8F" : "#e9d8ff"}`, background: form.hasProducts === v ? "#F9F5FF" : "white" }}>
                            <input type="radio" name="hasProducts" value={v} checked={form.hasProducts === v} onChange={handleChange} className="accent-purple-700" />
                            <span className="text-sm font-semibold" style={{ color: "#1A1A2E" }}>{v === "yes" ? "Yes, ready to go!" : "Not yet, soon"}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label style={labelStyle}>Brief Description of Your Store</label>
                      <textarea name="description" value={form.description} onChange={handleChange} rows={3} placeholder="e.g. We sell affordable women's Ankara dresses and accessories. Based in Surulere, Lagos." style={{ ...inputStyle, resize: "none" }} />
                    </div>
                  </div>
                  <div className="flex gap-3 mt-8">
                    <button type="button" onClick={() => setStep(1)} className="flex-1 py-4 rounded-2xl font-bold text-sm" style={{ border: "1.5px solid #e9d8ff", color: "#4A0E8F" }}>
                      ← Back
                    </button>
                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      disabled={!isStep2Valid}
                      className="flex-1 py-4 rounded-2xl font-black text-sm transition-all"
                      style={{ background: isStep2Valid ? "linear-gradient(135deg, #4A0E8F, #6B21A8)" : "#f0e8ff", color: isStep2Valid ? "white" : "#9CA3AF", cursor: isStep2Valid ? "pointer" : "not-allowed" }}
                    >
                      Next — Choose Plan →
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: Plan */}
              {step === 3 && (
                <div>
                  <h3 className="text-xl font-black mb-1" style={{ color: "#1A1A2E" }}>Choose Your Plan</h3>
                  <p className="text-xs mb-6" style={{ color: "#9CA3AF" }}>Pick a subscription plan to get listed</p>

                  <div className="space-y-4 mb-6">
                    {[
                      { value: "Early Bird — ₦5,000/month", label: "Early Bird", price: "₦5,000/month", note: "Only 7 slots left! First 10 vendors only.", highlight: true },
                      { value: "Standard — ₦8,000/month", label: "Standard", price: "₦8,000/month", note: "Available to all vendors anytime.", highlight: false },
                    ].map((p) => (
                      <label key={p.value} className="flex items-start gap-4 cursor-pointer p-4 rounded-2xl transition-all" style={{ border: `2px solid ${form.plan === p.value ? (p.highlight ? "#D4A017" : "#4A0E8F") : "#e9d8ff"}`, background: form.plan === p.value ? (p.highlight ? "#FFF8E7" : "#F9F5FF") : "white" }}>
                        <input type="radio" name="plan" value={p.value} checked={form.plan === p.value} onChange={handleChange} className="mt-1 accent-purple-700" />
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <span className="font-black text-sm" style={{ color: "#1A1A2E" }}>{p.label}</span>
                            <span className="font-black text-base" style={{ color: p.highlight ? "#D4A017" : "#4A0E8F" }}>{p.price}</span>
                          </div>
                          <p className="text-xs mt-1" style={{ color: "#9CA3AF" }}>{p.note}</p>
                        </div>
                      </label>
                    ))}
                  </div>

                  {/* Summary box */}
                  <div className="p-4 rounded-2xl mb-6" style={{ background: "#F9F5FF", border: "1px solid #e9d8ff" }}>
                    <p className="text-xs font-black uppercase tracking-wide mb-3" style={{ color: "#4A0E8F" }}>Application Summary</p>
                    <div className="space-y-1.5 text-xs" style={{ color: "#374151" }}>
                      <p><span style={{ color: "#9CA3AF" }}>Store:</span> {form.storeName}</p>
                      <p><span style={{ color: "#9CA3AF" }}>Owner:</span> {form.ownerName}</p>
                      <p><span style={{ color: "#9CA3AF" }}>Phone:</span> {form.phone}</p>
                      <p><span style={{ color: "#9CA3AF" }}>Category:</span> {form.category}</p>
                      <p><span style={{ color: "#9CA3AF" }}>Area:</span> {form.area}, Lagos</p>
                      <p><span style={{ color: "#9CA3AF" }}>Plan:</span> {form.plan}</p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button type="button" onClick={() => setStep(2)} className="flex-1 py-4 rounded-2xl font-bold text-sm" style={{ border: "1.5px solid #e9d8ff", color: "#4A0E8F" }}>
                      ← Back
                    </button>
                    <button type="submit" className="flex-1 py-4 rounded-2xl font-black text-sm flex items-center justify-center gap-2" style={{ background: "linear-gradient(135deg, #D4A017, #F5C842)", color: "#1A1A2E" }}>
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                      Send Application on WhatsApp →
                    </button>
                  </div>
                </div>
              )}
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
