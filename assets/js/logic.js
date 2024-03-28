document.addEventListener('DOMContentLoaded', function() {
  const submitButton = document.getElementById("sub-btn");
  if (submitButton) {
      submitButton.onclick = function(event) {
          event.preventDefault();

          const username = document.querySelector('#username').value;
          const blogTitle = document.querySelector('#blog-title').value;
          const blogContent = document.querySelector('#blog-content').value;

          if (username === '' || blogTitle === '' || blogContent === '') {
              alert('All fields must be filled out');
              return;
          }

          let existingPosts = localStorage.getItem('blogPosts') ? JSON.parse(localStorage.getItem('blogPosts')) : [];
          existingPosts.push({
              username: username,
              title: blogTitle,
              content: blogContent
          });
          localStorage.setItem('blogPosts', JSON.stringify(existingPosts));

          window.location.href = "blog.html";
      };
  }
});
