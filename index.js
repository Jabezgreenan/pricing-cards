const proButton = document.getElementById("pro");
const popupOverlay = document.getElementById("popupOverlay");
const closePopupBtn = document.getElementById("closePopupBtn");
const businessButton = document.getElementById("business");
const basicButton = document.getElementById("basic");



const thankYou = document.getElementById("thank-you")


proButton.addEventListener("click", () => {
    popupOverlay.hidden = false;
    thankYou.textContent = "Thank you for choosing the Pro plan!"
});


businessButton.addEventListener("click", () => {
    popupOverlay.hidden = false;
    thankYou.textContent = "Thank you for choosing the Business plan!"
});



basicButton.addEventListener("click", () => {
    popupOverlay.hidden = false;
    thankYou.textContent = "Thank you for choosing the Basic plan!"
});

closePopupBtn.addEventListener("click", () => {
    popupOverlay.hidden = true;
});