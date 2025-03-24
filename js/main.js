async function loadComponent(id, file) {
  const response = await fetch(file);
  const html = await response.text();
  document.getElementById(id).innerHTML = html;
  return Promise.resolve();
}

const nomesMarquee = [
  { nome: "LogMoney 💰" },
  //   { nome: "Sucesso 🚀" },
  //   { nome: "Afiliados ⭐" },
  //   { nome: "Ganhos Rápidos 💸" },
  //   { nome: "Confiança 🔒" },
];

function gerarConteudoMarquee(dados) {
  return dados.map((item) => `${item.nome}`).join(" ") + " ";
}

document.addEventListener("DOMContentLoaded", () => {
  loadComponent("header", "components/header.html");
  loadComponent("hero", "components/hero.html");
  loadComponent("buttons", "components/buttons.html");
  loadComponent("depoimentos", "components/depoimentos.html");
  loadComponent("afiliados-migrando", "components/afiliados-migrando.html");
  loadComponent("animated-strips", "components/animated-strips.html").then(
    () => {
      const conteudo = gerarConteudoMarquee(nomesMarquee).repeat(20);
      const purpleMarquee = document.getElementById("marquee-purple");
      const greenMarquee = document.getElementById("marquee-green");

      purpleMarquee.innerHTML = `<span>${conteudo}</span><span>${conteudo}</span><span>${conteudo}</span><span>${conteudo}</span>`;
      greenMarquee.innerHTML = `<span>${conteudo}</span><span>${conteudo}</span><span>${conteudo}</span><span>${conteudo}</span>`;
    }
  );
});
