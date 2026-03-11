let seconds = 0;
let timer = null;

const display = document.getElementById("timerDisplay");

function updateDisplay() {
    display.innerHTML = seconds;
}

document.getElementById("startTimer").onclick = function () {
    if (timer !== null) return;

    timer = setInterval(function () {
        seconds++;
        updateDisplay();
    }, 1000);
};

document.getElementById("stopTimer").onclick = function () {
    clearInterval(timer);
    timer = null;
};

document.getElementById("resetTimer").onclick = function () {
    clearInterval(timer);
    timer = null;
    seconds = 0;
    updateDisplay();
};