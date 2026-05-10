// =========================
// CONTACT FORM HANDLING
// =========================

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    // Form submission handler
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form values
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value.trim();

            // Validation
            if (!name || !email || !subject || !message) {
                showMessage('Please fill in all required fields.', 'error');
                return;
            }

            // Email validation
            if (!isValidEmail(email)) {
                showMessage('Please enter a valid email address.', 'error');
                return;
            }

            // Simulate form submission
            // In a real application, you would send this data to a backend server
            console.log('Form Data:', {
                name,
                email,
                phone,
                subject,
                message,
                timestamp: new Date().toISOString()
            });

            // Show success message
            showMessage('Message sent successfully! We will get back to you soon.', 'success');

            // Reset form
            contactForm.reset();

            // Hide message after 5 seconds
            setTimeout(() => {
                formMessage.style.display = 'none';
            }, 5000);
        });
    }

    // Email validation helper
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Show message helper
    function showMessage(text, type) {
        formMessage.textContent = text;
        formMessage.className = `form-message ${type}`;
        formMessage.style.display = 'block';
    }
});

// =========================
// FAQ ACCORDION FUNCTIONALITY
// =========================

document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');

        question.addEventListener('click', function() {
            // Close other open items
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });

            // Toggle current item
            item.classList.toggle('active');
        });
    });

    // Optional: Open first FAQ item by default
    if (faqItems.length > 0) {
        faqItems[0].classList.add('active');
    }
});

// =========================
// LOGIN BUTTON FUNCTIONALITY
// =========================

document.addEventListener('DOMContentLoaded', function() {
    const toggleLoginBtn = document.getElementById('toggle-login');
    
    if (toggleLoginBtn) {
        toggleLoginBtn.addEventListener('click', function() {
            alert('Login functionality would be implemented here.');
            // You can redirect to a login page or open a login modal
        });
    }
});
