var userinput = confirm("Would you like to join my mailing list???");

var email;

var defaulttext = "me@example.com";

//==== LOGIC =============

if (userinput === false) {
  alert("Thank you, we will not bother you again.");
} else {
  email = prompt("Enter your email id", defaulttext);

  console.log(email);

  switch (email) {
    case null:
      alert("Thank you, but your email was not valid.");

      break;

    case "":
      alert("Thank you, but your email was not valid.");

      break;

    case defaulttext:
      alert("Thank you, but your email was not valid.");

      break;

    default:
      alert("Thank you, our next newsletter will be sent to " + email);

      break;
  }
}
