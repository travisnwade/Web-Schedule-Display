function createFallingSnowflake() {
    const snowflake = document.createElement('img');
    snowflake.src = 'images/snowflake.svg'; // Snowflake for winter
    snowflake.className = 'falling-leaf'; // Reuse the same class for simplicity

    // Randomize the starting position across the entire width of the viewport
    const startX = Math.random() * (window.innerWidth - 40); 
    snowflake.style.left = `${startX}px`;

    document.body.appendChild(snowflake);

    // Remove the snowflake after the animation ends
    setTimeout(() => {
        snowflake.remove();
    }, 4000); // Match the duration of the animation
}

// Create a falling snowflake every 4 seconds
setInterval(createFallingSnowflake, 1000);  