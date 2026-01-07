"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const galleryContainer = document.querySelector(".gallery-grid");
  const imageFolder = "images/gallery/";
  
  // List of images (you can add more files here)
  const galleryImages = [
    "photo1.png",
    "photo2.png",
    "photo3.png",
    "photo4.png",
    "photo5.png",
  ];

  // Dynamically add images
  galleryImages.forEach((imgFile) => {
    const img = document.createElement("img");
    img.src = `${imageFolder}${imgFile}`;
    img.alt = "Cornerstones Vision Academy gallery image";
    galleryContainer.appendChild(img);
  });
});
