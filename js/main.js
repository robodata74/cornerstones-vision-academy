"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");
  let currentIndex = 0;
  let interval;

  function showSlide(index) {
    slides.forEach((s, i) => s.classList.toggle("active", i === index));
    dots.forEach((d, i) => d.classList.toggle("active", i === index));
    currentIndex = index;
  }

  function nextSlide() {
    showSlide((currentIndex + 1) % slides.length);
  }

  function startSlider() {
    interval = setInterval(nextSlide, 6000);
  }

  function pauseSlider() {
    clearInterval(interval);
  }

  dots.forEach((dot, i) =>
    dot.addEventListener("click", () => {
      showSlide(i);
      pauseSlider();
      startSlider();
    })
  );

  const slider = document.querySelector(".hero-slider");
  slider.addEventListener("mouseenter", pauseSlider);
  slider.addEventListener("mouseleave", startSlider);

  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") {
      showSlide((currentIndex - 1 + slides.length) % slides.length);
      pauseSlider();
      startSlider();
    } else if (e.key === "ArrowRight") {
      nextSlide();
      pauseSlider();
      startSlider();
    }
  });

  showSlide(0);
  startSlider();
});
