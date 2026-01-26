// Pick ONE team number (1–6)
const teamNumber = 3;

// Team members (first name → full name)
const teamMembers = {
  Voran: "Voran Zov",
  Lovepreet: "Lovepreet Singh",
  Megha: "Megha Kamalan",
  Emmey: "Emmey Williams",
};
/*
The code above defines a team number and a list of team members with their first names as keys and full names as values.
This will be used to verify user input for team login.
*/

// Ask for team number
let teamInput = Number(prompt("Which team are you on?"));

if (teamInput === teamNumber) {
  let firstName = prompt("Please enter your first name:");

  // Check if user clicked Cancel (null) or entered nothing (empty string)
  if (!firstName) {
    alert("Access denied!");
  } else {
    firstName = firstName.trim(); // Trim whitespace
    firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase(); // first letter uppercase, rest lowercase

    // Check if first name exists in team members
    if (teamMembers[firstName]) {
      alert("Hello " + firstName + "! Welcome " + teamMembers[firstName]);
    } else {
      alert("Access denied!");
    }
  }
} else {
  alert("Access denied!");
}
