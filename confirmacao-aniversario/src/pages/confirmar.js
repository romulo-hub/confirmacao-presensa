export default function Confirmar() {
  return (
    <div className="min-h-screen bg-pink-100 flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-3xl sm:text-4xl font-bold text-purple-700 mb-4">
        Presença confirmada! 🎉
      </h1>
      <p className="text-md sm:text-lg text-gray-700 max-w-md">
        Obrigado por confirmar sua presença no aniversário da Melinda 💖 Estamos
        muito felizes em te receber neste dia tão especial!
      </p>

      <div className="mt-8">
        <a
          href="/"
          className="bg-purple-600 text-white px-6 py-2 rounded-full shadow hover:bg-purple-700"
        >
          Voltar para a página inicial
        </a>
      </div>
    </div>
  );
}
