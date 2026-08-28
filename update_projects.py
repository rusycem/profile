import re
with open('home/work.html', 'r', encoding='utf-8') as f:
    text = f.read()

new_projects = '''
                    <!-- Prism Poker -->
                    <div class="project-card"
                        data-category="game"
                        data-title="Prism Poker"
                        data-description="Prism Poker is a fast-paced, elemental card battler where players form high-scoring poker hands using colored cards (Red/Blue/Green/Yellow). Every turn, players secretly lock in an elemental stance, turning a game of pure math into a high-stakes psychological duel of rock-paper-scissors. Won the 'Best Goofy Game' awards at Great Game Jam 2026. Built by Just Go Crazy Team."
                        data-technologies="Unity, C#, Android, Windows"
                        data-skills="Game Programming, UI/UX, Game Design, Cross-Platform"
                        data-image="../images/icon/favicon.webp"
                        data-link="https://rusycem.itch.io/prism-poker"
                        tabindex="0" role="button" aria-label="Open details for Prism Poker">

                            <div class="card-content">
                                <div class="project-logo">
                                <img src="../images/icon/favicon.webp" alt="Prism Poker" loading="lazy" style="object-fit:cover;width:100%;height:100%;">
                                </div>
                                <h3>Prism Poker</h3>
                                <p>Fast-paced elemental card battler mixing poker math with a psychological duel. Award winner at Great Game Jam 2026.</p>
                                <p>July 2026</p>
                            </div>
                        <a class="project-link" href="https://rusycem.itch.io/prism-poker" target="_blank" rel="noopener noreferrer">Open</a>
                    </div>

                    <!-- The Night Shift -->
                    <div class="project-card"
                        data-category="game"
                        data-title="The Night Shift"
                        data-description="A first-person horror survival game developed using Unity 3D during Global Game Jam 2026 by Team MixedRice. Players are trapped in a haunted environment and must explore, survive, and escape while being hunted by a supernatural enemy. Collect 4 keys, manage your cursed mask stamina, and avoid jumpscares!"
                        data-technologies="Unity 3D, C#, AI Navigation"
                        data-skills="Horror AI, State Machines, Level Scripting, First-Person Mechanics"
                        data-image="../images/icon/favicon.webp"
                        data-link="https://gameloaded4hour.itch.io/the-night-shift"
                        tabindex="0" role="button" aria-label="Open details for The Night Shift">

                            <div class="card-content">
                                <div class="project-logo">
                                <img src="../images/icon/favicon.webp" alt="The Night Shift" loading="lazy" style="object-fit:cover;width:100%;height:100%;">
                                </div>
                                <h3>The Night Shift</h3>
                                <p>First-person horror survival game with cursed masks, roaming AI enemies, and intense atmosphere. Global Game Jam 2026.</p>
                                <p>Feb 2026</p>
                            </div>
                        <a class="project-link" href="https://gameloaded4hour.itch.io/the-night-shift" target="_blank" rel="noopener noreferrer">Open</a>
                    </div>
'''

text = text.replace('<!-- CARDS) -->', '<!-- CARDS) -->\n' + new_projects)

with open('home/work.html', 'w', encoding='utf-8') as f:
    f.write(text)
