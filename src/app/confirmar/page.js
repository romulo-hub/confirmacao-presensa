"use client";

import { useState } from "react";

export default function Confirmar() {
  const [nome, setNome] = useState("");
  const [presenca, setPresenca] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!nome || !presenca) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/confirmar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome, presenca }),
      });

      if (response.ok) {
        alert("🎉 Confirmação registrada com sucesso!");
        setNome("");
        setPresenca(null);
      } else {
        const { error } = await response.json();
        alert("Erro ao registrar presença: " + (error || "erro desconhecido"));
      }
    } catch (err) {
      alert("Erro de rede ou servidor.");
    } finally {
      setLoading(false);
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
          style={{ padding: "10px", width: "250px", fontSize: "16px" }}
        />

        <div style={{ marginTop: "15px" }}>
          <label style={{ marginRight: "20px" }}>
            <input
              type="radio"
              name="presenca"
              value="sim"
              checked={presenca === "sim"}
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
              checked={presenca === "nao"}
              onChange={() => setPresenca("nao")}
              required
            />{" "}
            Não
          </label>
        </div>

        <br />
        <button
          type="submit"
          disabled={!nome.trim() || !presenca || loading}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            cursor: loading ? "not-allowed" : "pointer",
          }}
        >
          {loading ? "Enviando..." : "Enviar"}
        </button>
      </form>
    </div>
  );
}
