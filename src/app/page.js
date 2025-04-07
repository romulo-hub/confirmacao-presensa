import Link from "next/link";
import ConfirmacaoPresenca from "../components/ConfirmacaoPresenca";

export default function Home() {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Festa de 1 Ano da Melinda</h1>
      <p>📅 Data: 20 de Abril de 2025</p>
      <p>📍 Local: Rua Exemplo, 123 - São Paulo</p>
      <p>🕓 Horário: 16h00</p>

      <Link href="/confirmar">
        <button
          style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}
        >
          Confirmar Presença
        </button>
      </Link>

      {/* Adiciona o formulário de confirmação na mesma página */}
      <ConfirmacaoPresenca />
    </div>
  );
}
