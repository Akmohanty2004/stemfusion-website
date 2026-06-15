export default function WhatWeDo() {
  const expertise = [
    { icon: "🤖", title: "Robotics Assembly", desc: "Fully assembled robots — line followers, obstacle avoiders, robotic arms, ready to use.", color: "#3b82f6", bg: "#eff6ff" },
    { icon: "📡", title: "IoT Devices", desc: "Smart water controllers, GPS trackers, temperature sensors, and home automation modules.", color: "#8b5cf6", bg: "#f5f3ff" },
    { icon: "🏭", title: "STEM Mini Labs", desc: "Complete plug-and-play labs for schools. 20+ assembled devices with curriculum support.", color: "#ec4899", bg: "#fdf2f8" },
    { icon: "🔧", title: "Custom Assembly", desc: "Need custom devices? We assemble based on your requirements and specifications.", color: "#10b981", bg: "#ecfdf5" }
  ];

  return (
    <section style={{ padding: "80px 6%", position: "relative", zIndex: 1, overflow: "hidden" }}>
      <div style={{ textAlign: "center", marginBottom: 56 }}>
        <span style={{ fontSize: 11, letterSpacing: "0.18em", color: "#3b82f6", fontWeight: 600, padding: "6px 16px", borderRadius: 99, background: "#dbeafe", display: "inline-block" }}>✦ WHAT WE DO BEST ✦</span>
        <h2 style={{ fontSize: "clamp(1.8rem, 5vw, 3rem)", fontWeight: 800, marginTop: 16, color: "#1e293b" }}>Our Core Expertise</h2>
        <p style={{ color: "#64748b", marginTop: 10, maxWidth: 600, margin: "10px auto 0" }}>Transforming ideas into reality with precision assembly</p>
      </div>
      
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 35, maxWidth: 1300, margin: "0 auto" }}>
        {expertise.map((item, i) => (
          <div key={i} className="card-3d" style={{
            padding: "35px 25px", borderRadius: 30, background: item.bg,
            border: `1px solid ${item.color}30`, textAlign: "center",
            opacity: 0, animation: "slideUp 0.6s ease forwards", animationDelay: `${i * 0.12}s`
          }}>
            <div style={{ fontSize: 65, marginBottom: 20, display: "inline-block", animation: "bounce 3s ease-in-out infinite" }}>{item.icon}</div>
            <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12, color: item.color }}>{item.title}</h3>
            <p style={{ fontSize: 14, color: "#475569", lineHeight: 1.7 }}>{item.desc}</p>
            <div style={{ width: 50, height: 4, background: item.color, margin: "25px auto 0", borderRadius: 2, transition: "width 0.3s" }}
              onMouseEnter={e => e.currentTarget.style.width = "80px"}
              onMouseLeave={e => e.currentTarget.style.width = "50px"} />
          </div>
        ))}
      </div>
    </section>
  );
}