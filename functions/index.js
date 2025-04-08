const functions = require("firebase-functions");
const admin = require("firebase-admin");
const express = require("express");
const cors = require("cors");

admin.initializeApp();
const db = admin.firestore();

const app = express();

// ✅ CORS com múltiplas origens permitidas
app.use(
  cors({
    origin: (origin, callback) => {
      const allowedOrigins = [
        "http://localhost:3000",
        "https://aniversariomelinda.netlify.app",
      ];
      // Permitir requisições sem origem (ex: servidores internos)
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
  })
);

app.use(express.json());

app.post("/", async (req, res) => {
  const { nome, presenca } = req.body;

  if (!nome || !presenca) {
    return res
      .status(400)
      .json({ message: "Nome e presença são obrigatórios." });
  }

  try {
    await db.collection("confirmacoes").add({
      nome,
      presenca,
      data: new Date(),
    });
    return res
      .status(200)
      .json({ message: "Presença confirmada com sucesso!" });
  } catch (error) {
    console.error("Erro ao salvar:", error);
    return res.status(500).json({ message: "Erro ao confirmar presença." });
  }
});

exports.confirmarPresenca = functions.https.onRequest(app);
