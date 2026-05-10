document.addEventListener("DOMContentLoaded", function () {
    console.log("Consult Doctor page loaded");
    
const modal = document.getElementById("bookingModal");
    const closeBtn = document.querySelector(".close");
    const closeModalBtn = document.getElementById("closeModalBtn");
    const selectedServiceEl = document.getElementById("selectedService");

    // Defensive guards to prevent runtime errors that break the page flow
    if (!modal || !selectedServiceEl) {
        console.warn("Consult Doctor: booking modal elements missing");
        return;
    }
    
    // Add functionality for doctor consultation booking
    const specialties = document.querySelectorAll(".specialty");
    specialties.forEach((specialty) => {
        specialty.style.cursor = "pointer";
        specialty.addEventListener("click", function () {
            const specialtyName = specialty.querySelector("p").textContent;
            selectedServiceEl.textContent = `You selected: ${specialtyName}`;
            modal.style.display = "block";
        });
        
        // Hover effect
        specialty.addEventListener("mouseenter", function() {
            this.style.transform = "translateY(-5px)";
        });
        
        specialty.addEventListener("mouseleave", function() {
            this.style.transform = "translateY(0)";
        });
    });
    
    // Close modal functions
    closeBtn.addEventListener("click", function () {
        modal.style.display = "none";
    });
    
    closeModalBtn.addEventListener("click", function () {
        modal.style.display = "none";
    });
    
    // Close modal when clicking outside
    window.addEventListener("click", function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
});
