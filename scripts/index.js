const buttonOne = document.querySelector(".button-one");
const buttonTwo = document.querySelector(".button-two");
const text = document.querySelector(".text-with-buttons__text-container");
buttonOne.addEventListener("click", () => {
  buttonOne.classList.toggle("text-with-buttons__button_active");
  buttonOne.dataset.state === "on" ? (buttonOne.dataset.state = "off") : (buttonOne.dataset.state = "on");
});
buttonTwo.addEventListener("click", () => {
  buttonTwo.classList.toggle("text-with-buttons__button_active");
  buttonTwo.dataset.state === "on" ? (buttonTwo.dataset.state = "off") : (buttonTwo.dataset.state = "on");
  if (buttonOne.dataset.state === buttonTwo.dataset.state) {
    text.classList.toggle("text-with-buttons__text-contsiner_hide");
    buttonOne.classList.remove("text-with-buttons__button_active");
    buttonTwo.classList.remove("text-with-buttons__button_active");
    buttonOne.dataset.state = "off";
    buttonTwo.dataset.state = "off";
  }
});
