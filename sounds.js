class SoundManager {
  constructor() {
    this.buttonSound = new Audio("./sounds/button_pressed.mp3");
    this.clockSound = new Audio("./sounds/ticking-clock.mp3");
    this.alarmSound = new Audio("./sounds/emergency_alarm.mp3");

    this.clockSound.addEventListener("ended", this.playClockSound, false);
    this.alarmSound.addEventListener("ended", this.playAlarmSound, false);
  }

  playButtonClickSound = () => {
    this.buttonSound.play();
  };

  playAlarmSound = () => {
    this.alarmSound.currentTime = 0;
    this.alarmSound.play();
  };

  stopAlarmSound = () => {
    this.alarmSound.pause();
    this.alarmSound.currentTime = 0;
  };

  playClockSound = () => {
    this.clockSound.currentTime = 0;
    this.clockSound.play();
  };

  stopClockSound = () => {
    this.clockSound.pause();
    this.clockSound.currentTime = 0;
  };
}

const sound = new SoundManager();
