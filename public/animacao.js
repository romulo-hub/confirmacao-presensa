// Animação de balões subindo
setInterval(() => {
  const balao = document.createElement("div");
  balao.classList.add("balao");
  balao.style.left = Math.random() * 100 + "vw";
  document.body.appendChild(balao);

  setTimeout(() => balao.remove(), 8000);
}, 800);
document.getElementById("botaoMusica").addEventListener("click", () => {
  const musica = document.getElementById("musicaFesta");
  musica
    .play()
    .then(() => {
      console.log("Música tocando!");
    })
    .catch((error) => {
      console.log("Erro ao tocar música:", error);
    });
});
