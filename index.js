let timerInterval;
let isRunning = false;
let timeLeft = 25 * 60; // Default to 25 minutes for Pomodoro
let isPaused = false;
const timerDisplay = document.getElementById('timer-display');
const timerAlert = document.getElementById('timerAlert');

function updateDisplay() {
    const hours = String(Math.floor(timeLeft / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((timeLeft % 3600) / 60)).padStart(2, '0');
    const seconds = String(timeLeft % 60).padStart(2, '0');
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
}

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        timerInterval = setInterval(function() {
            if (timeLeft > 0) {
                timeLeft--;
                updateDisplay();
            } else {
                clearInterval(timerInterval);
                timerAlert.play();
                isRunning = false;
            }
        }, 1000);
    }
}

function pauseTimer() {
    clearInterval(timerInterval);
    isRunning = false;
}

function resetTimer() {
    clearInterval(timerInterval);
    isRunning = false;
    timeLeft = 25 * 60; // Default reset to Pomodoro (25 min)
    updateDisplay();
}

function stopTimer() {
    clearInterval(timerInterval);
    isRunning = false;
    timeLeft = 0;
    updateDisplay();
}

function setPomodoroMode() {
    timeLeft = 25 * 60;
    updateDisplay();
    if (isRunning) {
        clearInterval(timerInterval);
        startTimer();
    }
}

function setShortBreak() {
    timeLeft = 5 * 60;
    updateDisplay();
    if (isRunning) {
        clearInterval(timerInterval);
        startTimer();
    }
}

function setLongBreak() {
    timeLeft = 15 * 60;
    updateDisplay();
    if (isRunning) {
        clearInterval(timerInterval);
        startTimer();
    }
}

document.addEventListener('DOMContentLoaded', updateDisplay);
