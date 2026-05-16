// ===== modal.js =====
// Controle do modal de presentes e lightbox

import { CONFIG } from "./config.js";
import { PRESENTES } from "./config.js";
import { formatarPreco, dispararConfete } from "./utils.js";
import { setReservado, getPresenteSelecionado, setPresenteSelecionado } from "./state.js";

// --- Abrir / Fechar Modal ---

export function abrirModal(botao) {
  const card    = botao.closest(".presente");
  const id      = card?.dataset.id;
  const presente = PRESENTES.find(p => p.id === id);
  if (!presente) return;

  setPresenteSelecionado(card);

  // Preencher modal
  const img   = document.getElementById("modal-img");
  const nome  = document.getElementById("modal-nome");
  const valor = document.getElementById("modal-valor");
  const pix   = document.getElementById("modal-pix");

  if (img)   { img.src = presente.img; img.alt = presente.nome; }
  if (nome)  nome.innerText  = presente.nome;
  if (valor) valor.innerText = formatarPreco(presente.preco);
  if (pix)   pix.innerText   = CONFIG.pix;

  // Link WhatsApp com mensagem personalizada
  const msg    = encodeURIComponent(`Oii Bruna! Quero presentear vocês com: ${presente.nome}`);
  const btnWpp = document.getElementById("btn-whatsapp-modal");
  if (btnWpp) btnWpp.href = `https://wa.me/5535997167717?text=${msg}`;

  // Reset botão PIX
  const btnPix = document.querySelector(".btn-pix");
  if (btnPix) { btnPix.innerText = "Copiar PIX"; btnPix.style.background = ""; btnPix.disabled = false; }

  const proximoPasso = document.getElementById("modal-proximo-passo");
  if (proximoPasso) proximoPasso.style.display = "none";

  // Exibir modal
  const modal = document.getElementById("modal");
  if (!modal) return;
  modal.style.display = "flex";
  modal.setAttribute("aria-hidden", "false");
  setTimeout(() => {
    modal.classList.add("ativo");
    // Mover foco para o primeiro elemento focável
    const firstFocusable = modal.querySelector("button, [href], input, [tabindex]:not([tabindex='-1'])");
    if (firstFocusable) firstFocusable.focus();
  }, 10);
}

export function fecharModal() {
  const modal = document.getElementById("modal");
  if (!modal || !modal.classList.contains("ativo")) return;
  modal.classList.remove("ativo");
  modal.setAttribute("aria-hidden", "true");
  setTimeout(() => { modal.style.display = "none"; }, 300);
}

// --- Copiar PIX ---

export function copiarPix() {
  const botao        = document.querySelector(".btn-pix");
  const proximoPasso = document.getElementById("modal-proximo-passo");
  if (!botao) return;

  botao.innerText  = "⏳ Copiando...";
  botao.disabled   = true;

  navigator.clipboard.writeText(CONFIG.pix)
    .then(() => {
      botao.innerText        = "PIX Copiado ✔";
      botao.style.background = "#6B7A4E";
      botao.setAttribute("aria-label", "PIX copiado com sucesso!");
      if (proximoPasso) proximoPasso.style.display = "block";

      dispararConfete();

      const card = getPresenteSelecionado();
      if (card) setReservado(card.dataset.id);

      setTimeout(() => {
        fecharModal();
        botao.innerText = "Copiar PIX";
        botao.style.background = "";
        botao.disabled = false;
        botao.setAttribute("aria-label", "Copiar código PIX para transferência");

        if (card) {
          card.classList.add("reservado");
          const btn = card.querySelector(".btn-presentear");
          if (btn) {
            btn.innerText = "✓ Reservado";
            btn.disabled  = true;
            btn.setAttribute("aria-label", `${card.querySelector("h3")?.innerText || ""}: já reservado`);
          }
        }
      }, 2500);
    })
    .catch(() => {
      // Fallback: mostra o PIX no botão para copiar manualmente
      botao.innerText  = CONFIG.pix;
      botao.style.fontSize = "12px";
      botao.disabled   = false;
      botao.setAttribute("aria-label", `Falha ao copiar. PIX: ${CONFIG.pix}`);
      setTimeout(() => {
        botao.innerText      = "Copiar PIX";
        botao.style.fontSize = "";
        botao.setAttribute("aria-label", "Copiar código PIX para transferência");
      }, 4000);
    });
}

// --- Lightbox ---

export function abrirLightbox() {
  const modalImg     = document.getElementById("modal-img");
  const modalNome    = document.getElementById("modal-nome");
  const lightbox     = document.getElementById("lightbox");
  const lightboxImg  = document.getElementById("lightbox-img");
  const lightboxTit  = document.getElementById("lightbox-titulo");

  if (!modalImg || !lightbox || !lightboxImg) return;

  lightboxImg.src = modalImg.src;
  lightboxImg.alt = modalImg.alt;
  if (lightboxTit && modalNome) lightboxTit.innerText = modalNome.innerText;

  lightbox.showModal();
}

// --- Focus trap ---

export function iniciarFocusTrap() {
  const modalContent = document.querySelector(".modal-conteudo");
  if (!modalContent) return;

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Tab") return;

    const modal = document.getElementById("modal");
    if (!modal?.classList.contains("ativo")) return;

    const focusable = modalContent.querySelectorAll(
      'button:not([disabled]), [href], input:not([disabled]), select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    if (!focusable.length) return;

    const first  = focusable[0];
    const last   = focusable[focusable.length - 1];
    const active = document.activeElement;

    if (event.shiftKey && active === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && active === last) {
      event.preventDefault();
      first.focus();
    }
  });
}
