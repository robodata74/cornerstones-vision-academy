"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const galleryGrid = document.getElementById("gallery-grid");
  
  // Automatically fetch all images in the gallery folder
  // NOTE: GitHub Pages does not allow reading folder contents dynamically.
  // You must list the images manually or via array:
  const images = [
    "images/gallery/photo1.png",
    "images/gallery/photo2.jpg",
    "images/gallery/photo3.png"
    // Add more as you upload
  ];

  images.forEach(src => {
    const imgEl = document.createElement("img");
    imgEl.src = src;
    imgEl.alt = "CVA Gallery Image";
    imgEl.classList.add("gallery-item");
    galleryGrid.appendChild(imgEl);
  });
});
