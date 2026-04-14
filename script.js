// CONTADOR
const dataCasamento = new Date("2026-10-10T20:00:00").getTime();

setInterval(() => {
  const agora = new Date().getTime();
  const distancia = dataCasamento - agora;

  const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

  document.getElementById("dias").innerText = dias;
  document.getElementById("horas").innerText = horas;
  document.getElementById("minutos").innerText = minutos;
  document.getElementById("segundos").innerText = segundos;
}, 1000);


// EFEITO DE CLIQUE
function efeitoClique(event) {
  const btn = event.target;
  btn.style.transform = "scale(0.95)";
  setTimeout(() => btn.style.transform = "scale(1)", 150);
}


// FUNÇÃO PRINCIPAL (BOTÃO)
function comprar(botao) {
  const card = botao.closest(".presente");
  const nome = card.querySelector("h3").innerText;
  const preco = card.querySelector("p").innerText;

  const modal = document.createElement("div");

  modal.innerHTML = `
    <div style="
      position: fixed;
      top:0; left:0;
      width:100%; height:100%;
      background: rgba(0,0,0,0.6);
      display:flex;
      justify-content:center;
      align-items:center;
      z-index:9999;
    ">
      <div style="
        background:white;
        padding:25px;
        border-radius:20px;
        width:90%;
        max-width:350px;
        text-align:center;
      ">

        <h2>💖 Obrigado pelo presente!</h2>

        <p><strong>${nome}</strong></p>
        <p>${preco}</p>

        <p><strong>PIX:</strong><br>cr.reis@live.com</p>

        <button onclick="copiarPix()" style="
          background:#b76e79;
          color:white;
          padding:10px;
          border:none;
          border-radius:10px;
          width:100%;
          margin-top:10px;
        ">
          Copiar PIX
        </button>

        <a href="https://wa.me/5535999999999" target="_blank">
          <button style="
            background:#25d366;
            color:white;
            padding:10px;
            border:none;
            border-radius:10px;
            width:100%;
            margin-top:10px;
          ">
            Falar com a Bruna
          </button>
        </a>

        <button onclick="this.closest('div').parentElement.remove()" style="
          margin-top:10px;
          background:#ccc;
          padding:8px;
          border:none;
          border-radius:10px;
          width:100%;
        ">
          Fechar
        </button>

      </div>
    </div>
  `;

  document.body.appendChild(modal);
}


// COPIAR PIX
function copiarPix() {
  navigator.clipboard.writeText("cr.reis@live.com");
  alert("PIX copiado!");
}