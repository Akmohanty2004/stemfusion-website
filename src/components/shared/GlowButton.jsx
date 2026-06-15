import { useState } from 'react';

export default function GlowButton({ label, onClick, scroll }) {
  const [hover, setHover] = useState(false);
  return (
    <button onClick={onClick} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} style={{
      background: hover ? "linear-gradient(135deg, #3b82f6, #8b5cf6)" : "transparent",
      border: hover ? "none" : `1.5px solid #3b82f6`,
      color: hover ? "white" : "#3b82f6",
      padding: "8px 18px", borderRadius: 40, fontSize: "clamp(12px, 3vw, 13px)",
      fontWeight: 600, cursor: "pointer", transition: "all 0.3s ease",
      boxShadow: hover ? "0 4px 15px rgba(59,130,246,0.4)" : "none",
      transform: hover ? "translateY(-2px)" : "translateY(0)"
    }}>{label}</button>
  );
}