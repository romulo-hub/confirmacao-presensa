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
export default async function handler(req, res) {
  try {
    const snapshot = await getDocs(collection(db, "presencas"));
    const lista = snapshot.docs.map((doc) => doc.data());
    res.status(200).json(lista);
  } catch (error) {
    console.error("Erro ao buscar dados do Firestore:", error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
}
