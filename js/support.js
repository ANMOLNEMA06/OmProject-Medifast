function connectSupport() {
    alert("Connecting you to 24/7 Support...\nWe'll be with you shortly!");
}

document.addEventListener("DOMContentLoaded", function () {
    console.log("Support page loaded");
    const supportBtn = document.querySelector(".support-section button");
    
    if (supportBtn) {
        supportBtn.addEventListener("click", connectSupport);
    }
});
