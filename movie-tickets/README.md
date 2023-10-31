##TDD Testing for Movie Tickets
_Goal: Create a webpage where a user can select the name of a movie, the time of day that they would like to see the movie and their age. The webpage should let them know how much their movie ticket will cost, based on those three factors. Consider that non-"first-release" movies, matinee, and senior tickets tend to be cheaper than the regular priced ticket._

Test: Create a movie constructor function and make a new movie object.
Code: let movie = new Movie("The Shining", "R", "Second-Run");
console.log(movie);
Expected Output: {name: "The Shining", rating: "R", release: "Second-Run"}

Test: Create a new ticket constructor function and make a new ticket object.
Code: let ticket = new Ticket(Movie, "5:00 PM", "23")
console.log("ticket")
Expected Output: {Movie: Movie, time: "5:00PM", age: "23"}

Test: Create ticket price function, where ticket value is determined by age, time of day and release date
Code: ticketPrice("40", "8:00PM", "new-release")
Expected Output: 15

Test: Create objects for each movie and store them in an array.
Code: console.log(moviesArray);
Expected Output: [Movie, Movie, Movie];

Test: 
Code:
Expected Output:

Test: 
Code:
Expected Output:

Test: 
Code:
Expected Output:

Test: 
Code:
Expected Output:
