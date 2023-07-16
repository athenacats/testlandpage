/* eslint-disable no-unused-vars */
/* eslint-disable no-plusplus */
let slidePosition = 1;

function SlideShow(n) {
  let i;
  const slides = document.getElementsByClassName("info");
  const circles = document.getElementsByClassName("ellipse");
  if (n > slides.length) {
    slidePosition = 1;
  }
  if (n < 1) {
    slidePosition = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < circles.length; i++) {
    circles[i].classList.remove("enable");
  }
  slides[slidePosition - 1].style.display = "flex";
  circles[slidePosition - 1].classList.add("enable");
}

function currentSlide(n) {
  SlideShow((slidePosition = n));
}

function toggleAccordion(selector) {
  const linksElement = document.querySelector(selector);
  linksElement.classList.toggle("active");
}
