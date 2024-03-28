// On Page Load:
//   function displayPosts() {
//     - Retrieve blog posts from localStorage.
//     - Dynamically create and insert HTML elements for each post.
//     - Display username, title, and content for each post.
//   }

// blog.js
document.addEventListener('DOMContentLoaded', function() {
    const postContainer = document.getElementById('post-container');
    if (postContainer) {
        let posts = localStorage.getItem('blogPosts') ? JSON.parse(localStorage.getItem('blogPosts')) : [];

        if (posts.length === 0) {
            postContainer.innerHTML = 'No posts to display.';
            return;
        }

        posts.forEach(function(post) {
            const postDiv = document.createElement('div');
            postDiv.style.marginBottom = '20px';

            const title = document.createElement('h2');
            const content = document.createElement('p');
            const username = document.createElement('p');
            title.textContent = post.title;
            content.textContent = post.content;
            username.textContent = 'Posted by: ' + post.username;

            postDiv.appendChild(title);
            postDiv.appendChild(content);
            postDiv.appendChild(username);

            postContainer.appendChild(postDiv);
        });
    }
});

// function setupToggleAndBackButton() {
//   - Attach event listener for light/dark mode toggle.
//     - On toggle, switch page styles accordingly.
//   - Attach event listener for "Back" button.
//     - On click, redirect to index.html (landing page).
// }

// Call displayPosts() and setupToggleAndBackButton() on document ready.
