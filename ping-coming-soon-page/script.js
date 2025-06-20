// Get the button and email input elements
const button = document.querySelector("button");
const emailInput = document.querySelector('input[type="email"]');
const errorMessage = document.querySelector(".error-message");

button.addEventListener("click", function (event) {
  event.preventDefault();
  const email = emailInput.value;

if (!email.includes("@") || !email.includes(".")) {
    emailInput.classList.add("error");
    errorMessage.style.display = "block";
  } else {
    emailInput.classList.remove("error");
    errorMessage.style.display = "none";
  }
});
