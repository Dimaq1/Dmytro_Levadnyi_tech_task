const steps = document.querySelectorAll(".step");
const continueButtons = document.querySelectorAll(".--continue");

const leftPhoto = document.querySelector(".bg-photo__left");
const rightPhoto = document.querySelector(".bg-photo__right");
const stepsContainer = document.querySelector(".steps-container");

let currentStep = 0;

function showNewStep(index) {
  steps.forEach((step, i) => {
    if (i === index) {
      step.classList.add("active-step");

      if (i === 0) {
        leftPhoto.classList.add("visually-hidden-sm");
      } else {
        leftPhoto.classList.remove("visually-hidden-sm");
      }

      if (i === 1) {
        stepsContainer.classList.add("align-start");
        leftPhoto.style.display = "none";
        rightPhoto.style.display = "none";
      } else {
        stepsContainer.classList.remove("align-start");
        leftPhoto.style.display = "block";
        rightPhoto.style.display = "block";
      }

      if (i === 2) {
        leftPhoto.src = "./assets/images/bg-girl-step3-left.png";
        rightPhoto.src = "./assets/images/bg-girl-step3-right.png";
        rightPhoto.classList.add("visually-hidden-md");
      } else {
        rightPhoto.classList.remove("visually-hidden-md");
      }
    } else {
      step.classList.remove("active-step");
    }
  });
}

function initSteps() {
  continueButtons.forEach((button) => {
    button.addEventListener("click", () => {
      if (currentStep < steps.length - 1) {
        currentStep++;
        showNewStep(currentStep);
      }
    });
  });

  showNewStep(currentStep);
}

export default initSteps;
