import { useState } from 'react';
import { PROJECTS_DATA } from '../data/projectsData';

export default function ProjectsSection() {
  const [modalProject, setModalProject] = useState(null);

  const openModal = (project) => {
    setModalProject(project);
  };

  const closeModal = () => {
    setModalProject(null);
  };

  return (
    <section id="projects" style={{ padding: "80px 6%", position: "relative", zIndex: 1, background: "#f8fafc" }}>
      <div style={{ textAlign: "center", marginBottom: 56 }}>
        <span style={{ fontSize: 11, letterSpacing: "0.18em", color: "#3b82f6", fontWeight: 600, padding: "6px 16px", borderRadius: 99, background: "#dbeafe", display: "inline-block" }}>✦ FEATURED PROJECTS ✦</span>
        <h2 style={{ fontSize: "clamp(1.8rem, 5vw, 3rem)", fontWeight: 800, marginTop: 16, color: "#1e293b" }}>Real Impact, Real Results</h2>
        <p style={{ color: "#64748b", marginTop: 10 }}>Innovative IoT solutions we've delivered</p>
      </div>
      
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: 30, maxWidth: 1300, margin: "0 auto" }}>
        {PROJECTS_DATA.map((project, i) => (
          <div key={i} className="card-3d" style={{
            borderRadius: 28, overflow: "hidden", background: "white",
            boxShadow: "0 15px 35px rgba(0,0,0,0.1)", border: `1px solid ${project.color}20`,
            opacity: 0, animation: "slideUp 0.6s ease forwards", animationDelay: `${i * 0.15}s`
          }}>
            <div style={{ position: "relative", overflow: "hidden" }}>
              <img src={project.img} alt={project.title} className="image-zoom" style={{ width: "100%", height: 240, objectFit: "cover" }} />
              <div style={{ position: "absolute", top: 20, right: 20, background: "white", borderRadius: 50, padding: "10px 15px", fontSize: 28, boxShadow: "0 4px 15px rgba(0,0,0,0.15)" }}>{project.icon}</div>
            </div>
            <div style={{ padding: 25 }}>
              <h3 style={{ fontSize: 22, fontWeight: 700, color: "#1e293b", marginBottom: 12 }}>{project.title}</h3>
              <p style={{ fontSize: 14, color: "#475569", lineHeight: 1.7, marginBottom: 20 }}>{project.shortDesc}</p>
              
              <button onClick={() => openModal(project)} style={{
                padding: "10px 24px", borderRadius: 40, border: `2px solid ${project.color}`,
                background: "transparent", color: project.color, fontSize: 13, fontWeight: 700, cursor: "pointer",
                transition: "all 0.3s ease"
              }}
              onMouseEnter={e => { e.currentTarget.style.background = project.color; e.currentTarget.style.color = "white"; e.currentTarget.style.transform = "translateX(5px)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = project.color; e.currentTarget.style.transform = "translateX(0)"; }}>
                Learn More →
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div style={{
            background: "white", borderRadius: 32, maxWidth: 600, width: "90%",
            maxHeight: "85vh", overflowY: "auto", padding: 32, animation: "modalPop 0.3s ease",
            position: "relative"
          }} onClick={e => e.stopPropagation()}>
            <button onClick={closeModal} style={{
              position: "sticky", top: 0, float: "right", background: "#f1f5f9",
              border: "none", width: 36, height: 36, borderRadius: "50%",
              fontSize: 18, cursor: "pointer", marginBottom: 16
            }}>✕</button>
            
            <div style={{ textAlign: "center", marginBottom: 24 }}>
              <div style={{ fontSize: 64, marginBottom: 12 }}>{modalProject.icon}</div>
              <h2 style={{ fontSize: 28, fontWeight: 800, color: "#1e293b" }}>{modalProject.title}</h2>
            </div>
            
            <div style={{ marginBottom: 24 }}>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: "#3b82f6", marginBottom: 12 }}>📋 Project Overview</h3>
              <p style={{ fontSize: 15, color: "#475569", lineHeight: 1.7 }}>{modalProject.fullDesc}</p>
            </div>
            
            <div style={{ marginBottom: 24 }}>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: "#8b5cf6", marginBottom: 12 }}>💡 Why We Made This</h3>
              <p style={{ fontSize: 15, color: "#475569", lineHeight: 1.7 }}>{modalProject.whyWeMade}</p>
            </div>
            
            <div>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: "#10b981", marginBottom: 12 }}>🔧 Technologies Used</h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                {modalProject.tech.map((t, i) => (
                  <span key={i} style={{ padding: "5px 14px", borderRadius: 30, background: "#f1f5f9", color: "#475569", fontSize: 12, fontWeight: 600 }}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}