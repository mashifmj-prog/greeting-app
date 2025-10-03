// -------------------- Greeting App --------------------

// Store user name
let userName = "";
try {
  if (localStorage.getItem("userName")) {
    userName = localStorage.getItem("userName");
    const nameInput = document.getElementById("nameInput");
    if (nameInput) nameInput.value = userName;
    else console.error("Element with ID 'nameInput' not found");
  }
} catch (e) {
  console.error("Error accessing localStorage:", e);
}

// Track current background class
let currentBackground = "";

// Bible verses arrays (10 per time period)
const versesMorning = [
  "Lamentations 3:22-23 - 'The Lord’s mercies are new every morning.'",
  "Psalm 5:3 - 'In the morning, Lord, you hear my voice.'",
  "Psalm 59:16 - 'I will sing of your strength in the morning.'",
  "Psalm 30:5 - 'Weeping may last for the night, but joy comes in the morning.'",
  "Psalm 143:8 - 'Let the morning bring me word of your unfailing love.'",
  "Psalm 90:14 - 'Satisfy us in the morning with your unfailing love.'",
  "Psalm 119:147 - 'I rise before dawn and cry for help.'",
  "Psalm 92:2 - 'Your deeds are great; I will declare your works.'",
  "Psalm 63:1 - 'O God, you are my God; earnestly I seek you.'",
  "Psalm 88:13 - 'But I call to you, Lord, every day.'"
];

const versesDay = [
  "Psalm 118:24 - 'This is the day the Lord has made; rejoice and be glad.'",
  "Colossians 3:23 - 'Work heartily, as for the Lord.'",
  "Proverbs 16:3 - 'Commit your work to the Lord, and your plans will succeed.'",
  "Ecclesiastes 9:10 - 'Whatever your hand finds to do, do it with all your might.'",
  "Psalm 37:5 - 'Commit your way to the Lord.'",
  "Isaiah 41:10 - 'Fear not, for I am with you.'",
  "Philippians 4:13 - 'I can do all things through Christ.'",
  "Joshua 1:9 - 'Be strong and courageous.'",
  "Psalm 34:8 - 'Taste and see that the Lord is good.'",
  "Proverbs 3:6 - 'In all your ways acknowledge Him.'"
];

const versesAfternoon = [
  "Isaiah 40:31 - 'Those who hope in the Lord will renew their strength.'",
  "Psalm 27:14 - 'Wait for the Lord; be strong.'",
  "Philippians 4:6 - 'Do not be anxious about anything.'",
  "Psalm 46:10 - 'Be still and know that I am God.'",
  "Psalm 119:105 - 'Your word is a lamp to my feet.'",
  "Psalm 34:18 - 'The Lord is near to the brokenhearted.'",
  "Psalm 55:22 - 'Cast your burden on the Lord.'",
  "Matthew 11:28 - 'Come to me, all you who are weary.'",
  "Psalm 9:10 - 'Those who know your name trust in you.'",
  "Psalm 31:24 - 'Be strong and take heart, all you who hope in the Lord.'"
];

const versesEvening = [
  "Psalm 141:2 - 'May my prayer be set before you like incense.'",
  "Psalm 119:148 - 'My eyes stay open through the watches of the night.'",
  "Psalm 4:8 - 'In peace I will lie down and sleep.'",
  "Psalm 63:6 - 'On my bed I remember you.'",
  "Psalm 16:7 - 'I will praise the Lord, who counsels me.'",
  "Psalm 121:3 - 'He will not let your foot slip.'",
  "Psalm 91:1-2 - 'Whoever dwells in the shelter of the Most High.'",
  "Psalm 27:1 - 'The Lord is my light and my salvation.'",
  "Psalm 145:18 - 'The Lord is near to all who call on Him.'",
  "Psalm 34:4 - 'I sought the Lord, and He answered me.'"
];

const versesNight = [
  "Psalm 4:8 - 'In peace I will lie down and sleep.'",
  "Psalm 127:2 - 'It is vain for you to rise up early.'",
  "Proverbs 3:24 - 'When you lie down, you will not be afraid.'",
  "Psalm 91:1 - 'He who dwells in the shelter of the Most High.'",
  "Psalm 63:6 - 'On my bed I remember you.'",
  "Psalm 16:8 - 'I keep my eyes always on the Lord.'",
  "Psalm 121:7 - 'The Lord will keep you from all harm.'",
  "Psalm 91:5 - 'You will not fear the terror of night.'",
  "Psalm 119:148 - 'My eyes are awake before the watches of the night.'",
  "Psalm 31:20 - 'You keep them in perfect peace whose minds are stayed on you.'"
];

// -------------------- Daily Quotes --------------------
const dailyQuotes = [
  "Trust in the Lord with all your heart. – Proverbs 3:5",
  "Do not be anxious about anything. – Philippians 4:6",
  "I can do all things through Christ. – Philippians 4:13",
  "The Lord is my shepherd; I shall not want. – Psalm 23:1",
  "Be strong and courageous. – Joshua 1:9",
  "Commit your work to the Lord, and your plans will succeed. – Proverbs 16:3",
  "The Lord is my light and my salvation—whom shall I fear? – Psalm 27:1",
  "For I know the plans I have for you. – Jeremiah 29:11",
  "Cast your anxiety on Him because He cares for you. – 1 Peter 5:7",
  "The steadfast love of the Lord never ceases. – Lamentations 3:22",
  "Delight yourself in the Lord, and He will give you the desires of your heart. – Psalm 37:4",
  "Be still, and know that I am God. – Psalm 46:10",
  "The Lord is near to all who call on Him. – Psalm 145:18",
  "God is our refuge and strength, an ever-present help in trouble. – Psalm 46:1",
  "Let all that you do be done in love. – 1 Corinthians 16:14",
  "The joy of the Lord is your strength. – Nehemiah 8:10",
  "Rejoice always, pray without ceasing. – 1 Thessalonians 5:16-17",
  "He gives power to the faint, and to him who has no might He increases strength. – Isaiah 40:29",
  "Cast your burden on the Lord, and He will sustain you. – Psalm 55:22",
  "Let your light shine before others. – Matthew 5:16",
  "I will instruct you and teach you in the way you should go. – Psalm 32:8",
  "The Lord is good to all. – Psalm 145:9",
  "Your word is a lamp to my feet and a light to my path. – Psalm 119:105",
  "Fear not, for I am with you. – Isaiah 41:10",
  "In everything give thanks. – 1 Thessalonians 5:18",
  "Do not be overcome by evil, but overcome evil with good. – Romans 12:21",
  "Love your neighbor as yourself. – Matthew 22:39",
  "The Lord is righteous in all His ways. – Psalm 145:17",
  "Wait for the Lord; be strong, and let your heart take courage. – Psalm 27:14",
  "Peace I leave with you; my peace I give to you. – John 14:27",
  "God is faithful; He will not let you be tested beyond your strength. – 1 Corinthians 10:13"
];

// -------------------- Helper Functions --------------------
function getRandomVerse(array) {
  try {
    const index = Math.floor(Math.random() * array.length);
    return array[index];
  } catch (e) {
    console.error("Error selecting random verse:", e);
    return "Error loading verse.";
  }
}

function getDailyQuote() {
  try {
    const today = new Date();
    const index = (today.getDate() - 1) % dailyQuotes.length;
    return dailyQuotes[index];
  } catch (e) {
    console.error("Error selecting daily quote:", e);
    return "Error loading quote.";
  }
}

// -------------------- Update Greeting --------------------
function updateGreeting() {
  try {
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

    const iconElement = document.getElementById("icon");
    const textElement = document.getElementById("text");
    const verseElement = document.getElementById("verse");

    if (!iconElement) console.error("Element with ID 'icon' not found");
    if (!textElement) console.error("Element with ID 'text' not found");
    if (!verseElement) console.error("Element with ID 'verse' not found");

    if (iconElement) iconElement.innerText = icon;
    if (textElement) textElement.innerText = displayGreeting;
    if (verseElement) verseElement.innerText = `${getRandomVerse(verseArray)}\n\nDaily Quote: ${getDailyQuote()}`;
  } catch (e) {
    console.error("Error updating greeting:", e);
  }
}

// -------------------- Clock --------------------
function updateClock() {
  try {
    const now = new Date();
    const h = String(now.getHours()).padStart(2, '0');
    const m = String(now.getMinutes()).padStart(2, '0');
    const s = String(now.getSeconds()).padStart(2, '0');
    const clockElement = document.getElementById("clock");
    if (clockElement) {
      clockElement.innerText = `${h}:${m}:${s}`;
    } else {
      console.error("Element with ID 'clock' not found");
    }
  } catch (e) {
    console.error("Error updating clock:", e);
  }
}

// -------------------- Name Input Listener --------------------
try {
  const nameInput = document.getElementById("nameInput");
  if (nameInput) {
    nameInput.addEventListener("input", e => {
      userName = e.target.value.trim();
      localStorage.setItem("userName", userName);
      updateGreeting();
    });
  } else {
    console.error("Element with ID 'nameInput' not found for event listener");
  }
} catch (e) {
  console.error("Error setting name input listener:", e);
}

// -------------------- Reset Name --------------------
try {
  const resetButton = document.getElementById("resetButton");
  if (resetButton) {
    resetButton.addEventListener("click", () => {
      localStorage.removeItem("userName");
      userName = "";
      const nameInput = document.getElementById("nameInput");
      if (nameInput) nameInput.value = "";
      updateGreeting();
    });
  } else {
    console.error("Element with ID 'resetButton' not found for event listener");
  }
} catch (e) {
  console.error("Error setting reset button listener:", e);
}

// -------------------- Initialize --------------------
try {
  updateGreeting();
  updateClock();
  setInterval(updateClock, 1000);
  setInterval(updateGreeting, 60000); // Verse updates every 60 seconds
} catch (e) {
  console.error("Error during initialization:", e);
}
