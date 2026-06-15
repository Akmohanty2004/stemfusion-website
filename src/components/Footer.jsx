export default function Footer() {
  return (
    <footer style={{
      background: "linear-gradient(135deg, #0f172a, #1e293b)", padding: "50px 6% 40px",
      textAlign: "center", position: "relative", zIndex: 1, color: "white"
    }}>
      <div className="animate-bounce" style={{ marginBottom: 25 }}>
        <div style={{ fontSize: 70, display: "inline-block", filter: "drop-shadow(0 0 20px #3b82f6)" }}>🤖✨⚙️🔧🛠️</div>
        <p style={{ fontSize: 15, color: "#94a3b8", marginTop: 15 }}>Building dreams, one robot at a time!</p>
      </div>
      
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <p style={{ fontSize: 14, color: "#94a3b8", marginBottom: 25 }}>
          STEMFusion is committed to delivering quality assembled robotics and IoT devices for education and industry.
        </p>
        
        <div style={{ display: "flex", gap: 25, justifyContent: "center", marginBottom: 35 }}>
          <a href="https://www.instagram.com/stemfussion?utm_source=qr&igsh=MTVvYjF0aWswaG1kMw%3D%3D" target="_blank" rel="noreferrer">
            <img src="./public\instagram.jpeg" alt="IG" style={{ width: 36, height: 36, borderRadius: "50%", transition: "transform 0.3s", cursor: "pointer" }}
              onMouseEnter={e => e.currentTarget.style.transform = "scale(1.15)"}
              onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"} />
          </a>
          <a href="https://www.facebook.com/share/1DNHyqciVj/" target="_blank" rel="noreferrer">
            <img src="./public\facebook.jpeg" alt="FB" style={{ width: 36, height: 36, borderRadius: "50%", transition: "transform 0.3s", cursor: "pointer" }}
              onMouseEnter={e => e.currentTarget.style.transform = "scale(1.15)"}
              onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"} />
          </a>
          <a href="https://youtube.com/@stemfusion" target="_blank" rel="noreferrer">
            <img src="./public\youtube.png" alt="YT" style={{ width: 36, height: 36, borderRadius: "50%", transition: "transform 0.3s", cursor: "pointer" }}
              onMouseEnter={e => e.currentTarget.style.transform = "scale(1.15)"}
              onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"} />
          </a>
        </div>
        
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: 30 }}>
          <p style={{ fontSize: 13, color: "#64748b" }}>© 2026 STEMFusion.in — Assembling the future of robotics and IoT. All rights reserved.</p>
          <p style={{ fontSize: 12, color: "#475569", marginTop: 8 }}>Made with codeXpert in India  | Quality You Can Trust</p>
        </div>
      </div>
    </footer>
  );
}