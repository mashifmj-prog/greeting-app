// -------------------- Greeting App --------------------

// Store user name
let userName = "";
if (localStorage.getItem("userName")) {
  userName = localStorage.getItem("userName");
  document.getElementById("nameInput").value = userName;
  displayGreeting(userName); // Display greeting if name exists
}

// Track background
let currentBackground = "";

// Function to display greeting
function displayGreeting(name) {
  const greetingElement = document.getElementById("greeting");
  if (greetingElement) {
    greetingElement.textContent = `Hello, ${name}!`;
  }
}

// Event listener for name input
document.getElementById("nameInput").addEventListener("input", function () {
  const name = this.value.trim();
  if (name) {
    localStorage.setItem("userName", name);
    displayGreeting(name);
  } else {
    localStorage.removeItem("userName");
    document.getElementById("greeting").textContent = "";
  }
});
