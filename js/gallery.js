"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const gallery = document.querySelector(".gallery-grid");
  const images = [
    "2.jpg","5.jpg","6.jpg","10.jpg","11.jpg","12.jpg","13.jpg",
    "14.jpg","15.jpg","16.jpg","17.jpg","18.jpg","20.jpg","21.jpg",
    "22.jpg","23.jpg","24.jpg","26.jpg","28.jpg","29.jpg"
  ];

  images.forEach(name => {
    const img = document.createElement("img");
    img.src = `images/gallery/${name}`;
    img.alt = "CVA Gallery Image";
    img.classList.add("gallery-item");
    gallery.appendChild(img);
  });
});
