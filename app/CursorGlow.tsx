"use client";

import React, { useEffect, useRef } from "react";

const CursorGlow: React.FC = () => {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const moveGlow = (e: MouseEvent) => {
      if (glowRef.current) {
        // Center the glow under the mouse
        glowRef.current.style.left = `${e.clientX - 192}px`;
        glowRef.current.style.top = `${e.clientY - 192}px`;
      }
    };
    window.addEventListener("mousemove", moveGlow);
    return () => window.removeEventListener("mousemove", moveGlow);
  }, []);

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed w-96 h-96 rounded-full bg-violet-500 opacity-5 blur-3xl"
      style={{ left: 0, top: 0 }}
    />
  );
};

export default CursorGlow;
