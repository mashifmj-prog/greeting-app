// Ask the user for their name once
let userName = prompt("Enter your name:", ""); 
// If the user leaves it blank, default to empty string
if (!userName) {
  userName = "";
}

function updateGreeting() {
  const now = new Date();
  const hour = now.getHours();
  let greeting, icon, verse;

  if (hour >= 5 && hour < 12) {
    greeting = "Good Morning";
    icon = "🌅";
    verse = "Lamentations 3:22-23 - 'Because of the Lord’s great love we are not consumed, for his compassions never fail. They are new every morning; great is your faithfulness.'";
    document.body.className = "morning";
  } else if (hour >= 12 && hour < 15) {
    greeting = "Good Day";
    icon = "☀️";
    verse = "Psalm 118:24 - 'This is the day the Lord has made; we will rejoice and be glad in it.'";
    document.body.className = "day";
  } else if (hour >= 15 && hour < 18) {
    greeting = "Good Afternoon";
    icon = "🌤️";
    verse = "Isaiah 40:31 - 'But those who hope in the Lord will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint.'";
    document.body.className = "afternoon";
  } else if (hour >= 18 && hour < 22) {
    greeting = "Good Evening";
    icon = "🌇";
    verse = "Psalm 141:2 - 'May my prayer be set before you like incense; may the lifting up of my hands be like the evening sacrifice.'";
    document.body.className = "evening";
  } else {
    greeting = "Good Night";
    icon = "🌙";
    verse = "Psalm 4:8 - 'In peace I will lie down and sleep, for you alone, Lord, make me dwell in safety.'";
    document.body.className = "night";
  }

  // Display greeting + user name if provided
  const displayGreeting = userName ? `${greeting}, ${userName}!` : greeting;

  document.getElementById("icon").innerText = icon;
  document.getElementById("text").innerText = displayGreeting;
  document.getElementById("verse").innerText = verse;
}

function updateClock() {
  const now = new Date();
  const timeString = now.toLocaleTimeString();
  document.getElementById("clock").innerText = timeString;
}

// Initialize
updateGreeting();
updateClock();

// Keep updating every second
setInterval(() => {
  updateClock();
  updateGreeting();
}, 1000);
