const firstName = document.querySelector(".firstName");
const lastName = document.querySelector(".lastName");
const email = document.querySelector(".email");
const textarea = document.querySelector("#textarea");
const consent = document.querySelector("#consent");
const submitBtn = document.querySelector(".submit");
const firstNameError = document.querySelector(".firstName-error");
const lastNameError = document.querySelector(".lastName-error");
const emailError = document.querySelector(".email-error");
const queryError = document.querySelector(".query-error");
const consentError = document.querySelector(".consent-error");
const formSubmitted = document.querySelector(".form-submitted");

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  let isValid = true;
  if (firstName.value.trim() === "") {
    firstNameError.classList.remove("hidden");
    firstName.classList.remove("border-mediumGrey");
    firstName.classList.add("error-border");

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
    email.value = "";
    isValid = false;
  } else {
    email.classList.remove("error-border");
    email.classList.add("success-border");
    emailError.classList.add("hidden");
  }

  // if (!input[3].checked && !input[4].checked) {
  //   queryError.classList.remove("hidden");
  //   isValid = false;
  // } else {
  //   queryError.classList.add("hidden");
  // }

  const selectedQuery = document.querySelector('input[name="query"]:checked');
  console.log(selectedQuery);
  if (!selectedQuery) {
    queryError.classList.remove("hidden");
    isValid = false;
  } else {
    queryError.classList.add("hidden");
  }

  if (textarea.value.trim() === "") {
    textarea.classList.add("error-border");
    isValid = false;
  } else {
    textarea.classList.remove("error-border");
    textarea.classList.add("success-border");
  }

  if (!consent.checked) {
    consentError.classList.remove("hidden");
    isValid = false;
  } else {
    consentError.classList.add("hidden");
  }
  if (isValid) {
    formSubmitted.classList.remove("hidden");
    // Reset form
    firstName.value = "";
    lastName.value = "";
    textarea.value = "";
    email.value = "";
    consent.checked = false;
    firstName.classList.remove("success-border");
    lastName.classList.remove("success-border");
    email.classList.remove("success-border");
    textarea.classList.remove("success-border");

    // set timeout
    setTimeout(() => {
      formSubmitted.classList.add("hidden");
    }, 5000);
  }
});
