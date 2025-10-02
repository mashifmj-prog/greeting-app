function updateGreeting() {
  const now = new Date();
  const hour = now.getHours();
  let greeting, icon;

  if (hour >= 5 && hour < 12) {
    greeting = "Good Morning";
    icon = "🌅"; // sunrise
    document.body.className = "morning";
  } else if (hour >= 12 && hour < 15) {
    greeting = "Good Day";
    icon = "☀️"; // sun
    document.body.className = "day";
  } else if (hour >= 15 && hour < 18) {
    greeting = "Good Afternoon";
    icon = "🌤️"; // afternoon
    document.body.className = "afternoon";
  } else if (hour >= 18 && hour < 22) {
    greeting = "Good Evening";
    icon = "🌇"; // sunset
    document.body.className = "evening";
  } else {
    greeting = "Good Night";
    icon = "🌙"; // moon
    document.body.className = "night";
  }

  document.getElementById("icon").innerText = icon;
  document.getElementById("text").innerText = greeting;;
}

function updateClock() {
  const now = new Date();
  const timeString = now.toLocaleTimeString();
  document.getElementById("clock").innerText = timeString;
}

// Run both functions when page loads
updateGreeting();
updateClock();

// Keep updating every second
setInterval(() => {
  updateClock();
  updateGreeting(); // ensures greeting updates automatically at the right hour
}, 1000);

