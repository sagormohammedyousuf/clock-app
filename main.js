"use strict";

import "./style.css";

// program for stop-watch //

// select html element by query selector //
const timeContainer = document.querySelector(".stop-time");
const startBtn = document.querySelector("#button-start");
const stopBtn = document.querySelector("#button-stop");
const resetBtn = document.querySelector("#button-reset");

let timeIndex = null;

// initial value 0 //
let seconds = 0;

startBtn.addEventListener("click", () => {
  startBtn.setAttribute("disabled", "true");
  stopBtn.style.background = "red" 
  startBtn.style.background = "#c384fd" 
  stopBtn.removeAttribute("disabled");
  stopBtn.style.top = "0";

  resetBtn.removeAttribute("disabled");
  let totalTime = 0
  timeIndex = setInterval(() => {
    totalTime += 100;





    // Calculate hours, minutes, seconds, and milliseconds
    let totalMilliseconds = totalTime;
    let secs = Math.floor((totalMilliseconds / 1000) % 60);
    let mins = Math.floor((totalMilliseconds / (1000 * 60)) % 60);
    let hrs = Math.floor(totalMilliseconds / (1000 * 60 * 60));

    let formattedMilliseconds = (totalMilliseconds % 1000).toString().padStart(3, '0');
    let formattedSeconds = secs.toString().padStart(2, '0');
    let formattedMinutes = mins.toString().padStart(2, '0');
    let formattedHours = hrs.toString().padStart(2, '0');




    timeContainer.innerText = `${formattedHours}:${formattedMinutes}:${formattedSeconds}.${formattedMilliseconds}`;



    
  }, 100);
});

// stop btn  functionality //
stopBtn.addEventListener("click", () => {
  startBtn.removeAttribute("disabled");
  stopBtn.setAttribute("disabled", "true");
  
  clearInterval(timeIndex);
  timeIndex = null;
});

// rest btn  functionality //
resetBtn.addEventListener("click", () => {
  resetBtn.setAttribute("disabled", "true");
  stopBtn.setAttribute("disabled", "true");
  stopBtn.style.background = "#713abe" 
  startBtn.style.background = "#713abe" 
  startBtn.removeAttribute("disabled");
  clearInterval(timeIndex);
  timeIndex = null;
  timeContainer.innerText = `00:00:00`;
  seconds = 0;
});















// current time and date //

function updateClock() {
  const now = new Date();

  // current time //
  const hours = now.getHours();
  const ampm = hours >= 12 ? "PM" : "AM";
  const displayHours = (hours % 12 || 12).toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const timeSting = `${displayHours}:${minutes} ${ampm} `;
  // showing date and time on display //
  document.getElementById("current-time").textContent = timeSting;
}
//update the clock every second //
setInterval(updateClock, 1000);
// update //
updateClock();
