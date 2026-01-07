"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slide");
  const dots = [];
  let currentIndex = 0;
  let interval;

  // Create dots dynamically if needed
  const slider = document.querySelector(".hero-slider");
  const dotsContainer = document.createElement("div");
  dotsContainer.classList.add("dots-container");
  slider.appendChild(dotsContainer);

  slides.forEach((slide, i) => {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    if (i === 0) dot.classList.add("active");
    dotsContainer.appendChild(dot);
    dots.push(dot);

    dot.addEventListener("click", () => {
      showSlide(i);
      pauseSlider();
      startSlider();
    });
  });

  function showSlide(index) {
    slides.forEach((s, i) => s.classList.toggle("active", i === index));
    dots.forEach((d, i) => d.classList.toggle("active", i === index));
    currentIndex = index;
  }

  function nextSlide() {
    showSlide((currentIndex + 1) % slides.length);
  }

  function startSlider() { interval = setInterval(nextSlide, 1500); }
  function pauseSlider() { clearInterval(interval); }

  slider.addEventListener("mouseenter", pauseSlider);
  slider.addEventListener("mouseleave", startSlider);

  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") { showSlide((currentIndex - 1 + slides.length) % slides.length); pauseSlider(); startSlider(); }
    if (e.key === "ArrowRight") { nextSlide(); pauseSlider(); startSlider(); }
  });

  showSlide(0);
  startSlider();
});
