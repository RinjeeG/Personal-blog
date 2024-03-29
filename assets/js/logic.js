// Wait until the HTML document is fully loaded before executing the script.
document.addEventListener('DOMContentLoaded', function() {
    // Attempt to retrieve the theme toggle button by its ID.
    const themeButton = document.getElementById('theme-btn');
    // Attempt to retrieve the back button by its ID.
    const backButton = document.getElementById('back-btn');

    // Check if the theme toggle button exists on the page.
    if (themeButton) {
        // Listen for click events on the theme toggle button.
        themeButton.addEventListener('click', function() {
            // Toggle the 'dark-mode' class on the body element when the button is clicked.
            document.body.classList.toggle('dark-mode');

            // Check if the body element currently has the 'dark-mode' class.
            if (document.body.classList.contains('dark-mode')) {
                // If it does, change the button text to a moon emoji indicating dark mode is active.
                themeButton.textContent = '🌙'; 
            } else {
                // If not, change the button text to a sun emoji indicating light mode is active.
                themeButton.textContent = '☀️';
            }
        });
    }

    // Check if the back button exists on the page.
    if (backButton) {
        // Listen for click events on the back button.
        backButton.addEventListener('click', function() {
            // Use the browser's history object to navigate back to the previous page when the back button is clicked.
            window.history.back();
        });  
    } 
});
