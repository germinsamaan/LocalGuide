// Function to handle the scroll to the specific content section
function scrollToSection(id) {
    const element = document.getElementById(id);
    if (element) {

        // Scroll to the section smoothly
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Add event listeners to the info icons
document.getElementById("fort-info").addEventListener("click", function() {
    scrollToSection("fort-section");
});

document.getElementById("montaza-info").addEventListener("click", function() {
    scrollToSection("montaza-section");
});

document.getElementById("museum-info").addEventListener("click", function() {
    scrollToSection("museum-section");
});

document.getElementById("theater-info").addEventListener("click", function() {
    scrollToSection("theater-section");
});

document.getElementById("bibliotheca-info").addEventListener("click", function() {
    scrollToSection("bibliotheca-section");
});

document.getElementById("jewelry-info").addEventListener("click", function() {
    scrollToSection("jewelry-section");
});



