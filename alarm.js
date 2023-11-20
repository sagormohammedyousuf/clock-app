// get element // 
const currentTime = document.querySelector(".time");
const content = document.querySelector(".select-option");
const selectMenu = document.querySelectorAll("select");
const setAlarmBtn = document.querySelector(".set-alarm-btn");

// for input type //
const inputHour = document.querySelector("#hourInput").valueAsDate;
const inputMinute = document.querySelector("#minuteInput").valueAsDate;



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
  h = h == 0 ? h = 12 : h;
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  // format of current date or showing current date //
  currentTime.innerText = `${h}:${m}: ${ampm}`;


  // from value of input field //






  // if alarm is equal to current time then ring alarm //
  if (alarmTime === `${h}:${m} ${ampm}`) {
    ringtone.play();
    ringtone.loop = true; // ring play multiple times //
  }
});






function setAlarm() {
  if (isAlarmSet) {
      alarmTime = "";
      ringtone.pause();
      content.classList.remove("disable");
      setAlarmBtn.innerText = "Set Alarm";
      return isAlarmSet = false;
  }





  let time = `${selectMenu[0].value}:${selectMenu[1].value} ${selectMenu[2].value}`;
  let inputTime = `${inputHour}:${inputMinute} ${selectMenu[2].value}`;


  if (time.includes("Hour") || time.includes("Minute") || time.includes("AM/PM") || inputTime.includes("Hour" || inputTime.includes("Minute"))) {
      return alert("Please, select a valid time to set Alarm!");
  }

  
  alarmTime = time || inputTime;
  isAlarmSet = true;
  content.classList.add("disable");
  setAlarmBtn.innerText = "Clear Alarm";
  setAlarmBtn.style.background = "red";
}
setAlarmBtn.addEventListener("click", setAlarm);



















// // set alarm //
// function setAlarm() {
//   if (isAlarmSet) {
//     alarmTime = "";
//     ringtone.pause();
//     content.classList.remove("disable");

//     // change set btn text //
//     setAlarmBtn.innerText = "Set Alarm";
//     setAlarmBtn.style.background = "#713abe";

//     return (isAlarmSet = false);
//   }

//   //alarm time validation //

//   let time = `${selectMenu[0].value}:${selectMenu[1].value} ${selectMenu[2].value}`;

//   //for input
//   // const hourInput = inputHour.value;
//   // const minuteInput = inputMinute.value;


//   // let inputValue = `${inputHour.value}:${inputMinute.value}  ${selectMenu[2].value}`


//   const hourInputValue = (inputHour.value);
//   const minuteInputValue = (inputMinute.value);




//   console.log(hourInputValue + ' ' + minuteInputValue) // check value

//   let inputValue = `${hourInputValue}:${minuteInputValue} ${selectMenu[2].value}`;

//   if (
//     time.includes("Hour") ||
//     time.includes("Minute") ||
//     time.includes("AM/PM")

//     // (hourInputValue === "Hour" || minuteInputValue === "Minute")
//     &&

//     inputValue.includes("hourInputValue") ||
//     inputValue.includes("minuteInputValue") ||
//     time.includes("AM/PM")

//   ) {
//     return alert("Please, select a valid time to set Alarm!");
//   }
//   alarmTime = time;
//   //  alarmTime = time === "Hour:Minute AM/PM" ? inputValue : time;


//   isAlarmSet = true;
//   content.classList.add("disable");

//   // change set btn text //
//   setAlarmBtn.innerText = "Clear Alarm";
//   setAlarmBtn.style.background = "red";
// }


// setAlarmBtn.addEventListener("click", setAlarm);













// function setAlarm() {
//   if (isAlarmSet) {
//     alarmTime = "";
//     ringtone.pause();
//     content.classList.remove("disable");
//     setAlarmBtn.innerText = "Set Alarm";
//     setAlarmBtn.style.background = "#713abe";
//     isAlarmSet = false;
//   } else {
//     const hourSelect = selectMenu[0].value;
//     const minuteSelect = selectMenu[1].value;
//     const ampmSelect = selectMenu[2].value;

//     const hourInputValue = inputHour.value;
//     const minuteInputValue = inputMinute.value;

//     console.log(hourInputValue+ minuteInputValue)

//     if (
//       (hourSelect === "Hour" || minuteSelect === "Minute" || ampmSelect === "AM/PM") &&
//       (hourInputValue === "Hour" || minuteInputValue === "Minute" || ampmSelect === "AM/PM")
//     ) {
//       return alert("Please, select a valid time to set Alarm!");
//     }

//     alarmTime = `${hourSelect || hourInputValue}:${minuteSelect || minuteInputValue} ${ampmSelect}`;

//     isAlarmSet = true;
//     content.classList.add("disable");
//     setAlarmBtn.innerText = "Clear Alarm";
//     setAlarmBtn.style.background = "red";
//     console.log("alarm")
//   }
// }

// setAlarmBtn.addEventListener("click", setAlarm);



