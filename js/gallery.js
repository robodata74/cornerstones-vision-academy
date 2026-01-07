"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const galleryContainer = document.querySelector(".gallery-grid");
  const imageFolder = "images/gallery/";

  // List of gallery images (can be expanded later)
  const galleryImages = [
    "2.jpg", "5.jpg", "6.jpg", "10.jpg", "11.jpg", "12.jpg", "13.jpg",
    "14.jpg", "15.jpg", "16.jpg", "17.jpg", "18.jpg", "20.jpg", "21.jpg",
    "22.jpg", "23.jpg", "24.jpg", "26.jpg", "28.jpg", "29.jpg"
  ];

  // Clear container first (in case of re-initialization)
  galleryContainer.innerHTML = "";

  // Dynamically add images to gallery container
  galleryImages.forEach((imgFile, index) => {
    const img = document.createElement("img");
    img.src = `${imageFolder}${imgFile}`;
    img.alt = `Cornerstones Vision Academy gallery image ${index + 1}`;
    img.classList.add("gallery-item");
    img.loading = "lazy"; // Best practice: lazy-load for performance
    galleryContainer.appendChild(img);
  });
});
