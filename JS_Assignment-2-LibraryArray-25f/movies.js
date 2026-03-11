// Declare and initialize 7 movie variables
var movie1 = "EKO";
var movie2 = "Avatar: The Way of Water";
var movie3 = "The Dark Knight";
var movie4 = "Avengers: Endgame";
var movie5 = "Spider-Man: No Way Home";
var movie6 = "The Matrix";
var movie7 = "Parasite";

// Store the movie variables in an array
var topMovies = [
	movie1,
	movie2,
	movie3,
	movie4,
	movie5,
	movie6,
	movie7
];

// Prompt user and validate input 
var userInput;
var isValid = false;

while (!isValid) {
	userInput = prompt("Pick a number: 1-7");
	var movieNumber = parseInt(userInput);

	if (movieNumber >= 1 && movieNumber <= 7) {
		alert(
			"Number " +
			movieNumber +
			" on the list is " +
            //explaination: access the array at index movieNumber - 1 to get the correct movie.
            // movieNumber is 1-based, array index is 0-based
            // So we subtract 1 from movieNumber to get the correct index
			topMovies[movieNumber - 1] + "."
		);
		isValid = true;
	} else {
		alert("Please enter a number between 1 and 7!");
	}
}

// Output the movie list to the console
for (var i = 0; i < topMovies.length; i++) {
	console.log("Movie " + (i + 1) + ": " + topMovies[i]);
}
