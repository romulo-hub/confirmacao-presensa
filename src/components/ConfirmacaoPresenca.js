"use client";

import { useState } from "react";
import styles from "../styles/Confirmacao.module.css"; // CSS do componente

export default function ConfirmacaoPresenca() {
  const [nome, setNome] = useState("");
  const [presenca, setPresenca] = useState(null);
  const [mensagem, setMensagem] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://us-central1-aniversario-melinda.cloudfunctions.net/confirmarPresenca",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ nome, presenca }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setMensagem(data.message || "Presença registrada com sucesso!");
        setNome("");
        setPresenca(null);
      } else {
        setMensagem("Erro ao registrar presença.");
      }
    } catch (error) {
      setMensagem("Erro ao conectar com o servidor.");
    }
  };

  return (
    <div className={styles.container}>
      <img
        src="/foto_crianca.jpg"
        alt="Aniversariante"
        className={styles.foto}
      />
      <h1 className={styles.titulo}>Festa de 1 Ano da Melinda 🎉</h1>
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
              checked={presenca === "sim"}
              onChange={() => setPresenca("sim")}
            />
            Sim
          </label>
          <label className={styles.radioLabel}>
            <input
              type="radio"
              name="presenca"
              value="nao"
              checked={presenca === "nao"}
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

      {mensagem && <p className={styles.mensagem}>{mensagem}</p>}
    </div>
  );
}
