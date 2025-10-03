// 1. Finish the versesNight array properly
const versesNight = [
  "Psalm 4:8 - 'In peace I will lie down and sleep.'",
  "Psalm 127:2 - 'It is vain for you to rise up early.'",
  "Proverbs 3:24 - 'When you lie down, you will not be afraid.'",
  "Psalm 91:1 - 'He who dwells in the shelter of the Most High.'",
  "Psalm 63:6 - 'On my bed I remember you.'",
  "Psalm 16:7 - 'I will praise the Lord, who counsels me.'",
  "Psalm 34:4 - 'I sought the Lord, and He answered me.'",
  "Psalm 121:3 - 'He will not let your foot slip.'",
  "Psalm 91:2 - 'I will say of the Lord, He is my refuge.'",
  "Psalm 27:1 - 'The Lord is my light and my salvation.'",
  "Psalm 37:7 - 'Be still before the Lord.'",
  "Psalm 119:57 - 'The Lord is my portion.'",
  "Psalm 145:18 - 'The Lord is near to all who call on Him.'",
  "Psalm 119:148 - 'My eyes are awake before the watches of the night.'",
  "Psalm 31:20 - 'You keep them in perfect peace whose minds are stayed on you.'",
  "Psalm 34:8 - 'Taste and see that the Lord is good.'",
  "Psalm 4:9 - 'In peace I will lie down and sleep.'",
  "Psalm 91:14 - 'Because he loves me, I will rescue him.'",
  "Psalm 121:7 - 'The Lord will keep you from all harm.'",
  "Psalm 16:8 - 'I keep my eyes always on the Lord.'"
];

// 2. Daily quotes
const dailyQuotes = [
  "Trust in the Lord with all your heart. – Proverbs 3:5",
  "Do not be anxious about anything. – Philippians 4:6",
  "I can do all things through Christ. – Philippians 4:13",
  "The Lord is my shepherd; I shall not want. – Psalm 23:1",
  "Be strong and courageous. – Joshua 1:9"
];

// 3. Helper functions
function getRandomVerse(array) {
  const index = Math.floor(Math.random() * array.length);
  return array[index];
}
function getDailyQuote() {
  const today = new Date();
  const index = today.getDate() % dailyQuotes.length;
  return dailyQuotes[index];
}

// 4. Greeting update logic
function updateGreeting() {
  const hour = new Date().getHours();
  let greeting, icon, verseArray, newBackground;

  if (hour >= 5 && hour < 12) {
    greeting = "Good Morning"; icon="🌅"; verseArray=versesMorning; newBackground="morning";
  } else if (hour >= 12 && hour < 15) {
    greeting = "Good Day"; icon="☀️"; verseArray=versesDay; newBackground="day";
  } else if (hour >= 15 && hour < 18) {
    greeting = "Good Afternoon"; icon="🌤️"; verseArray=versesAfternoon; newBackground="afternoon";
  } else if (hour >= 18 && hour < 22) {
    greeting = "Good Evening"; icon="🌇"; verseArray=versesEvening; newBackground="evening";
  } else {
    greeting = "Good Night"; icon="🌙"; verseArray=versesNight; newBackground="night";
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

// 5. Clock
function updateClock() {
  const now = new Date();
  const h = String(now.getHours()).padStart(2,'0');
  const m = String(now.getMinutes()).padStart(2,'0');
  const s = String(now.getSeconds()).padStart(2,'0');
  document.getElementById("clock").innerText = `${h}:${m}:${s}`;
}

// 6. Name input listener
document.getElementById("nameInput").addEventListener("input", e => {
  userName = e.target.value.trim();
  localStorage.setItem("userName", userName);
  updateGreeting();
});

// 7. Reset button
document.getElementById("resetButton").addEventListener("click", () => {
  localStorage.removeItem("userName");
  userName = "";
  document.getElementById("nameInput").value = "";
  updateGreeting();
});

// 8. Initialize
updateGreeting();
updateClock();
setInterval(updateClock, 1000);
setInterval(updateGreeting, 60000);
