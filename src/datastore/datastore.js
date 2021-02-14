let movies = [
  {
    title: "The Irishman",
    year: "2019",
    rating: "7,9",
    director: "Martin Scorsese",
    genre: "Biography, crime, drama",
  },
  {
    title: "The Wolf of Wall Street",
    year: "2013",
    rating: "8,2",
    director: "Martin Scorsese",
    genre: "Biography, crime, drama",
  },
  {
    title: "The Way Back",
    year: "2020",
    rating: "6,7",
    director: "Gavin O'Connor",
    genre: "Drama, sport",
  },
];

function addMovie(title, year, rating, director, genre) {
  const movie = {
    title: title,
    year: year,
    rating: rating,
    director: director,
    genre: genre,
  };

  movies.push(movie);
}

function getMovies() {
  return movies;
}

export { addMovie, getMovies };
