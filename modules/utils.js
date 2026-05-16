// ===== utils.js =====
// Funções utilitárias reutilizáveis

/**
 * Formata número como moeda BRL
 * @param {number} preco
 * @returns {string} ex: "R$ 1.500,00"
 */
export function formatarPreco(preco) {
  return preco.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

/**
 * Pad com zero à esquerda
 * @param {number} n
 * @returns {string} ex: "07"
 */
export function pad(n) {
  return String(n).padStart(2, "0");
}

/**
 * Debounce: evita chamadas excessivas em eventos rápidos (ex: keyup)
 * @param {Function} fn
 * @param {number} delay ms
 * @returns {Function}
 */
export function debounce(fn, delay = 300) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), delay);
  };
}

/**
 * Sanitiza string removendo HTML para evitar XSS
 * @param {string} str
 * @returns {string}
 */
export function sanitizar(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

/**
 * Navega com animação de saída
 * @param {string} href
 */
export function navegarCom(href) {
  document.body.classList.add("saindo");
  setTimeout(() => { window.location.href = href; }, 200);
}

/**
 * Dispara efeito de dinheiro no clique
 * @param {MouseEvent} event
 */
export function efeitoClique(event) {
  const emoji = document.createElement("div");
  emoji.classList.add("efeito-dinheiro");
  emoji.innerText = "💸";
  document.body.appendChild(emoji);
  emoji.style.left = event.clientX + "px";
  emoji.style.top  = event.clientY + "px";
  setTimeout(() => emoji.remove(), 1000);
}

/**
 * Dispara confete (requer canvas-confetti carregado)
 * @param {string[]} cores - Array de cores hex
 */
export function dispararConfete(cores = ["#6B7A4E", "#B9CCAE", "#D4DECE", "#A1A1A0", "#fff"]) {
  if (typeof confetti === "undefined") return;
  confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 }, colors: cores });
}
