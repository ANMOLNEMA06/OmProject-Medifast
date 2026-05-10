// =========================
// SIGNUP PAGE FUNCTIONALITY
// =========================

// Handle form submission
document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('signupEmail').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const password = document.getElementById('signupPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const agreeTerms = document.getElementById('agreeTerms').checked;

    // Validate form
    if (!firstName || !lastName) {
        showAlert('Please enter your first and last name', 'error');
        return;
    }

    if (!validateEmail(email)) {
        showAlert('Please enter a valid email address', 'error');
        return;
    }

    if (!validatePhone(phone)) {
        showAlert('Please enter a valid phone number', 'error');
        return;
    }

    if (!validatePassword(password)) {
        showAlert('Password must contain at least 8 characters, 1 uppercase, 1 lowercase, and 1 number', 'error');
        return;
    }

    if (password !== confirmPassword) {
        showAlert('Passwords do not match', 'error');
        return;
    }

    if (!agreeTerms) {
        showAlert('Please agree to Terms & Conditions and Privacy Policy', 'error');
        return;
    }

    // Simulate signup process
    showAlert('Creating your account...', 'info');
    
    // Here you would typically send data to your backend
    console.log('Signup data:', {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone,
        password: password
    });

    // Simulate successful signup after 2 seconds
    setTimeout(() => {
        showAlert('Account created successfully! Redirecting to login...', 'success');
        localStorage.setItem('newUser', email);

        // Redirect to login page after 2 seconds
        setTimeout(() => {
            window.location.href = 'login.html';
        }, 2000);
    }, 2000);
});

// Password strength checker
document.getElementById('signupPassword').addEventListener('input', function() {
    const password = this.value;
    
    const hasLength = password.length >= 8;
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);

    updateRequirement('req-length', hasLength);
    updateRequirement('req-uppercase', hasUppercase);
    updateRequirement('req-lowercase', hasLowercase);
    updateRequirement('req-number', hasNumber);
});

// Update requirement status
function updateRequirement(elementId, isValid) {
    const element = document.getElementById(elementId);
    if (isValid) {
        element.classList.add('active');
        element.textContent = '✓';
    } else {
        element.classList.remove('active');
        element.textContent = '✓';
    }
}

// Handle Google Signup
document.getElementById('googleSignup').addEventListener('click', function(e) {
    e.preventDefault();
    showAlert('Google signup feature coming soon!', 'info');
    // Here you would implement Google OAuth
});

// Validate email format
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Validate phone number (basic validation)
function validatePhone(phone) {
    const regex = /^[0-9]{10}$/;
    return regex.test(phone.replace(/\D/g, ''));
}

// Validate password strength
function validatePassword(password) {
    const hasLength = password.length >= 8;
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);

    return hasLength && hasUppercase && hasLowercase && hasNumber;
}

// Show alert messages
function showAlert(message, type) {
    // Remove existing alert if any
    const existingAlert = document.querySelector('.alert-message');
    if (existingAlert) {
        existingAlert.remove();
    }

    // Create alert element
    const alert = document.createElement('div');
    alert.className = `alert-message alert-${type}`;
    alert.textContent = message;
    alert.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 8px;
        font-weight: 600;
        z-index: 1000;
        animation: slideIn 0.3s ease-out;
    `;

    // Set background color based on type
    if (type === 'error') {
        alert.style.background = '#f8d7da';
        alert.style.color = '#721c24';
        alert.style.border = '1px solid #f5c6cb';
    } else if (type === 'success') {
        alert.style.background = '#d4edda';
        alert.style.color = '#155724';
        alert.style.border = '1px solid #c3e6cb';
    } else {
        alert.style.background = '#d1ecf1';
        alert.style.color = '#0c5460';
        alert.style.border = '1px solid #bee5eb';
    }

    document.body.appendChild(alert);

    // Remove alert after 4 seconds
    setTimeout(() => {
        alert.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => alert.remove(), 300);
    }, 4000);
}

// Add slide animation styles
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
