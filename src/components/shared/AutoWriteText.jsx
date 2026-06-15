import { useState, useEffect } from 'react';

export default function AutoWriteText() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const words = ["Robotics", "IoT Devices", "STEM Labs", "Smart Solutions"];

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!deleting && index < words.length) {
        setText(words[index].slice(0, text.length + 1));
        if (text.length + 1 === words[index].length) {
          setTimeout(() => setDeleting(true), 1500);
        }
      } else if (deleting && text.length > 0) {
        setText(text.slice(0, -1));
      } else if (deleting && text.length === 0) {
        setDeleting(false);
        setIndex((index + 1) % words.length);
      }
    }, 100);
    return () => clearTimeout(timeout);
  }, [text, deleting, index, words]);

  return (
    <span style={{ 
      background: "linear-gradient(135deg, #2563eb, #7c3aed, #db2777, #2563eb)",
      backgroundSize: "300% 300%",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      borderRight: "3px solid #3b82f6",
      paddingRight: "5px",
      animation: "gradientShift 4s ease infinite, blinkCursor 0.8s step-end infinite"
    }}>
      {text}
    </span>
  );
}