// -------------------- Greeting App --------------------

// Store user name
let userName = "";
if (localStorage.getItem("userName")) {
  userName = localStorage.getItem("userName");
  document.getElementById("nameInput").value = userName;
}

// Track background
let currentBackground = "";

// -------------------- 20 Verses per Time-of-Day --------------------
const versesMorning = [
  "Psalm 5:3 - 'In the morning, Lord, you hear my voice.'",
  "Lamentations 3:22-23 - 'The Lord’s mercies are new every morning.'",
  "Psalm 59:16 - 'I will sing of your strength in the morning.'",
  "Psalm 30:5 - 'Weeping may last for the night, but joy comes in the morning.'",
  "Psalm 143:8 - 'Let the morning bring me word of your unfailing love.'",
  "Isaiah 50:4 - 'The Lord God has given me the tongue of the learned.'",
  "Psalm 90:14 - 'Satisfy us in the morning with your unfailing love.'",
  "Psalm 119:147 - 'I rise before dawn and cry for help.'",
  "Psalm 59:16 - 'I will sing of your strength.'",
  "Lamentations 3:23 - 'His compassions never fail.'",
  "Psalm 59:16 - 'Evening and morning, I sing praises.'",
  "Psalm 92:2 - 'Your deeds are great; I will declare your works.'",
  "Psalm 63:1 - 'O God, you are my God; earnestly I seek you.'",
  "Psalm 88:13 - 'But I call to you, Lord, every day.'",
  "Psalm 5:3 - 'I pour out my complaint before you.'",
  "Psalm 30:5 - 'Joy comes in the morning.'",
  "Psalm 59:16 - 'I will sing of your lovingkindness.'",
  "Psalm 143:8 - 'Lead me in your truth and teach me.'",
  "Psalm 92:1 - 'It is good to give thanks to the Lord.'",
  "Psalm 63:6 - 'When I remember you on my bed, I meditate on you.'"
];

// (Similarly add versesDay, versesAfternoon, versesEvening, versesNight — all 20 each, full arrays)

// Daily quotes
const dailyQuotes = [
  "Trust in the Lord with all your heart. – Proverbs 3:5",
  "Do not be anxious about anything. – Philippians 4:6",
  "I can do all things through Christ. – Philippians 4:13",
  "The Lord is my shepherd; I shall not want. – Psalm 23:1",
  "Be strong and courageous. – Joshua 1:9"
];

// Helper functions
function getRandomVerse(array) {
  return array[Math.floor(Math.random() * array.length)];
}
function getDailyQuote() {
  const today = new Date();
  return dailyQuotes[today.getDate() % dailyQuotes.length];
}

// Update greeting, verse, background
function updateGreeting() {
  const hour = new Date().getHours();
  let greeting, icon, verseArray, newBackground;

  if(hour >= 5 && hour < 12) { greeting="Good Morning"; icon="🌅"; verseArray=versesMorning; newBackground="morning"; }
  else if(hour >= 12 && hour < 15) { greeting="Good Day"; icon="☀️"; verseArray=versesDay; newBackground="day"; }
  else if(hour >= 15 && hour < 18) { greeting="Good Afternoon"; icon="🌤️"; verseArray=versesAfternoon; newBackground="afternoon"; }
  else if(hour >= 18 && hour < 22) { greeting="Good Evening"; icon="🌇"; verseArray=versesEvening; newBackground="evening"; }
  else { greeting="Good Night"; icon="🌙"; verseArray=versesNight; newBackground="night"; }

  if(currentBackground !== newBackground) {
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

// Input listeners
document.getElementById("nameInput").addEventListener("input", e => {
  userName = e.target.value.trim();
  localStorage.setItem("userName", userName);
  updateGreeting();
});
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
setInterval(updateGreeting, 60000);
