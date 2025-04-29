/*
💡 EVENT HANDLING IN MODERN JAVASCRIPT

Old Way (Not Recommended):
You *can* attach an event directly in HTML like this:
  <button onclick="handleClick()">1</button>
But this approach mixes HTML and JavaScript, which is less clean and flexible.

✅ Modern Way (Recommended):
Use JavaScript to add event listeners. This keeps HTML and JS separate, improves readability, and allows you to attach multiple listeners or remove them dynamically.

Example:
  const button = document.querySelector('button');
  button.addEventListener('click', handleClick);

Why use addEventListener?
- Cleaner and more maintainable
- Supports multiple event types and callbacks
- Preferred in modern development and frameworks

Use this pattern as your go-to method for handling events in JavaScript.
*/
 
const ratingButtons = document.querySelectorAll(".rating-numbers");
const submitButton = document.querySelector(".submit-button");
const ratingContainer = document.querySelector(".rating-container");
const thankYouContainer = document.querySelector(".thank-you-container");
const selectionButton = document.querySelector(".selection-button");

let selectedRating = null; // This will store the number user clicks

ratingButtons.forEach((button) => {
  button.addEventListener("click", () => {
    selectedRating = button.textContent;

    // This removes highlight from all buttons first
    ratingButtons.forEach((btn) => btn.classList.remove("selected"));

    // Adds highlight to the clicked one
    button.classList.add("selected");

    console.log("You selected:", selectedRating);
  });
});

submitButton.addEventListener("click", () => {
  if (selectedRating) {
    // Inserts selected rating into thank-you message
    selectionButton.textContent = `You selected ${selectedRating} out of 5`;

    // Instead of just hiding, this replaces the whole wrapper content
    const wrapper = document.querySelector(".wrapper");
    wrapper.innerHTML = `
      <div class="thank-you-container">
        <img src="images/illustration-thank-you.svg" alt="thank you image" />
        <button class="selection-button">
          You selected ${selectedRating} out of 5
        </button>
        <h1>Thank you!</h1>
        <p>
          We appreciate you taking the time to give a rating. If you ever need
          more support, don’t hesitate to get in touch!
        </p>
      </div>
    `;
  } else {
    alert("Please select a rating before submitting.");
  }
});
