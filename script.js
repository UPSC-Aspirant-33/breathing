let interval;
let phase = 0; // 0 = inhale, 1 = hold, 2 = exhale
let timeLeft = 0;

const instruction = document.getElementById("instruction");
const timer = document.getElementById("timer");
const circle = document.getElementById("breathCircle");

function startBreathing() {
  clearInterval(interval);
  phase = 0;
  runPhase();
}

function runPhase() {
  if (phase === 0) {
    instruction.innerText = "Inhale 🌬️";
    timeLeft = 4;
    circle.style.transform = "scale(1.6)";
  } else if (phase === 1) {
    instruction.innerText = "Hold 🧘‍♀️";
    timeLeft = 4;
  } else {
    instruction.innerText = "Exhale 😌";
    timeLeft = 6;
    circle.style.transform = "scale(1)";
  }

  timer.innerText = timeLeft;

  interval = setInterval(() => {
    timeLeft--;
    timer.innerText = timeLeft;

    if (timeLeft <= 0) {
      clearInterval(interval);
      phase = (phase + 1) % 3;
      runPhase();
    }
  }, 1000);
}

function stopBreathing() {
  clearInterval(interval);
  instruction.innerText = "Paused";
  timer.innerText = "00";
  circle.style.transform = "scale(1)";
}
