import Logo from "../components/logo";
import { useState } from "react";
import { Link } from "wouter";

const OWNER_WHATSAPP = "2348026570746";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    subject: "general",
    message: "",
    sendToVendor: false,
    vendorName: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subjectLabels: Record<string, string> = {
      general: "General Enquiry",
      vendor: "List My Store",
      support: "Customer Support",
      complaint: "Complaint / Feedback",
      partnership: "Partnership",
    };
    const subjectText = subjectLabels[form.subject] || form.subject;
    let message = `Hello Vendora! 👋\n\n*Subject:* ${subjectText}\n*Name:* ${form.name}\n*Phone:* ${form.phone || "Not provided"}\n\n*Message:*\n${form.message}`;
    if (form.sendToVendor && form.vendorName) {
      message += `\n\n_(Please forward this to ${form.vendorName} if possible)_`;
    }
    window.open(`https://wa.me/${OWNER_WHATSAPP}?text=${encodeURIComponent(message)}`, "_blank");
    setSubmitted(true);
  };

  const contacts = [
    { icon: "📍", label: "Address", value: "Lagos, Nigeria" },
    { icon: "📱", label: "WhatsApp", value: "+234 802 657 0746", href: `https://wa.me/${OWNER_WHATSAPP}` },
    { icon: "🕐", label: "Response Time", value: "Usually within a few hours" },
    { icon: "📦", label: "Vendor Support", value: "List your store via WhatsApp" },
  ];

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "14px 16px",
    borderRadius: "12px",
    border: "1.5px solid #e9d8ff",
    fontSize: "0.875rem",
    color: "#1A1A2E",
    background: "white",
    outline: "none",
  };

  return (
    <div style={{ background: "#F9F5FF", minHeight: "100vh" }}>
      {/* Header */}
      <div className="vendora-gradient py-14 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-black text-white mb-2">Contact Us</h1>
          <p style={{ color: "rgba(255,255,255,0.7)" }}>
            <Link href="/"><span className="cursor-pointer hover:text-white">Home</span></Link>
            <span className="mx-2">/</span>
            <span style={{ color: "#F5C842" }}>Contact</span>
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

          {/* Left: Info */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-black mb-3 section-title" style={{ color: "#1A1A2E" }}>Get in Touch</h2>
            <p className="text-sm leading-relaxed mb-8 mt-4" style={{ color: "#6B7280", lineHeight: "1.8" }}>
              Have questions? Want to list your store? Send us a message — we'll reply on WhatsApp directly.
              All messages come to us first — we'll forward to vendors only when needed.
            </p>

            <div className="space-y-4 mb-8">
              {contacts.map((c) => (
                <div key={c.label} className="flex items-start gap-4 p-4 rounded-2xl bg-white" style={{ boxShadow: "0 2px 12px rgba(74,14,143,0.06)", border: "1px solid #f0e8ff" }}>
                  <span className="text-2xl flex-shrink-0">{c.icon}</span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide mb-0.5" style={{ color: "#9CA3AF" }}>{c.label}</p>
                    {c.href ? (
                      <a href={c.href} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold hover:underline" style={{ color: "#4A0E8F" }}>{c.value}</a>
                    ) : (
                      <p className="text-sm font-semibold" style={{ color: "#1A1A2E" }}>{c.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick WhatsApp button */}
            <a
              href={`https://wa.me/${OWNER_WHATSAPP}?text=${encodeURIComponent("Hello Vendora! I have a question.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full py-4 rounded-2xl font-black text-white text-sm transition-opacity hover:opacity-90"
              style={{ background: "#25D366" }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Chat Us on WhatsApp
            </a>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-3xl p-8" style={{ boxShadow: "0 10px 40px rgba(74,14,143,0.1)", border: "1px solid #f0e8ff" }}>
              {submitted ? (
                <div className="text-center py-16">
                  <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: "#25D366" }}>
                    <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-black mb-3" style={{ color: "#1A1A2E" }}>WhatsApp Opened!</h3>
                  <p className="text-sm mb-2" style={{ color: "#6B7280" }}>
                    Your message is ready to send in WhatsApp. Just press <strong>Send</strong> and we'll reply as soon as possible.
                  </p>
                  <p className="text-xs mb-6" style={{ color: "#9CA3AF" }}>Didn't open? <a href={`https://wa.me/${OWNER_WHATSAPP}`} target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#4A0E8F" }}>Click here</a></p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: "", phone: "", subject: "general", message: "", sendToVendor: false, vendorName: "" }); }}
                    className="btn-primary px-8 py-3 rounded-xl font-bold text-sm"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="text-xl font-black mb-2" style={{ color: "#1A1A2E" }}>Send Us a Message</h3>
                  <p className="text-xs mb-6" style={{ color: "#9CA3AF" }}>Fills in a WhatsApp message for you — we'll reply directly</p>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold mb-2 uppercase tracking-wide" style={{ color: "#4A0E8F" }}>Your Name *</label>
                        <input type="text" name="name" value={form.name} onChange={handleChange} required placeholder="Your full name" style={inputStyle} />
                      </div>
                      <div>
                        <label className="block text-xs font-bold mb-2 uppercase tracking-wide" style={{ color: "#4A0E8F" }}>Phone Number</label>
                        <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+234 800 000 0000" style={inputStyle} />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold mb-2 uppercase tracking-wide" style={{ color: "#4A0E8F" }}>Subject</label>
                      <select name="subject" value={form.subject} onChange={handleChange} style={{ ...inputStyle, cursor: "pointer" }}>
                        <option value="general">General Enquiry</option>
                        <option value="vendor">List My Store</option>
                        <option value="support">Customer Support</option>
                        <option value="complaint">Complaint / Feedback</option>
                        <option value="partnership">Partnership</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold mb-2 uppercase tracking-wide" style={{ color: "#4A0E8F" }}>Message *</label>
                      <textarea name="message" value={form.message} onChange={handleChange} required rows={4} placeholder="Tell us how we can help you..." style={{ ...inputStyle, resize: "none" }} />
                    </div>

                    {/* Optional: forward to vendor */}
                    <div className="p-4 rounded-xl" style={{ background: "#F9F5FF", border: "1px solid #e9d8ff" }}>
                      <label className="flex items-start gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={form.sendToVendor}
                          onChange={(e) => setForm({ ...form, sendToVendor: e.target.checked })}
                          className="mt-0.5 accent-purple-700"
                        />
                        <div>
                          <p className="text-sm font-bold" style={{ color: "#1A1A2E" }}>Send directly to a specific vendor?</p>
                          <p className="text-xs" style={{ color: "#9CA3AF" }}>Check this if your message is meant for a specific vendor's store</p>
                        </div>
                      </label>
                      {form.sendToVendor && (
                        <div className="mt-3">
                          <input
                            type="text"
                            name="vendorName"
                            value={form.vendorName}
                            onChange={handleChange}
                            placeholder="Enter vendor/store name"
                            style={{ ...inputStyle, marginTop: "8px" }}
                          />
                        </div>
                      )}
                    </div>

                    <button type="submit" className="btn-primary w-full py-4 rounded-2xl font-black text-base flex items-center justify-center gap-2">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                      Open WhatsApp to Send →
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Vendor CTA */}
        <div className="mt-16 vendora-gradient rounded-3xl p-10 text-center relative overflow-hidden">
          <h3 className="text-2xl font-black text-white mb-3">Want to List Your Fashion Store on Vendora?</h3>
          <p className="mb-6" style={{ color: "rgba(255,255,255,0.75)" }}>
            WhatsApp us directly to get your store listed. Early Bird slots: ₦5,000/month.
          </p>
          <a
            href={`https://wa.me/${OWNER_WHATSAPP}?text=${encodeURIComponent("Hello Vendora! I'd like to list my fashion store. Please send me subscription details.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold px-10 py-4 rounded-2xl font-black text-base inline-flex items-center gap-2"
          >
            📱 WhatsApp Us Now
          </a>
          <div className="absolute top-0 right-0 w-48 h-48 rounded-full opacity-10" style={{ background: "#D4A017", transform: "translate(30%, -30%)" }} />
        </div>
      </div>
    </div>
  );
}

