class SoundManager {
  constructor() {
    this.buttonSound = new Audio("./sounds/button_pressed.mp3");
    this.clockSound = new Audio("./sounds/ticking-clock.mp3");
    this.alarmSound = new Audio("./sounds/emergency_alarm.mp3");

    this.clockSound.addEventListener("ended", this.playClockSound, false);
    this.alarmSoundReplayListner = this.alarmSound.addEventListener("ended", this.playAlarmSound, false);
  }

  
  playButtonClickSound = () => {
    this.buttonSound.play();
  };

  changeAlarmSound = (location) => { 
    // removing the event listener before changing the sound
    this.alarmSound.removeEventListener("ended", this.alarmSoundReplayListner);

    // Changing teh alarmSound
    this.alarmSound = new Audio(location);

    // Adding new listeners to the audio 
    this.alarmSoundReplayListner = this.alarmSound.addEventListener("ended", this.playAlarmSound, false);
  }
  
  playAlarmSound = () => {
    console.log("Sound");
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
