export default function ImpactSection() {
  const impactData = [
    { icon: "🌍", value: "10+", label: "States Covered", color: "#3b82f6" },
    { icon: "🤝", value: "98%", label: "Customer Satisfaction", color: "#8b5cf6" },
    { icon: "🏆", value: "50+", label: "Workshops Conducted", color: "#10b981" },
    { icon: "🎓", value: "10k+", label: "Students Impacted", color: "#f59e0b" }
  ];

  return (
    <section style={{ padding: "60px 6%", position: "relative", zIndex: 1, background: "white" }}>
      <div style={{ textAlign: "center", marginBottom: 48 }}>
        <span style={{ fontSize: 11, letterSpacing: "0.18em", color: "#3b82f6", fontWeight: 600, padding: "6px 16px", borderRadius: 99, background: "#dbeafe", display: "inline-block" }}>✦ OUR REACH ✦</span>
        <h2 style={{ fontSize: "clamp(1.6rem, 5vw, 2.5rem)", fontWeight: 800, marginTop: 16, color: "#1e293b" }}>Making an Impact Across India</h2>
        <p style={{ color: "#64748b", marginTop: 10 }}>Our footprint in the STEM education landscape</p>
      </div>
      
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 40, maxWidth: 1000, margin: "0 auto" }}>
        {impactData.map((item, i) => (
          <div key={i} className="card-3d" style={{
            textAlign: "center", minWidth: 160, padding: "30px 20px", borderRadius: 32,
            background: "white", boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
            border: `1px solid ${item.color}20`, flex: 1, maxWidth: 200,
            opacity: 0, animation: "slideUp 0.6s ease forwards", animationDelay: `${i * 0.1}s`
          }}>
            <div style={{ fontSize: 48, marginBottom: 12 }}>{item.icon}</div>
            <div style={{ fontSize: 36, fontWeight: 900, color: item.color }}>{item.value}</div>
            <div style={{ fontSize: 14, fontWeight: 600, color: "#1e293b", marginTop: 8 }}>{item.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}