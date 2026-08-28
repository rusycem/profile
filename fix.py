with open('home/work.html', 'r', encoding='utf-8') as f:
    lines = f.readlines()

new_lines = lines[:385]
closing = """
        </div>
    </div>
    <div class="engine-statusbar">
        <span>Ready</span>
        <span>&copy; 2025 Muhammad Irfan Rusydi Razaleigh</span>
    </div>
</div>
</div>
<script>
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
</script>
<script src="../js/script.js"></script>
</body>
</html>
"""
new_lines.append(closing)

with open('home/work.html', 'w', encoding='utf-8') as f:
    f.writelines(new_lines)
