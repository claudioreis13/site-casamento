// ===== dom.js =====
// Renderização e manipulação do DOM

import { CONFIG } from "./config.js";
import { formatarPreco, sanitizar, navegarCom } from "./utils.js";
import { isReservado } from "./state.js";

// --- Nav & Footer ---

export function renderNav() {
  const pagina = window.location.pathname.split("/").pop() || "index.html";
  const links = [
    { href: "index.html",     label: "Início" },
    { href: "presentes.html", label: "Presentes" },
    { href: "cerimonia.html", label: "Cerimônia" }
  ];
  return `
    <nav aria-label="Menu principal">
      ${links.map(l => `
        <a href="${l.href}" ${pagina === l.href ? 'class="ativo" aria-current="page"' : ""}>
          ${l.label}
        </a>
      `).join("")}
    </nav>`;
}

export function renderFooter() {
  return `
    <footer>
      <p>Bruna &amp; Cláudio 💖</p>
      <p>Obrigado por fazer parte desse momento especial</p>
      <p style="font-size: 12px; opacity: 0.8;">Site desenvolvido pelo noivo 💻</p>
      <p>© ${new Date().getFullYear()}</p>
    </footer>`;
}

export function injetarNavFooter() {
  const navEl    = document.getElementById("nav-placeholder");
  const footerEl = document.getElementById("footer-placeholder");
  if (navEl)    navEl.outerHTML    = renderNav();
  if (footerEl) footerEl.outerHTML = renderFooter();
}

// --- Campos da cerimônia ---

export function preencherCamposCerimonia() {
  const campos = {
    "cer-data":         CONFIG.dataFormatada,
    "cer-horario":      CONFIG.horarioCerimonia,
    "cer-local":        CONFIG.local,
    "cer-endereco":     CONFIG.endereco,
    "cer-hr-recepcao":  CONFIG.horarioRecepcao,
    "cer-hr-cerimonia": CONFIG.horarioCerimonia,
    "cer-hr-festa":     CONFIG.horarioFesta,
  };
  Object.entries(campos).forEach(([id, val]) => {
    const el = document.getElementById(id);
    if (el) el.innerText = val;
  });

  const btnWaze  = document.getElementById("btn-waze");
  const btnGmaps = document.getElementById("btn-gmaps");
  if (btnWaze)  btnWaze.href  = CONFIG.wazeUrl;
  if (btnGmaps) btnGmaps.href = CONFIG.gmapsUrl;

  const dataLabel = document.getElementById("contador-data-label");
  if (dataLabel) dataLabel.innerText = `${CONFIG.dataFormatada} • ${CONFIG.horarioCerimonia}`;
}

// --- Cards de presentes ---

export function renderCardPresente(p) {
  const reservado = isReservado(p.id);
  return `
    <div
      class="presente${reservado ? " reservado" : ""}"
      data-id="${p.id}"
      data-preco="${p.preco}"
    >
      ${p.humor ? '<span class="badge-humor">😄 Surpresa</span>' : ""}
      <img src="${sanitizar(p.img)}" alt="${sanitizar(p.nome)}" loading="lazy" decoding="async">
      <h3 title="${sanitizar(p.nome)}">${sanitizar(p.nome)}</h3>
      <p>${formatarPreco(p.preco)}</p>
      <button
        class="btn-presentear"
        ${reservado ? "disabled aria-disabled='true'" : ""}
        aria-label="${reservado ? `${sanitizar(p.nome)}: já reservado` : `Presentear com ${sanitizar(p.nome)}`}"
      >
        ${reservado ? "✓ Reservado" : "Presentear"}
      </button>
    </div>`;
}

export function renderPresentes(lista, onComprar) {
  const container = document.querySelector(".lista-presentes");
  if (!container) return;

  container.innerHTML = lista.map(renderCardPresente).join("");
  atualizarContadorResultados(lista.length);

  // Vincular evento nos botões habilitados
  container.querySelectorAll(".btn-presentear:not([disabled])").forEach(botao => {
    botao.addEventListener("click", (event) => {
      onComprar(event, botao);
    });
  });
}

export function atualizarContadorResultados(n) {
  const el = document.getElementById("contador-resultados");
  if (el) el.innerText = `${n} presente${n !== 1 ? "s" : ""}`;
}

export function mostrarSemResultado(container) {
  let div = document.getElementById("sem-resultado");
  if (!div) {
    div = document.createElement("div");
    div.id = "sem-resultado";
    div.className = "sem-resultado";
    div.setAttribute("role", "status");
    div.innerText = "Nenhum presente encontrado 😕";
    container.appendChild(div);
  }
}

export function esconderSemResultado() {
  document.getElementById("sem-resultado")?.remove();
}

// --- Intercepção de links ---

export function interceptarLinks() {
  document.querySelectorAll("a[href]").forEach(a => {
    const href = a.getAttribute("href");
    if (!href) return;
    if (href.startsWith("http") || href.startsWith("#") || href.startsWith("tel") || href.startsWith("mailto")) return;
    if (a.target === "_blank") return;
    a.addEventListener("click", (e) => {
      e.preventDefault();
      navegarCom(href);
    });
  });
}

// --- Scroll reveal ---

export function iniciarScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add("visivel");
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
}
