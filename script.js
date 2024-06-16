// JavaScript para cargar y cambiar imágenes dinámicamente en el slider

// Define las imágenes para dispositivos móviles
const mobileImages = [
    'imagen1-mobile.jpg',
    'imagen2-mobile.jpg',
    'imagen3-mobile.jpg'
];

// Define las imágenes para computadoras
const desktopImages = [
    'imagen1-desktop.jpg',
    'imagen2-desktop.jpg',
    'imagen3-desktop.jpg'
];

// Función para cargar imágenes en el slider según el tamaño de la pantalla
function loadImages() {
    const slider = document.querySelector('.slider');
    
    if (window.innerWidth < 768) {
        // Cargar imágenes para dispositivos móviles
        mobileImages.forEach(image => {
            const slide = document.createElement('div');
            slide.classList.add('slide');
            slide.innerHTML = `<img src="${image}" alt="Promoción">`;
            slider.appendChild(slide);
        });
    } else {
        // Cargar imágenes para computadoras
        desktopImages.forEach(image => {
            const slide = document.createElement('div');
            slide.classList.add('slide');
            slide.innerHTML = `<img src="${image}" alt="Promoción">`;
            slider.appendChild(slide);
        });
    }
}

// Función para cambiar las imágenes del slider
let slideIndex = 1;

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    const slides = document.querySelectorAll('.slide');

    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }

    slides.forEach(slide => slide.style.display = 'none');
    
    slides[slideIndex - 1].style.display = 'block';
}

// Cargar imágenes al cargar la página
window.addEventListener('load', () => {
    loadImages();
    showSlides(slideIndex);
});

// Cargar imágenes al cambiar el tamaño de la pantalla
window.addEventListener('resize', () => {
    const slider = document.querySelector('.slider');
    slider.innerHTML = ''; // Limpiar el contenido del slider
    loadImages();
    showSlides(slideIndex);
});
