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
  "Psalm 31:24 - 'Be strong
