# 💻 LogMoney

Este projeto foi criado com o objetivo de treinar e praticar HTML, CSS e JavaScript, utilizando organização modular, componentização e boas práticas de estrutura de código.

---

## 🛠 Estrutura e Organização

- O projeto foi montado com uma estrutura separando componentes HTML, CSS e arquivos JavaScript, aplicando o conceito de **componentização**.
- Cada seção visível da página (como hero, header, planos, depoimentos, FAQ e cartões empilhados) possui seu próprio arquivo HTML e um CSS correspondente dentro da pasta `components`.
- O CSS utiliza variáveis globais (no arquivo `variables.css`) para facilitar manutenções e mudanças de tema.
- O reset CSS é aplicado para garantir consistência entre diferentes navegadores.
- JavaScript modularizado, separando funcionalidades como:
  - Animações de rolagem (`scroll-animations.js`)
  - Interatividade do FAQ (`faq.js`)
  - Controle do cabeçalho (`header.js`)
  - Comportamento de cartões empilhados (`stacked-cards.js`)
  - Player de vídeo (`video-player.js`)

---

## 🎨 Técnicas utilizadas

- **Design Patterns** aplicados:
  - **Separation of Concerns (Separação de responsabilidades)**: HTML para marcação, CSS para estilos e JS para comportamento, todos organizados em pastas próprias.
  - **Composição de componentes**: Componentes HTML reutilizáveis incluídos na página principal.
  - **Organização em módulos JS**: Cada funcionalidade importante é isolada em um arquivo JS próprio, facilitando manutenção.
  - **Uso de variáveis CSS** para controle centralizado de cores e tamanhos.
  - **Animações CSS** e JavaScript aplicadas de forma desacoplada, respeitando o princípio da responsabilidade única.

---

## 📁 Estrutura de Pastas

```
logmoney/
├── assets/
│   └── img/
├── components/
│   ├── afiliados-migrando.html
│   ├── animated-strips.html
│   ├── depoimentos.html
│   ├── faq.html
│   ├── header.html
│   ├── hero.html
│   ├── planos.html
│   └── stacked-cards.html
├── css/
│   ├── components/
│   │   ├── afiliados-migrando.css
│   │   ├── animated-strips.css
│   │   ├── depoimentos.css
│   │   ├── faq.css
│   │   ├── header.css
│   │   ├── hero.css
│   │   ├── planos.css
│   │   └── stacked-cards.css
│   ├── main.css
│   ├── reset.css
│   └── variables.css
├── js/
│   ├── faq.js
│   ├── header.js
│   ├── main.js
│   ├── scroll-animations.js
│   ├── stacked-cards.js
│   └── video-player.js
├── index.html
├── package.json
├── package-lock.json
└── README.md
```

---

## ▶️ Como rodar o projeto localmente

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/logmoney.git
```

2. Acesse o diretório:

```bash
cd logmoney
```

3. Instale as dependências (apenas live-server):

```bash
npm install
```

4. Inicie o projeto localmente:

```bash
npm run dev
```

> Isso abrirá automaticamente o projeto no navegador.

---

## 🌐 Deploy gratuito

Este projeto está hospedado gratuitamente na Vercel: [https://logmoney.vercel.app](https://logmoney.vercel.app)  
A cada push no repositório do GitHub, o deploy é atualizado automaticamente.

---

## ✅ Objetivo do projeto

Este projeto foi feito **apenas para estudo e prática** de:

- Estruturação modular de projetos web;
- Separação de componentes HTML e CSS;
- Animações com CSS e JS;
- Organização de código JavaScript em múltiplos arquivos;
- Utilização de design patterns simples para organizar um projeto estático.
