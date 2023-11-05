// current time and date //

function updateClock() {
  const now = new Date();

  // current time //
  const hours = now.getHours();
  const ampm = hours >= 12 ? "PM" : "AM";
  const displayHours = (hours % 12 || 12).toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");
  const timeSting = `${displayHours}:${minutes}:${seconds} ${ampm} `;

  // current date //
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth();
  const currentDate = now.getDate();
  const currentDay = days[now.getDay()];
  const newDate = `${currentDay} - ${currentDate}.${currentMonth}.${currentYear}`; 

  // showing date and time on display //
  document.getElementById("current-time").textContent = timeSting;
  document.getElementById("current-date").textContent = newDate;
}

// update the clock every second //
setInterval(updateClock, 1000);
// update //
updateClock();
