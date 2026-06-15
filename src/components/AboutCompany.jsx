import { useState } from 'react';

export default function AboutCompany() {
  const [hoverStat, setHoverStat] = useState(null);
  const stats = [
    { value: "50+", label: "Schools Partnered", icon: "🏫", color: "#3b82f6", desc: "Educational Institutions" },
    { value: "5000+", label: "Devices Assembled", icon: "⚙️", color: "#8b5cf6", desc: "Quality Products" },
    { value: "100+", label: "Product Modules", icon: "📦", color: "#10b981", desc: "Different Variants" }
  ];

  return (
    <section id="about-company" style={{ padding: "80px 6%", position: "relative", zIndex: 1, background: "linear-gradient(135deg, #fff, #f0f9ff)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <span style={{ fontSize: 11, letterSpacing: "0.18em", color: "#3b82f6", fontWeight: 600, padding: "6px 16px", borderRadius: 99, background: "#dbeafe", display: "inline-block" }}>✦ WHO WE ARE ✦</span>
          <h2 style={{ fontSize: "clamp(1.8rem, 5vw, 3rem)", fontWeight: 800, marginTop: 16, color: "#1e293b" }}>About STEMFusion</h2>
          <div style={{ width: 80, height: 4, background: "linear-gradient(135deg, #3b82f6, #8b5cf6)", margin: "20px auto 0", borderRadius: 2 }} />
        </div>

        <div className="animate-slideUp">
          {/* Company Bio */}
          <div style={{ 
            background: "white", 
            borderRadius: 32, 
            padding: "45px 40px", 
            marginBottom: 50,
            boxShadow: "0 20px 40px rgba(0,0,0,0.05)",
            border: "1px solid #e2e8f0"
          }}>
            <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
              <div style={{ fontSize: 48, marginBottom: 20 }}>🏭</div>
              <p style={{ fontSize: 18, lineHeight: 1.8, color: "#475569", marginBottom: 25 }}>
                <span style={{ fontSize: 48, color: "#3b82f6", lineHeight: 1 }}>“</span>
                <strong style={{ color: "#3b82f6", fontWeight: 700 }}>STEMFusion</strong> is India's premier robotics and IoT device assembly company. 
                Founded with a vision to make quality technology education accessible, we specialize in assembling 
                fully functional robots, smart IoT devices, and complete STEM labs for schools, colleges, and businesses across India.
              </p>
              <p style={{ fontSize: 18, lineHeight: 1.8, color: "#475569" }}>
                With over <strong style={{ color: "#8b5cf6", fontWeight: 700 }}>50+ schools partnered</strong> and 
                <strong style={{ color: "#10b981", fontWeight: 700 }}> 5000+ devices assembled</strong>, 
                we take pride in our <strong style={{ color: "#f59e0b", fontWeight: 700 }}>"Made in India" quality</strong>. 
                Every device is thoroughly tested before shipping, ensuring reliable performance for our customers across the nation.
              </p>
            </div>
          </div>

          {/* Mission & Vision Cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 30, marginBottom: 50 }}>
            <div style={{ background: "linear-gradient(135deg, #eff6ff, #ffffff)", borderRadius: 28, padding: 32, border: "1px solid #bfdbfe" }}>
              <div style={{ fontSize: 40, marginBottom: 16 }}>🎯</div>
              <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12, color: "#1e293b" }}>Our Mission</h3>
              <p style={{ fontSize: 15, color: "#475569", lineHeight: 1.7 }}>To democratize technology education by providing high-quality, affordable robotics and IoT solutions that inspire the next generation of innovators and problem solvers.</p>
            </div>
            <div style={{ background: "linear-gradient(135deg, #f5f3ff, #ffffff)", borderRadius: 28, padding: 32, border: "1px solid #c4b5fd" }}>
              <div style={{ fontSize: 40, marginBottom: 16 }}>👁️</div>
              <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12, color: "#1e293b" }}>Our Vision</h3>
              <p style={{ fontSize: 15, color: "#475569", lineHeight: 1.7 }}>To be India's most trusted partner in STEM education, empowering 1 million+ students with hands-on technology skills by 2030.</p>
            </div>
          </div>

          {/* Stats Row */}
          <div style={{
            background: "white", borderRadius: 48, padding: "40px 30px",
            boxShadow: "0 20px 40px rgba(0,0,0,0.05)", border: "1px solid #e2e8f0"
          }}>
            <div style={{ display: "flex", justifyContent: "center", gap: 40, flexWrap: "wrap" }}>
              {stats.map((stat, i) => (
                <div key={i} onMouseEnter={() => setHoverStat(i)} onMouseLeave={() => setHoverStat(null)} style={{
                  textAlign: "center", padding: "20px 30px", borderRadius: 32, minWidth: 180,
                  transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
                  transform: hoverStat === i ? "translateY(-8px)" : "translateY(0)",
                  background: hoverStat === i ? `linear-gradient(135deg, ${stat.color}10, white)` : "white",
                  border: `1px solid ${hoverStat === i ? stat.color : "#e2e8f0"}`
                }}>
                  <div style={{ fontSize: 48, marginBottom: 8 }}>{stat.icon}</div>
                  <div style={{ fontSize: 42, fontWeight: 900, color: stat.color, lineHeight: 1 }}>{stat.value}</div>
                  <div style={{ fontSize: 16, fontWeight: 700, color: "#1e293b", marginTop: 12 }}>{stat.label}</div>
                  <div style={{ fontSize: 12, color: "#64748b", marginTop: 6 }}>{stat.desc}</div>
                </div>
              ))}
            </div>
            
            <div style={{ textAlign: "center", marginTop: 40, paddingTop: 30, borderTop: "1px solid #e2e8f0" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, flexWrap: "wrap" }}>
                <span style={{ fontSize: 28 }}>🇮🇳</span>
                <span style={{ fontSize: 14, color: "#475569", fontWeight: 500 }}>Proudly assembled in India with global quality standards</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}