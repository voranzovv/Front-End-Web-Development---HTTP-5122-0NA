//######## LAB 2-3 EMAIL SIGNUP ########
// alert("hey 2.3");//COMMENT OUT ONCE CONNECTED TO YOUR HTML PAGE
//==== VARIABLES =========
const wantsToJoin = confirm("Would you like to join our mailing list?");

//==== LOGIC =============
if (wantsToJoin !== true) {
    alert("Thank you, we will not bother you again.");
  } else {
    // Ask for email with helper text
    const defaultText = "me@example.com";
    const email = prompt("Please enter your email address:", defaultText);
    // Validate email input
    if (email === null || email.trim() === "" || email === defaultText) {
        alert("You did not provide a valid email address.");
        console.log("No valid email provided.");
    } else {
        alert("Thank you, our next newsletter will be sent to" + email);
       // console.log("User signed up with email: " + email);
    }
}