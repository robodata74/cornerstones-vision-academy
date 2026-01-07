"use strict";

document.addEventListener("DOMContentLoaded", () => {
  console.log("CVA website loaded with hero slider.");

  const slidesContainer = document.querySelector(".slides");
  const slides = document.querySelectorAll(".slide");
  const totalSlides = slides.length;
  let currentIndex = 0;

  /**
   * Show the slide at index
   * @param {number} index
   */
  function showSlide(index) {
    slidesContainer.style.transform = `translateX(-${index * 100}%)`;
  }

  /**
   * Move to next slide
   */
  function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
  }

  /**
   * Optional: Pause slider on hover
   */
  let sliderInterval = setInterval(nextSlide, 5000); // 5s per slide

  slidesContainer.addEventListener("mouseenter", () => {
    clearInterval(sliderInterval);
  });

  slidesContainer.addEventListener("mouseleave", () => {
    sliderInterval = setInterval(nextSlide, 5000);
  });

  // Initialize first slide
  showSlide(currentIndex);
});
