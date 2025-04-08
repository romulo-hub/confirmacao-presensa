import Head from "next/head";
import ConfirmacaoPresenca from "../components/ConfirmacaoPresenca";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-yellow-100 flex flex-col items-center justify-center">
      <Head>
        <title>Aniversário da Melinda 🎂</title>
        <meta
          name="description"
          content="Confirme sua presença no aniversário da Melinda"
        />
      </Head>

      <main className="w-full max-w-2xl px-4">
        <img
          src="/melinda.jpg"
          alt="Melinda"
          className="w-48 h-48 object-cover rounded-full mx-auto mb-4 shadow-lg"
        />
        <h1 className="text-3xl font-bold text-center text-pink-700 mb-2">
          Aniversário da Melinda 💖
        </h1>
        <p className="text-center text-gray-700 mb-6">
          Estamos muito felizes em comemorar o primeiro aninho da Melinda com
          você! Por favor, confirme sua presença abaixo. 🎉
        </p>

        <ConfirmacaoPresenca />
      </main>
    </div>
  );
}
