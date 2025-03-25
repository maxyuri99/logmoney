function setupFaqAccordion() {
  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach((item) => item.classList.remove("active"));

  faqItems.forEach((item) => {
    item.addEventListener("click", () => {
      faqItems.forEach((i) => {
        if (i !== item) {
          i.classList.remove("active");
        }
      });

      item.classList.toggle("active");
    });
  });
}
