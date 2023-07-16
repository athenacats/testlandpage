/* eslint-disable no-unused-vars */
/* eslint-disable no-plusplus */
let slidePosition = 1;

function SlideShow() {
  let i;
  const slides = document.getElementsByClassName("info");
  const circles = document.getElementsByClassName("ellipse");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < circles.length; i++) {
    circles[i].classList.remove("enable");
  }

  slidePosition++; // Increment the slide position

  if (slidePosition > slides.length) {
    slidePosition = 1;
  }

  slides[slidePosition - 1].style.display = "flex";
  circles[slidePosition - 1].classList.add("enable");
}

function currentSlide(n) {
  SlideShow((slidePosition = n));
}

setInterval(SlideShow, 2000);

function toggleAccordion(selector) {
  const linksElement = document.querySelector(selector);
  linksElement.classList.toggle("active");
}
