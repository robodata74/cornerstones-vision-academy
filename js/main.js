"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");
  let index = 0;

  function showSlide(i) {
    slides.forEach((s, n) => s.classList.toggle("active", n === i));
    dots.forEach((d, n) => d.classList.toggle("active", n === i));
    index = i;
  }

  function next() {
    showSlide((index + 1) % slides.length);
  }

  setInterval(next, 1500);

  dots.forEach((dot, i) =>
    dot.addEventListener("click", () => showSlide(i))
  );
});
