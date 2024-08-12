function createFallingSun() {
    const sun = document.createElement('img');
    sun.src = 'images/sun.svg'; // Sun for summer
    sun.className = 'falling-leaf'; // Reuse the same class for simplicity

    // Randomize the starting position across the entire width of the viewport
    const startX = Math.random() * (window.innerWidth - 50); 
    sun.style.left = `${startX}px`;

    document.body.appendChild(sun);

    // Remove the sun after the animation ends
    setTimeout(() => {
        sun.remove();
    }, 4000); // Match the duration of the animation
}

// Create a falling sun every 4 seconds
setInterval(createFallingSun, 1000);
