"use client";

import { useState } from "react";
import styles from "../styles/Confirmacao.module.css"; // Importando CSS do componente

export default function ConfirmacaoPresenca() {
  const [nome, setNome] = useState("");
  const [presenca, setPresenca] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/confirmar", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nome, presenca }),
    });

    if (response.ok) alert("Presença registrada!");
    else alert("Erro ao registrar.");
  };

  return (
    <div className={styles.container}>
      <img
        src="/foto_crianca.jpg" // Adicione a imagem da criança na pasta public/
        alt="Aniversariante"
        className={styles.foto}
      />
      <h1 className={styles.titulo}>Festa de 1 Ano ds Melinda</h1>
      <p className={styles.info}>📅 Data: 20 de Abril de 2025</p>
      <p className={styles.info}>📍 Local: Rua Exemplo, 123 - São Paulo</p>
      <p className={styles.info}>⏰ Horário: 16h00</p>

      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          placeholder="Digite seu nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          className={styles.input}
          required
        />
        <br />
        <div className={styles.radioGroup}>
          <label className={styles.radioLabel}>
            <input
              type="radio"
              name="presenca"
              value="sim"
              onChange={() => setPresenca("sim")}
            />
            Sim
          </label>
          <label className={styles.radioLabel}>
            <input
              type="radio"
              name="presenca"
              value="nao"
              onChange={() => setPresenca("nao")}
            />
            Não
          </label>
        </div>
        <br />
        <button
          type="submit"
          className={styles.botao}
          disabled={!nome.trim() || presenca === null}
        >
          Confirmar Presença
        </button>
      </form>
    </div>
  );
}
