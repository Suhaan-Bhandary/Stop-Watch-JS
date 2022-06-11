const audioInput = document.getElementById("audio-input");
const audioTrigger = document.getElementById("audio-trigger");

audioTrigger.addEventListener("click", () => audioInput.click());

audioInput.addEventListener("change", (e) => {
  if (e.target.files.length == 0) {
    audioTrigger.classList.remove("active");
    return;
  }

  let location = URL.createObjectURL(e.target.files[0]);
  sound.changeAlarmSound(location);
  audioTrigger.classList.add("active");
});
