"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");
  let currentIndex = 0;
  const totalSlides = slides.length;
  let sliderInterval = null;

  /** Show slide at given index */
  function showSlide(index) {
    slides.forEach((slide, i) => slide.classList.toggle("active", i === index));
    dots.forEach((dot, i) => dot.classList.toggle("active", i === index));
    currentIndex = index;
  }

  /** Move to next slide */
  function nextSlide() {
    showSlide((currentIndex + 1) % totalSlides);
  }

  /** Start auto slider */
  function startSlider() {
    sliderInterval = setInterval(nextSlide, 5000);
  }

  /** Pause slider */
  function pauseSlider() {
    clearInterval(sliderInterval);
  }

  /** Dot click events */
  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      showSlide(i);
      pauseSlider();
      startSlider();
    });
  });

  /** Pause on hover */
  const slider = document.querySelector(".hero-slider");
  slider.addEventListener("mouseenter", pauseSlider);
  slider.addEventListener("mouseleave", startSlider);

  /** Keyboard navigation */
  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") {
      showSlide((currentIndex - 1 + totalSlides) % totalSlides);
      pauseSlider();
      startSlider();
    } else if (e.key === "ArrowRight") {
      nextSlide();
      pauseSlider();
      startSlider();
    }
  });

  /** Initialize slider */
  showSlide(currentIndex);
  startSlider();
});
