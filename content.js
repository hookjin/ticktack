// Move the video to the center and enlarge it
const videoContainer = document.querySelector('.video-container-class'); // Replace with the actual class
if (videoContainer) {
  videoContainer.style.position = 'relative';
  videoContainer.style.width = '70%'; // Adjust width as needed
  videoContainer.style.margin = '0 auto';
}

// Hide unnecessary elements like sidebars
const sidebar = document.querySelector('.sidebar-class'); // Replace with the actual class
if (sidebar) {
  sidebar.style.display = 'none';
}

// Adjust the position of other UI elements
const likeButton = document.querySelector('.like-button-class'); // Replace with the actual class
if (likeButton) {
  likeButton.style.position = 'absolute';
  likeButton.style.bottom = '20px';
  likeButton.style.right = '20px';
}
