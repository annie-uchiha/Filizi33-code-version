/*document
  .getElementById("loginButton")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default behavior of the link
    document.getElementById("modal").style.display = "block";
    document.getElementById("overlay").style.display = "block";
  });

document.querySelector(".close").addEventListener("click", function () {
  document.getElementById("modal").style.display = "none";
  document.getElementById("overlay").style.display = "none";
});

document
  .getElementById("registerLink")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default behavior of the link
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("registerForm").style.display = "block";
    document.getElementById("loginInstead").style.display = "block";
  });

document
  .getElementById("loginInsteadLink")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default behavior of the link
    document.getElementById("registerForm").style.display = "none";
    document.getElementById("loginForm").style.display = "block";
    document.getElementById("loginInstead").style.display = "none";
  });

// Add event listener for registration form submission
document
  .getElementById("registerButton")
  .addEventListener("click", function (event) {
    event.preventDefault();
    // Logic for registration
    // After successful registration, redirect to the member profile page - will add functionality
  });

// Add event listener for login form submission
document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    // Logic for login
    // After successful login, redirect to the member profile page - will add functionality
  });

// Check if the user is already logged in
if (localStorage.getItem("username")) {
  window.location.href = "main.html";
}*/

function handleLogin(event) {
  event.preventDefault();
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  localStorage.setItem("email", email);
  localStorage.setItem("password", password);

  sessionStorage.setItem("email", email);
  sessionStorage.setItem("password", password);
}

document.getElementById("loginForm").addEventListener("submit", handleLogin);

function openModal() {
  document.getElementById("modal").style.display = "block";
  document.getElementById("overlay").style.display = "block";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
  document.getElementById("overlay").style.display = "none";
}

function switchToRegisterForm() {
  document.getElementById("loginForm").style.display = "none";
  document.getElementById("registerForm").style.display = "block";
  document.getElementById("loginInstead").style.display = "block";
}

function switchToLoginForm() {
  document.getElementById("registerForm").style.display = "none";
  document.getElementById("loginForm").style.display = "block";
  document.getElementById("loginInstead").style.display = "none";
}

function handleRegistration(event) {
  event.preventDefault();
}

document
  .getElementById("loginButton")
  .addEventListener("click", function (event) {
    event.preventDefault();
    openModal();
  });

document.querySelector(".close").addEventListener("click", closeModal);

document
  .getElementById("registerLink")
  .addEventListener("click", function (event) {
    event.preventDefault();
    switchToRegisterForm();
  });

document
  .getElementById("loginInsteadLink")
  .addEventListener("click", function (event) {
    event.preventDefault();
    switchToLoginForm();
  });
