let happiness = 5;
const happinessDisplay = document.getElementById("happiness");
const petMood = document.getElementById("petMood");

function updateMood() {
  if (happiness >= 8) {
    petMood.textContent = "😄 Very Happy";
  } else if (happiness >= 5) {
    petMood.textContent = "😊 Happy";
  } else if (happiness >= 3) {
    petMood.textContent = "😐 Okay";
  } else {
    petMood.textContent = "😢 Sad";
  }
  happinessDisplay.textContent = happiness;
}

// Feed button
document.getElementById("feedBtn").addEventListener("click", () => {
  happiness = Math.min(happiness + 1, 10); // max 10
  updateMood();
});

// Play button
document.getElementById("playBtn").addEventListener("click", () => {
  happiness = Math.min(happiness + 2, 10); // play gives more happiness
  updateMood();
});

// Happiness decreases over time
setInterval(() => {
  happiness = Math.max(happiness - 1, 0); // min 0
  updateMood();
}, 5000); // every 5 seconds

updateMood();
