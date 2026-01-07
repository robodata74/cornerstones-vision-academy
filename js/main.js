"use strict";

document.addEventListener("DOMContentLoaded", () => {
  // Slider
  const slides = document.querySelectorAll(".slide");
  let currentIndex = 0;

  function showSlide(index) {
    slides.forEach((s, i) => s.classList.toggle("active", i === index));
    currentIndex = index;
  }

  function nextSlide() {
    showSlide((currentIndex + 1) % slides.length);
  }

  let sliderInterval = setInterval(nextSlide, 1500); // 1.5s

  // Pause on hover
  const slider = document.querySelector(".hero-slider");
  if (slider) {
    slider.addEventListener("mouseenter", () => clearInterval(sliderInterval));
    slider.addEventListener("mouseleave", () => sliderInterval = setInterval(nextSlide, 1500));
  }

  // Keyboard arrows
  document.addEventListener("keydown", e => {
    if (!slides.length) return;
    if (e.key === "ArrowLeft") {
      showSlide((currentIndex - 1 + slides.length) % slides.length);
    } else if (e.key === "ArrowRight") {
      nextSlide();
    }
  });

  if (slides.length) showSlide(0);

  // Mobile menu toggle (if you add a hamburger)
  const navLinks = document.querySelectorAll(".main-navigation a");
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      navLinks.forEach(l => l.classList.remove("active"));
      link.classList.add("active");
    });
  });
});
