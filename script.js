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

function renderFooter() {
  return `<footer>
    <p>Bruna &amp; Cláudio 💖</p>
    <p>Obrigado por fazer parte desse momento especial</p>
    <p>© 2026</p>
  </footer>`;
}

document.addEventListener("DOMContentLoaded", () => {
  // Injeta nav e footer se existirem os placeholders
  const navEl = document.getElementById('nav-placeholder');
  const footerEl = document.getElementById('footer-placeholder');
  if (navEl) navEl.outerHTML = renderNav();
  if (footerEl) footerEl.outerHTML = renderFooter();

  // Injeta dados do casamento na página de cerimônia
  const campos = {
    'cer-data':             CONFIG.dataFormatada,
    'cer-horario':          CONFIG.horarioCerimonia,
    'cer-local':            CONFIG.local,
    'cer-endereco':         CONFIG.endereco,
    'cer-hr-recepcao':      CONFIG.horarioRecepcao,
    'cer-hr-cerimonia':     CONFIG.horarioCerimonia,
    'cer-hr-festa':         CONFIG.horarioFesta,
  };
  Object.entries(campos).forEach(([id, val]) => {
    const el = document.getElementById(id);
    if (el) el.innerText = val;
  });

  // Injeta URLs dos botões de navegação
  const btnWaze  = document.getElementById('btn-waze');
  const btnGmaps = document.getElementById('btn-gmaps');
  if (btnWaze)  btnWaze.href  = CONFIG.wazeUrl;
  if (btnGmaps) btnGmaps.href = CONFIG.gmapsUrl;

  // Botões de presentear
  const botoes = document.querySelectorAll(".btn-presentear");
  botoes.forEach((botao) => {
    botao.addEventListener("click", (event) => {
      const card = botao.closest(".presente");
      if (card.classList.contains("reservado")) return;
      efeitoClique(event);
      comprar(botao);
    });
  });

  // Fechar modal clicando no overlay
  const modal = document.getElementById("modal");
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) fecharModal();
    });
  }

  // Fechar modal com ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") fecharModal();
  });

  // Busca e filtro de presentes
  const busca = document.getElementById("busca-presente");
  const filtro = document.getElementById("filtro-preco");
  if (busca) busca.addEventListener("input", filtrarPresentes);
  if (filtro) filtro.addEventListener("change", filtrarPresentes);
});

// ===== CONTADOR =====
function atualizarContador() {
  const el = document.getElementById("dias");
  if (!el) return;

  const agora = new Date();
  const diferenca = CONFIG.dataCasamento - agora;

  if (diferenca <= 0) {
    document.querySelector(".contador").innerHTML =
      "<p style='font-size:22px;font-weight:500'>Já casados! 🎉</p>";
    return;
  }

  const pad = (n) => String(n).padStart(2, "0");
  document.getElementById("dias").innerText    = pad(Math.floor(diferenca / (1000 * 60 * 60 * 24)));
  document.getElementById("horas").innerText   = pad(Math.floor((diferenca / (1000 * 60 * 60)) % 24));
  document.getElementById("minutos").innerText = pad(Math.floor((diferenca / (1000 * 60)) % 60));
  document.getElementById("segundos").innerText= pad(Math.floor((diferenca / 1000) % 60));
}

setInterval(atualizarContador, 1000);
atualizarContador();

// ===== BUSCA E FILTRO =====
function filtrarPresentes() {
  const termo = (document.getElementById("busca-presente")?.value || "").toLowerCase();
  const faixa = document.getElementById("filtro-preco")?.value || "todos";
  const cards = document.querySelectorAll(".presente");
  let visiveis = 0;

  cards.forEach(card => {
    const nome = card.querySelector("h3")?.innerText.toLowerCase() || "";
    const valorStr = card.querySelector("p")?.innerText.replace(/[R$\s.]/g, "").replace(",", ".") || "0";
    const valor = parseFloat(valorStr);

    const passaBusca = nome.includes(termo);
    let passaFiltro = true;
    if (faixa === "ate200") passaFiltro = valor <= 200;
    else if (faixa === "200a500") passaFiltro = valor > 200 && valor <= 500;
    else if (faixa === "500a1000") passaFiltro = valor > 500 && valor <= 1000;
    else if (faixa === "acima1000") passaFiltro = valor > 1000;

    const visivel = passaBusca && passaFiltro;
    card.style.display = visivel ? "" : "none";
    if (visivel) visiveis++;
  });

  const contador = document.getElementById("contador-resultados");
  if (contador) contador.innerText = `${visiveis} presente${visiveis !== 1 ? "s" : ""} encontrado${visiveis !== 1 ? "s" : ""}`;

  // Mensagem de nenhum resultado
  const lista = document.querySelector(".lista-presentes");
  const semResultado = document.getElementById("sem-resultado");
  if (visiveis === 0) {
    if (!semResultado) {
      const div = document.createElement("div");
      div.id = "sem-resultado";
      div.className = "sem-resultado";
      div.innerText = "Nenhum presente encontrado 😕";
      lista.appendChild(div);
    }
  } else {
    semResultado?.remove();
  }
}

// ===== MODAL =====
let presenteSelecionado = null;

function comprar(botao) {
  const card = botao.closest(".presente");
  const nome = card.querySelector("h3").innerText;
  const valor = card.querySelector("p").innerText;
  presenteSelecionado = card;

  document.getElementById("modal-valor").innerText = valor;
  document.getElementById("modal-pix").innerText = CONFIG.pix;
  document.getElementById("modal-recado").innerText = "Presente escolhido: " + nome;

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

  navigator.clipboard.writeText(CONFIG.pix)
    .then(() => {
      botao.innerText = "PIX Copiado ✔";
      setTimeout(() => { botao.innerText = "Copiar PIX"; }, 2000);
    })
    .catch(() => {
      // Fallback: exibe o PIX direto no botão para copiar manualmente
      botao.innerText = CONFIG.pix;
      botao.style.fontSize = "12px";
      setTimeout(() => {
        botao.innerText = "Copiar PIX";
        botao.style.fontSize = "";
      }, 4000);
    });
}

// ===== ANIMAÇÃO DINHEIRO =====
function efeitoClique(event) {
  const emoji = document.createElement("div");
  emoji.classList.add("efeito-dinheiro");
  emoji.innerText = "💸";
  document.body.appendChild(emoji);
  emoji.style.left = event.clientX + "px";
  emoji.style.top = event.clientY + "px";
  setTimeout(() => emoji.remove(), 1000);
}
