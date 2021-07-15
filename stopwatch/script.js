//Listen for a click event on the start button
//Start timer
//Listen for a click event on the stop while the timer is running
//Stop timer but hold the value.
//Start restarts from current time, accumulative
//If timer isRunning,

let isRunning = false;
let timeSoFar = 0;
const d = new Date();

const started = document.getElementById("start").addEventListener("click", startTimer);
const stopped = document.getElementById("stop").addEventListener("click", stopTimer);
const reset = document.getElementById("reset").addEventListener("click", resetTimer);
 
function startTimer() {
    console.log(`Start timer clicked`);
    isRunning = true;
    updateTime(d);
}
function stopTimer() {
    console.log(`Stop timer clicked`);
    isRunning = false;
}
function resetTimer() {
    console.log(`Reset timer clicked`);
}

function updateTime(d) {


}

// startTimer = () => {
//     console.log(`Start button pressed`);
// }




