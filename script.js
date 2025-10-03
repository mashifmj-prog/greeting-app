// -------------------- Clock --------------------
function updateClock() {
  const now = new Date();
  const h = String(now.getHours()).padStart(2, '0');
  const m = String(now.getMinutes()).padStart(2, '0');
  const s = String(now.getSeconds()).padStart(2, '0');
  document.getElementById('clockDisplay').innerText = `${h}:${m}:${s}`;
}

// Update clock every second
setInterval(updateClock, 1000);
updateClock(); // Initial call

// -------------------- Stopwatch --------------------
let stopwatchInterval;
let stopwatchTime = 0; // in seconds
let stopwatchRunning = false;

function updateStopwatchDisplay() {
  const h = String(Math.floor(stopwatchTime / 3600)).padStart(2, '0');
  const m = String(Math.floor((stopwatchTime % 3600) / 60)).padStart(2, '0');
  const s = String(stopwatchTime % 60).padStart(2, '0');
  document.getElementById('stopwatchDisplay').innerText = `${h}:${m}:${s}`;
}

document.getElementById('startStopwatch').addEventListener('click', () => {
  if (!stopwatchRunning) {
    stopwatchRunning = true;
    stopwatchInterval = setInterval(() => {
      stopwatchTime++;
      updateStopwatchDisplay();
    }, 1000);
  }
});

document.getElementById('stopStopwatch').addEventListener('click', () => {
  stopwatchRunning = false;
  clearInterval(stopwatchInterval);
});

document.getElementById('resetStopwatch').addEventListener('click', () => {
  stopwatchRunning = false;
  clearInterval(stopwatchInterval);
  stopwatchTime = 0;
  updateStopwatchDisplay();
});

// -------------------- Countdown Timer --------------------
let countdownInterval;
let countdownTime = 0;

function updateCountdownDisplay() {
  const m = String(Math.floor(countdownTime / 60)).padStart(2, '0');
  const s = String(countdownTime % 60).padStart(2, '0');
  document.getElementById('countdownDisplay').innerText = `${m}:${s}`;
}

document.getElementById('startCountdown').addEventListener('click', () => {
  const input = parseInt(document.getElementById('countdownInput').value);
  if (!isNaN(input) && input > 0) {
    countdownTime = input;
    clearInterval(countdownInterval);
    countdownInterval = setInterval(() => {
      if (countdownTime > 0) {
        countdownTime--;
        updateCountdownDisplay();
      } else {
        clearInterval(countdownInterval);
        alert("Countdown finished!");
      }
    }, 1000);
    updateCountdownDisplay();
  }
});

document.getElementById('resetCountdown').addEventListener('click', () => {
  clearInterval(countdownInterval);
  countdownTime = 0;
  updateCountdownDisplay();
});
