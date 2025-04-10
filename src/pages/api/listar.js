// Importa os módulos necessários do Firebase
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from "firebase/firestore";

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAnhrtpLXEGxS6eZdTU1I9Q8WeKNIljo34",
  authDomain: "aniversario-melinda.firebaseapp.com",
  projectId: "aniversario-melinda",
  storageBucket: "aniversario-melinda.appspot.com", // 🔹 Corrigido!
  messagingSenderId: "573530545668",
  appId: "1:573530545668:web:f4adc9088d286ccc6f9f51",
  measurementId: "G-HDMZPBY92T",
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Inicializa o Firestore
const db = getFirestore(app);

// Função para lidar com a requisição e retornar os dados da coleção "presencas"

export async function POST(request) {
  try {
    const { nome, presenca } = await request.json();
    await addDoc(collection(db, "presencas"), {
      nome,
      presenca,
      data: serverTimestamp(),
    });
    return new Response(JSON.stringify({ message: "Presença registrada!" }), {
      status: 200,
    });
  } catch (error) {
    console.error("Erro ao salvar:", error);
    return new Response(
      JSON.stringify({ error: "Erro ao registrar presença." }),
      { status: 500 }
    );
  }
}
