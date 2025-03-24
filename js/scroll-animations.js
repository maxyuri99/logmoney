function setupScrollAnimations() {
  const elementsToAnimate = document.querySelectorAll(".animate-on-scroll");
  console.log(
    "Elementos encontrados:",
    elementsToAnimate.length,
    elementsToAnimate
  );

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2,
      rootMargin: "0px 0px -100px 0px",
    }
  );

  elementsToAnimate.forEach((el) => observer.observe(el));
}
