const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const body = document.querySelector('body');
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
let changeColor = null;
startBtn.addEventListener('click', () => {
  changeColor = setInterval(() => {
    body.style.background = getRandomHexColor();
  }, 1000);
  startBtn.setAttribute('disabled', 'disabled');
});
stopBtn.addEventListener('click', () => {
  clearInterval(changeColor);
  startBtn.removeAttribute('disabled', 'disabled');
});
