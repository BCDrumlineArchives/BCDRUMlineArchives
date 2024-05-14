document.addEventListener("DOMContentLoaded", function() {
    // Highlight the active navigation link
    var navLinks = document.querySelectorAll('.nav-link');
    var currentUrl = window.location.href;

    navLinks.forEach(function(link) {
        if (link.href === currentUrl) {
            link.classList.add('active');
        }
    });
});
