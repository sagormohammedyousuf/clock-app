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
  stopBtn.removeAttribute("disabled");
  resetBtn.removeAttribute("disabled");
  timeIndex = setInterval(() => {
    ++seconds;

    // set sec , min , hour //
    let secs = seconds % 60;
    let mins = Math.floor(seconds / 60) % 60;
    let hrs = Math.floor(seconds / (60 * 60));

    if (secs < 10) {
      secs = "0" + secs;
    }
    if (mins < 10) {
      mins = "0" + mins;
    }
    if (hrs < 10) {
      hrs = "0" + hrs;
    }
    timeContainer.innerText = `${hrs}:${mins}:${secs}`;
  }, 1000);
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
  startBtn.removeAttribute("disabled");
  clearInterval(timeIndex);
  timeIndex = null;
  timeContainer.innerText = `00:00:00`;
  seconds = 0;
});
