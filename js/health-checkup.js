document.addEventListener("DOMContentLoaded", function () {
    console.log("Health Checkups page loaded");

const bookCheckupBtn = document.getElementById("book-health-checkup");
    const modal = document.getElementById("bookingModal");
    const closeBtn = document.querySelector(".close");
    const closeModalBtn = document.getElementById("closeModalBtn");

    // Defensive guards
    if (!modal) {
        console.warn("Health Checkup: booking modal missing");
        return;
    }

    if (bookCheckupBtn) {
        bookCheckupBtn.addEventListener("click", function () {
            modal.style.display = "block";
        });
    }

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
