// src/app/page.js
import AnimacaoConvite from "../pages/components/AnimacaoConvite";
import ConfirmacaoPresenca from "../pages/components/AnimacaoConvite";

export default function Home() {
  return (
    <main style={{ position: "relative", overflow: "hidden" }}>
      {/* Componente de animação no fundo */}
      <AnimacaoConvite />

      {/* Bloco central com informações e confirmação */}
      <div
        style={{
          zIndex: 10,
          position: "relative",
          textAlign: "center",
          padding: "20px",
        }}
      >
        <img
          src="/foto_crianca.jpg"
          alt="Aniversariante"
          style={{
            borderRadius: "50%",
            width: 200,
            height: 200,
            objectFit: "cover",
          }}
        />
        <h1>Festa de 1 Ano da Melinda 🎉</h1>
        <p>📅 Data: 14 de Junho de 2025</p>
        <p>📍 Local: Rua Exemplo, 123 - Governador Valadares/MG</p>
        <p>⏰ Horário: 16h00</p>
        {/* Componente do formulário de confirmação */}
        <ConfirmacaoPresenca />
      </div>
    </main>
  );
}
