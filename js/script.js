function closeLoginModal() {
    const loginModal = document.getElementById("loginModal");
    if (loginModal) {
        loginModal.style.display = "none";
        document.body.style.overflow = "auto";
    }
}

function showOtpLogin() {
    const otpSection = document.getElementById("otpSection");
    const loginForm = document.getElementById("loginForm");
    if (otpSection && loginForm) {
        otpSection.style.display = "block";
        loginForm.style.display = "none";
    }
}

function showFormLogin() {
    const otpSection = document.getElementById("otpSection");
    const loginForm = document.getElementById("loginForm");
    if (otpSection && loginForm) {
        otpSection.style.display = "none";
        loginForm.style.display = "block";
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const loginBtn = document.getElementById("toggle-login");
    const loginModal = document.getElementById("loginModal");
    const verifyOtp = document.getElementById("verify-otp");
    const loginForm = document.getElementById("loginForm");
    const body = document.body;

    // Open login modal
    if (loginBtn && loginModal) {
        loginBtn.addEventListener("click", function () {
            loginModal.style.display = "flex";
            body.style.overflow = "hidden";
        });
    }

    // OTP verification
    if (verifyOtp) {
        verifyOtp.addEventListener("click", function () {
            alert("OTP Verified Successfully!");
            closeLoginModal();
        });
    }

    // Form login submission
    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();
            alert("Login Successful!");
            closeLoginModal();
        });
    }



    // Location detection using geolocation
    const detectBtn = document.getElementById("detect-location");
    const locationInput = document.getElementById("location-input");

    if (detectBtn && locationInput) {
        detectBtn.addEventListener("click", function () {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(showPosition, showError);
            } else {
                alert("Geolocation is not supported by this browser.");
            }
        });

        function showPosition(position) {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;

            fetch(`https://geocode.xyz/${lat},${lon}?json=1`)
                .then((response) => response.json())
                .then((data) => {
                    if (data.city) {
                        locationInput.value = data.city;
                    } else {
                        alert("Unable to detect location");
                    }
                })
                .catch(() => alert("Error fetching location details"));
        }

        function showError(error) {
            switch (error.code) {
                case error.PERMISSION_DENIED:
                    alert("User denied the request for Geolocation.");
                    break;
                case error.POSITION_UNAVAILABLE:
                    alert("Location information is unavailable.");
                    break;
                case error.TIMEOUT:
                    alert("The request to get user location timed out.");
                    break;
                default:
                    alert("An unknown error occurred.");
                    break;
            }
        }
    }
});
