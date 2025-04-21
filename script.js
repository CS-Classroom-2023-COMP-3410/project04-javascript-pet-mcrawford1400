// Set initial values
let hunger = 0;
let energy = 100;

// Get elements from HTML and mkes them variables.
const moodSpan = document.getElementById("mood");
const hungerSpan = document.getElementById("hunger");
const energySpan = document.getElementById("energy");
const pet = document.getElementById("pet");

//show the pet's current status
function showStatus() {
  hungerSpan.textContent = hunger;
  energySpan.textContent = energy;

  // change mood based on hunger and energy
  if (hunger >= 10) {
    moodSpan.textContent = "Hungry";
    pet.style.backgroundColor = "orange";
  } else if (energy <= 20) {
    moodSpan.textContent = "Sleepy";
    pet.style.backgroundColor = "blue";
  } else {
    moodSpan.textContent = "Happy";
    pet.style.backgroundColor = "yellow";
  }

  //Save to localStorage
  localStorage.setItem("hunger", hunger);
  localStorage.setItem("energy", energy);
}

// When the page loads get saved values
if (localStorage.getItem("hunger")) {
  hunger = parseInt(localStorage.getItem("hunger")); //parseInt converts string to number
}
if (localStorage.getItem("energy")) {
  energy = parseInt(localStorage.getItem("energy"));
}

//Button actions
document.getElementById("feedBtn").addEventListener("click", function () {
  hunger = hunger - 2; //goes down by 2 when fed
  if (hunger < 0) hunger = 0;//when hunger hits zero it stays at zero so it doesnt die
  showStatus();
});

document.getElementById("playBtn").addEventListener("click", function () {
  hunger = hunger + 2; //goes up by 2 when played with
  energy = energy - 10;//goes down by 10 when pkayed with too.
  showStatus();
});

document.getElementById("sleepBtn").addEventListener("click", function () {
  energy = energy + 20; //goes up by 20
  if (energy > 100) energy = 100;//when energy hits 100 it stays there
  showStatus();
});

//the pet get hungry and tired over time
setInterval(function () {
  hunger = hunger + 1; //goes up by 1
  energy = energy - 1; //goes down by 1
  showStatus();
}, 5000); // every 5 seconds

// Show status when page starts
showStatus();
