import { useState } from 'react';
import { TOOLS } from '../data/toolsData';

export default function ToolsSection() {
  const [flipped, setFlipped] = useState({});

  return (
    <section style={{ padding: "80px 6%", position: "relative", zIndex: 1, background: "linear-gradient(135deg, #f0f9ff, #e0e7ff)" }}>
      <div style={{ textAlign: "center", marginBottom: 56 }}>
        <span style={{ fontSize: 11, letterSpacing: "0.18em", color: "#3b82f6", fontWeight: 600, padding: "6px 16px", borderRadius: 99, background: "#dbeafe", display: "inline-block" }}>✦ OUR WORKSHOP ✦</span>
        <h2 style={{ fontSize: "clamp(1.8rem, 5vw, 3rem)", fontWeight: 800, marginTop: 16, color: "#1e293b" }}>Instruments We Use</h2>
        <p style={{ color: "#64748b", marginTop: 10 }}>Precision tools for quality assembly</p>
      </div>
      
      <div style={{ display: "flex", flexWrap: "wrap", gap: 35, justifyContent: "center" }}>
        {TOOLS.map((tool, i) => (
          <div key={i} onMouseEnter={() => setFlipped({ [i]: true })} onMouseLeave={() => setFlipped({ [i]: false })} style={{ width: 320, height: 370, perspective: "1200px", cursor: "pointer", opacity: 0, animation: "slideUp 0.6s ease forwards", animationDelay: `${i * 0.15}s` }}>
            <div style={{
              position: "relative", width: "100%", height: "100%", textAlign: "center",
              transition: "transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1)", transformStyle: "preserve-3d",
              transform: flipped[i] ? "rotateY(180deg)" : "rotateY(0)"
            }}>
              <div style={{ position: "absolute", width: "100%", height: "100%", backfaceVisibility: "hidden", background: "white", borderRadius: 24, overflow: "hidden", boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}>
                <img src={tool} alt="Tool" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <div style={{
                position: "absolute", width: "100%", height: "100%", backfaceVisibility: "hidden",
                background: "linear-gradient(135deg, #3b82f6, #8b5cf6)", borderRadius: 24,
                transform: "rotateY(180deg)", display: "flex", alignItems: "center", justifyContent: "center",
                flexDirection: "column", color: "white", padding: 30
              }}>
                <span style={{ fontSize: 60, marginBottom: 20 }}>🔧⚙️🛠️</span>
                <h3 style={{ fontSize: 24, marginBottom: 10 }}>Professional Tool</h3>
                <p style={{ fontSize: 14, textAlign: "center", lineHeight: 1.6 }}>Precision assembly equipment used by our expert technicians</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}