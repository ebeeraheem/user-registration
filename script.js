// ONLY SATAN KNOWS WHAT THIS SCRIPT DOES

// const form = document.getElementById("form");

// form.addEventListener("submit", function (event) {
//   let isValid = true;

//   // Full Name Validation comment
//   const fullNameInput = document.getElementById("fullname");
//   const fullNameError = document.getElementById("fullname-error");
//   if (fullNameInput.value.trim() === "") {
//     fullNameError.textContent = "Please enter your full name.";
//     fullNameError.style.display = "block";
//     isValid = false;
//   } else {
//     fullNameError.textContent = "";
//     fullNameError.style.display = "none";
//   }

//   // Username Validation comment
//   const usernameInput = document.getElementById("username");
//   const usernameError = document.getElementById("username-error");
//   if (usernameInput.value.trim() === "") {
//     usernameError.textContent = "Please enter a username.";
//     usernameError.style.display = "block";
//     isValid = false;
//   } else {
//     usernameError.textContent = "";
//     usernameError.style.display = "none";
//   }

//   // Email Validation comment
//   const emailInput = document.getElementById("mail");
//   const emailError = document.getElementById("mail-error");
//   const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//   if (emailInput.value.trim() === "") {
//     emailError.textContent = "Please enter an email address.";
//     emailError.style.display = "block";
//     isValid = false;
//   } else if (!emailPattern.test(emailInput.value)) {
//     emailError.textContent = "Please enter a valid email address.";
//     emailError.style.display = "block";
//     isValid = false;
//   } else {
//     emailError.textContent = "";
//     emailError.style.display = "none";
//   }

//   // Password Validation comment
//   const passwordInput = document.getElementById("password");
//   const passwordError = document.getElementById("password-error");
//   if (passwordInput.value.length < 8) {
//     passwordError.textContent = "Password must be at least 8 characters long.";
//     passwordError.style.display = "block";
//     isValid = false;
//   } else {
//     passwordError.textContent = "";
//     passwordError.style.display = "none";
//   }

//   // Confirm Password Validation comment
//   const confirmPasswordInput = document.getElementById("confirmPassword");
//   const confirmPasswordError = document.getElementById("confirmPassword-error");
//   if (confirmPasswordInput.value === "") {
//     confirmPasswordError.textContent = "Please confirm your password.";
//     confirmPasswordError.style.display = "block";
//     isValid = false;
//   } else if (confirmPasswordInput.value !== passwordInput.value) {
//     confirmPasswordError.textContent = "Passwords do not match.";
//     confirmPasswordError.style.display = "block";
//     isValid = false;
//   } else {
//     confirmPasswordError.textContent = "";
//     confirmPasswordError.style.display = "none";
//   }

//   if (!isValid) {
//     event.preventDefault();
//   }
// });

// // THIS SCRIPT WORKS BUT DOESN'T SCROLL TO VIEW WHEN AN ERROR IS ENCOUNTERED
// const form = document.getElementById("form");

// form.addEventListener("submit", function (event) {
//   let isValid = true;

//   // Define a validation function to simplify the validation process.
//   function validateField(inputId, errorId, errorMessage, validationFunction) {
//     const input = document.getElementById(inputId);
//     const error = document.getElementById(errorId);

//     if (validationFunction(input.value)) {
//       error.textContent = "";
//       error.style.display = "none";
//     } else {
//       error.textContent = errorMessage;
//       error.style.display = "block";
//       isValid = false;
//     }
//   }

//   // Full Name Validation
//   validateField(
//     "fullname",
//     "fullname-error",
//     "Please enter your full name.",
//     (value) => value.trim() !== ""
//   );

//   // Username Validation
//   validateField(
//     "username",
//     "username-error",
//     "Please enter a username.",
//     (value) => value.trim() !== ""
//   );

//   // Email Validation
//   validateField(
//     "mail",
//     "mail-error",
//     "Please enter a valid email address.",
//     (value) => {
//       const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//       return value.trim() !== "" && emailPattern.test(value);
//     }
//   );

//   // Password Validation
//   validateField(
//     "password",
//     "password-error",
//     "Password must be at least 8 characters long.",
//     (value) => value.length >= 8
//   );

//   // Confirm Password Validation
//   validateField(
//     "confirmPassword",
//     "confirmPassword-error",
//     "Passwords do not match.",
//     (value) => value === document.getElementById("password").value
//   );

//   if (!isValid) {
//     event.preventDefault();
//   }
// });

// THIS SCRIPT IS AN ANGEL, it scrolls to top on encounetring an error
const form = document.getElementById("form");

form.addEventListener("submit", function (event) {
  let isValid = true;

  // Define a validation function to simplify the validation process.
  function validateField(inputId, errorId, errorMessage, validationFunction) {
    const input = document.getElementById(inputId);
    const error = document.getElementById(errorId);

    if (validationFunction(input.value)) {
      error.textContent = "";
      error.style.display = "none";
    } else {
      error.textContent = errorMessage;
      error.style.display = "block";
      isValid = false;

      // Set the first invalid field if it's not already set
      if (!firstInvalidField) {
        firstInvalidField = input;
      }
    }
  }

  // Initialize firstInvalidField as null
  let firstInvalidField = null;

  // Full Name Validation
  validateField(
    "fullname",
    "fullname-error",
    "Please enter your full name.",
    (value) => value.trim() !== ""
  );

  // Username Validation
  validateField(
    "username",
    "username-error",
    "Please enter a username.",
    (value) => value.trim() !== ""
  );

  // Email Validation
  validateField(
    "mail",
    "mail-error",
    "Please enter a valid email address.",
    (value) => {
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return value.trim() !== "" && emailPattern.test(value);
    }
  );

  // Password Validation
  validateField(
    "password",
    "password-error",
    "Password must be at least 8 characters long.",
    (value) => value.length >= 8
  );

  // Confirm Password Validation
  validateField(
    "confirmPassword",
    "confirmPassword-error",
    "Passwords do not match.",
    (value) => value === document.getElementById("password").value
  );

  if (isValid) {
    // Check if the form is valid

    // Scroll to the top of the window
    window.scrollTo({ top: 0, behavior: "smooth" });

    // Show the success card
    const successCard = document.getElementById("success-card");
    successCard.style.display = "block";

    // Set a timer to hide the success card after 3500 ms (3.5 seconds)
    setTimeout(function () {
      successCard.style.display = "none";
    }, 3500);

    // Optionally, you can reset the form or perform other actions
    form.reset();
    event.preventDefault(); // Prevent the form from submitting
  } else {
    // Scroll to the error
    document.querySelector("h2").scrollIntoView({ behavior: "smooth" });
    event.preventDefault(); // Prevent the form from submitting if it's not valid
  }
});
