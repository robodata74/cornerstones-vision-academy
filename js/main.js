"use strict";

document.addEventListener("DOMContentLoaded", () => {
  // ===== HERO SLIDER =====
  const slides = document.querySelectorAll(".slide");
  const sliderDotsContainer = document.createElement("div");
  sliderDotsContainer.classList.add("slider-dots");
  slides.forEach(() => {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    sliderDotsContainer.appendChild(dot);
  });
  document.querySelector(".hero-slider").appendChild(sliderDotsContainer);
  const dots = document.querySelectorAll(".dot");

  let currentIndex = 0;
  let sliderInterval = null;

  function showSlide(index) {
    slides.forEach((slide, i) => slide.classList.toggle("active", i === index));
    dots.forEach((dot, i) => dot.classList.toggle("active", i === index));
    currentIndex = index;
  }

  function nextSlide() {
    showSlide((currentIndex + 1) % slides.length);
  }

  function startSlider() {
    sliderInterval = setInterval(nextSlide, 1500); // 1.5s per slide
  }

  function pauseSlider() {
    clearInterval(sliderInterval);
  }

  // Dot navigation
  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      showSlide(i);
      pauseSlider();
      startSlider();
    });
  });

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

  showSlide(0);
  startSlider();

  // ===== SCROLL SPY / SMOOTH NAV =====
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

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const target = document.getElementById(link.getAttribute("href").slice(1));
      target.scrollIntoView({ behavior: "smooth" });
    });
  });
});
