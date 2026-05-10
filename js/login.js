// =========================
// LOGIN PAGE FUNCTIONALITY
// =========================

// Handle form submission
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const rememberMe = document.getElementById('rememberMe').checked;

    // Validate email
    if (!validateEmail(email)) {
        showAlert('Please enter a valid email address', 'error');
        return;
    }

    // Validate password
    if (password.length < 6) {
        showAlert('Password must be at least 6 characters long', 'error');
        return;
    }

    // Simulate login process
    showAlert('Logging in...', 'info');
    
    // Here you would typically send data to your backend
    console.log('Login data:', {
        email: email,
        password: password,
        rememberMe: rememberMe
    });

    // Simulate successful login after 1.5 seconds
    setTimeout(() => {
        showAlert('Login successful! Redirecting...', 'success');
        localStorage.setItem('userEmail', email);
        
        if (rememberMe) {
            localStorage.setItem('rememberMe', 'true');
            localStorage.setItem('userEmail', email);
        }

        // Redirect to home page after 2 seconds
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 2000);
    }, 1500);
});

// Handle Google Login
document.getElementById('googleLogin').addEventListener('click', function(e) {
    e.preventDefault();
    showAlert('Google login feature coming soon!', 'info');
    // Here you would implement Google OAuth
});

// Validate email format
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
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

// Pre-fill email if user had "Remember Me" enabled
window.addEventListener('load', function() {
    if (localStorage.getItem('rememberMe') === 'true') {
        const savedEmail = localStorage.getItem('userEmail');
        if (savedEmail) {
            document.getElementById('email').value = savedEmail;
            document.getElementById('rememberMe').checked = true;
        }
    }
});
