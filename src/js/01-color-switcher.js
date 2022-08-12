const buttons = {
  startBtn: document.querySelector('button[data-start]'),
  stopBtn: document.querySelector('button[data-stop]'),
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let interval = null;

buttons.startBtn.addEventListener('click', () => {
  buttons.startBtn.disabled = true;
  buttons.stopBtn.disabled = false;

  interval = setInterval(() => {
    document.body.style.background = getRandomHexColor();
  }, 1000);
});

buttons.stopBtn.addEventListener('click', () => {
  buttons.startBtn.disabled = false;
  buttons.stopBtn.disabled = true;
  clearInterval(interval);
});
