"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const galleryContainer = document.querySelector(".gallery-grid");
  const imageFolder = "images/gallery/";

  const galleryImages = [
    "2.jpg", "5.jpg", "6.jpg", "10.jpg", "11.jpg", "12.jpg", "13.jpg",
    "14.jpg", "15.jpg", "16.jpg", "17.jpg", "18.jpg", "20.jpg", "21.jpg",
    "22.jpg", "23.jpg", "24.jpg", "26.jpg", "28.jpg", "29.jpg"
  ];

  galleryImages.forEach((imgFile) => {
    const img = document.createElement("img");
    img.src = `${imageFolder}${imgFile}`;
    img.alt = "Cornerstones Vision Academy gallery image";
    img.classList.add("gallery-item");
    galleryContainer.appendChild(img);
  });
});