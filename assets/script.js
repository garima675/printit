const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
let currentSlideIndex = 0;
const bannerImg = document.querySelector('.banner-img');
const tagLine = document.querySelector('p');
const leftArrow = document.querySelector('.arrow_left');
const rightArrow = document.querySelector('.arrow_right');
const dotsContainer = document.querySelector('.dots');

slides.forEach((slide, index) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    dotsContainer.appendChild(dot);
});

leftArrow.addEventListener('click', function () {
    currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
    updateSlide();
});


rightArrow.addEventListener('click', function () {
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    updateSlide();
});
function updateSlide() {
    const slide = slides[currentSlideIndex];
    bannerImg.src = './assets/images/slideshow/' + slide.image;
    tagLine.innerHTML = slide.tagLine;


	const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        if (index === currentSlideIndex) {
            dot.classList.add('dot_selected');
        } else {
            dot.classList.remove('dot_selected');
        }
    });
}


updateSlide();



