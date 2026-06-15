import { STUDENT_DATA } from '../data/studentData';

export default function StudentProjects() {
  return (
    <section style={{ padding: "80px 6%", background: "white", position: "relative", zIndex: 1 }}>
      <div style={{ textAlign: "center", marginBottom: 56 }}>
        <span style={{ fontSize: 11, letterSpacing: "0.18em", color: "#3b82f6", fontWeight: 600, padding: "6px 16px", borderRadius: 99, background: "#dbeafe", display: "inline-block" }}>✦ STUDENTS IN ACTION ✦</span>
        <h2 style={{ fontSize: "clamp(1.8rem, 5vw, 3rem)", fontWeight: 800, marginTop: 16, color: "#1e293b" }}>Students Building Robots</h2>
        <p style={{ color: "#64748b", marginTop: 10 }}>Hands-on learning with our assembled kits</p>
      </div>
      
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 28, maxWidth: 1300, margin: "0 auto" }}>
        {STUDENT_DATA.map((item, i) => (
          <div key={i} className="card-3d" style={{
            borderRadius: 24, overflow: "hidden", background: "white",
            boxShadow: "0 10px 30px rgba(0,0,0,0.1)", cursor: "pointer",
            opacity: 0, animation: "slideUp 0.6s ease forwards", animationDelay: `${i * 0.12}s`
          }}>
            <div style={{ position: "relative", overflow: "hidden" }}>
              <img src={item.img} alt={item.title} className="image-zoom" style={{ width: "100%", height: 260, objectFit: "cover" }} />
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: `linear-gradient(to top, ${item.color}, transparent)`, padding: "30px 15px 15px" }}>
                <span style={{ background: "white", padding: "4px 12px", borderRadius: 20, fontSize: 11, fontWeight: 600, color: item.color }}>{item.activity}</span>
              </div>
            </div>
            <div style={{ padding: 20, textAlign: "center" }}>
              <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 6, color: item.color }}>{item.title}</h3>
              <p style={{ fontSize: 13, color: "#64748b" }}>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}