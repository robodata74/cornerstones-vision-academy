"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");
  let current = 0;
  const intervalTime = 3500; // 3.5 seconds
  let slideInterval = setInterval(nextSlide, intervalTime);

  function showSlide(index) {
    slides.forEach((s, i) => {
      s.classList.toggle("active", i === index);
      dots[i].classList.toggle("active", i === index);
    });
    current = index;
  }

  function nextSlide() {
    showSlide((current + 1) % slides.length);
  }

  dots.forEach((dot, idx) => {
    dot.addEventListener("click", () => {
      clearInterval(slideInterval);
      showSlide(idx);
      slideInterval = setInterval(nextSlide, intervalTime);
    });
  });
});
