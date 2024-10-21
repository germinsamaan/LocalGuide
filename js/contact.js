document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the default form submission behavior

    // Display the success message
    document.getElementById('successMessage').style.display = 'block';

    // // Optionally, reset the form fields
    document.getElementById('contactForm').reset();

    // Hide the success message after a few seconds (optional)
    setTimeout(function() {
        document.getElementById('successMessage').style.display = 'none';
    }, 20000); // Hides after seconds
});