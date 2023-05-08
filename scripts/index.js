const buttonOne = document.querySelector(".button-one");
const buttonTwo = document.querySelector(".button-two");
const text = document.querySelector(".text-with-buttons__text-container");
buttonOne.addEventListener("click", () => {
  buttonOne.classList.toggle("text-with-buttons__button_active");
  setDataset(buttonOne);
  buttonTwo.addEventListener("click", {});
});
buttonTwo.addEventListener("click", () => {
  buttonTwo.classList.toggle("text-with-buttons__button_active");
  setDataset(buttonTwo);

  if (buttonOne.dataset.state === "on" && buttonTwo.dataset.state === "on") {
    text.classList.toggle("text-with-buttons__text-container_hide");
    buttonOne.classList.remove("text-with-buttons__button_active");
    buttonTwo.classList.remove("text-with-buttons__button_active");
  }
  buttonOne.dataset.state = "off";
  buttonTwo.dataset.state = "off";
});
function setDataset(item) {
  return item.dataset.state === "on" ? (item.dataset.state = "off") : (item.dataset.state = "on");
}
