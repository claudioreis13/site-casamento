// ===== CONTADOR =====
const dataCasamento = new Date("October 10, 2026 20:00:00");

function atualizarContador() {
  const agora = new Date();
  const diferenca = dataCasamento - agora;

  if (diferenca <= 0) return;

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
atualizarContador();


// ===== PIX =====
const chavePix = "cr.reis@live.com"; // ALTERE AQUI


// ===== ANIMAÇÃO DINHEIRO =====
function efeitoClique(event) {

  const elemento = document.createElement("div");
  elemento.innerText = "💸";
  elemento.classList.add("efeito-dinheiro");

  elemento.style.left = event.clientX + "px";
  elemento.style.top = event.clientY + "px";

  document.body.appendChild(elemento);

  setTimeout(() => {
    elemento.remove();
  }, 1000);
}


// ===== ABRIR MODAL =====
function comprar(botao) {

  const valorTexto = botao.parentElement.querySelector("p").innerText;

  document.getElementById("modal-valor").innerText = `👉 Valor: ${valorTexto}`;
  document.getElementById("modal-pix").innerText = chavePix;

  document.getElementById("modal-recado").innerText =
  "Se preferir presentear por outro meio (cartão, transferência, etc), fale diretamente com os noivos para combinarmos da melhor forma 💕";

  document.getElementById("modal").style.display = "flex";
}


// ===== COPIAR PIX =====
function copiarPix() {
  navigator.clipboard.writeText(chavePix);

  const btn = event.target;
  const textoOriginal = btn.innerText;

  btn.innerText = "Copiado! ✅";

  setTimeout(() => {
    btn.innerText = textoOriginal;
  }, 1500);
}


// ===== FECHAR =====
function fecharModal() {
  document.getElementById("modal").style.display = "none";
}