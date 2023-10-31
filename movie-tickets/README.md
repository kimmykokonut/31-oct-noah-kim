##TDD Testing for Movie Tickets
_Goal: Create a webpage where a user can select the name of a movie, the time of day that they would like to see the movie and their age. The webpage should let them know how much their movie ticket will cost, based on those three factors. Consider that non-"first-release" movies, matinee, and senior tickets tend to be cheaper than the regular priced ticket._

#### Describe Movie Constructor

Test: Create a movie constructor function and make a new movie object.
Code: let movie = new Movie("The Shining", "R", "Second-Run");
console.log(movie);
Expected Output: {name: "The Shining", rating: "R", release: "Second-Run"}

#### Describe Ticket Constructor

Test: Create a new ticket constructor function and make a new ticket object.
Code: let ticket = new Ticket(Movie, "5:00 PM", "23")
console.log("ticket")
Expected Output: {Movie: Movie, time: "5:00PM", age: "23"}

#### Describe Ticket Price Function

Test: Create ticket price function, where ticket value is determined by age, time of day and release date
Code: ticketPrice("40", "8:00PM", "new-release")
Expected Output: 15

#### Describe Array of Movie Objects

Test: Create objects for each movie and store them in an array.
Code: console.log(moviesArray);
Expected Output: [Movie, Movie, Movie];

#### Describe Age Assessment Function

Test: Create a function that takes age input and determines if "R" rated movie is inappropriate
Code: assessAge(15)
Expected Output: true

Test: Add to assessAge to determine if "PG13" movie is inappropriate
Code: assessAge(8)
Expected Output: true

#### Describe Checking Movie Against Ratings Array

Test: Create a function that takes a movie input and checks if its rating is included in the ratings array.
Code: checkMovieAgainstRatingsArray(theShining[1])
Expected Output: false

Test: 
Code:
Expected Output:
