const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();
const db = admin.firestore();

exports.confirmarPresenca = functions.https.onRequest(async (req, res) => {
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
