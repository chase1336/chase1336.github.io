const heroVideo = document.getElementById("heroVideo");  // The video element

// Array of video URLs to rotate through
const videoUrls = [
  "spaceship_.mp4",  // First video
  // Add future videos here:
  // "futureVideo2.mp4", 
  // "futureVideo3.mp4"
];

let currentIndex = 0;

// Function to change the video
function changeHeroContent() {
  currentIndex = (currentIndex + 1) % videoUrls.length;  // Rotate through the video URLs

  // Hide the video initially and update the source
  heroVideo.style.opacity = 0;  // Fade out the video
  setTimeout(() => {
    heroVideo.src = videoUrls[currentIndex];  // Update the video source
    heroVideo.style.opacity = 1;  // Fade the video in
    heroVideo.play();  // Play the new video
  }, 500);
}

// Reset the video when it's done playing
heroVideo.onended = () => {
  changeHeroContent();  // Change to the next video after the current one ends
};

// Change video every 6 seconds
setInterval(changeHeroContent, 21000);

// Start with the first video
changeHeroContent();
