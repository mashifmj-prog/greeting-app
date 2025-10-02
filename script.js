// Store user name
let userName = "";

// Load name from local storage on page load
if (localStorage.getItem("userName")) {
  userName = localStorage.getItem("userName");
  document.getElementById("nameInput").value = userName;
}

// Track current background class
let currentBackground = "";

// Update greeting function
function updateGreeting() {
  const now = new Date();
  const hour = now.getHours();
  let greeting, icon, verse, newBackground;

  if (hour >= 5 && hour < 12) {
    greeting = "Good Morning";
    icon = "🌅";
    verse = "Lamentations 3:22-23 - 'Because of the Lord’s great love we are not consumed, for his compassions never fail. They are new every morning; great is your faithfulness.'";
    newBackground = "morning";
  } else if (hour >= 12 && hour < 15) {
    greeting = "Good Day";
    icon = "☀️";
    verse = "Psalm 118:24 - 'This is the day the Lord has made; we will rejoice and be glad in it.'";
    newBackground = "day";
  } else if (hour >= 15 && hour < 18) {
    greeting = "Good Afternoon";
    icon = "🌤️";
    verse = "Isaiah 40:31 - 'But those who hope in the Lord will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint.'";
    newBackground = "afternoon";
  } else if (hour >= 18 && hour < 22) {
    greeting = "Good Evening";
    icon = "🌇";
    verse = "Psalm 141:2 - 'May my prayer be set before you like incense; may the lifting up of my hands be like the evening sacrifice.'";
    newBackground = "evening";
  } else {
    greeting = "Good Night";
    icon = "🌙";
    verse = "Psalm 4:8 - 'In peace I will lie down and sleep, for you alone, Lord, make me dwell in safety.'";
    newBackground = "night";
  }

  // Update background only if it changed
  if (currentBackground !== newBackground) {
    document.body.className = newBackground;
    currentBackground = newBackground;
  }

  const displayGreeting = userName ? `${greeting}, ${userName}!` : greeting;

  document.getElementById("icon").innerText = icon;
  document.getElementById("text").innerText = displayGreeting;
  document.getElementById("verse").innerText = verse;
}

// Update clock function
function updateClock() {
  const now = new Date();
  const timeString = now.toLocaleTimeString();
  document.getElementById("clock").innerText = timeString;
}

// Listen to name input changes
const nameInput = document.getElementById("nameInput");
nameInput.addEventListener("input", () => {
  userName = nameInput.value.trim();
  localStorage.setItem("userName", userName); // Save name persistently
  updateGreeting();
});

// Initialize
updateGreeting();
updateClock();

// Keep updating every second
setInterval(() => {
  updateClock();
  updateGreeting();
}, 1000);
