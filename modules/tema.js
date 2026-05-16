// ===== tema.js =====
// Gerenciamento de dark/light mode

import { getTema, setTema } from "./state.js";

export function iniciarTema() {
  const toggle = document.getElementById("dark-mode-toggle");
  if (!toggle) return;

  // Aplicar tema salvo
  const temaSalvo = getTema();
  aplicarTema(temaSalvo, toggle);

  // Listener de clique
  toggle.addEventListener("click", () => {
    const atual  = document.documentElement.getAttribute("data-theme") || "light";
    const novo   = atual === "dark" ? "light" : "dark";
    setTema(novo);
    aplicarTema(novo, toggle);
  });
}

function aplicarTema(tema, toggle) {
  document.documentElement.setAttribute("data-theme", tema);
  const escuro = tema === "dark";
  toggle.innerText = escuro ? "☀️" : "🌙";
  toggle.setAttribute("aria-label", escuro ? "Alternar para tema claro" : "Alternar para tema escuro");
  toggle.setAttribute("aria-pressed", String(escuro));
}
