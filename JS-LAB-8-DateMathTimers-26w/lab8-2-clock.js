/* LAB 8.2 - STOP TIME */

//create page load listener
window.onload = goNow;

//create page load function
function goNow() {
  //create variables for required HTML elements
  var hoursOut = document.getElementById("hoursOut");
  var minsOut = document.getElementById("minsOut");
  var secsOut = document.getElementById("secsOut");

  var btnStart = document.getElementById("btnStart");
  var btnStop = document.getElementById("btnStop");

  var clock;

  //CREATE FUNCTION THAT DISPLAYS THE TIME
  function displayTime() {
    //get current time
    var now = new Date();

    //SET THE VALUES OF THE HTML ELEMENTS

    hoursOut.innerHTML = twoDigits(now.getHours());
    minsOut.innerHTML = ":" + twoDigits(now.getMinutes());
    secsOut.innerHTML = ":" + twoDigits(now.getSeconds());
  }

  //CREATE FUNCTION TO START THE CLOCK
  function startClock() {
    clock = setInterval(displayTime, 1000);
  }

  //CREATE FUNCTION TO STOP THE CLOCK
  function stopClock() {
    clearInterval(clock);
  }

  // SET EVENT LISTENERS
  btnStart.addEventListener("click", startClock);
  btnStop.addEventListener("click", stopClock);
}

function twoDigits(d) {
  if (d < 10) {
    return "0" + d;
  } else return d;
}
