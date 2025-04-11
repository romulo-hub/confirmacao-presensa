// pages/api/confirmar.js
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

// Configuração do Firebase – substitua pelos seus valores reais.
const firebaseConfig = {
  apiKey: "AIzaSyAnhrtpLXEGxS6eZdTU1I9Q8WeKNIljo34",
  authDomain: "aniversario-melinda.firebaseapp.com",
  projectId: "aniversario-melinda",
  storageBucket: "aniversario-melinda.firebasestorage.app",
  messagingSenderId: "573530545668",
  appId: "1:573530545668:web:f4adc9088d286ccc6f9f51",
  measurementId: "G-HDMZPBY92T",
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { nome, presenca } = req.body;
      if (!nome || !presenca) {
        return res.status(400).json({ error: "Campos inválidos." });
      }
      await addDoc(collection(db, "presencas"), {
        nome,
        presenca,
        data: new Date(),
      });
      return res.status(200).json({ message: "Confirmado!" });
    } catch (error) {
      console.error("Erro ao salvar:", error);
      return res.status(500).json({ error: "Erro interno do servidor." });
    }
  } else {
    return res.status(405).json({ error: "Método não permitido." });
  }
}
