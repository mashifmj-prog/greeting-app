// -------------------- Greeting App --------------------

// Store user name
let userName = "";

// Load name from local storage
if (localStorage.getItem("userName")) {
  userName = localStorage.getItem("userName");
  document.getElementById("nameInput").value = userName;
}

// Track current background class
let currentBackground = "";

// Bible verses arrays
const versesMorning = [
  "Lamentations 3:22-23 - 'The Lord’s mercies are new every morning.'",
  "Psalm 5:3 - 'In the morning, Lord, you hear my voice.'",
  "Psalm 59:16 - 'I will sing of your strength in the morning.'"
];
const versesDay = [
  "Psalm 118:24 - 'This is the day the Lord has made; rejoice and be glad.'",
  "Colossians 3:23 - 'Work heartily, as for the Lord.'",
  "Proverbs 16:3 - 'Commit your work to the Lord, and your plans will succeed.'"
];
const versesAfternoon = [
  "Isaiah 40:31 - 'Those who hope in the Lord will renew their strength.'",
  "Psalm 27:14 - 'Wait for the Lord; be strong, and let your heart take courage.'",
  "Psalm 143:8 - 'Let the morning bring me word of your unfailing love.'"
];
const versesEvening = [
  "Psalm 141:2 - 'May my prayer be set before you like incense.'",
  "Psalm 119:148 - 'My eyes stay open through the watches of the night.'",
  "Psalm 4:8 - 'In peace I will lie down and sleep.'"
];
const versesNight = [
  "Psalm 4:8 - 'In peace I will lie down and sleep.'",
  "Psalm 127:2 - 'It is vain for you to rise up early.'",
  "Proverbs 3:24 - 'When you lie down, you will not be afraid.'"
];

// Daily motivational quotes
const dailyQuotes = [
  "Trust in the Lord with all your heart. – Proverbs 3:5",
  "Do not be anxious about anything. – Philippians 4:6",
  "I can do all things through Christ. – Philippians 4:13",
  "The Lord is my shepherd; I shall not want. – Psalm 23:1",
  "Be strong and courageous. – Joshua 1:9"
];

// Helper functions
function getRandomVerse(array) {
  const index = Math.floor(Math.random() * array.length);
  return array[index];
}
function getDailyQuote() {
  const today = new Date();
  const index = today.getDate() % dailyQuotes.length;
  return dailyQuotes[index];
}

// Update greeting, verse, and background
function updateGreeting() {
  const hour = new Date().getHours();
  let greeting, icon, verseArray, newBackground;

  if (hour >= 5 && hour < 12) {
    greeting = "Good Morning";
    icon = "🌅";
    verseArray = versesMorning;
    newBackground = "morning";
  } else if (hour >= 12 && hour < 15) {
    greeting = "Good Day";
    icon = "☀️";
    verseArray = versesDay;
    newBackground = "day";
  } else if (hour >= 15 && hour < 18) {
    greeting = "Good Afternoon";
    icon = "🌤️";
    verseArray = versesAfternoon;
    newBackground = "afternoon";
  } else if (hour >= 18 && hour < 22) {
    greeting = "Good Evening";
    icon = "🌇";
    verseArray = versesEvening;
    newBackground = "evening";
  } else {
    greeting = "Good Night";
    icon = "🌙";
    verseArray = versesNight;
    newBackground = "night";
  }

  if (currentBackground !== newBackground) {
    document.body.className = newBackground;
    currentBackground = newBackground;
  }

  const displayGreeting = userName ? `${greeting}, ${userName}!` : greeting;

  document.getElementById("icon").innerText = icon;
  document.getElementById("text").innerText = displayGreeting;
  document.getElementById("verse").innerText = `${getRandomVerse(verseArray)}\n\nDaily Quote: ${getDailyQuote()}`;
}

// Clock
function updateClock() {
  const now = new Date();
  const h = String(now.getHours()).padStart(2,'0');
  const m = String(now.getMinutes()).padStart(2,'0');
  const s = String(now.getSeconds()).padStart(2,'0');
  document.getElementById("clock").innerText = `${h}:${m}:${s}`;
}

// Name input listener
document.getElementById("nameInput").addEventListener("input", e => {
  userName = e.target.value.trim();
  localStorage.setItem("userName", userName);
  updateGreeting();
});

// Reset Name button
document.getElementById("resetButton").addEventListener("click", () => {
  localStorage.removeItem("userName");
  userName = "";
  document.getElementById("nameInput").value = "";
  updateGreeting();
});

// Initialize
updateGreeting();
updateClock();
setInterval(updateClock, 1000);
setInterval(updateGreeting, 60000); // Verse updates every 60 seconds
