window.onload = function() {

	var mysteryBox = document.getElementById("mysteryBox");
	var buttonBox = document.getElementById("buttonBox");

	// Hide buttonBox initially (if CSS doesn’t already)
	buttonBox.style.display = "none";

	// FUNCTION TO ASK USER
	function askUser() {

		var answer = confirm("Do you want to see something?");

		if (answer === true) {
			mysteryBox.style.display = "none";
			buttonBox.style.display = "block";
		}
	}

	// FUNCTION TO CHANGE buttonBox
	function changeButtonBox() {

		buttonBox.style.width = "600px";
		buttonBox.style.backgroundColor = "orange";
		buttonBox.innerHTML = "<h2>SURPRISE!!</h2>";

	}

	mysteryBox.onmouseover = askUser;
	buttonBox.onclick = changeButtonBox;
}
