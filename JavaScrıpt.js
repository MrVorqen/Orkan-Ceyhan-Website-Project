const slider = document.querySelector('.slider');
const slides = document.querySelector('.slides');
const slideWidth = slider.clientWidth;
let currentIndex = 0;


function slideNext() {
  currentIndex = (currentIndex + 1) % slides.children.length;
  slides.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
}


function slidePrev() {
  currentIndex = (currentIndex - 1 + slides.children.length) % slides.children.length;
  slides.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
}

document.querySelector('.next').addEventListener('click', slideNext);
document.querySelector('.prev').addEventListener('click', slidePrev);