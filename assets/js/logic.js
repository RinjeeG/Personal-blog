// On Document Ready:
//   - Check if on landing page or posts page and execute respective logic.

// Form Submission:
//   function handleFormSubmission(event) {
//     - Prevent default form submission behavior.
//     - Validate input fields for username, title, and content.
//     - If valid, save blog post data to localStorage.
//     - Redirect to blog.html (posts page).
//     - If not valid, display message prompting to complete the form.
//   }
const blogEl = document.getElementsById("#blog-form");
const nameEl = document.getElementsById("#username");
const titleEl = document.getElementsById("#blog-title");
const contentEl = document.getElementsById("#blog-content");
const subEl = document.getElementsById("#sub-btn");


function saveBlog(event) {
  localStorage.setItem(nameEl,"#username",event.target.value);
  localStorage.setItem(nameEl,"#blog-title",event.target.value);
  localStorage.setItem(nameEl,"#blog-content",event.target.value);
  return;
}

fun
// Page Initialization:
//   function initializePage() {
//     - Determine if on index.html or blog.html.
//     - Call respective functions to setup page (e.g., displayPosts for blog.html).
//   }

// Attach event listeners to form submission.
