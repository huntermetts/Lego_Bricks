// Builds initial form stated in domBuilder.js
domBuilder.appendInputForm();

// Targets the "Save Lego Creation" button and assigns it to "legoBtn"
let legoBtn = document.querySelector(".lego__save");

// Adds an event listener to the lego button so that when the button is clicked, the function "handleFormSubmission" from eventListener.js
legoBtn.addEventListener("click", eventListeners.handleFormSubmission);
