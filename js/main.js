async function loadComponent(id, file) {
  const response = await fetch(file);
  const html = await response.text();
  const container = document.getElementById(id);
  if (container) {
    container.innerHTML = html;
    return new Promise((resolve) => requestAnimationFrame(resolve));
  }
  return Promise.resolve();
}

const nomesMarquee = [
  { nome: "LogMoney 💰" },
  // { nome: "Sucesso 🚀" },
  // { nome: "Afiliados ⭐" },
  // { nome: "Ganhos Rápidos 💸" },
  // { nome: "Confiança 🔒" },
];

function gerarConteudoMarquee(dados) {
  return dados.map((item) => `${item.nome}`).join(" ") + " ";
}

document.addEventListener("DOMContentLoaded", () => {
  Promise.all([
    loadComponent("header", "components/header.html"),
    loadComponent("hero", "components/hero.html").then(() => {
      if (typeof setupVideoPlayer === "function") {
        setupVideoPlayer();
      }
    }),
    loadComponent("depoimentos", "components/depoimentos.html"),
    loadComponent("afiliados-migrando", "components/afiliados-migrando.html"),
    loadComponent("stacked-cards", "components/stacked-cards.html").then(() => {
      if (typeof setupStackedCards === "function") {
        setupStackedCards();
      }
    }),
    loadComponent("animated-strips", "components/animated-strips.html").then(
      () => {
        const conteudo = gerarConteudoMarquee(nomesMarquee).repeat(20);
        const purpleMarquee = document.getElementById("marquee-purple");
        const greenMarquee = document.getElementById("marquee-green");

        purpleMarquee.innerHTML = `<span>${conteudo}</span><span>${conteudo}</span><span>${conteudo}</span><span>${conteudo}</span>`;
        greenMarquee.innerHTML = `<span>${conteudo}</span><span>${conteudo}</span><span>${conteudo}</span><span>${conteudo}</span>`;
      }
    ),
  ]).then(() => {
    console.log("Todos os componentes carregados.");
    requestAnimationFrame(() => {
      setupScrollAnimations();
    });
  });
});
