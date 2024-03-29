// Wait until the entire DOM is loaded before running the script.
document.addEventListener('DOMContentLoaded', function() {
    // Attempt to get the submit button element by its ID.
    const submitButton = document.getElementById("sub-btn");

    // Check if the submit button exists to avoid null reference errors.
    if (submitButton) {
        // Assign an onclick event handler to the submit button.
        submitButton.onclick = function(event) {
            // Prevent the default form submission behavior.
            event.preventDefault();
  
            // Retrieve the values entered in the form fields.
            const username = document.querySelector('#username').value;
            const blogTitle = document.querySelector('#blog-title').value;
            const blogContent = document.querySelector('#blog-content').value;
  
            // Validate the form fields to ensure they are not empty.
            if (username === '' || blogTitle === '' || blogContent === '') {
                // Alert the user if any field is empty.
                alert('All fields must be filled out');
                return; // Exit the function if validation fails.
            }
  
            // Retrieve existing blog posts from localStorage or initialize an empty array if none exist.
            let existingPosts = localStorage.getItem('blogPosts') ? JSON.parse(localStorage.getItem('blogPosts')) : [];
            // Add the new blog post to the array of existing posts.
            existingPosts.push({
                username: username,
                title: blogTitle,
                content: blogContent
            });
            // Save the updated array of blog posts back to localStorage.
            localStorage.setItem('blogPosts', JSON.stringify(existingPosts));
  
            // Redirect the user to the blog.html page after successful submission.
            window.location.href = "blog.html";
        };
    }
});
