// Balões subindo aleatoriamente na tela
setInterval(() => {
  const balao = document.createElement("div");
  balao.classList.add("balao");
  balao.style.left = Math.random() * 100 + "vw";
  document.body.appendChild(balao);

  setTimeout(() => balao.remove(), 8000);
}, 800);
