const slides = document.querySelectorAll('.carousel-slide');
const indicators = document.querySelectorAll('.carousel-indicators .indicator');

let currentIndex = 0;
let intervalId;

function showSlide(index) {
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.style.display = 'block';
      indicators[i].classList.add('active');
      slide.querySelector('.carousel-slide img').style.animationPlayState = 'running';
    } else {
      slide.style.display = 'none';
      indicators[i].classList.remove('active');
      slide.querySelector('.carousel-slide img').style.animationPlayState = 'paused';
    }
  });
}

function startCarousel() {
  intervalId = setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }, 4000);
}

function stopCarousel() {
  clearInterval(intervalId);
}

showSlide(currentIndex);
startCarousel();


