// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Lightbox Functionality for Images
document.querySelectorAll('.lightbox-img').forEach(image => {
    image.addEventListener('click', function() {
        // Create the lightbox overlay
        const lightboxOverlay = document.createElement('div');
        lightboxOverlay.classList.add('lightbox-overlay');

        // Create the lightbox image element
        const lightboxImage = document.createElement('img');
        lightboxImage.src = this.src;
        lightboxImage.alt = this.alt;

        // Append image to overlay
        lightboxOverlay.appendChild(lightboxImage);
        document.body.appendChild(lightboxOverlay);

        // Close lightbox when overlay is clicked
        lightboxOverlay.addEventListener('click', function() {
            document.body.removeChild(lightboxOverlay);
        });
    });
});

// Simple Form Validation
document.querySelector('form').addEventL

