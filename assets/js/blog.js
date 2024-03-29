
// Wait for the DOM to fully load before executing the script.
document.addEventListener('DOMContentLoaded', function() {
    // Attempt to find an element with the ID 'post-container' on the page.
    const postContainer = document.getElementById('post-container');

    // Check if the 'post-container' element exists to avoid errors.
    if (postContainer) {
        // Retrieve blog posts from localStorage. If not found, default to an empty array.
        let posts = localStorage.getItem('blogPosts') ? JSON.parse(localStorage.getItem('blogPosts')) : [];

        // Iterate over each post in the 'posts' array.
        posts.forEach(function(post) {
            // Create a new div element to hold the individual post details.
            const postDiv = document.createElement('div');
            postDiv.style.marginBottom = '20px'; // Add some styling to separate posts.

            // Create a new h2 element for the post's title.
            const title = document.createElement('h2');
            // Create a new paragraph element for the post's content.
            const content = document.createElement('p');
            // Create a new paragraph element for the author's username.
            const username = document.createElement('p');

            // Set the text content of the title, content, and username elements to the respective values from the current post object.
            title.textContent = post.title;
            content.textContent = post.content;
            username.textContent = 'Posted by: ' + post.username;

            // Append the title, content, and username elements as children of the postDiv element.
            postDiv.appendChild(title);
            postDiv.appendChild(content);
            postDiv.appendChild(username);

            // Append the postDiv element as a child of the 'post-container' element, effectively displaying the post on the page.
            postContainer.appendChild(postDiv);
        });
    }
});
