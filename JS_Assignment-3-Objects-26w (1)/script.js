// 1. Create the custom object
let myMovie = {
    title: "Inception",          // string
    director: "Christopher Nolan", // string
    year: 2010,                  // number
    watched: false,              // boolean

    // Method: Mark movie as watched and alert the user
    markAsWatched: function() {
        this.watched = true;
        alert(`Movie status updated: Watched = ${this.watched}`);
    }
};

// 2. Output original object to console
console.log("Original Object:", myMovie);

// 3. Ask user for input to update 'title' (string)
myMovie.title = prompt("Enter a new movie title:", myMovie.title);

// 4. Ask user for input to update 'director' (string)
myMovie.director = prompt("Enter the movie director:", myMovie.director);

// 5. Call the method to update 'watched'
myMovie.markAsWatched();

// 6. Output updated object to console
console.log("Updated Object:", myMovie);
