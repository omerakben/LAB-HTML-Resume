document.addEventListener('DOMContentLoaded', function() {
    console.log("Resume loaded successfully!");
    // Add a hover effect to job titles
    const jobTitles = document.querySelectorAll('.job-title');
    jobTitles.forEach(title => {
        title.addEventListener('mouseover', () => {
            title.style.color = '#FFFFFF';
        });
        title.addEventListener('mouseout', () => {
            title.style.color = '#2C3E50'; // Match the color in CSS
        });
    });
    // Add a click event to the header
    const header = document.querySelector('header');
    header.addEventListener('click', () => {
        alert("Omer OZZY Akben");
    });
});