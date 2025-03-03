// Back to Top Button
const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Form Submission Handling
document.querySelector('.contact-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the form from submitting

    // Get form data
    const formData = new FormData(this);

    // Log form data to the console (for testing)
    for (let [key, value] of formData.entries()) {
        console.log(`${key}: ${value}`);
    }

    // Show a success message
    alert('Thank you for your message! We will get back to you soon.');

    // Clear the form
    this.reset();
});