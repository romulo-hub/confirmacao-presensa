import ReactPlayer from "react-player";
import RSVPForm from "../components/RSVPForm";

export default function Home() {
  return (
    <div className="min-h-screen bg-pink-100 flex flex-col items-center justify-start">
      {/* Vídeo no topo */}
      <div className="w-full max-h-72 sm:max-h-96 overflow-hidden shadow-md">
        <ReactPlayer
          url="/video.mp4"
          playing
          muted
          loop
          controls={false}
          width="100%"
          height="100%"
        />
      </div>

      {/* Bloco inferior */}
      <div className="bg-white w-full max-w-2xl rounded-t-3xl shadow-lg -mt-4 p-6 text-center">
        <h1 className="text-4xl font-bold text-purple-700 mb-2">Melinda</h1>
        <p className="text-pink-600 text-lg font-medium mb-1">1 aninho 🎉</p>

        <p className="text-sm text-gray-700 mb-4">
          O jardim está em festa! Venha comemorar com a gente!
        </p>

        <div className="text-md text-gray-800 font-medium leading-relaxed mb-4">
          📅 <strong>12 de julho de 2025</strong> <br />
          🕓 <strong>às 16h</strong> <br />
          📍 <strong>Rua das Borboletas, 123 - Jardim Encantado</strong>
        </div>

        <p className="text-sm text-gray-600 mb-6">
          <strong>Traje:</strong> social ou fantasia 💃🧚
        </p>

        <RSVPForm />
      </div>
    </div>
  );
}
