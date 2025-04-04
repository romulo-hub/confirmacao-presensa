import { useEffect, useState } from "react";

export default function Admin() {
  const [presencas, setPresencas] = useState([]);

  useEffect(() => {
    fetch("/api/listar")
      .then((res) => res.json())
      .then(setPresencas);
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Lista de Confirmados</h1>
      <ul>
        {presencas.map((p, i) => (
          <li key={i}>
            {p.nome} - {p.presenca === "sim" ? "Vai" : "Não Vai"}
          </li>
        ))}
      </ul>
    </div>
  );
}
