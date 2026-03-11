// this function checks if the current temperature is safe for walking a dog
// it expects one parameter: currentTemp (number)
// it returns a boolean value: true if safe, false if not safe  
function checkTemp(currentTemp) {
    if (currentTemp > 30 || currentTemp < -10) {
        return false;
    } else {
        return true;
    }       
}
var userTemp = prompt("Please enter the current temperature:");
var isSafeToWalk = checkTemp(parseInt(userTemp));
if (isSafeToWalk) {
    alert("You’re good, have a nice walk!");
} else {
    alert("Yikes! This is no weather for dog walking!");
}



