"use strict";

document.addEventListener("DOMContentLoaded", () => {
  // ===== HERO SLIDER =====
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");
  let currentIndex = 0;
  let interval;

  // Display the slide at the given index
  function showSlide(index) {
    slides.forEach((s, i) => s.classList.toggle("active", i === index));
    dots.forEach((d, i) => d.classList.toggle("active", i === index));
    currentIndex = index;
  }

  // Move to the next slide
  function nextSlide() {
    showSlide((currentIndex + 1) % slides.length);
  }

  // Start automatic slider
  function startSlider() {
    interval = setInterval(nextSlide, 6000); // 6s per slide
  }

  // Pause automatic slider
  function pauseSlider() {
    clearInterval(interval);
  }

  // Click on dots to navigate
  dots.forEach((dot, i) =>
    dot.addEventListener("click", () => {
      showSlide(i);
      pauseSlider();
      startSlider();
    })
  );

  // Pause slider on hover
  const slider = document.querySelector(".hero-slider");
  slider.addEventListener("mouseenter", pauseSlider);
  slider.addEventListener("mouseleave", startSlider);

  // Keyboard navigation
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

  // Initialize slider
  showSlide(0);
  startSlider();
});
