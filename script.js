const firstName = document.querySelector(".firstName");
const lastName = document.querySelector(".lastName");
const email = document.querySelector(".email");

const submitBtn = document.querySelector(".submit");

const firstNameError = document.querySelector(".firstName-error");
const lastNameError = document.querySelector(".lastName-error");
const emailError = document.querySelector(".email-error");

const input = document.querySelectorAll("input");

const queryError = document.querySelector(".query-error");

const textarea = document.querySelector("#textarea");
const consent = document.querySelector("#consent");
const consentError = document.querySelector(".consent-error");
const formSubmitted = document.querySelector(".form-submitted");
const formFill = document.querySelector(".form-fill");
const radioBorder = document.querySelectorAll(".radio-border");

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  let isValid = true;
  if (firstName.value.trim() === "") {
    firstNameError.classList.remove("hidden");
    firstName.classList.remove("border-mediumGrey");
    firstName.classList.add("error-border");
    firstName.innerHTML = "";
    isValid = false;
  } else {
    firstNameError.classList.add("hidden");
    firstName.classList.add("border-mediumGrey");
    firstName.classList.add("success-border");
    firstName.classList.remove("error-border");
  }

  if (lastName.value.trim() === "") {
    lastNameError.classList.remove("hidden");
    lastName.classList.remove("border-mediumGrey");
    lastName.classList.add("error-border");
    lastName.innerHTML = "";
    isValid = false;
  } else {
    lastNameError.classList.add("hidden");
    lastName.classList.add("border-mediumGrey");
    lastName.classList.add("success-border");
    lastName.classList.remove("error-border");
  }

  const emailValue = email.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+[^\s@]+$/;

  if (!emailRegex.test(emailValue)) {
    email.classList.add("error-border");
    emailError.classList.remove("hidden");
    email.setAttribute("placeholder", "email@example.com");

    emailValue.innerHTML = "";
    isValid = false;
  } else {
    email.classList.remove("error-border");
    email.classList.add("success-border");
    emailError.classList.add("hidden");
  }

  if (!input[3].checked && !input[4].checked) {
    queryError.classList.remove("hidden");
    input.innerHTML = "";
    isValid = false;
  } else {
    queryError.classList.add("hidden");
  }

  if (!textarea.value) {
    textarea.classList.add("error-border");
    isValid = false;
  } else {
    textarea.classList.remove("error-border");
    textarea.classList.add("success-border");
  }

  if (!consent.checked) {
    consentError.classList.remove("hidden");
    isValid = false;
    consent.innerHTML = "";
  } else {
    consentError.classList.add("hidden");
  }
  if (isValid) {
    formSubmitted.classList.remove("hidden");
  }
});
