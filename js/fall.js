function createFallingLeaf() {
    const leaf = document.createElement('img');
    leaf.src = 'images/fall-leaf.svg';
    leaf.className = 'falling-leaf';

    // Randomize the starting position across the entire width of the viewport
    const startX = Math.random() * (window.innerWidth - 80); 
    leaf.style.left = `${startX}px`;

    document.body.appendChild(leaf);

    // Remove the leaf after the animation ends
    setTimeout(() => {
        leaf.remove();
    }, 4000); // Match the duration of the animation
}

// Create a falling leaf every 4 seconds
setInterval(createFallingLeaf, 1000);