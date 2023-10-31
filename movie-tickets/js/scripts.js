function Movie(title, rating, release) {
    this.title = title;
    this.rating = rating;
    this.release = release;
}
//need this? use to print Ticket.
function TicketRequest(Movie, age, time) {
    this.Movie = Movie;
    this.age = age;
    this.time = time;
}

const theShining = new Movie("The Shining", "R", "Second-Run");
const pawPatrol = new Movie("Paw Patrol: The Mighty Movie", "PG", "New-Release");
const theRing = new Movie("The Ring", "PG13", "Second-Run");

const moviesArray = [theShining, pawPatrol, theRing];

let ratingsArray = ["R","PG13", "PG"];

function assessAge(age) {
    if (age > 16) {
        return ratingsArray;
    } else if (age < 17 && age > 12) {
        let ratingsArray = ["PG13", "PG"];
        return ratingsArray;
    } else {
        let ratingsArray = ["PG"];
        return ratingsArray;
    }
}

function checkMovieAgainstRatingsArray(Movie, age) {
    let ratingsArray = assessAge(age);
    console.log(ratingsArray);
    console.log(Movie.rating);
    if (ratingsArray.includes(Movie.rating)) {
        return ticketPrice();
    } else {
        console.log("Bad News ERROR");
    }
}



function ticketPrice(age, time, newRelease) {
    let price = 15;
    if (age > 11 && age < 65) {
        if (time > 5) {
            if (newRelease === false) {
                let totalPrice = price - 2;
                return totalPrice;
            } else return price;
        } else if (time < 5) {
            if (newRelease === false) {
                let totalPrice = price - 5;
                return totalPrice;
            } else {
                let totalPrice = price - 3;
                return totalPrice;
            }
        }
    } else if (age > 64) {
        if (time > 5) {
            if (newRelease === false) {
                let totalPrice = price - 5;
                return totalPrice;
            } else {
                let totalPrice = price - 3;
                return totalPrice;
            }
        } else if (time < 5) {
            if (newRelease === false) {
                let totalPrice = price - 8;
                return totalPrice;
            } else {
                let totalPrice = price - 6;
                return totalPrice;
            }
        }
    } else {
        if (time > 5) {
            if (newRelease === false) {
                let totalPrice = price - 7;
                return totalPrice;
            } else {
                let totalPrice = price - 5;
                return totalPrice;
            }
        } else if (time < 5) {
            if (newRelease === false) {
                let totalPrice = price - 10;
                return totalPrice;
            } else {
                let totalPrice = price - 8;
                return totalPrice;
            }
        }
    }
}

function handleFormSubmission(e) {
    e.preventDefault();
    const inputName = document.querySelector("input#nameInput").value;
    const inputAge = parseInt(document.querySelector("input#ageInput").value);
    const inputMovie = document.querySelector("select#movieChoice").value;
    function findMovie(inputMovie) {
        if (inputMovie === "1") {
            let objectMovie = theShining;
            return objectMovie;
        } else if (inputMovie === "2") {
            let objectMovie = theRing;
            return objectMovie;
        } else {
            let objectMovie = pawPatrol;
            console.log(objectMovie);
            return objectMovie;
        }
    }
    const inputTime = parseInt(document.getElementById("timeChoice").value);
    let chosenMovie = findMovie(inputMovie);
    console.log(chosenMovie);
    checkMovieAgainstRatingsArray(Movie, inputAge)    
    let newTicketRequest = new TicketRequest(chosenMovie, inputAge, inputTime);

    //run ageAssess, which will error or cascade into checkMovieArray, error or cascase into ticketPrice
    //show ticket price

    //jump scare for shining selection
}

window.addEventListener("load", function() {
    document.querySelector("form#userSelect").addEventListener("submit", handleFormSubmission);
});
