import { useState } from "react";
import { db } from "../firebase/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

export default function RSVPForm() {
  const [nome, setNome] = useState("");
  const [confirmado, setConfirmado] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!nome || confirmado === null) return alert("Preencha todos os campos!");

    await addDoc(collection(db, "confirmacoes"), {
      nome,
      confirmado,
      data: new Date(),
    });

    alert("Confirmação registrada! Obrigado 💖");
    setNome("");
    setConfirmado(null);
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6 space-y-4">
      <input
        type="text"
        placeholder="Seu nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        className="border p-2 rounded w-full"
      />
      <div className="flex justify-around">
        <button
          type="button"
          className={`px-6 py-2 rounded-full border ${
            confirmado === true ? "bg-green-200" : ""
          }`}
          onClick={() => setConfirmado(true)}
        >
          Confirmar
        </button>
        <button
          type="button"
          className={`px-6 py-2 rounded-full border ${
            confirmado === false ? "bg-red-200" : ""
          }`}
          onClick={() => setConfirmado(false)}
        >
          Não vou
        </button>
      </div>
      <button
        type="submit"
        className="bg-purple-600 text-white px-4 py-2 rounded w-full"
      >
        Enviar
      </button>
    </form>
  );
}
