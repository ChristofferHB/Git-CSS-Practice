import "./MovieFriend.css";
import { addMovie, getMovies } from "../../datastore/datastore";

function MovieFriend() {
  console.log(getMovies());
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
              value="Search for movie by name..."
              name="name"
            />
          </label>
        </form>
      </div>
      <div id="movie-friend-search-content"></div>
    </div>
  );
}

export default MovieFriend;
