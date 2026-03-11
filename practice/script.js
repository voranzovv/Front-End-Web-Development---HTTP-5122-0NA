window.onload = onStart;
var clock;
const deadLine = new Date("2026-03-20");
function onStart() {
  const oneDay = 1000 * 60 * 60 * 24;
   const dayCount = Math.floor((deadLine- new Date())/oneDay);
   console.log(dayCount);
   

  document.getElementById("displayDeadline").innerHTML = dayCount
  //buttons
  document.getElementById("startBtn").addEventListener("click", startTime);
  document.getElementById("stopBtn").addEventListener("click", stopTime);
  displayTime();
}

function displayTime(params) {
  var timeNow = new Date();
  var currentTimeDis = document.getElementById("currentTime");
  currentTimeDis.innerHTML = timeNow.toDateString();

  var date = timeNow.getDay();
  var hour = timeNow.getHours();
  var min = timeNow.getMinutes();
  var sec = timeNow.getSeconds();

  document.getElementById("disHour").innerHTML = make2digit(hour);
  document.getElementById("disMin").innerHTML = ":" + make2digit(min);
  document.getElementById("disSec").innerHTML = ":" + make2digit(sec);
}

function startTime(params) {
  // displayTime();
  clock = setInterval(displayTime, 1000);

  console.log("startTime");
}

function stopTime(params) {
  clearInterval(clock);
  console.log("stopTime");
}

function make2digit(input) {
  return input < 10 ? "0" + input : input;
}

console.log("make it 2 digit", make2digit(2));
