function setupStackedCards() {
  if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
    console.log("Stacked Cards empilhando...");

    const cards = document.querySelectorAll(".stacked-card");
    const lastCard = cards[cards.length - 1];

    if (cards.length > 0 && lastCard) {
      cards.forEach((card) => {
        ScrollTrigger.create({
          trigger: card,
          start: "top 50px",
          endTrigger: lastCard,
          end: "top 50px",
          pin: true,
          pinSpacing: false,
          anticipatePin: 1,
        });
      });
    } else {
      console.warn("Container ou cards não encontrados.");
    }
  } else {
    console.warn("GSAP ou ScrollTrigger não encontrados.");
  }
}
