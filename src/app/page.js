// src/app/page.js
"use client";

import ConfirmacaoPresenca from "../components/ConfirmacaoPresenca";

export default function Home() {
  return (
    <main style={{ textAlign: "center", padding: "20px" }}>
      <h1>Festa de 1 Ano da Melinda 🎉</h1>
      <p>📅 Data: 14 de Junho de 2025</p>
      <p>📍 Local: Rua Exemplo, 123 - Governador Valadares/MG</p>
      <p>⏰ Horário: 16h00</p>

      {/* Formulário de confirmação visível na mesma página */}
      <ConfirmacaoPresenca />
    </main>
  );
}
