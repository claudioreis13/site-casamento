# 💍 Bruna & Cláudio — Site de Casamento

Site oficial do meu casamento, desenvolvido em HTML, CSS e JavaScript puro — sem frameworks, sem dependências externas, sem servidor.

---

## ✨ Funcionalidades

- **Página inicial** com contagem regressiva animada (arcos circulares SVG) até o dia do casamento
- **Lista de presentes** com busca por nome, filtro por faixa de preço e ordenação
- **Modal de presentear** com PIX copiável e link direto para o WhatsApp da noiva
- **Página de cerimônia** com roteiro da noite, informações do local e botões de navegação (Waze e Google Maps)
- **Totalmente responsivo** — funciona bem em celular, tablet e desktop
- **Fonte única de verdade** — todos os dados do casamento vivem no `CONFIG` do `script.js`

---

## 🗂 Estrutura do projeto

```
/
├── index.html          # Página inicial (contador regressivo + boas-vindas)
├── presentes.html      # Lista de presentes
├── cerimonia.html      # Informações da cerimônia
├── script.js           # Toda a lógica JavaScript + dados do casamento
├── style.css           # Estilos globais
└── imagens/            # Fotos dos presentes, foto de fundo, foto da igreja
```

---

## ⚙️ Como rodar localmente

Não precisa de servidor. Basta abrir o `index.html` no navegador:

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/seu-repositorio.git

# Abra no navegador
open index.html
# ou clique duas vezes no arquivo index.html
```

> ⚠️ Algumas funcionalidades como copiar PIX exigem HTTPS. Para testar localmente com todas as funcionalidades, use uma extensão como **Live Server** no VS Code.

---

## 📝 Como editar os dados do casamento

Todos os dados ficam no topo do `script.js`, no objeto `CONFIG`. Para qualquer alteração — data, horário, local, PIX — edite **apenas esse arquivo**:

```js
const CONFIG = {
  dataCasamento: new Date("2026-10-10T20:00:00"), // Data e hora do casamento
  dataFormatada: "10 de Outubro de 2026",          // Exibida no contador
  horarioRecepcao: "19h30",                        // Roteiro da cerimônia
  horarioCerimonia: "20h00",
  horarioFesta: "21h00",
  local: "Igreja Matriz — Nepomuceno, MG",
  endereco: "Praça da Matriz — Nepomuceno, MG",
  wazeUrl: "https://waze.com/ul?q=...",
  gmapsUrl: "https://www.google.com/maps/...",
  pix: "seu-email@pix.com",                        // Chave PIX
  whatsapp: "https://wa.me/55XXXXXXXXXXX?text=..." // Link do WhatsApp
};
```

---

## 🎁 Como adicionar ou remover presentes

Os presentes vivem no array `PRESENTES`, logo abaixo do `CONFIG` no `script.js`. Cada item segue este formato:

```js
{ 
  id: "nome-unico",           // Identificador único (sem espaços)
  nome: "Nome do presente",   // Nome exibido no card
  preco: 250.00,              // Preço em reais (número, não string)
  img: "imagens/foto.jpg",    // Caminho para a imagem
  humor: true                 // Opcional — exibe badge "😄 Surpresa" no card
}
```

**Para adicionar:** inclua um novo objeto no array e coloque a imagem na pasta `imagens/`.

**Para remover:** apague a linha do objeto correspondente.

**Para editar:** altere os campos diretamente no objeto.

---

## 🛠 Tecnologias utilizadas

| Tecnologia | Uso |
|---|---|
| HTML5 semântico | Estrutura das páginas |
| CSS3 com variáveis | Estilos e responsividade |
| JavaScript ES6+ | Lógica, renderização e interatividade |
| SVG | Arcos animados do contador regressivo |
| Google Fonts | Tipografias Great Vibes e Poppins |
| localStorage | Persistência local de presentes reservados |
| IntersectionObserver API | Animações de entrada ao rolar |

---

## 📱 Compatibilidade

Testado e funcional nos navegadores modernos:

- Chrome / Edge (versão 80+)
- Firefox (versão 75+)
- Safari (versão 13+)
- Android e iOS (navegadores nativos)

---

## 🔮 Melhorias planejadas

- [ ] **Firebase Firestore** — sincronizar presentes reservados em tempo real entre todos os dispositivos
- [ ] Limpeza de CSS morto acumulado durante o desenvolvimento
- [ ] Animação reveal nos cards da página de cerimônia

---

## 📄 Licença

Projeto pessoal — uso livre para fins não comerciais.

---

<p align="center">Feito com 💖 para Bruna & Cláudio</p>
