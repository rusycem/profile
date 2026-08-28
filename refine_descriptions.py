import re

with open('home/work.html', 'r', encoding='utf-8') as f:
    text = f.read()

# Replace description for CTRM Factory Digital Twin (VR)
text = re.sub(
    r'<p>Immersive VR replica of an aerospace factory for training, visualization, and Industry 4.0 research. collaboration UTeM &amp; CTRM Sdn. Bhd.</p>\s*<p>Aug 2025 - Dec 2025</p>',
    r'<p>An immersive VR replica of CTRM\'s aerospace factory. Built to push the boundaries of Industry 4.0 visualization and TVET/STEM training.</p>\n                                <p>Aug 2025 - Dec 2025</p>',
    text
)

# Dynamic AI-Driven NPCs
text = re.sub(
    r'<p>Developed adaptive AI NPCs utilizing Unreal Engine 5\'s State Tree and integrating Large Language Models \(LLM\) via API for real-time dynamic conversations</p>\s*<p>Mar 2025 - Jan 2026</p>',
    r'<p>Next-gen adaptive NPCs built with UE5 State Trees and real-time LLM integration. Pushing the limits of dynamic, player-driven conversations.</p>\n                                <p>Mar 2025 - Jan 2026</p>',
    text
)

# Hellbound Heir
text = re.sub(
    r'<p>Developed a 3D soul-like game prototype using Unreal Engine 5 featuring smooth combo combat and fluid locomotion.</p>\s*<p>Nov 2024 - Jan 2025</p>',
    r'<p>A high-octane 3D souls-like prototype in UE5 featuring relentless combo combat, fluid locomotion, and intense boss battles.</p>\n                                <p>Nov 2024 - Jan 2025</p>',
    text
)

# Perlin Noise Visualization
text = re.sub(
    r'<p>An interactive 3D web experience visualizing Perlin noise using Three.js, responsive to real-time audio controls and customizable terrain generation.</p>\s*<p>Jan 2025</p>',
    r'<p>A hypnotic, interactive 3D web experience that visualizes Perlin noise with Three.js, reacting dynamically to real-time audio.</p>\n                                <p>Jan 2025</p>',
    text
)

# Cyber Ninja
text = re.sub(
    r'<p>A fast-paced 2D action platformer with intense combat mechanics, developed using the Godot Engine.</p>\s*<p>Oct 2024</p>',
    r'<p>A lightning-fast 2D action platformer with razor-sharp combat mechanics. Built completely in the Godot Engine.</p>\n                                <p>Oct 2024</p>',
    text
)

# C++/SFML Blackjack
text = re.sub(
    r'<p>Developed a classic Blackjack game using C\+\+ and SFML, featuring a graphical user interface and robust game logic.</p>\s*<p>May 2023</p>',
    r'<p>A sleek, classic Blackjack game built entirely in C++ and SFML. Features a custom GUI and rock-solid game logic.</p>\n                                <p>May 2023</p>',
    text
)

with open('home/work.html', 'w', encoding='utf-8') as f:
    f.write(text)
