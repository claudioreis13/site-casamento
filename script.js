// ===== CONFIG CENTRAL =====
// Edite aqui para atualizar todas as páginas automaticamente
const CONFIG = {
  dataCasamento: new Date("2026-10-10T20:00:00"),
  dataFormatada: "10 de Outubro de 2026",
  horarioRecepcao: "19h30",
  horarioCerimonia: "20h00",
  horarioFesta: "21h00",
  local: "Igreja Matriz — Nepomuceno, MG",
  endereco: "Praça da Matriz — Nepomuceno, MG",
  wazeUrl: "https://waze.com/ul?q=Igreja+Matriz+Nepomuceno+MG&navigate=yes",
  gmapsUrl: "https://www.google.com/maps/search/Igreja+Matriz+Nepomuceno+MG",
  pix: "cr.reis@live.com",
  whatsapp: "https://wa.me/5535997167717?text=oii%20Bruna"
};

// ===== LISTA DE PRESENTES =====
// Para adicionar, remover ou editar um presente, mexa só aqui!
const PRESENTES = [
  { id: "jantar",        nome: "Aparelho de jantar",                                         preco: 500.00,   img: "imagens/jantar.jpg" },
  { id: "ar",           nome: "Ar condicionado 12.000 btu",                                  preco: 2200.00,  img: "imagens/ar.jpg" },
  { id: "netflix",      nome: "1 ano de Netflix",                                             preco: 600.00,   img: "imagens/netflix.jpg" },
  { id: "esmeril",      nome: "Acessório para cortar a unha do dedão do noivo",               preco: 200.00,   img: "imagens/esmerilhadeira.jpg",  humor: true },
  { id: "cabeceira",    nome: "Cabeceira King Size",                                          preco: 800.00,   img: "imagens/cabeceira.jpg" },
  { id: "batedeira",    nome: "Batedeira Philco",                                             preco: 450.10,   img: "imagens/batedeira.jpg" },
  { id: "rochele",      nome: "É claro que eu posso pagar, meu marido tem 2 empregos 😂",    preco: 700.00,   img: "imagens/rochele.jpg",          humor: true },
  { id: "cobreleito",   nome: "Cobreleito king",                                              preco: 477.67,   img: "imagens/cobreleito.jpg" },
  { id: "louca",        nome: "Lava louças 10 serviços",                                      preco: 2950.00,  img: "imagens/louca.jpg" },
  { id: "microondas",   nome: "Microondas 30 litros",                                         preco: 650.00,   img: "imagens/microondas.jpg" },
  { id: "patolino",     nome: "Seja meu convidado preferido",                                 preco: 700.00,   img: "imagens/patolino.jpg",         humor: true },
  { id: "razao",        nome: "Cobertor para a noiva que está coberta de razão",              preco: 200.00,   img: "imagens/razao.jpg",            humor: true },
  { id: "toalha",       nome: "Jogo de toalha banhão",                                        preco: 182.27,   img: "imagens/toalha.jpg" },
  { id: "edredon",      nome: "Edredon Queen 300 fios",                                       preco: 500.00,   img: "imagens/edredon.jpg" },
  { id: "purificador",  nome: "Purificador de água",                                          preco: 500.00,   img: "imagens/purificador.jpg" },
  { id: "buque",        nome: "Aumente em 30% sua chance de pegar o buquê",                  preco: 150.00,   img: "imagens/buque.jpg",            humor: true },
  { id: "convidado",    nome: "Levar alguém que não foi convidado",                           preco: 7965.49,  img: "imagens/convidado.jpg",        humor: true },
  { id: "cueca",        nome: "Cueca sexy para lua de mel",                                   preco: 100.00,   img: "imagens/cueca.jpg",            humor: true },
  { id: "ronaldo",      nome: "Corte de cabelo do noivo por 6 meses",                        preco: 500.00,   img: "imagens/ronaldo.jpg",          humor: true },
  { id: "assadeiras",   nome: "Conjunto de assadeiras Marinex",                               preco: 121.00,   img: "imagens/assadeiras.jpg" },
  { id: "tv",           nome: 'TV 60"',                                                       preco: 3000.00,  img: "imagens/tv.jpg" },
  { id: "parafusadeira",nome: "Parafusadeira e furadeira",                                    preco: 500.00,   img: "imagens/parafusadeira.jpg" },
  { id: "julius",       nome: "Só pra dizer que não dei nada",                                preco: 20.00,    img: "imagens/julius.jpg",           humor: true },
  { id: "tacas",        nome: "Taças de vinho",                                               preco: 50.00,    img: "imagens/tacas.jpg" },
  { id: "tigela",       nome: "Conjunto de bowls",                                            preco: 50.00,    img: "imagens/tigela.jpg" },
  { id: "boleira",      nome: "Boleira com tampa",                                            preco: 50.00,    img: "imagens/boleira.jpg" },
  { id: "aspirador",    nome: "Aspirador 2 em 1",                                             preco: 200.00,   img: "imagens/aspirador.jpg" },
  { id: "panela",       nome: "Panela de pressão elétrica",                                   preco: 500.00,   img: "imagens/panela.jpg" },
  { id: "cadeira",      nome: "Cadeira ergonômica",                                           preco: 600.00,   img: "imagens/cadeira.jpg" },
  { id: "mixer",        nome: "Mixer 3 em 1",                                                 preco: 170.00,   img: "imagens/mixer.jpg" },
  { id: "cristaleira",  nome: "Cristaleira retrô",                                            preco: 470.00,   img: "imagens/cristaleira.jpg" },
  { id: "americano",    nome: "Jogo americano crochê",                                        preco: 70.00,    img: "imagens/americano.jpg" },
  { id: "espelho",      nome: "Espelho corpo inteiro",                                        preco: 478.00,   img: "imagens/espelho.jpg" },
  { id: "jarra",        nome: "Kit jarra + taças",                                            preco: 70.00,    img: "imagens/jarra.jpg" },
  { id: "panificadora", nome: "Panificadora",                                                 preco: 550.00,   img: "imagens/panificadora.jpg" },
  { id: "chaleira",     nome: "Chaleira elétrica",                                            preco: 150.00,   img: "imagens/chaleira.jpg" },
  { id: "navio",        nome: "Ajuda na lua de mel",                                          preco: 1000.00,  img: "imagens/navio.jpg" },
  { id: "sobremesa",    nome: "Taças de sobremesa",                                           preco: 76.00,    img: "imagens/sobremesa.jpg" },
  { id: "processador",  nome: "Multiprocessador Powerchop Philips Walita 127v",               preco: 500.00,   img: "imagens/processador.jpg" },
  { id: "criado",       nome: "Kit 2 Un Mesa de Cabeceira Sofia Estilo Industrial",           preco: 352.00,   img: "imagens/criado.jpg" },
  { id: "lateral",      nome: "Mesa Lateral para Sofá com Espelho Luxo",                      preco: 114.00,   img: "imagens/lateral.jpg" },
  { id: "organizador",  nome: "Kit 4 Organizadores de Geladeira 3.8 Litros",                 preco: 76.00,    img: "imagens/organizador.jpg" },
  { id: "pote",         nome: "Kit 3 a 10 Potes Herméticos 2L Dispenser Organizador Lavanderia", preco: 100.00, img: "imagens/pote.jpg" },
  { id: "centro",       nome: "Kit 2 Mesas De Centro Madeira Design Orgânico Sala De Estar", preco: 285.00,   img: "imagens/centro.jpg" },
];

// ===== RENDER PRESENTES =====
function formatarPreco(preco) {
  return preco.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function reservados() {
  try { return JSON.parse(localStorage.getItem("reservados") || "[]"); }
  catch { return []; }
}

function marcarReservado(id) {
  const lista = reservados();
  if (!lista.includes(id)) lista.push(id);
  localStorage.setItem("reservados", JSON.stringify(lista));
}

function renderPresentes(lista) {
  const container = document.querySelector(".lista-presentes");
  if (!container) return;

  const res = reservados();

  container.innerHTML = lista.map(p => {
    const estaReservado = res.includes(p.id);
    return `
    <div class="presente${estaReservado ? " reservado" : ""}" data-id="${p.id}" data-preco="${p.preco}">
      ${p.humor ? '<span class="badge-humor">😄 Surpresa</span>' : ''}
      <img src="${p.img}" alt="${p.nome}" loading="lazy">
      <h3 title="${p.nome}">${p.nome}</h3>
      <p>${formatarPreco(p.preco)}</p>
      <button class="btn-presentear"${estaReservado ? " disabled" : ""}>
        ${estaReservado ? "✓ Reservado" : "Presentear"}
      </button>
    </div>`;
  }).join("");

  // Atualiza contador
  atualizarContadorResultados(lista.length);

  // Rebind event listeners
  container.querySelectorAll(".btn-presentear:not([disabled])").forEach(botao => {
    botao.addEventListener("click", (event) => {
      efeitoClique(event);
      comprar(botao);
    });
  });
}

function atualizarContadorResultados(n) {
  const el = document.getElementById("contador-resultados");
  if (el) el.innerText = `${n} presente${n !== 1 ? "s" : ""}`;
}

// ===== FILTRO + BUSCA + ORDENAÇÃO =====
let estadoAtual = { termo: "", faixa: "todos", ordem: "padrao" };

function aplicarFiltros() {
  let lista = [...PRESENTES];
  const { termo, faixa, ordem } = estadoAtual;

  // Busca
  if (termo) lista = lista.filter(p => p.nome.toLowerCase().includes(termo));

  // Faixa de preço
  if (faixa === "ate200")    lista = lista.filter(p => p.preco <= 200);
  if (faixa === "200a500")   lista = lista.filter(p => p.preco > 200  && p.preco <= 500);
  if (faixa === "500a1000")  lista = lista.filter(p => p.preco > 500  && p.preco <= 1000);
  if (faixa === "acima1000") lista = lista.filter(p => p.preco > 1000);

  // Ordenação
  if (ordem === "menor") lista.sort((a, b) => a.preco - b.preco);
  if (ordem === "maior") lista.sort((a, b) => b.preco - a.preco);
  if (ordem === "az")    lista.sort((a, b) => a.nome.localeCompare(b.nome, "pt-BR"));

  renderPresentes(lista);

  // Mensagem de nenhum resultado
  const container = document.querySelector(".lista-presentes");
  const semResultado = document.getElementById("sem-resultado");
  if (lista.length === 0) {
    if (!semResultado) {
      const div = document.createElement("div");
      div.id = "sem-resultado";
      div.className = "sem-resultado";
      div.innerText = "Nenhum presente encontrado 😕";
      container.appendChild(div);
    }
  } else {
    semResultado?.remove();
  }
}

// ===== NAV & FOOTER DINÂMICOS =====
function renderNav() {
  const pagina = window.location.pathname.split('/').pop() || 'index.html';
  const links = [
    { href: 'index.html', label: 'Início' },
    { href: 'presentes.html', label: 'Presentes' },
    { href: 'cerimonia.html', label: 'Cerimônia' }
  ];
  return `<nav>${links.map(l =>
    `<a href="${l.href}"${pagina === l.href ? ' class="ativo"' : ''}>${l.label}</a>`
  ).join('')}</nav>`;
}

function navegarCom(href) {
  document.body.classList.add('saindo');
  setTimeout(() => { window.location.href = href; }, 200);
}

function interceptarLinks() {
  document.querySelectorAll('a[href]').forEach(a => {
    const href = a.getAttribute('href');
    if (!href || href.startsWith('http') || href.startsWith('#') || href.startsWith('tel') || href.startsWith('mailto')) return;
    if (a.target === '_blank') return;
    a.addEventListener('click', (e) => {
      e.preventDefault();
      navegarCom(href);
    });
  });
}

function renderFooter() {
  return `<footer>
    <p>Bruna &amp; Cláudio 💖</p>
    <p>Obrigado por fazer parte desse momento especial</p>
    <p>© 2026</p>
  </footer>`;
}

document.addEventListener("DOMContentLoaded", () => {
  const navEl = document.getElementById('nav-placeholder');
  const footerEl = document.getElementById('footer-placeholder');
  if (navEl) navEl.outerHTML = renderNav();
  if (footerEl) footerEl.outerHTML = renderFooter();

  // Data contextual do contador
  const dataLabel = document.getElementById('contador-data-label');
  if (dataLabel) dataLabel.innerText = CONFIG.dataFormatada + ' • ' + CONFIG.horarioCerimonia;

  // Dados da cerimônia
  const campos = {
    'cer-data':         CONFIG.dataFormatada,
    'cer-horario':      CONFIG.horarioCerimonia,
    'cer-local':        CONFIG.local,
    'cer-endereco':     CONFIG.endereco,
    'cer-hr-recepcao':  CONFIG.horarioRecepcao,
    'cer-hr-cerimonia': CONFIG.horarioCerimonia,
    'cer-hr-festa':     CONFIG.horarioFesta,
  };
  Object.entries(campos).forEach(([id, val]) => {
    const el = document.getElementById(id);
    if (el) el.innerText = val;
  });

  const btnWaze  = document.getElementById('btn-waze');
  const btnGmaps = document.getElementById('btn-gmaps');
  if (btnWaze)  btnWaze.href  = CONFIG.wazeUrl;
  if (btnGmaps) btnGmaps.href = CONFIG.gmapsUrl;

  // Renderiza presentes a partir do array
  if (document.querySelector(".lista-presentes")) {
    renderPresentes(PRESENTES);

    // Controles
    const busca  = document.getElementById("busca-presente");
    const filtro = document.getElementById("filtro-preco");
    const ordem  = document.getElementById("ordenacao");

    if (busca)  busca.addEventListener("input",  () => { estadoAtual.termo = busca.value.toLowerCase(); aplicarFiltros(); });
    if (filtro) filtro.addEventListener("change", () => { estadoAtual.faixa = filtro.value; aplicarFiltros(); });
    if (ordem)  ordem.addEventListener("change",  () => { estadoAtual.ordem = ordem.value; aplicarFiltros(); });
  }

  // Modal
  const modal = document.getElementById("modal");
  if (modal) {
    modal.addEventListener("click", (e) => { if (e.target === modal) fecharModal(); });
  }
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") fecharModal(); });

  interceptarLinks();
  window.scrollTo(0, 0);

  // Animação reveal ao entrar na viewport
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visivel');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
});

// ===== CONTADOR CIRCULAR =====
const CIRC = 2 * Math.PI * 34; // circunferência r=34

function setArco(id, valor, maximo) {
  const el = document.getElementById(id);
  if (!el) return;
  const progresso = Math.min(valor / maximo, 1);
  el.setAttribute("stroke-dasharray", `${progresso * CIRC} ${CIRC}`);
}

function atualizarContador() {
  const elDias = document.getElementById("dias");
  if (!elDias) return;

  const agora = new Date();
  const diferenca = CONFIG.dataCasamento - agora;

  if (diferenca <= 0) {
    const cont = document.querySelector(".contador-circular");
    if (cont) cont.innerHTML = "<p style='font-size:22px;font-weight:500;color:#c97b84'>Já casados! 🎉</p>";
    return;
  }

  const pad = (n) => String(n).padStart(2, "0");

  const dias    = Math.floor(diferenca / (1000 * 60 * 60 * 24));
  const horas   = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diferenca / (1000 * 60)) % 60);
  const segundos= Math.floor((diferenca / 1000) % 60);

  document.getElementById("dias").innerText     = pad(dias);
  document.getElementById("horas").innerText    = pad(horas);
  document.getElementById("minutos").innerText  = pad(minutos);
  document.getElementById("segundos").innerText = pad(segundos);

  // Atualiza aria-labels para leitores de tela
  const aD = document.getElementById("arco-item-dias");
  const aH = document.getElementById("arco-item-horas");
  const aM = document.getElementById("arco-item-minutos");
  const aS = document.getElementById("arco-item-segundos");
  if (aD) aD.setAttribute("aria-label", `${dias} dias`);
  if (aH) aH.setAttribute("aria-label", `${horas} horas`);
  if (aM) aM.setAttribute("aria-label", `${minutos} minutos`);
  if (aS) aS.setAttribute("aria-label", `${segundos} segundos`);

  // Atualiza os arcos SVG
  setArco("arco-dias",     dias % 365, 365);
  setArco("arco-horas",    horas,       24);
  setArco("arco-minutos",  minutos,     60);
  setArco("arco-segundos", segundos,    60);
}

setInterval(atualizarContador, 1000);
atualizarContador();

// ===== MODAL =====
let presenteSelecionado = null;

function comprar(botao) {
  const card = botao.closest(".presente");
  const id    = card.dataset.id;
  const presente = PRESENTES.find(p => p.id === id);
  if (!presente) return;

  presenteSelecionado = card;

  // Preenche modal
  document.getElementById("modal-img").src         = presente.img;
  document.getElementById("modal-img").alt         = presente.nome;
  document.getElementById("modal-nome").innerText  = presente.nome;
  document.getElementById("modal-valor").innerText = formatarPreco(presente.preco);
  document.getElementById("modal-pix").innerText   = CONFIG.pix;

  // WhatsApp com nome do presente
  const msg = encodeURIComponent("Oii Bruna! Quero presentear vocês com: " + presente.nome);
  const btnWpp = document.getElementById("btn-whatsapp-modal");
  if (btnWpp) btnWpp.href = "https://wa.me/5535997167717?text=" + msg;

  // Reseta estado
  const btnPix = document.querySelector(".btn-pix");
  if (btnPix) { btnPix.innerText = "Copiar PIX"; btnPix.style.background = ""; }
  const proximoPasso = document.getElementById("modal-proximo-passo");
  if (proximoPasso) proximoPasso.style.display = "none";

  const modal = document.getElementById("modal");
  modal.style.display = "flex";
  setTimeout(() => modal.classList.add("ativo"), 10);
}

function fecharModal() {
  const modal = document.getElementById("modal");
  if (!modal || !modal.classList.contains("ativo")) return;
  modal.classList.remove("ativo");
  setTimeout(() => { modal.style.display = "none"; }, 300);
}

function copiarPix() {
  const botao = document.querySelector(".btn-pix");
  const proximoPasso = document.getElementById("modal-proximo-passo");

  navigator.clipboard.writeText(CONFIG.pix)
    .then(() => {
      botao.innerText = "PIX Copiado ✔";
      botao.style.background = "#8b9b6e";
      if (proximoPasso) proximoPasso.style.display = "block";
      dispararConfete();

      // Marca como reservado no localStorage
      if (presenteSelecionado) {
        const id = presenteSelecionado.dataset.id;
        marcarReservado(id);
      }

      setTimeout(() => {
        fecharModal();
        botao.innerText = "Copiar PIX";
        botao.style.background = "";
        // Atualiza o card visualmente
        if (presenteSelecionado) {
          presenteSelecionado.classList.add("reservado");
          const btn = presenteSelecionado.querySelector(".btn-presentear");
          if (btn) { btn.innerText = "✓ Reservado"; btn.disabled = true; }
        }
      }, 2500);
    })
    .catch(() => {
      botao.innerText = CONFIG.pix;
      botao.style.fontSize = "12px";
      setTimeout(() => { botao.innerText = "Copiar PIX"; botao.style.fontSize = ""; }, 4000);
    });
}

// ===== ANIMAÇÃO DINHEIRO =====
function efeitoClique(event) {
  const emoji = document.createElement("div");
  emoji.classList.add("efeito-dinheiro");
  emoji.innerText = "💸";
  document.body.appendChild(emoji);
  emoji.style.left = event.clientX + "px";
  emoji.style.top  = event.clientY + "px";
  setTimeout(() => emoji.remove(), 1000);
}

// ===== CONFETE =====
function dispararConfete() {
  if (typeof confetti === "undefined") return;
  confetti({
    particleCount: 80,
    spread: 70,
    origin: { y: 0.6 },
    colors: ["#c97b84", "#f4c0d1", "#fff", "#8b9b6e", "#ffeaa7"]
  });
}

// ===== LIGHTBOX =====
function abrirLightbox() {
  const modalImg = document.getElementById("modal-img");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  if (!modalImg || !lightbox || !lightboxImg) return;
  lightboxImg.src = modalImg.src;
  lightboxImg.alt = modalImg.alt;
  lightbox.showModal();
}
