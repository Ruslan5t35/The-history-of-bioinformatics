let currentSlide = 0;

function changeSlide(direction) {
    const slides = document.querySelectorAll('.slide');
    slides[currentSlide].classList.remove('active');
    
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    
    slides[currentSlide].classList.add('active');
    
    // Обновляем видимость слайдов
    slides.forEach((slide, index) => {
        slide.style.display = index === currentSlide ? 'block' : 'none';
    });
}

// Изначально показываем только первый слайд
const slides = document.querySelectorAll('.slide');
slides.forEach((slide, index) => {
    slide.style.display = index === 0 ? 'block' : 'none';
});