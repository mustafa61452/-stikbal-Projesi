// LIGHTBOX GALLERY SYSTEM
window.initLightbox = function () {
    // Create lightbox container if not exists
    if (!document.getElementById('lightbox-modal')) {
        const lightbox = document.createElement('div');
        lightbox.id = 'lightbox-modal';
        lightbox.innerHTML = `
            <div class="lightbox-overlay" onclick="closeLightbox()"></div>
            <div class="lightbox-content">
                <button class="lightbox-close" onclick="closeLightbox()">
                    <i class="fas fa-times"></i>
                </button>
                <button class="lightbox-prev" onclick="lightboxNavigate(-1)">
                    <i class="fas fa-chevron-left"></i>
                </button>
                <img id="lightbox-image" src="" alt="">
                <button class="lightbox-next" onclick="lightboxNavigate(1)">
                    <i class="fas fa-chevron-right"></i>
                </button>
            </div>
        `;
        document.body.appendChild(lightbox);
    }

    // Add click listeners to all images with lightbox class
    document.querySelectorAll('.lightbox-img').forEach((img, index) => {
        img.setAttribute('data-lightbox-index', index);
        img.style.cursor = 'pointer';
        img.addEventListener('click', () => openLightbox(img.src, index));
    });
};

let currentLightboxIndex = 0;
let lightboxImages = [];

window.openLightbox = function (src, index = 0) {
    const modal = document.getElementById('lightbox-modal');
    const image = document.getElementById('lightbox-image');

    lightboxImages = Array.from(document.querySelectorAll('.lightbox-img')).map(img => img.src);
    currentLightboxIndex = index;

    image.src = src;
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
};

window.closeLightbox = function () {
    const modal = document.getElementById('lightbox-modal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
};

window.lightboxNavigate = function (direction) {
    currentLightboxIndex += direction;

    if (currentLightboxIndex < 0) currentLightboxIndex = lightboxImages.length - 1;
    if (currentLightboxIndex >= lightboxImages.length) currentLightboxIndex = 0;

    document.getElementById('lightbox-image').src = lightboxImages[currentLightboxIndex];
};

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    const modal = document.getElementById('lightbox-modal');
    if (modal && modal.style.display === 'flex') {
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') lightboxNavigate(-1);
        if (e.key === 'ArrowRight') lightboxNavigate(1);
    }
});
