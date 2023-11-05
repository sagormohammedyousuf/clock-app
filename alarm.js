const currentTime = document.querySelector(".time");

content = document.querySelector(".select-option");
selectMenu = document.querySelectorAll("select");
setAlarmBtn = document.querySelector(".set-alarm-btn");

let alarmTime,
  isAlarmSet,
  // import audio //
  ringtone = new Audio("./public/ringtone.mp3");

// set hour dynamically //
for (let i = 12; i > 0; i--) {
  i = i < 10 ? `0${i}` : i;
  let option = `<option value="${i}">${i}</option>`;
  selectMenu[0].firstElementChild.insertAdjacentHTML("afterend", option);
}

// set min dynamically //
for (let i = 59; i >= 0; i--) {
  i = i < 10 ? `0${i}` : i;
  let option = `<option value="${i}">${i}</option>`;
  selectMenu[1].firstElementChild.insertAdjacentHTML("afterend", option);
}

// set amm pm dynamically //
for (let i = 2; i > 0; i--) {
  let ampm = i == 1 ? "AM" : "PM";
  let option = `<option value="${ampm}">${ampm}</option>`;
  selectMenu[2].firstElementChild.insertAdjacentHTML("afterend", option);
}
setInterval(() => {
  // get date //

  let date = new Date(),
    h = date.getHours(),
    m = date.getMinutes(),
    s = date.getSeconds(),
    ampm = "AM";
  if (h >= 12) {
    h = h - 12;
    ampm = "PM";
  }
  h = h == 0 ? (h = 12) : h;
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  // format of current date or showing current date //
  currentTime.innerText = `${h}:${m}:${s} ${ampm}`;

  // if alarm is equal to current time then ring alarm //
  if (alarmTime === `${h}:${m} ${ampm}`) {
    ringtone.play();
    ringtone.loop = true; // ring play multiple times //
  }
});

// set alarm //
function setAlarm() {
  if (isAlarmSet) {
    alarmTime = "";
    ringtone.pause();
    content.classList.remove("disable");

    // change set btn text //
    setAlarmBtn.innerText = "Set Alarm";
    return (isAlarmSet = false);
  }

  //alarm time validation //

  let time = `${selectMenu[0].value}:${selectMenu[1].value} ${selectMenu[2].value}`;
  if (
    time.includes("Hour") ||
    time.includes("Minute") ||
    time.includes("AM/PM")
  ) {
    return alert("Please, select a valid time to set Alarm!");
  }
  alarmTime = time;
  isAlarmSet = true;
  content.classList.add("disable");

  // change set btn text //
  setAlarmBtn.innerText = "Clear Alarm";
}
setAlarmBtn.addEventListener("click", setAlarm);
