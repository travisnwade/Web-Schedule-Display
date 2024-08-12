function createFallingFlower() {
    const flower = document.createElement('img');
    flower.src = 'images/flower.svg'; // Flower for spring
    flower.className = 'falling-leaf'; // Reuse the same class for simplicity

    // Randomize the starting position across the entire width of the viewport
    const startX = Math.random() * (window.innerWidth - 40); 
    flower.style.left = `${startX}px`;

    document.body.appendChild(flower);

    // Remove the flower after the animation ends
    setTimeout(() => {
        flower.remove();
    }, 4000); // Match the duration of the animation
}

// Create a falling flower every 4 seconds
setInterval(createFallingFlower, 1000);
