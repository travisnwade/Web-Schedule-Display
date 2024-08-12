function getSeason() {
    const date = new Date();
    const month = date.getMonth() + 1; // Get current month (0-based index, so +1)

    if (month >= 3 && month <= 5) {
        return 'spring';
    } else if (month >= 6 && month <= 8) {
        return 'summer';
    } else if (month >= 9 && month <= 11) {
        return 'fall';
    } else {
        return 'winter';
    }
}

function loadSeasonalStylesheet() {
    const season = getSeason();
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = `css/${season}.css`; // Path to your seasonal stylesheets
    document.head.appendChild(link);
}

function loadSeasonalScript() {
    const season = getSeason();
    const script = document.createElement('script');
    script.src = `js/${season}.js`; // Path to your seasonal JavaScript files
    document.body.appendChild(script);
}

function loadSeasonalVideo() {
    const season = getSeason();

    // Create the video element
    const video = document.createElement('video');
    video.id = `${season}-video`;
    video.src = `videos/${season}.mp4`; // Path to your seasonal video files
    video.autoplay = true;
    video.muted = true;
    video.loop = true;
    video.style.position = 'fixed';
    video.style.top = '0';
    video.style.left = '0';
    video.style.width = '100%';
    video.style.height = '100%';
    video.style.objectFit = 'cover';
    video.style.zIndex = '-2'; // Ensure it stays in the background

    // Create the black overlay
    const overlay = document.createElement('div');
    overlay.id = `${season}-overlay`;
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.7)'; // Black with 70% opacity
    overlay.style.zIndex = '-1'; // Ensure it stays above the video but below content

    // Append the video and overlay to the body
    document.body.appendChild(video);
    document.body.appendChild(overlay);
}

document.addEventListener('DOMContentLoaded', function() {
    loadSeasonalStylesheet();
    loadSeasonalScript();
    loadSeasonalVideo();
});
