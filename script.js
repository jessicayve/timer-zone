let timer;
let totalTimeInSeconds;
let isRunning = false;

function requestNotificationPermission() {
    if (Notification.permission !== "granted") {
        Notification.requestPermission().then(permission => {
            if (permission !== "granted") {
                alert("As notificações não foram permitidas. Você não receberá alertas quando o tempo acabar.");
            }
        });
    }
}

function updateDisplay() {
    const display = document.getElementById('timer');
    const minutes = Math.floor(totalTimeInSeconds / 60);
    const seconds = totalTimeInSeconds % 60;
    display.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

export function notifyUser() {
    if (Notification.permission === "granted") {
        new Notification("Seu Tempo Acabou!", {
            body: "Seu tempo acabou! Hora de fazer uma pausa.",
            icon: "assets/timer16.png"
        });
    }
}

export function playAlarm() {
    const alarmSound = document.getElementById('alarm-sound');
    if (alarmSound) {
      alarmSound.play();
    }
  }
  

export function startTimer() {
   

    if (isRunning) return;

    const inputMinutes = document.getElementById('minutes').value;
    const minutes = parseInt(inputMinutes, 10);

    if (isNaN(minutes) || minutes <= 0) {
        alert('Por favor, insira um número válido de minutos.');
        return;
    }

    totalTimeInSeconds = minutes * 60;
    isRunning = true;
    updateDisplay();

    timer = setInterval(() => {
        if (totalTimeInSeconds === 0) {
            clearInterval(timer);
            isRunning = false;
            notifyUser();
            playAlarm();
            alert('Tempo completo!');
        } else {
            totalTimeInSeconds--;
            updateDisplay();
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(timer);
    isRunning = false;
}

function resetTimer() {
    stopTimer();
    const inputMinutes = document.getElementById('minutes').value;
    totalTimeInSeconds = parseInt(inputMinutes, 10) * 60;
    if (!isNaN(totalTimeInSeconds) && totalTimeInSeconds > 0) {
        updateDisplay();
    }
}

document.addEventListener('DOMContentLoaded', (event) => {
    

    document.getElementById('start').addEventListener('click', startTimer);
    document.getElementById('pause').addEventListener('click', stopTimer);
    document.getElementById('stop').addEventListener('click', resetTimer);

    requestNotificationPermission();
    resetTimer();
});