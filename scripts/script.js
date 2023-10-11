document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form");

  form.addEventListener("submit", function (event) {
    let isValid = true;

    // Full Name Validation
    const fullNameInput = document.getElementById("fullname");
    const fullNameError = document.getElementById("fullname-error");
    if (fullNameInput.value.trim() === "") {
      fullNameError.textContent = "Please enter your full name.";
      fullNameError.style.display = "block";
      isValid = false;
    } else {
      fullNameError.textContent = "";
      fullNameError.style.display = "none";
    }

    // Username Validation
    const usernameInput = document.getElementById("username");
    const usernameError = document.getElementById("username-error");
    if (usernameInput.value.trim() === "") {
      usernameError.textContent = "Please enter a username.";
      usernameError.style.display = "block";
      isValid = false;
    } else {
      usernameError.textContent = "";
      usernameError.style.display = "none";
    }

    // Email Validation
    const emailInput = document.getElementById("mail");
    const emailError = document.getElementById("mail-error");
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (emailInput.value.trim() === "") {
      emailError.textContent = "Please enter an email address.";
      emailError.style.display = "block";
      isValid = false;
    } else if (!emailPattern.test(emailInput.value)) {
      emailError.textContent = "Please enter a valid email address.";
      emailError.style.display = "block";
      isValid = false;
    } else {
      emailError.textContent = "";
      emailError.style.display = "none";
    }

    // Password Validation
    const passwordInput = document.getElementById("password");
    const passwordError = document.getElementById("password-error");
    if (passwordInput.value.length < 8) {
      passwordError.textContent =
        "Password must be at least 8 characters long.";
      passwordError.style.display = "block";
      isValid = false;
    } else {
      passwordError.textContent = "";
      passwordError.style.display = "none";
    }

    // Confirm Password Validation
    const confirmPasswordInput = document.getElementById("confirmPassword");
    const confirmPasswordError = document.getElementById(
      "confirmPassword-error"
    );
    if (confirmPasswordInput.value === "") {
      confirmPasswordError.textContent = "Please confirm your password.";
      confirmPasswordError.style.display = "block";
      isValid = false;
    } else if (confirmPasswordInput.value !== passwordInput.value) {
      confirmPasswordError.textContent = "Passwords do not match.";
      confirmPasswordError.style.display = "block";
      isValid = false;
    } else {
      confirmPasswordError.textContent = "";
      confirmPasswordError.style.display = "none";
    }

    if (!isValid) {
      event.preventDefault();
    }
  });
});
