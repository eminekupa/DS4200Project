/**
 * Main JavaScript file for the Mediterranean Hotel Dynamics project
 */

document.addEventListener('DOMContentLoaded', function() {
    // Insert overview image into the homepage
    insertOverviewImage();
    
    // Highlight active navigation link based on current page
    highlightCurrentNavLink();
});

/**
 * Insert the overview image on the homepage
 */
function insertOverviewImage() {
    const overviewImageContainer = document.getElementById('overview-image');
    
    // Only proceed if we're on a page with this container
    if (overviewImageContainer) {
        // Create image element
        const img = document.createElement('img');
        img.src = 'images/mediterranean_map.png'; // Update with your actual image path
        img.alt = 'Map of Mediterranean Hotels';
        img.className = 'img-fluid rounded shadow';
        
        // Add image to container
        overviewImageContainer.appendChild(img);
    }
}

/**
 * Highlight the current page in the navigation
 */
function highlightCurrentNavLink() {
    // Get current page filename
    const currentPage = window.location.pathname.split('/').pop();
    
    // Get all navigation links
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
    // Remove active class from all links
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
    
    // Add active class to current page link
    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        if (linkHref === currentPage || 
            (currentPage === '' && linkHref === 'index.html')) {
            link.classList.add('active');
        }
    });
}

/**
 * Load visualization images into their respective containers
 * @param {string} containerId - The ID of the container element
 * @param {string} imagePath - Path to the visualization image
 * @param {string} altText - Alternative text for the image
 */
function loadVisualization(containerId, imagePath, altText) {
    const container = document.getElementById(containerId);
    
    if (container) {
        // Create image element
        const img = document.createElement('img');
        img.src = imagePath;
        img.alt = altText;
        img.className = 'img-fluid rounded mb-3';
        
        // Clear container and add the new image
        container.innerHTML = '';
        container.appendChild(img);
    }
}