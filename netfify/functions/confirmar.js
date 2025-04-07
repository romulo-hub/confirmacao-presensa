exports.handler = async (event) => {
  const data = JSON.parse(event.body);
  const { nome, presenca } = data;

  if (!nome || !presenca) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: "Nome e presença são obrigatórios" }),
    };
  }

  console.log("Confirmação recebida:", { nome, presenca });

  // Aqui você pode salvar no banco de dados, planilha, etc.

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Presença confirmada com sucesso!" }),
  };
};
