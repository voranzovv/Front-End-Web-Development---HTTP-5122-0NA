/* LAB 8-1 - FINAL COUNTDOWN!! */

//create page load listener
window.onload = goNow;

//create page load function
function goNow() {
  //create variables for required HTML elements
  //create variables for now date and due date
  var nowDate = new Date();
console.log(nowDate)
var dueDate = new Date("2026-04-24 18:00:00");
console.log(dueDate)

  //OUTPUT NOW DATE & DUE DATE TO HTML PAGE
  document.getElementById("todayData").innerHTML = nowDate.toDateString();
    // nowDate.getDate() + " " + nowDate.getMonth() + " " + nowDate.getFullYear();
  document.getElementById("finalData").innerHTML = dueDate.toDateString();

  //CONVERT TO UTC AND SUBTRACT TO GET TIME DIFFERENCE
  var timeDiff = dueDate.getTime() - nowDate.getTime();

  //CONVERT TIME DIFFERENCE TO WHOLE NUMBER OF DAYS
  var daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  //LOGIC TO CHECK IF DUE DATE HAS PASSED, AND OUPUT APPROPRIATE MESSAGE TO HTML PAGE
  if (daysDiff > 0) {
    document.getElementById("countMsg").innerHTML =
      "The Pet Project is due in " + daysDiff + " days.";
  } else {
    document.getElementById("countMsg").innerHTML =
      "The Pet Project is due today!";
  }
}
