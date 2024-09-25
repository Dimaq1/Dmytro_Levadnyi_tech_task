const buttonSound = document.querySelector(".button-sound");
const muted = document.querySelector(".button-sound__muted");

function initSoundButton() {
  buttonSound.addEventListener("click", () => {
    muted.classList.toggle("visible");
  });
}

export default initSoundButton;
