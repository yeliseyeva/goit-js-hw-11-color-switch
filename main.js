const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
];

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

const refs = {
    startBtn: document.querySelector('[data-action="start"]'),
    stopBtn: document.querySelector('[data-action="stop"]'),
}

let isActive;

refs.startBtn.addEventListener('click', startColorSwitch => {
    refs.startBtn.disabled = true;
    isActive = setInterval(() => {
        document.body.style.backgroundColor = colors[randomIntegerFromInterval(0, 5)]
    }, 1000)
})

refs.stopBtn.addEventListener('click', stopColorSwitch => {
    clearInterval(isActive)
    refs.startBtn.disabled = false;
})