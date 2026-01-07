"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slide");
  const slider = document.querySelector(".hero-slider");
  const totalSlides = slides.length;
  let currentIndex = 0;
  let interval;

  // ===== CREATE DOT NAVIGATION =====
  const dotContainer = document.createElement("div");
  dotContainer.classList.add("slider-dots");
  slider.appendChild(dotContainer);

  slides.forEach((_, i) => {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    if (i === 0) dot.classList.add("active");
    dotContainer.appendChild(dot);

    dot.addEventListener("click", () => {
      showSlide(i);
      restartSlider();
    });
  });

  const dots = document.querySelectorAll(".dot");

  // ===== SHOW SLIDE FUNCTION =====
  function showSlide(index) {
    slides.forEach((s, i) => s.classList.toggle("active", i === index));
    dots.forEach((d, i) => d.classList.toggle("active", i === index));
    currentIndex = index;
  }

  // ===== NEXT SLIDE =====
  function nextSlide() {
    showSlide((currentIndex + 1) % totalSlides);
  }

  // ===== SLIDER CONTROLS =====
  function startSlider() {
    interval = setInterval(nextSlide, 1500); // 1.5 seconds
  }

  function pauseSlider() {
    clearInterval(interval);
  }

  function restartSlider() {
    pauseSlider();
    startSlider();
  }

  // ===== PAUSE ON HOVER =====
  slider.addEventListener("mouseenter", pauseSlider);
  slider.addEventListener("mouseleave", startSlider);

  // ===== KEYBOARD NAVIGATION =====
  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") {
      showSlide((currentIndex - 1 + totalSlides) % totalSlides);
      restartSlider();
    } else if (e.key === "ArrowRight") {
      nextSlide();
      restartSlider();
    }
  });

  // ===== INITIALIZE =====
  showSlide(0);
  startSlider();
});
