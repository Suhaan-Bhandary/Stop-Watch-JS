// Getting the references of the html elements
const stopWatchCircle = document.querySelector(".stop-watch");

const playButton = document.getElementById("play");
const pauseButton = document.getElementById("pause");
const restartButton = document.getElementById("restart");

const errorText = document.querySelector(".error");
const minData = document.getElementById("min-data");
const secData = document.getElementById("sec-data");

// All the variables representing the state 
let time = 0;
let totalTime = 0;
let isFirstClickOnPlay = true;
let countDownInterval = null;

// Check input data
const isValidInputData = () => {
  let minutes = parseInt(minData.value);
  let seconds = parseInt(secData.value);

  if (isNaN(minutes) || isNaN(seconds)) {
    errorText.textContent = "Enter a valid value";
    return false;
  }

  if (minutes < 0 || minutes >= 100) {
    errorText.textContent = "Enter time in range [0, 99]";
    return false;
  }

  if (seconds < 0 || seconds >= 60) {
    errorText.textContent = "Enter time in range [0, 60)";
    return false;
  }

  if (seconds == 0 && minutes == 0) {
    errorText.textContent = "Both the times cannot be zero";
    return false;
  }

  errorText.textContent = "";
  return true;
};

// On Play Action
playButton.addEventListener("click", () => {
  sound.playButtonClickSound();

  if (countDownInterval) return;
  if (!isValidInputData()) return;

  // Calculate the time
  let minutes = parseInt(minData.value);
  let seconds = parseInt(secData.value);
  time = minutes * 60 + seconds;

  if (isFirstClickOnPlay) {
    totalTime = time;
    isFirstClickOnPlay = false;
  }

  // Play the clock sound
  sound.playClockSound();

  countDownInterval = setInterval(() => {
    time -= 1;
    if (time == 0) {
      // Stop the clock sound
      sound.stopClockSound();

      sound.playAlarmSound();
      clearInterval(countDownInterval);
    }

    // Update the ui
    if (totalTime != 0) {
      let circleDegree = (time / totalTime) * 360;
      console.log(circleDegree, time, totalTime);

      stopWatchCircle.style.backgroundImage = `conic-gradient(rgb(7, 53, 206) ${circleDegree}deg, rgb(237, 237, 237) 0deg)`;
    }

    let minutes = Math.floor(parseInt(time) / 60);
    let seconds = parseInt(time) % 60;

    minData.value = minutes < 10 ? "0" + minutes : minutes;
    secData.value = seconds < 10 ? "0" + seconds : seconds;
  }, 1000);
});

// On Pause Action
pauseButton.addEventListener("click", () => {
  sound.playButtonClickSound();

  // Stop the clock sound
  sound.stopClockSound();

  clearInterval(countDownInterval);
  countDownInterval = null;
});

// On Restart Action
restartButton.addEventListener("click", () => {
  sound.playButtonClickSound();

  // Stop alarn and clock sound
  sound.stopClockSound();
  sound.stopAlarmSound();

  clearInterval(countDownInterval);
  countDownInterval = null;

  errorText.textContent = "";
  minData.value = "00";
  secData.value = "00";

  // Reset the first click flag
  isFirstClickOnPlay = false;
  stopWatchCircle.style.backgroundImage = `conic-gradient(rgb(7, 53, 206) 360deg, rgb(237, 237, 237) 0deg)`;
});

minData.addEventListener("input", isValidInputData);
secData.addEventListener("input", isValidInputData);
