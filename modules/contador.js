// ===== contador.js =====
// Contador regressivo circular para o casamento

import { CONFIG } from "./config.js";
import { pad } from "./utils.js";

const CIRC = 2 * Math.PI * 34; // Circunferência do arco SVG (r=34)

function setArco(id, valor, maximo) {
  const el = document.getElementById(id);
  if (!el) return;
  const progresso = Math.min(valor / maximo, 1);
  el.setAttribute("stroke-dasharray", `${progresso * CIRC} ${CIRC}`);
}

export function atualizarContador() {
  const elDias = document.getElementById("dias");
  if (!elDias) return;

  const agora     = new Date();
  const diferenca = CONFIG.dataCasamento - agora;

  if (diferenca <= 0) {
    const cont = document.querySelector(".contador-circular");
    if (cont) cont.innerHTML = `<p style="font-size:22px;font-weight:500;color:var(--color-primary)">Já casados! 🎉</p>`;
    return;
  }

  const dias     = Math.floor(diferenca / (1000 * 60 * 60 * 24));
  const horas    = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
  const minutos  = Math.floor((diferenca / (1000 * 60)) % 60);
  const segundos = Math.floor((diferenca / 1000) % 60);

  document.getElementById("dias")?.innerText     !== undefined && (document.getElementById("dias").innerText     = pad(dias));
  document.getElementById("horas")?.innerText    !== undefined && (document.getElementById("horas").innerText    = pad(horas));
  document.getElementById("minutos")?.innerText  !== undefined && (document.getElementById("minutos").innerText  = pad(minutos));
  document.getElementById("segundos")?.innerText !== undefined && (document.getElementById("segundos").innerText = pad(segundos));

  // ARIA updates para screen readers
  document.getElementById("arco-item-dias")?.setAttribute("aria-label",    `${dias} dias`);
  document.getElementById("arco-item-horas")?.setAttribute("aria-label",   `${horas} horas`);
  document.getElementById("arco-item-minutos")?.setAttribute("aria-label", `${minutos} minutos`);
  document.getElementById("arco-item-segundos")?.setAttribute("aria-label",`${segundos} segundos`);

  // Arcos SVG
  setArco("arco-dias",     dias % 365, 365);
  setArco("arco-horas",    horas,       24);
  setArco("arco-minutos",  minutos,     60);
  setArco("arco-segundos", segundos,    60);
}

export function iniciarContador() {
  if (!document.getElementById("dias")) return;
  atualizarContador();
  setInterval(atualizarContador, 1000);
}
