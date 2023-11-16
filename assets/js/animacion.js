function updateImage() {
    const img = document.getElementById("carouselImg");
    img.style.opacity = 0;
    img.src = images[currentIndex];
    setTimeout(() => {
        img.style.opacity = 1;
    }, 10); // Añadí un pequeño retardo para asegurar que el cambio de opacidad ocurra después de cambiar la imagen
}

function nextImage() {
    const img = document.getElementById("carouselImg");
    img.style.opacity = 0;
    currentIndex = (currentIndex + 1) % images.length;
    img.src = images[currentIndex];
    setTimeout(() => {
        img.style.opacity = 1;
    }, 10);
}

function prevImage() {
    const img = document.getElementById("carouselImg");
    img.style.opacity = 0;
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    img.src = images[currentIndex];
    setTimeout(() => {
        img.style.opacity = 1;
    }, 10);
}
