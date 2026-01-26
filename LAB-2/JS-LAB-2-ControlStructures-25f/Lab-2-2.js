//######## LAB 2-2 LOGIN ########
//1. LINK THIS JS FILE TO THE HTML FILE
// alert("hey 2.2");//COMMENT OUT ONCE CONNECTED TO YOUR HTML PAGE

//====VARIABLES===============
//2. CREATE NECESSARY VARIABLES
		// Correct user name
		var correctUserName = "dart";
		// Correct password
		var correctPassword = "vader";
		// user name input
		var userNameInput;
		// password input
		var passwordInput;



//====LOGIC===================
//3. CREATE POPUP BOX FOR USERNAME
userNameInput = prompt("Please enter your username: ");

//4. OUTPUT PROVIDED USERNAME TO JS CONSOLE
console.log("Provided Username: " + userNameInput);

//5. CREATE POPUP BOX FOR PASSWORD
passwordInput = prompt("Please enter your password: ");

//6. OUTPUT PROVIDED PASSWORD TO JS CONSOLE
console.log("Provided Password: " + passwordInput);

//7. CHECK IF PROVIDED USERNAME AND PROVIDED PASSWORD MATCH THE STORED USERNAME/PASSWORD
if (userNameInput === correctUserName && passwordInput === correctPassword) {
	//8. IF THEY MATCH, POPUP SUCCESS MESSAGE AND OUTPUT TO CONSOLE
	alert("Login successful!");
	console.log("Login successful!");
} else {
	alert("Invalid username or password.");
	//9. IF THEY DON'T MATCH, POPUP INVALID MESSAGE & OUTPUT TO CONSOLE
	console.log("Invalid username or password.");
}

