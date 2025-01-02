const slides = document.querySelectorAll(".slides img")
let slideIndex = 0;
let interval = null;

document.addEventListener('DOMContentLoaded', initializeSlider);

function initializeSlider() {
    
    if (slides.length > 0) {
        slides[slideIndex].classList.add('displaySlide')
        interval = setInterval(nextSlide, 5000) 
    } 
}

function showSlide(index) {
    if (index >= slides.length) {
        slideIndex = 0;
    }
    else if (index < 0) {
        slideIndex = slides.length - 1;
    }
    
    const dots = document.getElementsByClassName('dot');

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides.forEach(slide => {
        slide.classList.remove('displaySlide');
    })

    slides[slideIndex].classList.add('displaySlide')
    dots[slideIndex].className += " active";
}

function currentSlide(n) {
    showSlide(slideIndex = n);
}

function prevSlide() {
    clearInterval(interval);
    slideIndex--;
    showSlide(slideIndex);
}

function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);
}