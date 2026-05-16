// ===== state.js =====
// Gerenciamento de estado: reservados, filtros, presente selecionado

const STORAGE_KEY = "reservados-casamento";

// --- Reservados ---

export function getReservados() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  } catch {
    return [];
  }
}

export function setReservado(id) {
  const lista = getReservados();
  if (!lista.includes(id)) lista.push(id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(lista));
}

export function isReservado(id) {
  return getReservados().includes(id);
}

// --- Estado de filtros ---

export const estadoFiltros = {
  termo: "",
  faixa: "todos",
  ordem: "padrao"
};

export function resetarFiltros() {
  estadoFiltros.termo = "";
  estadoFiltros.faixa = "todos";
  estadoFiltros.ordem = "padrao";
}

// --- Presente selecionado ---

let _presenteSelecionadoEl = null;

export function getPresenteSelecionado() {
  return _presenteSelecionadoEl;
}

export function setPresenteSelecionado(el) {
  _presenteSelecionadoEl = el;
}

// --- Tema ---

const TEMA_KEY = "tema-casamento";

export function getTema() {
  return localStorage.getItem(TEMA_KEY) || "light";
}

export function setTema(tema) {
  localStorage.setItem(TEMA_KEY, tema);
}
