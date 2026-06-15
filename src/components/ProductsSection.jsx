import { PRODUCTS } from '../data/productsData';

export default function ProductsSection() {
  return (
    <section id="products" style={{ padding: "80px 6%", background: "white", position: "relative", zIndex: 1 }}>
      <div style={{ textAlign: "center", marginBottom: 56 }}>
        <span style={{ fontSize: 11, letterSpacing: "0.18em", color: "#3b82f6", fontWeight: 600, padding: "6px 16px", borderRadius: 99, background: "#dbeafe", display: "inline-block" }}>✦ OUR PRODUCTS ✦</span>
        <h2 style={{ fontSize: "clamp(1.8rem, 5vw, 3rem)", fontWeight: 800, marginTop: 16, color: "#1e293b" }}>What We Assemble & Sell</h2>
        <p style={{ color: "#64748b", marginTop: 10 }}>Fully tested, ready to use devices</p>
      </div>
      
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(330px, 1fr))", gap: 30, maxWidth: 1300, margin: "0 auto" }}>
        {PRODUCTS.map((product, i) => (
          <div key={product.id} className="card-3d" style={{
            background: "white", borderRadius: 28, overflow: "hidden",
            boxShadow: "0 10px 30px rgba(0,0,0,0.08)", border: "1px solid #e2e8f0",
            opacity: 0, animation: "slideUp 0.6s ease forwards", animationDelay: `${i * 0.1}s`
          }}>
            <div style={{ position: "relative", overflow: "hidden" }}>
              <img src={product.img} alt={product.name} className="image-zoom" style={{ width: "100%", height: 220, objectFit: "cover" }} />
              <div style={{ position: "absolute", top: 15, left: 15, background: "white", borderRadius: 30, padding: "8px 12px", fontSize: 30, boxShadow: "0 2px 10px rgba(0,0,0,0.1)" }}>{product.icon}</div>
            </div>
            <div style={{ padding: 25 }}>
              <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 6, color: "#1e293b" }}>{product.name}</h3>
              <span style={{ fontSize: 11, color: product.color, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em" }}>{product.category}</span>
              <p style={{ fontSize: 14, color: "#475569", lineHeight: 1.6, margin: "15px 0" }}>{product.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}