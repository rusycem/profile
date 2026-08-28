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
    const projectCards = document.querySelectorAll('.project-card');
    const modal = document.getElementById('project-modal');
    const closeBtn = document.querySelector('.close-btn');

    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const modalTechnologies = document.getElementById('modal-technologies');
    const modalSkills = document.getElementById('modal-skills');
    const modalImage = document.getElementById('modal-image');
    const modalLink = document.getElementById('modal-link');

     // Open modal on card click
    // Only add modal functionality if modal exists
if (modal && closeBtn) {
    // Open modal on card click
    projectCards.forEach(card => {
        card.addEventListener('click', () => {
            modal.style.display = "block";
            modalTitle.textContent = card.getAttribute('data-title');
            modalDescription.textContent = card.getAttribute('data-description');
            modalTechnologies.textContent = card.getAttribute('data-technologies');
            modalSkills.textContent = card.getAttribute('data-skills');
            modalImage.src = card.getAttribute('data-image');

            const cardLink = card.querySelector('.project-link');
            if (cardLink) modalLink.href = cardLink.href;
        });
    });

    // Close modal
    closeBtn.addEventListener('click', () => {
        modal.style.display = "none";
    });

    // Close if clicked outside modal
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
}




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

    if (filterButtons.length > 0) {
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');
            filterProjects(filter);

            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        });
    });
}


    const hamburgerBtn = document.getElementById('hamburger-btn');
    const sidebar = document.getElementById('sidebar');

    if (hamburgerBtn && sidebar) {
        hamburgerBtn.addEventListener('click', function () {
            sidebar.classList.toggle('open');
        });
    }
});
