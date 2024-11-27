const form = document.getElementById("myForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const isValid = validateForm();

  if (isValid) {
    console.log("Form submitted succesfully!");
    form.reset();
nameError.textContent = "";
    emailError.textContent = "";
  }
}

function validateForm() {
  const nameValue = nameInput.value.trim();
  const emailValue = emailInput.value.trim();
  let isValid = true;

  if (nameValue === "") {
    nameError.textContent = "Name is required!";
    isValid = false;
  } else {
    console.log("No error with name.");
  }
if (emailValue === "") {
    emailError.textContent = "Email is required!";
  } else if (!isValidEmail(emailValue)) {
    emailError.textContent = "Invalid email format";
    isValid = false;
  } else {
    console.log("No error with email.");
  }
function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }

  return isValid;
}