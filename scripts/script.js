document.addEventListener("DOMContentLoaded", function() {
    // Define the IDs of movable containers
    var movableContainerIds = ['movable'];

    // Function to check if a container is movable
    function isMovable(container) {
        return movableContainerIds.includes(container.id);
    }

    // Highlight the active navigation link
    var navLinks = document.querySelectorAll('.nav-link');
    var currentUrl = window.location.href;

    navLinks.forEach(function(link) {
        if (link.href === currentUrl) {
            link.classList.add('active');
        }
    });

    // Make specific video containers movable
    var offsetX, offsetY;

    function handleMouseDown(event) {
        var videoContainer = event.target.closest('.glass-video-container');

        if (!videoContainer || !isMovable(videoContainer)) {
            return;
        }

        offsetX = event.clientX - videoContainer.getBoundingClientRect().left;
        offsetY = event.clientY - videoContainer.getBoundingClientRect().top;

        function handleMouseMove(event) {
            videoContainer.style.position = 'absolute';
            videoContainer.style.left = (event.clientX - offsetX) + 'px';
            videoContainer.style.top = (event.clientY - offsetY) + 'px';
        }

        function handleMouseUp() {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        }

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
    }

    // Attach event handlers to movable containers
    movableContainerIds.forEach(function(id) {
        var container = document.getElementById(id);
        if (container) {
            container.addEventListener('mousedown', handleMouseDown);
        }
    });
});
