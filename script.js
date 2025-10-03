// -------------------- Daily Motivational Quotes --------------------
const dailyQuotes = [
  "Trust in the Lord with all your heart. – Proverbs 3:5",
  "Do not be anxious about anything. – Philippians 4:6",
  "I can do all things through Christ. – Philippians 4:13",
  "The Lord is my shepherd; I shall not want. – Psalm 23:1",
  "Be strong and courageous. – Joshua 1:9",
  "Rejoice in the Lord always. – Philippians 4:4",
  "Commit your work to the Lord, and your plans will succeed. – Proverbs 16:3",
  "The Lord is near to the brokenhearted. – Psalm 34:18",
  "Cast all your anxiety on Him because He cares for you. – 1 Peter 5:7",
  "Be still and know that I am God. – Psalm 46:10",
  "The Lord will fight for you; you need only to be still. – Exodus 14:14",
  "Delight yourself in the Lord, and He will give you the desires of your heart. – Psalm 37:4",
  "Blessed is the one who trusts in the Lord. – Psalm 34:8",
  "The Lord is my light and my salvation. – Psalm 27:1",
  "Taste and see that the Lord is good. – Psalm 34:8",
  "Let your light shine before others. – Matthew 5:16",
  "Be patient in tribulation. – Romans 12:12",
  "Love one another as I have loved you. – John 13:34",
  "The steadfast love of the Lord never ceases. – Lamentations 3:22",
  "God is our refuge and strength, a very present help in trouble. – Psalm 46:1",
  "Seek first the kingdom of God and His righteousness. – Matthew 6:33",
  "Do not fear, for I am with you. – Isaiah 41:10",
  "Your word is a lamp to my feet and a light to my path. – Psalm 119:105",
  "The joy of the Lord is your strength. – Nehemiah 8:10",
  "The Lord bless you and keep you. – Numbers 6:24",
  "He will cover you with His feathers, and under His wings you will find refuge. – Psalm 91:4",
  "Pray without ceasing. – 1 Thessalonians 5:17",
  "Whatever you do, work heartily, as for the Lord. – Colossians 3:23",
  "The Lord is faithful; He will strengthen you. – 1 Corinthians 1:9",
  "Give thanks in all circumstances. – 1 Thessalonians 5:18",
  "Trust in the Lord forever. – Isaiah 26:4"
];

// -------------------- Helper Functions --------------------
function getRandomVerse(array) {
  const index = Math.floor(Math.random() * array.length);
  return array[index];
}

function getDailyQuote() {
  const today = new Date();
  const index = (today.getDate() - 1) % dailyQuotes.length;
  return dailyQuotes[index];
}

// -------------------- Update Greeting --------------------
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

  // Update background if changed
  if (currentBackground !== newBackground) {
    document.body.className = newBackground;
    currentBackground = newBackground;
  }

  // Prepare greeting text
  const displayGreeting = userName ? `${greeting}, ${userName}!` : greeting;

  // Update DOM elements
  document.getElementById("icon").innerText = icon;
  document.getElementById("text").innerText = displayGreeting;
  document.getElementById("verse").innerText = `${getRandomVerse(verseArray)}\n\nDaily Quote: ${getDailyQuote()}`;
}

// -------------------- Clock --------------------
function updateClock() {
  const now = new Date();
  const h = String(now.getHours()).padStart(2,'0');
  const m = String(now.getMinutes()).padStart(2,'0');
  const s = String(now.getSeconds()).padStart(2,'0');
  document.getElementById("clock").innerText = `${h}:${m}:${s}`;
}

// -------------------- Name Input Listener --------------------
document.getElementById("nameInput").addEventListener("input", e => {
  userName = e.target.value.trim();
  localStorage.setItem("userName", userName);
  updateGreeting();
});

// -------------------- Reset Name Button --------------------
document.getElementById("resetButton").addEventListener("click", () => {
  localStorage.removeItem("userName");
  userName = "";
  document.getElementById("nameInput").value = "";
  updateGreeting();
});

// -------------------- Initialize --------------------
updateGreeting();
updateClock();
setInterval(updateClock, 1000);       // Clock updates every second
setInterval(updateGreeting, 60000);   // Greeting & verse updates every 60 seconds
