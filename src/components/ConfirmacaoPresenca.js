import { useState } from "react";
import { salvarConfirmacao } from "../firebase/functions";

export default function ConfirmacaoPresenca() {
  const [nome, setNome] = useState("");
  const [comparecera, setComparecera] = useState(null);
  const [confirmado, setConfirmado] = useState(false);
  const [mensagem, setMensagem] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!nome || comparecera === null) {
      alert("Por favor, preencha seu nome e selecione se irá comparecer.");
      return;
    }

    await salvarConfirmacao({ nome, comparecera });
    setConfirmado(true);
    setMensagem(
      comparecera
        ? "Obrigado por confirmar sua presença! 🎉"
        : "Lamentamos que você não possa comparecer 😢"
    );
  };

  return (
    <div className="bg-gray-800 text-white p-8 rounded-2xl shadow-lg w-full max-w-md mx-auto text-center mt-10">
      <img
        src="/melinda.jpg"
        alt="Foto da Melinda"
        className="w-32 h-32 object-cover rounded-full mx-auto border-4 border-blue-500"
      />
      <h1 className="text-2xl font-bold mt-4">Festa de 1 Ano da Melinda 🎉</h1>
      <p className="mt-2">📅 Data: 20 de Abril de 2025</p>
      <p>📍 Local: Rua Exemplo, 123 - São Paulo</p>
      <p>⏰ Horário: 16h00</p>

      {!confirmado ? (
        <form onSubmit={handleSubmit} className="mt-6">
          <input
            type="text"
            placeholder="Digite seu nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className="w-full p-2 rounded-lg text-black mb-4"
          />

          <div className="flex justify-center space-x-6 mb-4">
            <label>
              <input
                type="radio"
                value="sim"
                checked={comparecera === true}
                onChange={() => setComparecera(true)}
              />{" "}
              Comparecerei
            </label>
            <label>
              <input
                type="radio"
                value="nao"
                checked={comparecera === false}
                onChange={() => setComparecera(false)}
              />{" "}
              Não poderei ir
            </label>
          </div>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
          >
            {comparecera === false
              ? "Confirmar que não poderá ir"
              : "Confirmar Presença"}
          </button>
        </form>
      ) : (
        <p className="mt-4 font-bold text-green-400">{mensagem}</p>
      )}
    </div>
  );
}
