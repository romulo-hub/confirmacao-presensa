// src/components/AnimacaoConvite.js
"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function AnimacaoConvite() {
  const containerRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

    // Exemplo: animação de entrada por baixo de um arco
    tl.from(".arco", { y: 200, opacity: 0, duration: 1 });
    // Exemplo: animação de borboletas se movendo
    gsap.to(".borboleta", {
      x: 100,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
    // Animações de transição dos textos
    tl.from(".mensagem", { x: -100, opacity: 0, duration: 1 }, "-=0.5");
    // Simula movimento de câmera: pode usar deslocamento do container ou elementos
    tl.to(containerRef.current, { x: -50, duration: 1, ease: "power1.inOut" });
    // Volta de ré ao final
    tl.to(containerRef.current, { x: 0, duration: 1, ease: "power1.inOut" });
  }, []);

  return (
    <div ref={containerRef} className="animacao-container">
      {/* Elemento do arco */}
      <div className="arco">Convite Especial</div>
      {/* Elementos das borboletas */}
      <div
        className="borboleta"
        style={{ position: "absolute", top: 10, left: 50 }}
      >
        🦋
      </div>
      <div
        className="borboleta"
        style={{ position: "absolute", top: 30, left: 150 }}
      >
        🦋
      </div>
      {/* Outros elementos que se animam podem ser adicionados */}
    </div>
  );
}
