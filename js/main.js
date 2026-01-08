"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");
  let current = 0;
  const intervalTime = 3500; // 3.5 seconds
  let slideInterval;

  function goToSlide(n) {
    slides.forEach((slide, i) => {
      slide.classList.remove("active");
      dots[i].classList.remove("active");
      if (i === n) {
        slide.classList.add("active");
        dots[i].classList.add("active");
      }
    });
    current = n;
  }

  function nextSlide() {
    goToSlide((current + 1) % slides.length);
  }

  slideInterval = setInterval(nextSlide, intervalTime);

  dots.forEach((dot, idx) => {
    dot.addEventListener("click", () => {
      clearInterval(slideInterval);
      goToSlide(idx);
      slideInterval = setInterval(nextSlide, intervalTime);
    });
  });
});
