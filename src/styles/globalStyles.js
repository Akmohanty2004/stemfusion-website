import { useEffect } from 'react';

export const useGlobalStyles = () => {
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @media (max-width: 768px) {
        .desktop-nav { display: none !important; }
        .mobile-menu-btn { display: flex !important; }
        .hero-split { flex-direction: column !important; text-align: center !important; }
        .hero-left { text-align: center !important; }
        .stats-flex { flex-direction: column !important; align-items: center !important; }
      }
      * { margin: 0; padding: 0; box-sizing: border-box; scroll-behavior: smooth; }
      body { background: #f0f4f8; overflow-x: hidden; }
      ::-webkit-scrollbar { width: 6px; }
      ::-webkit-scrollbar-track { background: #e2e8f0; }
      ::-webkit-scrollbar-thumb { background: linear-gradient(135deg, #3b82f6, #8b5cf6); border-radius: 10px; }
      
      @keyframes float {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        50% { transform: translateY(-15px) rotate(2deg); }
      }
      @keyframes pulseGlow {
        0%, 100% { box-shadow: 0 0 5px rgba(59,130,246,0.3), 0 0 10px rgba(139,92,246,0.2); }
        50% { box-shadow: 0 0 30px rgba(59,130,246,0.6), 0 0 40px rgba(139,92,246,0.3); }
      }
      @keyframes slideUp {
        from { opacity: 0; transform: translateY(60px); }
        to { opacity: 1; transform: translateY(0); }
      }
      @keyframes slideRight {
        from { opacity: 0; transform: translateX(-60px); }
        to { opacity: 1; transform: translateX(0); }
      }
      @keyframes slideLeft {
        from { opacity: 0; transform: translateX(60px); }
        to { opacity: 1; transform: translateX(0); }
      }
      @keyframes rotateGlow {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
      @keyframes bounce {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-10px); }
      }
      @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
      @keyframes gradientShift {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
      @keyframes blinkCursor {
        from, to { border-color: transparent; }
        50% { border-color: #3b82f6; }
      }
      
      .animate-float { animation: float 5s ease-in-out infinite; }
      .animate-pulse-glow { animation: pulseGlow 2.5s ease-in-out infinite; }
      .animate-slideUp { animation: slideUp 0.7s ease forwards; }
      .animate-slideRight { animation: slideRight 0.7s ease forwards; }
      .animate-slideLeft { animation: slideLeft 0.7s ease forwards; }
      .animate-bounce { animation: bounce 2s ease-in-out infinite; }
      .card-3d {
        transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
      }
      .card-3d:hover {
        transform: translateY(-10px) scale(1.02);
        box-shadow: 0 20px 40px rgba(0,0,0,0.1);
      }
      .image-zoom {
        transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
      }
      .image-zoom:hover {
        transform: scale(1.08);
      }
      .glow-text {
        background: linear-gradient(135deg, #2563eb, #7c3aed, #db2777, #2563eb);
        background-size: 300% 300%;
        animation: gradientShift 4s ease infinite;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      .modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0,0,0,0.8);
        backdrop-filter: blur(8px);
        z-index: 1000;
        display: flex;
        align-items: center;
        justify-content: center;
        animation: fadeIn 0.3s ease;
      }
      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      @keyframes modalPop {
        from { transform: scale(0.9); opacity: 0; }
        to { transform: scale(1); opacity: 1; }
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);
};