import { useRef } from "react";

export default function VendorFlyer() {
  const flyerRef = useRef<HTMLDivElement>(null);

  const downloadFlyer = () => {
    const element = flyerRef.current;
    if (!element) return;

    const printWindow = window.open("", "", "width=800,height=600");
    if (!printWindow) return;

    printWindow.document.write(`
      <html>
        <head>
          <title>Vendora Flyer</title>
          <style>
            body { font-family: Arial; padding: 20px; }
            .box { border: 3px solid #4A0E8F; padding: 20px; border-radius: 20px; }
            h1 { color: #4A0E8F; }
          </style>
        </head>
        <body>
          ${element.innerHTML}
        </body>
      </html>
    `);

    printWindow.document.close();
    printWindow.print();
  };

  return (
    <div style={{ padding: "40px" }}>
      <div ref={flyerRef} className="box">
        <h1>🔥 VENdORA VENDOR INVITATION</h1>
        <p>Join Lagos fastest growing fashion marketplace</p>
        <ul>
          <li>✔ Verified Vendor Store</li>
          <li>✔ WhatsApp Direct Buyers</li>
          <li>✔ Unlimited Product Listings</li>
          <li>✔ Featured Visibility</li>
        </ul>

        <h2>Early Bird: ₦5,000/month</h2>
        <p>Limited slots available</p>
      </div>

      <button
        onClick={downloadFlyer}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          background: "#4A0E8F",
          color: "white",
          borderRadius: "10px",
        }}
      >
        Download Flyer
      </button>
    </div>
  );
}