// src/components/ConfirmacaoPresenca.js
"use client";

import { useState } from "react";

export default function ConfirmacaoPresenca() {
  const [nome, setNome] = useState("");
  const [presenca, setPresenca] = useState(null);
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("/api/confirmar", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nome, presenca }),
    });

    if (response.ok) {
      setEnviado(true);
    }
  };

  return (
    <div>
      <h2>Confirme sua presença</h2>
      {!enviado ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Seu nome"
            required
          />
          <br />
          <label>
            <input
              type="radio"
              name="presenca"
              value="sim"
              onChange={() => setPresenca("sim")}
              required
            />
            Sim
          </label>
          <label>
            <input
              type="radio"
              name="presenca"
              value="nao"
              onChange={() => setPresenca("nao")}
              required
            />
            Não
          </label>
          <br />
          <button type="submit">Enviar</button>
        </form>
      ) : (
        <p>Obrigado pela confirmação!</p>
      )}
    </div>
  );
}
