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
    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems);
    var breadcrumb = document.querySelector('.breadcrumb');
    var links = breadcrumb.querySelectorAll('a');

    const filterButtons = document.querySelectorAll('.filter-button');

    if (links.length === 1) {
        var separator = breadcrumb.querySelector('.separator');
        separator.parentNode.removeChild(separator); // Remove the separator element
    }

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

    document.querySelector('.dropbtn').addEventListener('click', function () {
        var dropdownContent = document.querySelector('.dropdown-content');
        var arrow = document.querySelector('.arrow-down');

        if (dropdownContent.style.display === 'block') {
            dropdownContent.style.display = 'none';
            arrow.classList.remove('arrow-up');
            arrow.classList.add('arrow-down');
        } else {
            dropdownContent.style.display = 'block';
            arrow.classList.remove('arrow-down');
            arrow.classList.add('arrow-up');
        }
    });
});
