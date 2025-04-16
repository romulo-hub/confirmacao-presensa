import ReactPlayer from "react-player";
import RSVPForm from "../components/RSVPForm";

export default function Home() {
  return (
    <div className="min-h-screen bg-pink-50">
      <div className="w-full h-60 sm:h-96">
        <ReactPlayer
          url="/video.mp4"
          playing
          muted
          controls={false}
          width="100%"
          height="100%"
        />
      </div>

      <div className="bg-white p-6 text-center rounded-t-3xl shadow-lg mt-[-30px] z-10 relative">
        <h1 className="text-3xl font-bold text-purple-600">Melinda</h1>
        <p className="text-pink-600 mb-4">1 aninho</p>
        <p className="text-sm text-gray-700 mb-4">
          O jardim está em festa! Venha comemorar com a gente!
        </p>
        <p className="text-md text-gray-800 font-semibold">
          📅 12 de julho de 2025, às 16h <br />
          📍 Rua das Borboletas, 123, Jardim Encantado
        </p>

        <RSVPForm />
      </div>
    </div>
  );
}
