function setupVideoPlayer() {
  const placeholder = document.querySelector(".video-placeholder");

  if (placeholder) {
    placeholder.addEventListener("click", function () {
      placeholder.classList.add("fade-out");

      placeholder.addEventListener(
        "transitionend",
        function () {
          const videoContainer = placeholder.parentElement;
          const iframe = document.createElement("iframe");
          iframe.setAttribute(
            "src",
            "https://www.youtube.com/embed/vQVHBKWPWTM?autoplay=1&rel=0"
          );
          iframe.setAttribute("frameborder", "0");
          iframe.setAttribute(
            "allow",
            "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          );
          iframe.setAttribute("allowfullscreen", "true");
          iframe.style.width = "100%";
          iframe.style.aspectRatio = "16 / 9";
          iframe.style.borderRadius = "10px";
          iframe.style.opacity = "0";
          iframe.style.transition = "opacity 0.5s ease";

          videoContainer.innerHTML = "";
          videoContainer.appendChild(iframe);

          requestAnimationFrame(() => {
            iframe.style.opacity = "1";
          });
        },
        { once: true }
      );
    });
  }
}
