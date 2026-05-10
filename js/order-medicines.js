document.addEventListener("DOMContentLoaded", function () {
    console.log("Order Medicines Page Loaded");

const orderNowBtn = document.getElementById("orderNowBtn");
    const modal = document.getElementById("bookingModal");
    const closeBtn = document.querySelector(".close");
    const closeModalBtn = document.getElementById("closeModalBtn");

    // Defensive guards
    if (!modal || !orderNowBtn) {
        console.warn("Order Medicines: missing order button or modal");
        return;
    }

    if (orderNowBtn) {
        orderNowBtn.addEventListener("click", function () {
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
