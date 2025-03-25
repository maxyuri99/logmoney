# 💰 LogMoney

**LogMoney** é uma aplicação web desenvolvida com foco em controle financeiro pessoal, permitindo o usuário visualizar, organizar e acompanhar seus gastos e receitas de forma prática e intuitiva.

---

## ✨ Funcionalidades Principais

- Cadastro de entradas e saídas financeiras
- Visualização de saldo atual
- Relatório visual simples de ganhos e gastos
- Layout responsivo e moderno
- Uso de ícones FontAwesome para uma interface mais amigável

---

## 🚀 Tecnologias Utilizadas

- **HTML5**
- **CSS3** (com um arquivo principal `main.css` customizado)
- **JavaScript** (arquivo principal `main.js` com toda a lógica do front-end)
- **FontAwesome** para ícones
- Estrutura 100% client-side (não há backend envolvido)

---

## 📁 Estrutura do Projeto

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
├── node_modules/
├── .gitignore
├── index.html
├── package-lock.json
├── package.json
└── README.md

```

- **index.html** — Página principal com estrutura do app
- **main.css** — Arquivo de estilos central
- **main.js** — Lógica de controle financeiro e manipulação DOM
- **node_modules/** — Dependências do projeto, contendo os ícones do FontAwesome

---

## 🛠 Como executar o projeto localmente

1. Clone o repositório:

```bash
git clone https://github.com/maxyuri99/logmoney.git
```

2. Acesse o diretório do projeto:

```bash
cd logmoney
```

3. Instale as dependências:

```bash
npm install
```

4. Inicie o servidor local:

```bash
npm run dev
```

5. O projeto será aberto automaticamente no navegador!

> Obs.: Esse projeto utiliza o **live-server** para rodar localmente de forma prática.

---

## 🌍 Deploy na Vercel

O projeto está com deploy na [Vercel](https://vercel.com):

```
https://logmoney.vercel.app
```

---

## 🔎 Estrutura da interface

- **Cabeçalho**: Nome da aplicação
- **Seção de saldo**: Exibe saldo atual
- **Tabela de transações**: Lista das entradas e saídas cadastradas
- **Botões de ação**: Para adicionar ou excluir registros

---

## 💡 Possíveis melhorias futuras

- Adição de gráficos interativos
- Persistência de dados via LocalStorage
- Suporte a múltiplas moedas
- Exportação de relatórios em PDF

---

## 📜 Licença

Este projeto está licenciado sob a licença **ISC**.
