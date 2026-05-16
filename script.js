// ===== CONFIG CENTRAL =====
const CONFIG = {
  dataCasamento:    new Date("2026-10-10T20:00:00"),
  dataFormatada:    "10 de Outubro de 2026",
  horarioRecepcao:  "19h30",
  horarioCerimonia: "20h00",
  horarioFesta:     "21h00",
  local:            "Igreja Matriz — Nepomuceno, MG",
  endereco:         "Praça da Matriz — Nepomuceno, MG",
  wazeUrl:          "https://waze.com/ul?q=Igreja+Matriz+Nepomuceno+MG&navigate=yes",
  gmapsUrl:         "https://www.google.com/maps/search/Igreja+Matriz+Nepomuceno+MG",
  pix:              "cr.reis@live.com",
  whatsapp:         "https://wa.me/5535997167717?text=oii%20Bruna"
};

// ===== LISTA DE PRESENTES =====
const PRESENTES = [
  { id: "jantar",        nome: "Aparelho de jantar",                                               preco: 500.00,   img: "imagens/jantar.jpg" },
  { id: "ar",            nome: "Ar condicionado 12.000 btu",                                       preco: 2200.00,  img: "imagens/ar.jpg" },
  { id: "netflix",       nome: "1 ano de Netflix",                                                 preco: 600.00,   img: "imagens/netflix.jpg" },
  { id: "esmeril",       nome: "Acessório para cortar a unha do dedão do noivo",                   preco: 200.00,   img: "imagens/esmerilhadeira.jpg", humor: true },
  { id: "cabeceira",     nome: "Cabeceira King Size",                                              preco: 800.00,   img: "imagens/cabeceira.jpg" },
  { id: "rochele",       nome: "É claro que eu posso pagar, meu marido tem 2 empregos 😂",        preco: 700.00,   img: "imagens/rochele.jpg",        humor: true },
  { id: "cobreleito",    nome: "Cobreleito king",                                                  preco: 477.67,   img: "imagens/cobreleito.jpg" },
  { id: "louca",         nome: "Lava louças 10 serviços",                                          preco: 2950.00,  img: "imagens/louca.jpg" },
  { id: "microondas",    nome: "Microondas 30 litros",                                             preco: 650.00,   img: "imagens/microondas.jpg" },
  { id: "patolino",      nome: "Seja meu convidado preferido",                                     preco: 700.00,   img: "imagens/patolino.jpg",       humor: true },
  { id: "razao",         nome: "Cobertor para a noiva que está coberta de razão",                  preco: 200.00,   img: "imagens/razao.jpg",          humor: true },
  { id: "toalha",        nome: "Jogo de toalha banhão",                                            preco: 182.27,   img: "imagens/toalha.jpg" },
  { id: "edredon",       nome: "Edredon Queen 300 fios",                                           preco: 500.00,   img: "imagens/edredon.jpg" },
  { id: "purificador",   nome: "Purificador de água",                                              preco: 500.00,   img: "imagens/purificador.jpg" },
  { id: "buque",         nome: "Aumente em 30% sua chance de pegar o buquê",                      preco: 150.00,   img: "imagens/buque.jpg",          humor: true },
  { id: "convidado",     nome: "Levar alguém que não foi convidado",                               preco: 7965.49,  img: "imagens/convidado.jpg",      humor: true },
  { id: "cueca",         nome: "Cueca sexy para lua de mel",                                       preco: 100.00,   img: "imagens/cueca.jpg",          humor: true },
  { id: "ronaldo",       nome: "Corte de cabelo do noivo por 6 meses",                            preco: 500.00,   img: "imagens/ronaldo.jpg",        humor: true },
  { id: "assadeiras",    nome: "Conjunto de assadeiras Marinex",                                   preco: 121.00,   img: "imagens/assadeiras.jpg" },
  { id: "tv",            nome: "TV 60\"",                                                          preco: 3000.00,  img: "imagens/tv.jpg" },
  { id: "parafusadeira", nome: "Parafusadeira e furadeira",                                        preco: 500.00,   img: "imagens/parafusadeira.jpg" },
  { id: "julius",        nome: "Só pra dizer que não dei nada",                                    preco: 20.00,    img: "imagens/julius.jpg",         humor: true },
  { id: "tacas",         nome: "Taças de vinho",                                                   preco: 50.00,    img: "imagens/tacas.jpg" },
  { id: "tigela",        nome: "Conjunto de bowls",                                                preco: 50.00,    img: "imagens/tigela.jpg" },
  { id: "boleira",       nome: "Boleira com tampa",                                                preco: 50.00,    img: "imagens/boleira.jpg" },
  { id: "aspirador",     nome: "Aspirador 2 em 1",                                                preco: 200.00,   img: "imagens/aspirador.jpg" },
  { id: "panela",        nome: "Panela de pressão elétrica",                                       preco: 500.00,   img: "imagens/panela.jpg" },
  { id: "cadeira",       nome: "Cadeira ergonômica",                                               preco: 600.00,   img: "imagens/cadeira.jpg" },
  { id: "mixer",         nome: "Mixer 3 em 1",                                                    preco: 170.00,   img: "imagens/mixer.jpg" },
  { id: "cristaleira",   nome: "Cristaleira retrô",                                                preco: 470.00,   img: "imagens/cristaleira.jpg" },
  { id: "americano",     nome: "Jogo americano crochê",                                            preco: 70.00,    img: "imagens/americano.jpg" },
  { id: "espelho",       nome: "Espelho corpo inteiro",                                            preco: 478.00,   img: "imagens/espelho.jpg" },
  { id: "jarra",         nome: "Kit jarra + taças",                                                preco: 70.00,    img: "imagens/jarra.jpg" },
  { id: "panificadora",  nome: "Panificadora",                                                     preco: 550.00,   img: "imagens/panificadora.jpg" },
  { id: "chaleira",      nome: "Chaleira elétrica",                                                preco: 150.00,   img: "imagens/chaleira.jpg" },
  { id: "navio",         nome: "Ajuda na lua de mel",                                              preco: 1000.00,  img: "imagens/navio.jpg" },
  { id: "sobremesa",     nome: "Taças de sobremesa",                                               preco: 76.00,    img: "imagens/sobremesa.jpg" },
  { id: "processador",   nome: "Multiprocessador Powerchop Philips Walita 127v",                   preco: 500.00,   img: "imagens/processador.jpg" },
  { id: "criado",        nome: "Kit 2 Un Mesa de Cabeceira Sofia Estilo Industrial",               preco: 352.00,   img: "imagens/criado.jpg" },
  { id: "lateral",       nome: "Mesa Lateral para Sofá com Espelho Luxo",                          preco: 114.00,   img: "imagens/lateral.jpg" },
  { id: "organizador",   nome: "Kit 4 Organizadores de Geladeira 3.8 Litros",                     preco: 76.00,    img: "imagens/organizador.jpg" },
  { id: "pote",          nome: "Kit 3 a 10 Potes Herméticos 2L Dispenser Organizador Lavanderia",  preco: 100.00,   img: "imagens/pote.jpg" },
  { id: "centro",        nome: "Kit 2 Mesas De Centro Madeira Design Orgânico Sala De Estar",     preco: 285.00,   img: "imagens/centro.jpg" },
  { id: "tv42",          nome: "Samsung Smartv 42 polegadas",                                      preco: 1500.00,  img: "imagens/tv42.jpg" },
];

// ===== HELPERS =====
function formatarPreco(preco) {
  return preco.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function debounce(fn, delay) {
  let timeout;
  return function() {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn.apply(this, arguments), delay || 300);
  };
}

// ===== RESERVADOS — LOCALSTORAGE =====
function buscarReservados() {
  try { return JSON.parse(localStorage.getItem("reservados") || "[]"); }
  catch { return []; }
}

function marcarReservado(id) {
  const lista = buscarReservados();
  if (!lista.includes(id)) lista.push(id);
  localStorage.setItem("reservados", JSON.stringify(lista));
}

// ===== RENDER PRESENTES =====
function renderPresentes(lista) {
  const container = document.querySelector(".lista-presentes");
  if (!container) return;

  const reservados = buscarReservados();

  container.innerHTML = lista.map(function(p) {
    const estaReservado = reservados.includes(p.id);
    return '<div class="presente' + (estaReservado ? " reservado" : "") + '" data-id="' + p.id + '" data-preco="' + p.preco + '">' +
      (p.humor ? '<span class="badge-humor">😄 Surpresa</span>' : '') +
      '<img src="' + p.img + '" alt="' + p.nome + '" loading="lazy" decoding="async">' +
      '<h3 title="' + p.nome + '">' + p.nome + '</h3>' +
      '<p>' + formatarPreco(p.preco) + '</p>' +
      '<button class="btn-presentear"' +
        (estaReservado ? ' disabled aria-disabled="true"' : '') +
        ' aria-label="' + (estaReservado ? p.nome + ': já reservado' : 'Presentear com ' + p.nome) + '">' +
        (estaReservado ? "✓ Reservado" : "Presentear") +
      '</button>' +
    '</div>';
  }).join("");

  atualizarContadorResultados(lista.length);

  container.querySelectorAll(".btn-presentear:not([disabled])").forEach(function(botao) {
    botao.addEventListener("click", function(event) {
      efeitoClique(event);
      comprar(botao);
    });
  });
}

function atualizarContadorResultados(n) {
  const el = document.getElementById("contador-resultados");
  if (el) el.innerText = n + " presente" + (n !== 1 ? "s" : "");
}

// ===== FILTRO + BUSCA + ORDENAÇÃO =====
var estadoAtual = { termo: "", faixa: "todos", ordem: "padrao" };

function aplicarFiltros() {
  var lista = PRESENTES.slice();
  var termo = estadoAtual.termo;
  var faixa = estadoAtual.faixa;
  var ordem = estadoAtual.ordem;

  if (termo) lista = lista.filter(function(p) { return p.nome.toLowerCase().includes(termo); });
  if (faixa === "ate200")    lista = lista.filter(function(p) { return p.preco <= 200; });
  if (faixa === "200a500")   lista = lista.filter(function(p) { return p.preco > 200  && p.preco <= 500; });
  if (faixa === "500a1000")  lista = lista.filter(function(p) { return p.preco > 500  && p.preco <= 1000; });
  if (faixa === "acima1000") lista = lista.filter(function(p) { return p.preco > 1000; });
  if (ordem === "menor") lista.sort(function(a, b) { return a.preco - b.preco; });
  if (ordem === "maior") lista.sort(function(a, b) { return b.preco - a.preco; });
  if (ordem === "az")    lista.sort(function(a, b) { return a.nome.localeCompare(b.nome, "pt-BR"); });

  renderPresentes(lista);

  var container    = document.querySelector(".lista-presentes");
  var semResultado = document.getElementById("sem-resultado");
  if (lista.length === 0) {
    if (!semResultado) {
      var div = document.createElement("div");
      div.id        = "sem-resultado";
      div.className = "sem-resultado";
      div.setAttribute("role", "status");
      div.innerText = "Nenhum presente encontrado 😕";
      container.appendChild(div);
    }
  } else if (semResultado) {
    semResultado.remove();
  }
}

// ===== CONTROLES MOBILE =====
function toggleFiltros() {
  var painel = document.getElementById("controles-painel");
  var btn    = document.getElementById("btn-filtros-toggle");
  if (!painel || !btn) return;
  var aberto = painel.classList.toggle("aberto");
  btn.classList.toggle("ativo", aberto);
  btn.setAttribute("aria-expanded", String(aberto));
  btn.setAttribute("aria-label", aberto ? "Fechar painel de filtros" : "Abrir painel de filtros");
}

function limparFiltros() {
  estadoAtual.termo = "";
  estadoAtual.faixa = "todos";
  estadoAtual.ordem = "padrao";
  var busca  = document.getElementById("busca-presente");
  var filtro = document.getElementById("filtro-preco");
  var ordem  = document.getElementById("ordenacao");
  if (busca)  busca.value  = "";
  if (filtro) filtro.value = "todos";
  if (ordem)  ordem.value  = "padrao";
  atualizarBadgeFiltro();
  aplicarFiltros();
}

function atualizarBadgeFiltro() {
  var badge     = document.getElementById("filtro-badge");
  var btnLimpar = document.getElementById("btn-limpar");
  var count     = (estadoAtual.faixa !== "todos" ? 1 : 0) + (estadoAtual.termo ? 1 : 0);
  if (badge) {
    badge.style.display = count > 0 ? "inline-flex" : "none";
    badge.innerText      = count;
  }
  if (btnLimpar) btnLimpar.style.display = count > 0 ? "inline-block" : "none";
}

// ===== NAV & FOOTER DINÂMICOS =====
function renderNav() {
  var pagina = window.location.pathname.split("/").pop() || "index.html";
  var links  = [
    { href: "index.html",     label: "Início" },
    { href: "presentes.html", label: "Presentes" },
    { href: "cerimonia.html", label: "Cerimônia" }
  ];
  return '<nav aria-label="Menu principal">' + links.map(function(l) {
    return '<a href="' + l.href + '"' + (pagina === l.href ? ' class="ativo" aria-current="page"' : "") + '>' + l.label + '</a>';
  }).join("") + '</nav>';
}

function renderFooter() {
  return '<footer>' +
    '<p>Bruna &amp; Cláudio 💖</p>' +
    '<p>Obrigado por fazer parte desse momento especial</p>' +
    '<p style="font-size: 12px; opacity: 0.8;">Site desenvolvido pelo noivo 💻</p>' +
    '<p>© ' + new Date().getFullYear() + '</p>' +
  '</footer>';
}

function navegarCom(href) {
  document.body.classList.add("saindo");
  setTimeout(function() { window.location.href = href; }, 200);
}

function interceptarLinks() {
  document.querySelectorAll("a[href]").forEach(function(a) {
    var href = a.getAttribute("href");
    if (!href || href.startsWith("http") || href.startsWith("#") || href.startsWith("tel") || href.startsWith("mailto")) return;
    if (a.target === "_blank") return;
    a.addEventListener("click", function(e) {
      e.preventDefault();
      navegarCom(href);
    });
  });
}

// ===== INICIALIZAÇÃO PRINCIPAL =====
document.addEventListener("DOMContentLoaded", function() {

  // Loading screen — sem delay artificial (P1.1)
  var loadingScreen = document.getElementById("loading-screen");
  if (loadingScreen) {
    loadingScreen.classList.add("hide");
    setTimeout(function() { loadingScreen.style.display = "none"; }, 300);
  }

  // Nav e footer
  var navEl    = document.getElementById("nav-placeholder");
  var footerEl = document.getElementById("footer-placeholder");
  if (navEl)    navEl.outerHTML    = renderNav();
  if (footerEl) footerEl.outerHTML = renderFooter();

  // Campos cerimônia
  var dataLabel = document.getElementById("contador-data-label");
  if (dataLabel) dataLabel.innerText = CONFIG.dataFormatada + " • " + CONFIG.horarioCerimonia;

  var campos = {
    "cer-data":         CONFIG.dataFormatada,
    "cer-horario":      CONFIG.horarioCerimonia,
    "cer-local":        CONFIG.local,
    "cer-endereco":     CONFIG.endereco,
    "cer-hr-recepcao":  CONFIG.horarioRecepcao,
    "cer-hr-cerimonia": CONFIG.horarioCerimonia,
    "cer-hr-festa":     CONFIG.horarioFesta,
  };
  Object.keys(campos).forEach(function(id) {
    var el = document.getElementById(id);
    if (el) el.innerText = campos[id];
  });

  var btnWaze  = document.getElementById("btn-waze");
  var btnGmaps = document.getElementById("btn-gmaps");
  if (btnWaze)  btnWaze.href  = CONFIG.wazeUrl;
  if (btnGmaps) btnGmaps.href = CONFIG.gmapsUrl;

  // Lista de presentes
  if (document.querySelector(".lista-presentes")) {
    aplicarFiltros();

    var busca  = document.getElementById("busca-presente");
    var filtro = document.getElementById("filtro-preco");
    var ordem  = document.getElementById("ordenacao");

    if (busca) busca.addEventListener("input", debounce(function() {
      estadoAtual.termo = busca.value.toLowerCase().trim();
      atualizarBadgeFiltro();
      aplicarFiltros();
    }, 300));

    if (filtro) filtro.addEventListener("change", function() {
      estadoAtual.faixa = filtro.value;
      atualizarBadgeFiltro();
      aplicarFiltros();
    });

    if (ordem) ordem.addEventListener("change", function() {
      estadoAtual.ordem = ordem.value;
      aplicarFiltros();
    });
  }

  // Modal — fechar ao clicar no overlay
  var modal = document.getElementById("modal");
  if (modal) {
    modal.setAttribute("aria-hidden", "true");
    modal.addEventListener("click", function(e) {
      if (e.target === modal) fecharModal();
    });
  }

  // Keyboard: Escape fecha modal (P0 — acessibilidade)
  document.addEventListener("keydown", function(e) {
    if (e.key === "Escape") fecharModal();
  });

  // Focus trap no modal (P0 — acessibilidade)
  var modalContent = document.querySelector(".modal-conteudo");
  if (modalContent) {
    document.addEventListener("keydown", function(e) {
      if (e.key !== "Tab") return;
      var m = document.getElementById("modal");
      if (!m || !m.classList.contains("ativo")) return;
      var focusable = modalContent.querySelectorAll(
        'button:not([disabled]), [href], input:not([disabled]), select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (!focusable.length) return;
      var first  = focusable[0];
      var last   = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault(); last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault(); first.focus();
      }
    });
  }

  // Dark mode (P0 — acessibilidade)
  var toggle = document.getElementById("dark-mode-toggle");
  if (toggle) {
    var html = document.documentElement;
    var temaSalvo = localStorage.getItem("tema-casamento") || "light";
    if (temaSalvo === "dark") {
      html.setAttribute("data-theme", "dark");
      toggle.innerText = "☀️";
      toggle.setAttribute("aria-label", "Alternar para tema claro");
      toggle.setAttribute("aria-pressed", "true");
    } else {
      toggle.setAttribute("aria-label", "Alternar para tema escuro");
      toggle.setAttribute("aria-pressed", "false");
    }
    toggle.addEventListener("click", function() {
      var atual = html.getAttribute("data-theme") || "light";
      var novo  = atual === "dark" ? "light" : "dark";
      html.setAttribute("data-theme", novo);
      localStorage.setItem("tema-casamento", novo);
      toggle.innerText = novo === "dark" ? "☀️" : "🌙";
      toggle.setAttribute("aria-label",   novo === "dark" ? "Alternar para tema claro" : "Alternar para tema escuro");
      toggle.setAttribute("aria-pressed", String(novo === "dark"));
    });
  }

  // Intercepção de links
  interceptarLinks();

  // Scroll reveal
  var revealObserver = new IntersectionObserver(function(entries) {
    entries.forEach(function(e) {
      if (e.isIntersecting) {
        e.target.classList.add("visivel");
        revealObserver.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll(".reveal").forEach(function(el) { revealObserver.observe(el); });

  window.scrollTo(0, 0);
});

// ===== CONTADOR CIRCULAR =====
var CIRC = 2 * Math.PI * 34;

function setArco(id, valor, maximo) {
  var el = document.getElementById(id);
  if (!el) return;
  el.setAttribute("stroke-dasharray", (Math.min(valor / maximo, 1) * CIRC) + " " + CIRC);
}

function atualizarContador() {
  var elDias = document.getElementById("dias");
  if (!elDias) return;

  var diferenca = CONFIG.dataCasamento - new Date();
  if (diferenca <= 0) {
    var cont = document.querySelector(".contador-circular");
    if (cont) cont.innerHTML = "<p style='font-size:22px;font-weight:500;color:var(--cor-principal)'>Já casados! 🎉</p>";
    return;
  }

  function pad(n) { return String(n).padStart(2, "0"); }
  var dias     = Math.floor(diferenca / (1000 * 60 * 60 * 24));
  var horas    = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
  var minutos  = Math.floor((diferenca / (1000 * 60)) % 60);
  var segundos = Math.floor((diferenca / 1000) % 60);

  document.getElementById("dias").innerText     = pad(dias);
  document.getElementById("horas").innerText    = pad(horas);
  document.getElementById("minutos").innerText  = pad(minutos);
  document.getElementById("segundos").innerText = pad(segundos);

  var aD = document.getElementById("arco-item-dias");
  var aH = document.getElementById("arco-item-horas");
  var aM = document.getElementById("arco-item-minutos");
  var aS = document.getElementById("arco-item-segundos");
  if (aD) aD.setAttribute("aria-label", dias + " dias");
  if (aH) aH.setAttribute("aria-label", horas + " horas");
  if (aM) aM.setAttribute("aria-label", minutos + " minutos");
  if (aS) aS.setAttribute("aria-label", segundos + " segundos");

  setArco("arco-dias",     dias % 365, 365);
  setArco("arco-horas",    horas,       24);
  setArco("arco-minutos",  minutos,     60);
  setArco("arco-segundos", segundos,    60);
}

setInterval(atualizarContador, 1000);
atualizarContador();

// ===== MODAL =====
var presenteSelecionado = null;

function comprar(botao) {
  var card     = botao.closest(".presente");
  var id       = card && card.dataset.id;
  var presente = PRESENTES.filter(function(p) { return p.id === id; })[0];
  if (!presente) return;

  presenteSelecionado = card;

  var modalImg = document.getElementById("modal-img");
  if (modalImg) { modalImg.src = presente.img; modalImg.alt = presente.nome; }
  document.getElementById("modal-nome").innerText  = presente.nome;
  document.getElementById("modal-valor").innerText = formatarPreco(presente.preco);
  document.getElementById("modal-pix").innerText   = CONFIG.pix;

  var msg    = encodeURIComponent("Oii Bruna! Quero presentear vocês com: " + presente.nome);
  var btnWpp = document.getElementById("btn-whatsapp-modal");
  if (btnWpp) btnWpp.href = "https://wa.me/5535997167717?text=" + msg;

  var btnPix = document.querySelector(".btn-pix");
  if (btnPix) {
    btnPix.innerText        = "Copiar PIX";
    btnPix.style.background = "";
    btnPix.disabled         = false;
    btnPix.setAttribute("aria-label", "Copiar código PIX para transferência");
  }
  var proximoPasso = document.getElementById("modal-proximo-passo");
  if (proximoPasso) proximoPasso.style.display = "none";

  var modal = document.getElementById("modal");
  modal.style.display = "flex";
  modal.setAttribute("aria-hidden", "false");
  setTimeout(function() {
    modal.classList.add("ativo");
    var fechar = modal.querySelector(".fechar, .btn-fechar");
    if (fechar) fechar.focus();
  }, 10);
}

function fecharModal() {
  var modal = document.getElementById("modal");
  if (!modal || !modal.classList.contains("ativo")) return;
  modal.classList.remove("ativo");
  modal.setAttribute("aria-hidden", "true");
  setTimeout(function() { modal.style.display = "none"; }, 300);
}

function copiarPix() {
  var botao        = document.querySelector(".btn-pix");
  var proximoPasso = document.getElementById("modal-proximo-passo");
  if (!botao) return;

  botao.innerText = "⏳ Copiando...";
  botao.disabled  = true;

  navigator.clipboard.writeText(CONFIG.pix)
    .then(function() {
      botao.innerText        = "PIX Copiado ✔";
      botao.style.background = "#6B7A4E";
      botao.setAttribute("aria-label", "PIX copiado com sucesso!");
      if (proximoPasso) proximoPasso.style.display = "block";
      dispararConfete();
      if (presenteSelecionado) marcarReservado(presenteSelecionado.dataset.id);

      setTimeout(function() {
        fecharModal();
        botao.innerText        = "Copiar PIX";
        botao.style.background = "";
        botao.disabled         = false;
        botao.setAttribute("aria-label", "Copiar código PIX para transferência");
        if (presenteSelecionado) {
          presenteSelecionado.classList.add("reservado");
          var btn = presenteSelecionado.querySelector(".btn-presentear");
          if (btn) { btn.innerText = "✓ Reservado"; btn.disabled = true; }
        }
      }, 2500);
    })
    .catch(function() {
      botao.innerText      = CONFIG.pix;
      botao.style.fontSize = "12px";
      botao.disabled       = false;
      setTimeout(function() { botao.innerText = "Copiar PIX"; botao.style.fontSize = ""; }, 4000);
    });
}

// ===== ANIMAÇÃO DINHEIRO =====
function efeitoClique(event) {
  var emoji = document.createElement("div");
  emoji.classList.add("efeito-dinheiro");
  emoji.innerText   = "💸";
  emoji.style.left  = event.clientX + "px";
  emoji.style.top   = event.clientY + "px";
  document.body.appendChild(emoji);
  setTimeout(function() { emoji.remove(); }, 1000);
}

// ===== CONFETE =====
function dispararConfete() {
  if (typeof confetti === "undefined") return;
  confetti({
    particleCount: 80,
    spread: 70,
    origin: { y: 0.6 },
    colors: ["#6B7A4E", "#B9CCAE", "#D4DECE", "#A1A1A0", "#fff"]
  });
}

// ===== LIGHTBOX =====
function abrirLightbox() {
  var modalImg       = document.getElementById("modal-img");
  var modalNome      = document.getElementById("modal-nome");
  var lightbox       = document.getElementById("lightbox");
  var lightboxImg    = document.getElementById("lightbox-img");
  var lightboxTitulo = document.getElementById("lightbox-titulo");

  if (!modalImg || !lightbox || !lightboxImg) return;

  lightboxImg.src = modalImg.src;
  lightboxImg.alt = modalImg.alt;
  if (lightboxTitulo && modalNome) lightboxTitulo.innerText = modalNome.innerText;

  lightbox.showModal();
}
