"use strict";

document.addEventListener("DOMContentLoaded", () => {
  // ===== HERO SLIDER =====
  const slides = document.querySelectorAll(".slide");
  const slider = document.querySelector(".hero-slider");
  const totalSlides = slides.length;
  let currentIndex = 0;
  let interval = null;

  function showSlide(index) {
    slides.forEach((slide, i) => slide.classList.toggle("active", i === index));
    currentIndex = index;
  }

  function nextSlide() {
    showSlide((currentIndex + 1) % totalSlides);
  }

  function startSlider() {
    interval = setInterval(nextSlide, 6000);
  }

  function pauseSlider() {
    clearInterval(interval);
  }

  // Pause slider on hover
  slider.addEventListener("mouseenter", pauseSlider);
  slider.addEventListener("mouseleave", startSlider);

  // Keyboard navigation
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

  // Initialize
  showSlide(currentIndex);
  startSlider();

  // ===== STICKY NAVIGATION + SCROLL SPY =====
  const navLinks = document.querySelectorAll(".main-navigation a");
  const sections = document.querySelectorAll("main .section");

  function onScroll() {
    const scrollPos = window.scrollY + window.innerHeight / 3;

    sections.forEach((section) => {
      if (
        scrollPos >= section.offsetTop &&
        scrollPos < section.offsetTop + section.offsetHeight
      ) {
        navLinks.forEach((link) => {
          link.classList.toggle(
            "active",
            link.getAttribute("href").slice(1) === section.id
          );
        });
      }
    });
  }

  window.addEventListener("scroll", onScroll);

  // Smooth scroll
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const target = document.getElementById(link.getAttribute("href").slice(1));
      target.scrollIntoView({ behavior: "smooth" });
    });
  });
});
