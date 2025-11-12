// Countdown Timer Logic
let countdownEl = document.getElementById("countdown");
let editBtn = document.getElementById("edit-btn");
let editor = document.getElementById("editor");
let saveBtn = document.getElementById("saveTime");
let newTimeInput = document.getElementById("newTime");
let targetDate = localStorage.getItem("targetDate") || "2025-12-01T12:00";

function updateCountdown() {
  let now = new Date();
  let target = new Date(targetDate);
  let diff = target - now;

  if (diff <= 0) {
    countdownEl.textContent = "Video dropped!";
    return;
  }

  let days = Math.floor(diff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  let minutes = Math.floor((diff / (1000 * 60)) % 60);
  let seconds = Math.floor((diff / 1000) % 60);

  countdownEl.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

setInterval(updateCountdown, 1000);
updateCountdown();

editBtn.addEventListener("click", () => {
  editor.classList.toggle("hidden");
});

saveBtn.addEventListener("click", () => {
  targetDate = newTimeInput.value;
  localStorage.setItem("targetDate", targetDate);
  editor.classList.add("hidden");
});

// Channel Image Click
document.getElementById("channel-img").addEventListener("click", () => {
  window.location.href = "https://www.youtube.com/@YourChannelName"; // Replace with your actual channel URL
});

// Ian's Channel Click
document.getElementById("ian-img").addEventListener("click", () => {
  window.location.href = "https://www.youtube.com/@hipchip-p2n";
});

// Rubik Cube Solver Camera
const startScanBtn = document.getElementById("startScan");
const cameraFeed = document.getElementById("cameraFeed");
const solutionOutput = document.getElementById("solutionOutput");

startScanBtn.addEventListener("click", async () => {
  cameraFeed.classList.remove("hidden");
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    cameraFeed.srcObject = stream;
    solutionOutput.textContent = "Scanning cube... (AI logic coming soon)";
  } catch (err) {
    solutionOutput.textContent = "Camera access denied.";
  }
});
