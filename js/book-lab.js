document.addEventListener("DOMContentLoaded", function () {
    console.log("Book Lab Test page loaded");

const modal = document.getElementById("bookingModal");
    const closeBtn = document.querySelector(".close");
    const closeModalBtn = document.getElementById("closeModalBtn");

    // Defensive guards
    if (!modal) {
        console.warn("Book Lab Tests: booking modal missing");
        return;
    }
    const selectedServiceEl = document.getElementById("selectedService");
    const bookTestBtns = document.querySelectorAll(".book-test-btn");

    // Add click listeners to all "Book Now" buttons
    bookTestBtns.forEach((btn) => {
        btn.addEventListener("click", function () {
            const testType = this.getAttribute("data-test");
            selectedServiceEl.textContent = `You selected: ${testType}`;
            modal.style.display = "block";
        });
    });

    // Close modal functions
    if (closeBtn) {
        closeBtn.addEventListener("click", function () {
            modal.style.display = "none";
        });
    }

    if (closeModalBtn) {
        closeModalBtn.addEventListener("click", function () {
            modal.style.display = "none";
        });
    }

    // Close modal when clicking outside
    window.addEventListener("click", function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
});
