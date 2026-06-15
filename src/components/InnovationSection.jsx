export default function InnovationSection() {
  return (
    <section style={{ padding: "80px 6%", position: "relative", zIndex: 1, overflow: "hidden" }}>
      <div style={{
        background: "linear-gradient(135deg, #3b82f6, #8b5cf6, #db2777)",
        borderRadius: 48, padding: "60px 40px", textAlign: "center",
        boxShadow: "0 30px 60px rgba(59,130,246,0.4)",
        position: "relative", overflow: "hidden"
      }}>
        <div style={{ position: "absolute", top: -50, right: -50, fontSize: 200, opacity: 0.1, animation: "spin 20s linear infinite" }}>🤖</div>
        <div style={{ position: "absolute", bottom: -30, left: -30, fontSize: 150, opacity: 0.1, animation: "float 6s ease-in-out infinite" }}>⚙️</div>
        
        <div className="animate-slideUp">
          <span style={{ fontSize: 13, letterSpacing: "0.18em", color: "#fff", fontWeight: 600, padding: "6px 16px", borderRadius: 99, background: "rgba(255,255,255,0.2)", display: "inline-block" }}>✦ INNOVATION HUB ✦</span>
          <h2 style={{ fontSize: "clamp(1.8rem, 5vw, 2.8rem)", fontWeight: 800, marginTop: 20, color: "white" }}>Driving Innovation Through Technology</h2>
          <p style={{ fontSize: 16, color: "#e0e7ff", maxWidth: 700, margin: "20px auto 0", lineHeight: 1.7 }}>
            We continuously invest in research and development to bring cutting-edge robotics and IoT solutions 
            that empower the next generation of innovators and problem solvers.
          </p>
          
          <div style={{ display: "flex", flexWrap: "wrap", gap: 30, justifyContent: "center", marginTop: 45 }}>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: 32, marginBottom: 8 }}>🔬</div>
              <div style={{ fontSize: 20, fontWeight: 700, color: "white" }}>R&D Focus</div>
              <div style={{ fontSize: 12, color: "#bfdbfe" }}>Continuous innovation</div>
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: 32, marginBottom: 8 }}>🎓</div>
              <div style={{ fontSize: 20, fontWeight: 700, color: "white" }}>Education First</div>
              <div style={{ fontSize: 12, color: "#bfdbfe" }}>Student-centric approach</div>
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: 32, marginBottom: 8 }}>🌍</div>
              <div style={{ fontSize: 20, fontWeight: 700, color: "white" }}>Global Standards</div>
              <div style={{ fontSize: 12, color: "#bfdbfe" }}>Quality guaranteed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}