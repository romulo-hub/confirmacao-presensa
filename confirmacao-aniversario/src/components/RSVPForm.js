import { useState } from "react";
import { db } from "../firebase/firebaseConfig";
import { collection, addDoc, Timestamp } from "firebase/firestore";

export default function RSVPForm() {
  const [nome, setNome] = useState("");
  const [presenca, setPresenca] = useState(null);
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!nome || presenca === null) {
      alert("Preencha seu nome e escolha Sim ou Não.");
      return;
    }

    try {
      await addDoc(collection(db, "confirmacoes"), {
        nome,
        presenca: presenca ? "sim" : "nao",
        data: Timestamp.now(),
      });

      setEnviado(true);
    } catch (err) {
      console.error("Erro ao enviar:", err);
      alert("Erro ao enviar confirmação.");
    }
  };

  if (enviado) {
    return (
      <div className="bg-green-100 border border-green-300 text-green-700 p-4 rounded mt-4">
        Obrigado pela confirmação! 💖
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Seu nome"
        className="w-full border rounded px-4 py-2"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />

      <div className="flex justify-around">
        <button
          type="button"
          className={`px-6 py-2 rounded-full border ${
            presenca === true ? "bg-green-300" : ""
          }`}
          onClick={() => setPresenca(true)}
        >
          Sim
        </button>
        <button
          type="button"
          className={`px-6 py-2 rounded-full border ${
            presenca === false ? "bg-red-300" : ""
          }`}
          onClick={() => setPresenca(false)}
        >
          Não
        </button>
      </div>

      <button
        type="submit"
        className="w-full bg-purple-600 text-white py-2 rounded"
      >
        Confirmar Presença
      </button>
    </form>
  );
}
