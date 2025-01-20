// Smooth blur transition effect on link click
document.querySelectorAll('.designer-link, .programmer-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        // Add blur transition
        document.body.classList.add('blur-transition');

        // Wait for the transition to complete before navigating
        setTimeout(() => {
            window.location.href = this.dataset.target; // Navigate to the target URL
        }, 300); // Match the CSS transition duration (0.5s)
    });
});

// Remove blur class on page load
window.addEventListener('load', () => {
    document.body.classList.remove('blur-transition');
});

// Fade effect during scroll
document.addEventListener('scroll', () => {
    const pages = document.querySelectorAll('.page');
    const scrollPosition = window.scrollY;

    pages.forEach((page, index) => {
        const pageHeight = window.innerHeight;
        const pageTop = index * pageHeight;
        const pageBottom = pageTop + pageHeight;

        if (scrollPosition >= pageTop && scrollPosition < pageBottom) {
            page.setAttribute('data-active', 'true');
        } else {
            page.setAttribute('data-active', 'false');
        }
    });
});
document.querySelector('.contact-link').addEventListener('click', function (e) {
    e.preventDefault(); // Prevent the default anchor behavior

    // Scroll to the second page smoothly
    document.getElementById('second-page').scrollIntoView({
        behavior: 'smooth'
    });
});
