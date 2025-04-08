// api/presencas.js ou functions/handler.js
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase-config"; // caminho relativo ao seu projeto

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
