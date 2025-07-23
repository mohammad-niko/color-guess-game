const loginForm = document.querySelector("#loginForm");
const loginUsername = document.querySelector("#loginUsername");
const loginPass = document.querySelector("#loginPass");
const loginUsernameFeedback = document.querySelector("#loginUsernameFeedback");
const loginPassFeedback = document.querySelector("#loginPassFeedback");
const loginError = document.querySelector("#loginError");
const toggleLoginPassword = document.querySelector("#toggleLoginPassword");

// Toggle Password Visibility
toggleLoginPassword.addEventListener("click", function () {
  const type =
    loginPass.getAttribute("type") === "password" ? "text" : "password";
  loginPass.setAttribute("type", type);
  this.classList.toggle("bi-eye");
  this.classList.toggle("bi-eye-slash");
});

// Real-time validation
loginUsername.addEventListener("input", function () {
  if (this.value.length < 3) {
    this.classList.add("is-invalid");
    this.classList.remove("is-valid");
    loginUsernameFeedback.textContent =
      "Please provide a valid username (at least 3 characters)";
  } else {
    this.classList.add("is-valid");
    this.classList.remove("is-invalid");
  }
});

loginPass.addEventListener("input", function () {
  if (!this.value) {
    this.classList.add("is-invalid");
    this.classList.remove("is-valid");
    loginPassFeedback.textContent = "Please provide a password";
  } else {
    this.classList.add("is-valid");
    this.classList.remove("is-invalid");
  }
});

// Form submission
loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  let isValid = true;

  // Username validation
  if (loginUsername.value.length < 3) {
    loginUsername.classList.add("is-invalid");
    loginUsername.classList.remove("is-valid");
    loginUsernameFeedback.textContent =
      "Please provide a valid username (at least 3 characters)";
    isValid = false;
  } else {
    loginUsername.classList.add("is-valid");
    loginUsername.classList.remove("is-invalid");
  }

  // Password validation
  if (!loginPass.value) {
    loginPass.classList.add("is-invalid");
    loginPass.classList.remove("is-valid");
    loginPassFeedback.textContent = "Please provide a password";
    isValid = false;
  } else {
    loginPass.classList.add("is-valid");
    loginPass.classList.remove("is-invalid");
  }

  if (!isValid || !loginForm.checkValidity()) {
    loginForm.classList.add("was-validated");
    return;
  }

  // Check credentials with API
  try {
    const response = await fetch(
      `https://687b7cb4b4bc7cfbda861109.mockapi.io/user`
    );
    const users = await response.json();

    if (!response.ok) {
      throw new Error("Failed to fetch user data");
    }

    const user = users.find(
      (user) =>
        user.username === loginUsername.value &&
        user.password === loginPass.value
    );

    if (user) {
      alert("Login successful! Welcome, " + user.username);
      window.location.href = "game.html";
    } else {
      loginError.textContent = "Invalid username or password";
    }
  } catch (error) {
    loginError.textContent = "Error: " + error.message;
  }
});
