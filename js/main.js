"use strict";

document.addEventListener("DOMContentLoaded", () => {
  // ======== HERO SLIDER ========
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");
  let currentIndex = 0;
  const slideDuration = 2500; // 2.5 seconds

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
      dots[i].classList.toggle("active", i === index);
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }

  // Initial display
  showSlide(currentIndex);
  let slideInterval = setInterval(nextSlide, slideDuration);

  // Dot navigation
  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      clearInterval(slideInterval);
      currentIndex = i;
      showSlide(currentIndex);
      slideInterval = setInterval(nextSlide, slideDuration);
    });
  });

  // ======== NAVIGATION ACTIVE LINK ON SCROLL ========
  const navLinks = document.querySelectorAll(".main-navigation a");

  function setActiveLink() {
    let scrollPos = window.scrollY || document.documentElement.scrollTop;
    navLinks.forEach((link) => {
      const section = document.querySelector(link.getAttribute("href"));
      if (
        section.offsetTop <= scrollPos + 100 &&
        section.offsetTop + section.offsetHeight > scrollPos + 100
      ) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  }

  window.addEventListener("scroll", setActiveLink);

  // Smooth scrolling for nav links
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute("href"));
      target.scrollIntoView({ behavior: "smooth" });
    });
  });
});
