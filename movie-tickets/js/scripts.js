function Movie(title, rating, release) {
    this.title = title;
    this.rating = rating;
    this.release = release;
}

function Ticket(Movie, time, age) {
    this.Movie = Movie;
    this.time = time;
    this.age = age;
}