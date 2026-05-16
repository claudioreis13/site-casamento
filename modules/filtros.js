// ===== filtros.js =====
// Lógica de busca, filtro e ordenação de presentes

import { PRESENTES } from "./config.js";
import { estadoFiltros, resetarFiltros } from "./state.js";
import { renderPresentes, mostrarSemResultado, esconderSemResultado } from "./dom.js";
import { debounce, efeitoClique } from "./utils.js";
import { abrirModal } from "./modal.js";

export function aplicarFiltros() {
  let lista = [...PRESENTES];
  const { termo, faixa, ordem } = estadoFiltros;

  // Filtro por busca
  if (termo) lista = lista.filter(p => p.nome.toLowerCase().includes(termo));

  // Filtro por faixa de preço
  const filtroPreco = {
    "ate200":    p => p.preco <= 200,
    "200a500":   p => p.preco > 200  && p.preco <= 500,
    "500a1000":  p => p.preco > 500  && p.preco <= 1000,
    "acima1000": p => p.preco > 1000,
  };
  if (filtroPreco[faixa]) lista = lista.filter(filtroPreco[faixa]);

  // Ordenação
  const ordenacoes = {
    "menor": (a, b) => a.preco - b.preco,
    "maior": (a, b) => b.preco - a.preco,
    "az":    (a, b) => a.nome.localeCompare(b.nome, "pt-BR"),
  };
  if (ordenacoes[ordem]) lista.sort(ordenacoes[ordem]);

  // Render e estado vazio
  renderPresentes(lista, (event, botao) => {
    efeitoClique(event);
    abrirModal(botao);
  });

  const container = document.querySelector(".lista-presentes");
  if (lista.length === 0) mostrarSemResultado(container);
  else esconderSemResultado();
}

export function toggleFiltros() {
  const painel = document.getElementById("controles-painel");
  const btn    = document.getElementById("btn-filtros-toggle");
  if (!painel || !btn) return;
  const aberto = painel.classList.toggle("aberto");
  btn.classList.toggle("ativo", aberto);
  btn.setAttribute("aria-expanded", String(aberto));
  btn.setAttribute("aria-label", aberto ? "Fechar painel de filtros" : "Abrir painel de filtros");
}

export function limparFiltros() {
  resetarFiltros();
  const busca  = document.getElementById("busca-presente");
  const filtro = document.getElementById("filtro-preco");
  const ordem  = document.getElementById("ordenacao");
  if (busca)  busca.value  = "";
  if (filtro) filtro.value = "todos";
  if (ordem)  ordem.value  = "padrao";
  atualizarBadgeFiltro();
  aplicarFiltros();
}

export function atualizarBadgeFiltro() {
  const badge     = document.getElementById("filtro-badge");
  const btnLimpar = document.getElementById("btn-limpar");
  const count     = (estadoFiltros.faixa !== "todos" ? 1 : 0) + (estadoFiltros.termo ? 1 : 0);
  if (badge) {
    badge.style.display = count > 0 ? "inline-flex" : "none";
    badge.innerText      = count;
    badge.setAttribute("aria-label", count > 0 ? `${count} filtro${count > 1 ? "s" : ""} ativo${count > 1 ? "s" : ""}` : "");
  }
  if (btnLimpar) btnLimpar.style.display = count > 0 ? "inline-block" : "none";
}

export function vincularEventosFiltros() {
  const busca  = document.getElementById("busca-presente");
  const filtro = document.getElementById("filtro-preco");
  const ordem  = document.getElementById("ordenacao");

  if (busca) {
    busca.addEventListener("input", debounce(() => {
      estadoFiltros.termo = busca.value.toLowerCase().trim();
      atualizarBadgeFiltro();
      aplicarFiltros();
    }, 300));
  }

  if (filtro) {
    filtro.addEventListener("change", () => {
      estadoFiltros.faixa = filtro.value;
      atualizarBadgeFiltro();
      aplicarFiltros();
    });
  }

  if (ordem) {
    ordem.addEventListener("change", () => {
      estadoFiltros.ordem = ordem.value;
      aplicarFiltros();
    });
  }
}
