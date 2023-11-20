var pageTitle = document.querySelector(".page-title");
var createActivityGroupTitle = document.querySelector(".create-activity-title");
var ChooseActivityGroupTitle = document.querySelector(".choose-activity-title");
var howLongTitle = document.querySelector(".how-long-title");
var confirmButton = document.querySelector(".confirm-button");
var cancelButton = document.querySelector(".cancel-button");
confirmButton.addEventListener("click", function (e) {
    e.preventDefault;
    alert("The confirm button has been clicked!");
});
cancelButton.addEventListener("click", function (e) {
    e.preventDefault;
    alert("The cancel button has been clicked!");
});
