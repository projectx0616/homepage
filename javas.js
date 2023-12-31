// Your JavaScript code goes here
document.addEventListener('DOMContentLoaded', function () {
    const slider = document.getElementById('banner-slider');
    const pagination = document.getElementById('pagination');

    let currentIndex = 0;

    // Function to update the slider position
    function updateSlider() {
        slider.style.transform = `translateX(${-currentIndex * 100}%)`;
    }

    // Function to go to a specific slide
    function goToSlide(index) {
        currentIndex = index;
        updateSlider();
        updatePagination();
    }

    // Function to update pagination dots
    function updatePagination() {
        const dots = pagination.querySelectorAll('.dot');
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }

    // Create pagination dots
    for (let i = 0; i < slider.children.length; i++) {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        dot.addEventListener('click', () => goToSlide(i));
        pagination.appendChild(dot);
    }

    // Automatic slide change every 5 seconds
    setInterval(() => {
        currentIndex = (currentIndex + 1) % slider.children.length;
        updateSlider();
        updatePagination();
    }, 5000);
});
