const testimonialSlider = document.querySelector(".testimonial-slider");
const testimonialSlides = testimonialSlider.querySelectorAll(".testimonial-slide");
let currentSlide = 0;

setInterval(() => {
testimonialSlides[currentSlide].classList.remove("active"); // Remove active class from current slide
currentSlide++;
if (currentSlide >= testimonialSlides.length) {
currentSlide = 0;
}

testimonialSlides[currentSlide].classList.add("active"); // Add active class to next slide
}, 5000);