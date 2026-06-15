import { useState } from 'react';

export default function CreativeContact() {
  const [hovered, setHovered] = useState(null);

  const handleEmail = () => {
    window.location.href = "mailto:ashiskumar767@gmail.com?subject=STEMFusion%20Enquiry&body=Hi%20STEMFusion%20Team%2C%0A%0AI%20am%20interested%20in%20your%20products.%0A%0ARegards";
  };

  const handleCall = () => {
    window.location.href = "tel:+919938776631";
  };

  return (
    <section id="contact" style={{ padding: "80px 6%", position: "relative", zIndex: 1 }}>
      <div style={{
        background: "rgba(255,255,255,0.8)", backdropFilter: "blur(20px)",
        borderRadius: 56, padding: "55px 45px", maxWidth: 1100, margin: "0 auto",
        boxShadow: "0 30px 60px rgba(0,0,0,0.12)", border: "1px solid rgba(255,255,255,0.5)"
      }}>
        <div style={{ textAlign: "center", marginBottom: 50 }}>
          <span style={{ fontSize: 11, letterSpacing: "0.18em", color: "#3b82f6", fontWeight: 600, padding: "6px 16px", borderRadius: 99, background: "#dbeafe", display: "inline-block" }}>✦ LET'S CONNECT ✦</span>
          <h2 style={{ fontSize: "clamp(1.8rem, 5vw, 2.8rem)", fontWeight: 800, marginTop: 16, color: "#1e293b" }}>Get In Touch</h2>
          <p style={{ color: "#64748b", marginTop: 10 }}>We'd love to hear from you. Reach out anytime!</p>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 35, justifyContent: "center" }}>
          <div onMouseEnter={() => setHovered("email")} onMouseLeave={() => setHovered(null)} onClick={handleEmail} style={{
            flex: 1, minWidth: 260, padding: "35px 25px", borderRadius: 40, cursor: "pointer",
            background: hovered === "email" ? "linear-gradient(135deg, #3b82f6, #2563eb)" : "white",
            boxShadow: hovered === "email" ? "0 25px 45px rgba(59,130,246,0.4)" : "0 10px 25px rgba(0,0,0,0.08)",
            textAlign: "center", transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
            transform: hovered === "email" ? "translateY(-10px)" : "translateY(0)"
          }}>
            <div style={{ fontSize: 55, marginBottom: 15 }}>✉️</div>
            <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 10, color: hovered === "email" ? "white" : "#1e293b" }}>Email Us</h3>
            <p style={{ fontSize: 15, color: hovered === "email" ? "#bfdbfe" : "#64748b", marginBottom: 20 }}>ashiskumar767@gmail.com</p>
            <div style={{ display: "inline-block", padding: "10px 28px", borderRadius: 50, background: hovered === "email" ? "rgba(255,255,255,0.2)" : "#3b82f6", color: "white", fontSize: 14, fontWeight: 600 }}>Send Email →</div>
          </div>

          <div onMouseEnter={() => setHovered("phone")} onMouseLeave={() => setHovered(null)} onClick={handleCall} style={{
            flex: 1, minWidth: 260, padding: "35px 25px", borderRadius: 40, cursor: "pointer",
            background: hovered === "phone" ? "linear-gradient(135deg, #10b981, #059669)" : "white",
            boxShadow: hovered === "phone" ? "0 25px 45px rgba(16,185,129,0.4)" : "0 10px 25px rgba(0,0,0,0.08)",
            textAlign: "center", transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
            transform: hovered === "phone" ? "translateY(-10px)" : "translateY(0)"
          }}>
            <div style={{ fontSize: 55, marginBottom: 15 }}>📞</div>
            <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 10, color: hovered === "phone" ? "white" : "#1e293b" }}>Call Us</h3>
            <p style={{ fontSize: 15, color: hovered === "phone" ? "#d1fae5" : "#64748b", marginBottom: 20 }}>+91 99387 76631</p>
            <div style={{ display: "inline-block", padding: "10px 28px", borderRadius: 50, background: hovered === "phone" ? "rgba(255,255,255,0.2)" : "#10b981", color: "white", fontSize: 14, fontWeight: 600 }}>Call Now →</div>
          </div>

          <div onMouseEnter={() => setHovered("office")} onMouseLeave={() => setHovered(null)} style={{
            flex: 1, minWidth: 260, padding: "35px 25px", borderRadius: 40,
            background: hovered === "office" ? "linear-gradient(135deg, #8b5cf6, #7c3aed)" : "white",
            boxShadow: hovered === "office" ? "0 25px 45px rgba(139,92,246,0.4)" : "0 10px 25px rgba(0,0,0,0.08)",
            textAlign: "center", transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
            transform: hovered === "office" ? "translateY(-10px)" : "translateY(0)"
          }}>
            <div style={{ fontSize: 55, marginBottom: 15 }}>📍</div>
            <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 10, color: hovered === "office" ? "white" : "#1e293b" }}>Visit Us</h3>
            <p style={{ fontSize: 14, color: hovered === "office" ? "#e9d5ff" : "#64748b", lineHeight: 1.6 }}>
              187-C Pocket A, Mayur Vihar Phase 2<br />South Delhi - 110091
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}