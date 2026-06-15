import { useState, useEffect, useRef } from 'react';

export default function ShopDropdown() {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} style={{ position: "relative" }}>
      <button onClick={() => setOpen(!open)} style={{
        padding: "8px 20px", borderRadius: 40, border: "none",
        background: "linear-gradient(135deg, #10b981, #059669)", color: "white",
        fontWeight: 700, fontSize: 13, cursor: "pointer", transition: "all 0.3s",
        boxShadow: "0 4px 12px rgba(16,185,129,0.3)"
      }}
      onMouseEnter={e => e.currentTarget.style.transform = "scale(1.02)"}
      onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}>
        🛒 Shop Now
      </button>
      {open && (
        <div style={{
          position: "absolute", top: "100%", right: 0, marginTop: 12,
          background: "white", borderRadius: 16, padding: "12px 0", minWidth: 200,
          boxShadow: "0 10px 40px rgba(0,0,0,0.15)", border: "1px solid #e2e8f0", zIndex: 100
        }}>
          <a href="https://www.instagram.com/stemfussion?utm_source=qr&igsh=MTVvYjF0aWswaG1kMw%3D%3D" target="_blank" rel="noreferrer" style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 20px", textDecoration: "none", color: "#333" }}>
            <img src="public\instagram.jpeg" alt="IG" style={{ width: 24, height: 24, borderRadius: "50%" }} /> Shop on Instagram
          </a>
          <a href="https://www.facebook.com/share/1DNHyqciVj/" target="_blank" rel="noreferrer" style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 20px", textDecoration: "none", color: "#333" }}>
            <img src="public\facebook.jpeg" alt="FB" style={{ width: 24, height: 24, borderRadius: "50%" }} /> Shop on Facebook
          </a>
        </div>
      )}
    </div>
  );
}