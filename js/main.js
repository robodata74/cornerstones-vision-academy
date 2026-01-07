"use strict";

document.addEventListener("DOMContentLoaded", () => {
  // ===== HERO SLIDER =====
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");
  let currentIndex = 0;
  const totalSlides = slides.length;
  let sliderInterval = null;

  function showSlide(index) {
    slides.forEach((slide, i) => slide.classList.toggle("active", i === index));
    dots.forEach((dot, i) => dot.classList.toggle("active", i === index));
    currentIndex = index;
  }

  function nextSlide() {
    showSlide((currentIndex + 1) % totalSlides);
  }

  function startSlider() {
    sliderInterval = setInterval(nextSlide, 5000);
  }

  function pauseSlider() {
    clearInterval(sliderInterval);
  }

  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      showSlide(i);
      pauseSlider();
      startSlider();
    });
  });

  const slider = document.querySelector(".hero-slider");
  slider.addEventListener("mouseenter", pauseSlider);
  slider.addEventListener("mouseleave", startSlider);

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

  showSlide(currentIndex);
  startSlider();

  // ===== STICKY NAV + SCROLL SPY =====
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
