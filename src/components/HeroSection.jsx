import AutoWriteText from './shared/AutoWriteText';

export default function HeroSection() {
  return (
    <section id="hero" style={{
      minHeight: "100vh", display: "flex", alignItems: "center",
      padding: "120px 6% 80px", position: "relative",
      backgroundImage: "url('https://assets.unlayer.com/projects/0/1781438857000-4ec1541b-5b67-47da-9c27-251d3b19ed71.png')",
      backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat"
    }}>
      <div className="hero-split" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 50, width: "100%", flexWrap: "wrap" }}>
        
        <div className="hero-left" style={{ flex: 1.2, minWidth: 280 }}>
          <div className="animate-slideRight">
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8, padding: "8px 20px", borderRadius: 99,
              background: "rgba(59,130,246,0.15)", backdropFilter: "blur(10px)",
              marginBottom: 30, border: "1px solid rgba(59,130,246,0.3)"
            }}>
              <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#3b82f6", display: "inline-block", animation: "pulseGlow 1.5s infinite" }} />
              <span style={{ fontSize: 13, fontWeight: 600, color: "#2563eb" }}>India's Premier Robotics & IoT Assembly Hub</span>
            </div>

            <h1 style={{
              fontSize: "clamp(2.2rem, 7vw, 4.5rem)", fontWeight: 900, lineHeight: 1.2
            }}>
              <span style={{ background: "linear-gradient(135deg, #8b5cf6, #3b82f6, #06b6d4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                We Assemble the Best
              </span> 
              <span style={{ display: "inline-block", animation: "bounce 2s ease-in-out infinite" }}>🤖</span><br />
              <span className="glow-text" style={{ fontSize: "clamp(2rem, 6vw, 4rem)" }}>
                <AutoWriteText />
              </span>
            </h1>

            <div style={{
              background: "linear-gradient(135deg, #1b71fbae, #2b62d7)",
              padding: "18px 24px", borderRadius: 20, marginBottom: 35,
              boxShadow: "0 10px 30px rgba(59,130,246,0.3)"
            }}>
              <p style={{ fontSize: "clamp(15px, 4vw, 17px)", lineHeight: 1.6, color: "white", fontWeight: 500 }}>
                Fully assembled robots, smart IoT devices, and complete STEM labs. <span role="img" aria-label="flag">🇮🇳</span> Made in India — Quality you can trust.
              </p>
            </div>

            <div style={{ display: "flex", gap: 15, flexWrap: "wrap" }}>
              <button onClick={() => document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })} style={{
                padding: "14px 32px", borderRadius: 50, border: "none",
                background: "linear-gradient(135deg, #3b82f6, #2563eb)", color: "white",
                fontWeight: 700, fontSize: 15, cursor: "pointer", transition: "all 0.3s",
                boxShadow: "0 6px 20px rgba(59,130,246,0.4)"
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 10px 30px rgba(59,130,246,0.6)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 6px 20px rgba(59,130,246,0.4)"; }}>
                Explore Products →
              </button>
              <button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })} style={{
                padding: "14px 32px", borderRadius: 50, border: "2px solid #3b82f6",
                background: "white", color: "#3b82f6", fontWeight: 700, fontSize: 15, cursor: "pointer",
                transition: "all 0.3s"
              }}
              onMouseEnter={e => { e.currentTarget.style.background = "#3b82f6"; e.currentTarget.style.color = "white"; e.currentTarget.style.transform = "translateY(-3px)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "white"; e.currentTarget.style.color = "#3b82f6"; e.currentTarget.style.transform = "translateY(0)"; }}>
                Contact Us
              </button>
            </div>
          </div>
        </div>

        <div className="hero-right" style={{ flex: 0.8, minWidth: 280, display: "flex", justifyContent: "center" }}>
          <div className="animate-float" style={{ position: "relative" }}>
            <div style={{
              position: "absolute", top: -12, left: -12, right: -12, bottom: -12,
              borderRadius: "40% 60% 60% 40% / 50% 45% 55% 50%",
              background: "conic-gradient(from 0deg, #3b82f6, #8b5cf6, #db2777, #f59e0b, #3b82f6)",
              animation: "rotateGlow 5s linear infinite", opacity: 0.7, zIndex: 0
            }} />
            <div style={{
              position: "absolute", top: -6, left: -6, right: -6, bottom: -6,
              borderRadius: "40% 60% 60% 40% / 50% 45% 55% 50%",
              background: "radial-gradient(circle, rgba(59,130,246,0.3), rgba(139,92,246,0.15))",
              filter: "blur(15px)", animation: "pulseGlow 2s ease-in-out infinite", zIndex: 0
            }} />
            <img 
              src="src/assets/iot.jpeg"
              alt="STEMFusion Founder"
              style={{
                width: "clamp(200px, 32vw, 280px)",
                height: "clamp(200px, 32vw, 280px)",
                borderRadius: "40% 60% 60% 40% / 50% 45% 55% 50%",
                objectFit: "cover", position: "relative", zIndex: 2,
                border: "4px solid white",
                boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                transition: "all 0.4s ease",
                cursor: "pointer"
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = "scale(1.02)";
                e.currentTarget.style.boxShadow = "0 25px 50px rgba(59,130,246,0.3)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.15)";
              }}
            />
            <div style={{
              position: "absolute", bottom: 10, right: 10,
              background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
              borderRadius: "50%", width: 45, height: 45,
              display: "flex", alignItems: "center", justifyContent: "center",
              zIndex: 3, boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
              animation: "bounce 2s ease-in-out infinite",
              border: "2px solid white"
            }}>
              <span style={{ fontSize: 22 }}>🤖</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}