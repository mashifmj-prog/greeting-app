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
  "Psalm 92:1 - 'It is good to give thanks to the L
