const start = document.querySelector('.start');
const pause = document.querySelector('.pause');
const reset = document.querySelector('.reset');

const hour = document.querySelector('#hh');
const minute = document.querySelector('#mm');
const second = document.querySelector('#ss');

const hourTimer = document.querySelector('.hour-timer')
const minuteTimer = document.querySelector('.minute-timer')
const secondTimer = document.querySelector('.second-timer')

const allInput = document.querySelector('.All-input')

let remainingTime = 0;
let timerRunning = false;
let timer;


start.addEventListener('click', () => {
    clearInterval(timer)
    allInput.classList.add('hidden')
    timerRunning = true
    let hourNumber = Number(hour.value) || 0;
    let minuteNumber = Number(minute.value) || 0;
    let secondNumber = Number(second.value) || 0;

    remainingTime = (hourNumber * 60 * 60) + (minuteNumber * 60) + secondNumber;

    timer = setInterval(() => {
        if (timerRunning) {
            timeCalculate(remainingTime)
            remainingTime = remainingTime -1 
        }
    }, 1000)
});

pause.addEventListener('click', function(){
        if (timerRunning) {
            timerRunning = false
            clearInterval(timer)            
        }else {
            timerRunning = true
            timeCalculate(remainingTime)
        }
    })

function timeCalculate(time) {
    if (time <= -1) {
        timerRunning = false
        return;
    }
    let hh = Math.floor(Number(time / 3600))
    time = time - (hh * 60 * 60)
    let mm = Math.floor(Number(time / 60))
    time = time - (mm * 60)
    let ss = time

    showTimerUI(hh, mm, ss)
}

function showTimerUI(hh, mm, ss) {
    hourTimer.textContent = hh
    minuteTimer.textContent = mm
    secondTimer.textContent = ss
}

reset.addEventListener('click', () => {
    remainingTime = 0;
    timerRunning = false
    showTimerUI(0,0,0)
    allInput.classList.remove('hidden')
})