document
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

document
  .getElementById("registerButton")
  .addEventListener("click", function (event) {
    event.preventDefault();
    // Logic for registration
    // After successful registration, you might want to redirect to the member profile page - will add functionality
  });

document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    // Logic for login
    // After successful login, you might want to redirect to the member profile page - will add functionality
  });
