// DATA DO CASAMENTO
const dataCasamento = new Date("2026-10-10T20:00:00");

// CONTADOR
function atualizarContador() {
  const agora = new Date();
  const diferenca = dataCasamento - agora;

  const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diferenca / (1000 * 60)) % 60);
  const segundos = Math.floor((diferenca / 1000) % 60);

  if (document.getElementById("dias")) {
    document.getElementById("dias").innerText = dias;
    document.getElementById("horas").innerText = horas;
    document.getElementById("minutos").innerText = minutos;
    document.getElementById("segundos").innerText = segundos;
  }
}

setInterval(atualizarContador, 1000);

// ===== MODAL =====

function comprar(botao) {
  const card = botao.closest(".presente");
  const valor = card.querySelector("p").innerText;

  document.getElementById("modal-valor").innerText = "👉 Valor: " + valor;
  document.getElementById("modal-pix").innerText = "cr.reis@live.com";

  document.getElementById("modal-recado").innerText =
    "💬 Se preferir pagar de outra forma (cartão de crédito, transferência ou da sua preferência), entre em contato com a Bruna 💖";

  document.getElementById("modal").style.display = "flex";
}

function fecharModal() {
  document.getElementById("modal").style.display = "none";
}

function copiarPix() {
  const pix = "cr.reis@live.com";
  navigator.clipboard.writeText(pix);

  const botao = document.querySelector(".btn-pix");
  botao.innerText = "PIX Copiado ✔";

  setTimeout(() => {
    botao.innerText = "Copiar PIX";
  }, 2000);
}

// ===== ANIMAÇÃO DINHEIRO =====

function efeitoClique(event) {
  const emoji = document.createElement("div");
  emoji.classList.add("efeito-dinheiro");
  emoji.innerText = "💸";

  document.body.appendChild(emoji);

  emoji.style.left = event.clientX + "px";
  emoji.style.top = event.clientY + "px";

  setTimeout(() => {
    emoji.remove();
  }, 1000);
}

// ===== ATIVAR BOTÕES AUTOMATICAMENTE =====

document.addEventListener("DOMContentLoaded", () => {
  const botoes = document.querySelectorAll(".btn-presentear");

  botoes.forEach((botao) => {
    botao.addEventListener("click", (event) => {
      efeitoClique(event);
      comprar(botao);
    });
  });
});