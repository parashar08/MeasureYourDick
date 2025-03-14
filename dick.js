const dickButton = document.querySelector(".js-dick-button");

dickButton.addEventListener("click", () => {
  const randomNumber = ((Math.random() * 1000) % 8).toFixed(1);
  document.querySelector(
    ".js-result"
  ).innerHTML = `Your dick size is ${randomNumber} inches`;
});

dickButton.addEventListener("blur", () => {
  document.querySelector(".js-result").innerHTML = "";
});
