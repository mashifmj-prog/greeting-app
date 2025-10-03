// -------------------- Greeting App --------------------

// Store user name
let userName = "";
if (localStorage.getItem("userName")) {
  userName = localStorage.getItem("userName");
  document.getElementById("nameInput").value = userName;
}

// Track background
let currentBackground = "";

// 20 verses per time period
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

const versesDay = [
  "Psalm 118:24 - 'This is the day the Lord has made; rejoice and be glad.'",
  "Colossians 3:23 - 'Whatever you do, work heartily.'",
  "Proverbs 16:3 - 'Commit your work to the Lord.'",
  "Ecclesiastes 9:10 - 'Whatever your hand finds to do, do it with all your might.'",
  "Psalm 37:5 - 'Commit your way to the Lord.'",
  "Psalm 90:17 - 'Establish the work of our hands.'",
  "Isaiah 41:10 - 'Fear not, for I am with you.'",
  "1 Corinthians 15:58 - 'Be steadfast, immovable.'",
  "Galatians 6:9 - 'Do not grow weary of doing good.'",
  "Matthew 5:16 - 'Let your light shine before others.'",
  "Psalm 145:9 - 'The Lord is good to all.'",
  "Proverbs 3:6 - 'In all your ways acknowledge Him.'",
  "Philippians 4:13 - 'I can do all things through Christ.'",
  "Joshua 1:9 - 'Be strong and courageous.'",
  "Psalm 37:7 - 'Be still before the Lord.'",
  "Psalm 34:8 - 'Taste and see that the Lord is good.'",
  "Romans 12:11 - 'Never be lacking in zeal.'",
  "1 Thessalonians 5:16-18 - 'Rejoice always, pray continually.'",
  "Proverbs 16:9 - 'The heart of man plans his way.'",
  "Psalm 27:14 - 'Wait for the Lord; be strong.'"
];

const versesAfternoon = [
  "Isaiah 40:31 - 'Those who hope in the Lord will renew their strength.'",
  "Psalm 27:14 - 'Wait for the Lord; be strong.'",
  "Psalm 143:8 - 'Let the morning bring me word of your unfailing love.'",
  "Philippians 4:6 - 'Do not be anxious about anything.'",
  "Psalm 46:10 - 'Be still and know that I am God.'",
  "Psalm 62:5 - 'My soul, wait silently for God.'",
  "Proverbs 3:5 - 'Trust in the Lord with all your heart.'",
  "Psalm 34:18 - 'The Lord is near to the brokenhearted.'",
  "Psalm 119:105 - 'Your word is a lamp to my feet.'",
  "Psalm 37:7 - 'Be still before the Lord.'",
  "Isaiah 41:13 - 'I am your God; I will strengthen you.'",
  "Psalm 55:22 - 'Cast your burden on the Lord.'",
  "Matthew 11:28 - 'Come to me, all you who are weary.'",
  "Psalm 9:10 - 'Those who know your name trust in you.'",
  "Psalm 34:17 - 'The righteous cry out, and the Lord hears.'",
  "Psalm 31:24 - 'Be strong and take heart, all you who hope in the Lord.'",
  "Proverbs 16:3 - 'Commit your work to the Lord.'",
  "Psalm 37:5 - 'Commit your way to the Lord.'",
  "Psalm 121:1-2 - 'I lift my eyes to the hills.'",
  "Psalm 46:1 - 'God is our refuge and strength.'"
];

const versesEvening = [
  "Psalm 141:2 - 'May my prayer be set before you like incense.'",
  "Psalm 119:148 - 'My eyes stay open through the watches of the night.'",
  "Psalm 4:8 - 'In peace I will lie down and sleep.'",
  "Psalm 63:6 - 'On my bed I remember you.'",
  "Psalm 16:7 - 'I will praise the Lord, who counsels me.'",
  "Psalm 34:4 - 'I sought the Lord, and He answered me.'",
  "Psalm 121:3 - 'He will not let your foot slip.'",
  "Psalm 91:1-2 - 'Whoever dwells in the shelter of the Most High.'",
  "Psalm 27:1 - 'The Lord is my light and my salvation.'",
  "Psalm 37:7 - 'Be still before the Lord.'",
  "Psalm 119:57 - 'The Lord is my portion.'",
  "Psalm 91:5 - 'You will not fear the terror of night.'",
  "Psalm 63:1 - 'O God, you are my God; earnestly I seek you.'",
  "Psalm 4:9 - 'In peace I will both lie down and sleep.'",
  "Psalm 121:7 - 'The Lord will keep you from all harm.'",
  "Psalm 16:8 - 'I keep my eyes always on the Lord.'",
  "Psalm 145:18 - 'The Lord is near to all who call on Him.'",
  "Psalm 119:148 - 'My eyes are awake before the watches of the night.'",
  "Psalm 31:20 - 'You keep them in perfect peace whose minds are stayed on you.'",
  "Psalm 34:8 - 'Taste and see that the Lord is good.'"
];

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
  "Psalm 91:5 - 'You will not fear the terror of night.'",
  "Psalm 63:1 - 'O God, you are my God; earnestly I seek you.'",
  "Psalm 4:9 - 'In peace I will both lie down and sleep.'",
  "Psalm 121:7 - 'The Lord will keep you from all harm.'",
  "Psalm 16:8 - 'I keep my eyes always on the Lord.'",
  "Psalm 145:18 - 'The Lord is near to all who call on Him.'",
  "Psalm 119:148 - 'My eyes are awake before the watches of the night.'",
  "Psalm 31:20 - 'You keep them in perfect peace whose minds are stayed on you.'"
];

// Daily Quotes for each day of the month (1–31)
const dailyQuotes = [
  "Trust in the Lord with all your heart.",
  "Be strong and courageous.",
  "The Lord is my shepherd; I shall not want.",
  "I can do all things through Christ who strengthens me.",
  "Rejoice in the Lord always.",
  "Commit your work to the Lord, and your plans will succeed.",
  "The Lord is near to the brokenhearted.",
  "Cast all your anxiety on Him because He cares for you.",
  "Be still and know that I am God.",
  "The Lord will fight for you; you need only to be still.",
  "Delight yourself in the Lord, and He will give you the desires of your heart.",
  "Do not be anxious about anything.",
  "Blessed is the one who trusts in the Lord.",
  "The Lord is my light and my salvation.",
  "Taste and see that the Lord is good.",
  "Let your light shine before others.",
  "Be patient in tribulation.",
  "Love one another as I have loved you.",
  "The steadfast love of the Lord never ceases.",
  "God is our refuge and strength, a very present help in trouble.",
  "Seek first the kingdom of God and His righteousness.",
  "Do not fear, for I am with you.",
  "Your word is a lamp to my feet and a light to my path.",
  "The joy of the Lord is your strength.",
  "The Lord bless you and keep you.",
  "He will cover you with His feathers, and under His wings you will find refuge.",
  "Pray without ceasing.",
  "Whatever you do, work heartily, as for the Lord.",
  "The Lord is faithful; He will strengthen you.",
  "Give thanks in all circumstances.",
  "Trust in the Lord forever."
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
  } else if (hour >= 12 && hour < 14) {
    greeting = "Good Day";
    icon = "☀️";
    verseArray = versesDay;
    newBackground = "day";
  } else if (hour >= 14 && hour < 17) {
    greeting = "Good Afternoon";
    icon = "🌤️";
    verseArray = versesAfternoon;
    newBackground = "afternoon";
  } else if (hour >= 17 && hour < 20) {
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

  // Update greeting text
  const textEl = document.getElementById("text");
  textEl.innerText = userName ? `${greeting}, ${userName}!` : greeting;

  // Update icon
  document.getElementById("icon").innerText = icon;

  // Update verse + daily quote
  document.getElementById("verse").innerText =
    getRandomVerse(verseArray) + "\n\nDaily Quote: " + getDailyQuote();

  // Update background if changed
  if (currentBackground !== newBackground) {
    document.body.className = newBackground;
    currentBackground = newBackground;
  }
}

// -------------------- Clock --------------------
function updateClock() {
  const now = new Date();
  const
