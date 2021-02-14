import React from "react";
import "./MovieFriend.css";
import { addMovie, getMovies } from "../../datastore/datastore";

class MovieFriend extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movieSearchText: "Search for a movie by name...",
    };
    this.movieSearchOnChange = this.movieSearchOnChange.bind(this);
  }

  movieSearchOnChange(e) {
    this.setState({
      movieSearchText: e.target.value,
    });
  }

  render() {
    return (
      <div id="movie-friend-container">
        <div id="movie-friend-logo">
          <p>MovieFriend</p>
        </div>
        <div>
          <form>
            <label>
              <input
                id="movie-friend-search-field"
                type="text"
                value={this.state.movieSearchText}
                name="name"
                onChange={this.movieSearchOnChange}
              />
            </label>
          </form>
        </div>
        <div id="movie-friend-search-content">
          {getMovies().map((movie, index) => (
            <div id="movie">
              <p id="movie-title-year">
                {movie.title} ({movie.year})
              </p>
              <div id="movie-genre-rating">
                <div>
                  {" "}
                  <p id="movie-rating">{movie.rating}</p>
                </div>
                <p id="movie-director">{movie.director}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default MovieFriend;
