function showPage(page) {
    var contentDiv = document.getElementById('content');
    var currentPageLink = document.getElementById('currentPage');

    // Update breadcrumb link
    currentPageLink.textContent = page.charAt(0).toUpperCase() + page.slice(1); // Capitalize first letter
    currentPageLink.href = "pages/" + page + ".html";

    // Here goes your existing code to load content dynamically
    // Replace this comment with your existing logic for dynamic content loading
}

function filterProjects(category) {
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        if (category === 'all' || cardCategory === category) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

document.addEventListener("DOMContentLoaded", function () {
    var breadcrumb = document.querySelector('.breadcrumb');
    if (breadcrumb) {
        var links = breadcrumb.querySelectorAll('a');
        if (links.length === 0) {
            var separator = breadcrumb.querySelector('.separator');
            if (separator) {
                separator.parentNode.removeChild(separator); // Remove the separator element
            }
        }
    }
    const filterButtons = document.querySelectorAll('.filter-button');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');
            filterProjects(filter);

            // Toggle active class for filter buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        });
    });

    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('click', () => {
            const overlay = card.querySelector('.card-overlay');
            overlay.style.opacity = 1;
            overlay.style.visibility = 'visible';
        });

        card.querySelector('.card-overlay').addEventListener('click', (event) => {
            event.stopPropagation();
            event.currentTarget.style.opacity = 0;
            event.currentTarget.style.visibility = 'hidden';
        });
    });

    const dropbtn = document.querySelector('.dropbtn');
    const dropdownContent = document.querySelector('.dropdown-content');
    const arrow = document.querySelector('.arrow');

    if (dropbtn && dropdownContent && arrow) {
        dropbtn.addEventListener('click', function () {
            dropdownContent.classList.toggle('open');
            arrow.classList.toggle('arrow-up');
            arrow.classList.toggle('arrow-down');
        });
    }

    const modal = document.getElementById('projectModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const modalImages = document.getElementById('modalImages');
    const modalTech = document.getElementById('modalTech');
    const modalSkills = document.getElementById('modalSkills');
    const closeBtn = document.querySelector('.close-btn');

    // When a project card is clicked
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('click', () => {
            // You can store these details as data attributes in HTML
            modalTitle.textContent = card.querySelector('h3').textContent;
            modalDescription.textContent = card.querySelector('.card-overlay p').textContent;

            // Example: Load extra images from data-images attribute
            const images = card.getAttribute('data-images')?.split(',') || [];
            modalImages.innerHTML = images.map(src => `<img src="${src}" alt="">`).join('');

            // Example: Tech & skills from inner HTML
            modalTech.textContent = card.querySelector('.card-overlay strong:nth-of-type(1)').nextSibling.textContent.trim();
            modalSkills.textContent = card.querySelector('.card-overlay strong:nth-of-type(2)').nextSibling.textContent.trim();

            modal.style.display = 'block';
        });
    });

     // Close modal
    closeBtn.addEventListener('click', () => modal.style.display = 'none');
    window.addEventListener('click', (e) => {
        if (e.target === modal) modal.style.display = 'none';
    });
});
