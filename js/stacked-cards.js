function setupStackedCards() {
  if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
    console.log("Stacked Cards iniciado");

    const cards = document.querySelectorAll(".stacked-card");
    const container = document.querySelector(".stacked-section-container");

    if (container && cards.length > 0) {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: () => `+=${cards.length * 40}%`,
          scrub: true,
          pin: true,
          anticipatePin: 1,
          markers: false,
        },
      });

      cards.forEach((card, i) => {
        timeline.to(
          card,
          {
            yPercent: -100 * i,
            zIndex: cards.length - i,
            ease: "none",
          },
          i * 0.5
        );
      });
    } else {
      console.warn("Container ou cards não encontrados.");
    }
  } else {
    console.warn("GSAP ou ScrollTrigger não encontrados.");
  }
}
