// src/app/confirmar/page.js
"use client";

import { useState } from "react";

export default function Confirmar() {
  const [nome, setNome] = useState("");
  const [presenca, setPresenca] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!nome || !presenca) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    const response = await fetch("/api/confirmar", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nome, presenca }),
    });

    if (response.ok) {
      alert("Confirmação registrada com sucesso!");
      setNome("");
      setPresenca(null);
    } else {
      alert("Erro ao registrar presença.");
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Confirme sua Presença</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Digite seu nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />
        <div style={{ marginTop: "15px" }}>
          <label style={{ marginRight: "20px" }}>
            <input
              type="radio"
              name="presenca"
              value="sim"
              onChange={() => setPresenca("sim")}
              required
            />{" "}
            Sim
          </label>
          <label>
            <input
              type="radio"
              name="presenca"
              value="nao"
              onChange={() => setPresenca("nao")}
              required
            />{" "}
            Não
          </label>
        </div>
        <br />
        <button type="submit" disabled={!nome.trim() || !presenca}>
          Enviar
        </button>
      </form>
    </div>
  );
}
