import { useState, useEffect } from 'react';
import GlowButton from './shared/GlowButton';
import ShopDropdown from './shared/ShopDropdown';

export default function Nav() {
  const [scroll, setScroll] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScroll(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const go = (id) => {
    setMobileOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 200,
      padding: "12px 6%", display: "flex", alignItems: "center",
      justifyContent: "space-between", flexWrap: "wrap",
      background: scroll ? "white" : "rgba(255, 255, 255, 0.85)",
      backdropFilter: "blur(20px)",
      borderBottom: scroll ? "1px solid #e2e8f0" : "1px solid rgba(59,130,246,0.15)",
      boxShadow: scroll ? "0 4px 20px rgba(0,0,0,0.08)" : "none",
      transition: "all 0.4s ease",
    }}>
      <div onClick={() => go("hero")} style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }}>
        <img src="public\logo.jpeg" alt="Logo" style={{ width: 50, height: 50, borderRadius: 12, objectFit: "cover" }} />
        <span style={{ fontWeight: 800, fontSize: "clamp(18px, 5vw, 22px)", background: "linear-gradient(135deg, #1e293b, #3b82f6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
          STEM<span style={{ color: "#3b82f6" }}>Fusion</span>
        </span>
      </div>

      <div style={{ display: "flex", gap: "clamp(15px, 3vw, 30px)", alignItems: "center" }} className="desktop-nav">
        <GlowButton scroll={scroll} label="Home" onClick={() => go("hero")} />
        <GlowButton scroll={scroll} label="About Us" onClick={() => go("about-company")} />
        <GlowButton scroll={scroll} label="Products" onClick={() => go("products")} />
        <GlowButton scroll={scroll} label="Projects" onClick={() => go("projects")} />
        <GlowButton scroll={scroll} label="Contact" onClick={() => go("contact")} />
        <ShopDropdown />
        <div style={{ display: "flex", gap: 10 }}>
          <a href="https://www.instagram.com/stemfussion?utm_source=qr&igsh=MTVvYjF0aWswaG1kMw%3D%3D" target="_blank" rel="noreferrer"><img src="public\instagram.jpeg" alt="IG" style={{ width: 28, height: 28, borderRadius: "50%", transition: "all 0.3s" }}
            onMouseEnter={e => e.currentTarget.style.transform = "scale(1.1)"}
            onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"} /></a>
          <a href="https://www.facebook.com/share/1DNHyqciVj/" target="_blank" rel="noreferrer"><img src="public\facebook.jpeg" alt="FB" style={{ width: 28, height: 28, borderRadius: "50%", transition: "all 0.3s" }}
            onMouseEnter={e => e.currentTarget.style.transform = "scale(1.1)"}
            onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"} /></a>
          <a href="https://youtube.com/@stemfusion" target="_blank" rel="noreferrer"><img src="public\youtube.png" alt="YT" style={{ width: 28, height: 28, borderRadius: "50%", transition: "all 0.3s" }}
            onMouseEnter={e => e.currentTarget.style.transform = "scale(1.1)"}
            onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"} /></a>
        </div>
      </div>

      <button onClick={() => setMobileOpen(!mobileOpen)} style={{
        display: "none", background: "#f1f5f9", border: "1px solid #cbd5e1",
        borderRadius: 10, padding: "8px 12px", cursor: "pointer", fontSize: 20
      }} className="mobile-menu-btn">☰</button>

      {mobileOpen && (
        <div style={{
          position: "absolute", top: "100%", left: 0, right: 0, background: "white",
          padding: "20px 6%", display: "flex", flexDirection: "column", gap: 15,
          boxShadow: "0 10px 30px rgba(0,0,0,0.15)", borderBottomLeftRadius: 20, borderBottomRightRadius: 20, alignItems: "flex-start"
        }}>
          {["Home", "About Us", "Products", "Projects", "Contact"].map(l => (
            <button key={l} onClick={() => go(l === "About Us" ? "about-company" : l.toLowerCase())} style={{ background: "none", border: "none", fontSize: 16, padding: "10px 0", textAlign: "left", cursor: "pointer", fontWeight: 600 }}>{l}</button>
          ))}
          <div style={{ padding: "10px 0" }}>
            <ShopDropdown />
          </div>
        </div>
      )}
    </nav>
  );
}