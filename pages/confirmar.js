import { useState } from "react";

export default function ConfirmarPresenca() {
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
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Confirmar Presença</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Digite seu nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />
        <br />
        <br />
        <label>
          <input
            type="radio"
            name="presenca"
            value="sim"
            onChange={() => setPresenca("sim")}
          />{" "}
          Sim
        </label>
        <label style={{ marginLeft: "20px" }}>
          <input
            type="radio"
            name="presenca"
            value="nao"
            onChange={() => setPresenca("nao")}
          />{" "}
          Não
        </label>
        <br />
        <br />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
