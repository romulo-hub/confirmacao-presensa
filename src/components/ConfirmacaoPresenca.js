import { useState } from "react";
import axios from "axios";

export default function ConfirmacaoPresenca() {
  const [nome, setNome] = useState("");
  const [presenca, setPresenca] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!nome || !presenca) {
      setMensagem("Por favor, preencha todos os campos.");
      return;
    }

    try {
      await axios.post(
        "https://us-central1-aniversario-melinda.cloudfunctions.net/confirmarPresenca",
        { nome, presenca }
      );
      setMensagem(
        presenca === "Sim"
          ? "Presença confirmada! Obrigado por vir 🎉"
          : "Confirmado que não poderá comparecer. Sentiremos sua falta ❤️"
      );
      setEnviado(true);
    } catch (error) {
      console.error("Erro ao enviar confirmação:", error);
      setMensagem("Ocorreu um erro. Tente novamente mais tarde.");
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-gray-900 text-white rounded-2xl shadow-lg mt-6">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Confirme sua presença 🎈
      </h2>
      {!enviado ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Digite seu nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className="w-full p-2 rounded mb-4 text-black"
          />

          <div className="flex justify-around mb-4">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="presenca"
                value="Sim"
                onChange={(e) => setPresenca(e.target.value)}
              />
              <span>Sim, vou 🥳</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="presenca"
                value="Não"
                onChange={(e) => setPresenca(e.target.value)}
              />
              <span>Não poderei 😢</span>
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-pink-500 text-white py-2 rounded hover:bg-pink-600 transition"
          >
            Enviar Confirmação
          </button>
        </form>
      ) : (
        <p className="text-center mt-4">{mensagem}</p>
      )}
    </div>
  );
}
