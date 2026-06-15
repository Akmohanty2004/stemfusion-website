export default function WhyChooseUs() {
  const advantages = [
    { icon: "✅", title: "100% Tested", desc: "Every device undergoes proper testing before shipping.", color: "#3b82f6", stat: "5000+ Devices Tested" },
    { icon: "🇮🇳", title: "Made in India", desc: "Local assembly means lower cost and faster delivery.", color: "#10b981", stat: "Made with Pride" },
    { icon: "🔧", title: "Quality Support", desc: "Dedicated support for all our products.", color: "#8b5cf6", stat: "24/7 Assistance" },
    { icon: "📚", title: "Curriculum Ready", desc: "Devices designed for easy integration with school curriculum.", color: "#f59e0b", stat: "50+ Schools" }
  ];

  return (
    <section style={{ padding: "80px 6%", position: "relative", zIndex: 1, background: "white" }}>
      <div style={{ textAlign: "center", marginBottom: 56 }}>
        <span style={{ fontSize: 11, letterSpacing: "0.18em", color: "#3b82f6", fontWeight: 600, padding: "6px 16px", borderRadius: 99, background: "#dbeafe", display: "inline-block" }}>✦ WHY CHOOSE US ✦</span>
        <h2 style={{ fontSize: "clamp(1.8rem, 5vw, 3rem)", fontWeight: 800, marginTop: 16, color: "#1e293b" }}>The STEMFusion Advantage</h2>
        <p style={{ color: "#64748b", marginTop: 10 }}>What makes us different from the rest</p>
      </div>
      
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))", gap: 30, maxWidth: 1300, margin: "0 auto" }}>
        {advantages.map((item, i) => (
          <div key={i} className="card-3d" style={{
            textAlign: "center", padding: "35px 25px", borderRadius: 32,
            background: `linear-gradient(135deg, white, ${item.color}05)`,
            border: `1px solid ${item.color}20`, boxShadow: "0 5px 20px rgba(0,0,0,0.05)",
            opacity: 0, animation: "slideUp 0.6s ease forwards", animationDelay: `${i * 0.12}s`
          }}>
            <div style={{ fontSize: 55, marginBottom: 20, display: "inline-block", animation: "bounce 2s ease-in-out infinite" }}>{item.icon}</div>
            <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12, color: item.color }}>{item.title}</h3>
            <p style={{ fontSize: 14, color: "#475569", lineHeight: 1.7, marginBottom: 20 }}>{item.desc}</p>
            <div style={{ padding: "8px 18px", borderRadius: 40, background: `${item.color}10`, display: "inline-block", fontSize: 13, fontWeight: 700, color: item.color }}>{item.stat}</div>
          </div>
        ))}
      </div>
    </section>
  );
}