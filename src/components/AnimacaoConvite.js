"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function AnimacaoConvite() {
  const containerRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

    // Exemplo de animação: entrada do arco
    tl.from(".arco", { y: 200, opacity: 0, duration: 1 });

    // Animação das borboletas
    gsap.to(".borboleta", {
      x: 100,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    // Mensagem final aparecendo
    tl.from(".mensagem", { x: -100, opacity: 0, duration: 1 }, "-=0.5");

    // Movimento de deslocamento do container (simula movimento de câmera)
    tl.to(containerRef.current, { x: -50, duration: 1 });
    tl.to(containerRef.current, { x: 0, duration: 1 });
  }, []);

  return (
    <div ref={containerRef} className="animacao-container">
      <div
        className="arco"
        style={{
          fontSize: "2.5rem",
          fontWeight: "bold",
          color: "#ff69b4",
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        Convite Especial
      </div>
      <div
        className="borboleta"
        style={{ position: "absolute", top: 10, left: 50, fontSize: "2rem" }}
      >
        🦋
      </div>
      <div
        className="borboleta"
        style={{ position: "absolute", top: 30, left: 150, fontSize: "2rem" }}
      >
        🦋
      </div>
      <div
        className="mensagem"
        style={{
          fontSize: "2rem",
          fontWeight: "bold",
          color: "#ff69b4",
          marginTop: "20px",
        }}
      >
        Espero você!
      </div>
    </div>
  );
}
