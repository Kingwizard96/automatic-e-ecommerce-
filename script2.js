
const slides = document.querySelectorAll('.sliding-div');
let currentIndex = 0;
console.log("Script2 is loaded");
console.log(slides.length);
function showSlide(index) {
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.classList.add("current");
        } else {
            slide.classList.remove("current");
        }
    });
}


var setTestimonial = setInterval(function() {
    if (currentIndex < slides.length - 1) {
        currentIndex++;
    }
    else {
        currentIndex = 0;
    }
    showSlide(currentIndex);
}, 5000);
