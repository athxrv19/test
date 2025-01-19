// Smooth blur transition effect on link click
document.querySelectorAll('.designer-link, .programmer-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        // Add blur transition
        document.body.classList.add('blur-transition');

        // Wait for the transition to complete before navigating
        setTimeout(() => {
            window.location.href = this.dataset.target; // Navigate to the target URL
        }, 500); // Match the CSS transition duration (0.5s)
    });
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
