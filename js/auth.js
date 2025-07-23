"use strict";
//ثبت نام و  ورود

// -------------------sign-up----------------------------

const signupForm = document.querySelector("#signupForm");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#pass");
const confirmPassword = document.querySelector("#confirm");
const invalidCheck = document.querySelector("#invalidCheck");
const usernameFeedback = document.querySelector("#usernameFeedback");
const emailFeedback = document.querySelector("#emailFeedback");
const passwordFeedback = document.querySelector("#passwordFeedback");
const confirmFeedback = document.querySelector("#confirmFeedback");
const signupError = document.querySelector("#signupError");
const togglePassword = document.querySelector("#togglePassword");
const toggleConfirmPassword = document.querySelector("#toggleConfirmPassword");

// Toggle Password Visibility
togglePassword.addEventListener("click", function () {
  const type =
    password.getAttribute("type") === "password" ? "text" : "password";
  password.setAttribute("type", type);
  this.classList.toggle("bi-eye");
  this.classList.toggle("bi-eye-slash");
});

toggleConfirmPassword.addEventListener("click", function () {
  const type =
    confirmPassword.getAttribute("type") === "password" ? "text" : "password";
  confirmPassword.setAttribute("type", type);
  this.classList.toggle("bi-eye");
  this.classList.toggle("bi-eye-slash");
});

// Real-time validation
username.addEventListener("input", function () {
  if (this.value.length < 3) {
    this.classList.add("is-invalid");
    this.classList.remove("is-valid");
    usernameFeedback.textContent = "Username must be at least 3 characters";
  } else {
    this.classList.add("is-valid");
    this.classList.remove("is-invalid");
  }
});

email.addEventListener("input", function () {
  if (!this.checkValidity()) {
    this.classList.add("is-invalid");
    this.classList.remove("is-valid");
    emailFeedback.textContent = "Please provide a valid email";
  } else {
    this.classList.add("is-valid");
    this.classList.remove("is-invalid");
  }
});

password.addEventListener("input", function () {
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
  if (!passwordRegex.test(this.value)) {
    this.classList.add("is-invalid");
    this.classList.remove("is-valid");
    passwordFeedback.textContent =
      "Password must be at least 8 characters, including uppercase, lowercase, and a number";
  } else {
    this.classList.add("is-valid");
    this.classList.remove("is-invalid");
  }
});

confirmPassword.addEventListener("input", function () {
  if (this.value !== password.value) {
    this.classList.add("is-invalid");
    this.classList.remove("is-valid");
    confirmFeedback.textContent = "Passwords do not match";
  } else {
    this.classList.add("is-valid");
    this.classList.remove("is-invalid");
  }
});

// Form submission
signupForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  let isValid = true;

  // Username validation
  if (username.value.length < 3) {
    username.classList.add("is-invalid");
    username.classList.remove("is-valid");
    usernameFeedback.textContent = "Username must be at least 3 characters";
    isValid = false;
  } else {
    username.classList.add("is-valid");
    username.classList.remove("is-invalid");
  }

  // Email validation
  if (!email.checkValidity()) {
    email.classList.add("is-invalid");
    email.classList.remove("is-valid");
    emailFeedback.textContent = "Please provide a valid email";
    isValid = false;
  } else {
    email.classList.add("is-valid");
    email.classList.remove("is-invalid");
  }

  // Password validation
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
  if (!passwordRegex.test(password.value)) {
    password.classList.add("is-invalid");
    password.classList.remove("is-valid");
    passwordFeedback.textContent =
      "Password must be at least 8 characters, including uppercase, lowercase, and a number";
    isValid = false;
  } else {
    password.classList.add("is-valid");
    password.classList.remove("is-invalid");
  }

  // Confirm Password validation
  if (password.value !== confirmPassword.value) {
    confirmPassword.classList.add("is-invalid");
    confirmPassword.classList.remove("is-valid");
    confirmFeedback.textContent = "Passwords do not match";
    isValid = false;
  } else {
    confirmPassword.classList.add("is-valid");
    confirmPassword.classList.remove("is-invalid");
  }

  // Checkbox validation
  if (!invalidCheck.checkValidity()) {
    invalidCheck.classList.add("is-invalid");
    isValid = false;
  } else {
    invalidCheck.classList.remove("is-invalid");
  }

  if (!isValid || !signupForm.checkValidity()) {
    signupForm.classList.add("was-validated");
    return;
  }

  // Send data to API
  try {
    const response = await fetch(
      "https://687b7cb4b4bc7cfbda861109.mockapi.io/user",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username.value,
          email: email.value,
          password: password.value,
        }),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to register user");
    }

    alert("Registration successful! Redirecting to Game page...");
    window.location.href = "game.html";
  } catch (error) {
    signupError.textContent = "Error: " + error.message;
  }
});

// ---------------------sign-in----------------------------
