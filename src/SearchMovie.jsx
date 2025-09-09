import { useState } from "react";
import SearchResults from "../src/component/SearchResults";
import FavouriteMovies from "../src/component/FavouriteMovies";

function SearchMovie() {
  const style = {
    border: "1px solid black",
    margin: "10px",
    padding: "10px",
    borderRadius: "5px",
    textAlign: "center",
  }
  const [movieTitle, setMovieTitle] = useState("");
  const [favourites, setFavourites] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const addFavourite = (movie) => {
    setFavourites([...favourites, movie]);
  }

  const removeFavourite = (movie) => {
    setFavourites(favourites.filter((fav) => fav.id !== movie.id));
  }

  console.log("favourites:", favourites);
  const handleSearchMovie = async (e) => {
    e.preventDefault();
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${movieTitle}`;
    console.log("url:", url);
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log("data:", data);
      setSearchResults(data.results || []);
    } catch (error) {
      console.log("error", error);
    }
  }
  return (
    <div style={style}>
      <div>SearchMovie</div>
      <div>
        <form onSubmit={handleSearchMovie}>
          <label htmlFor="movie">Movie Name</label>
          <input id="movie" type="text"
            name="query"
            value={movieTitle}
            onChange={(e) => setMovieTitle(e.target.value)}
            placeholder="Enter movie name"
            role="search" />
          <button type="submit">Search</button>
        </form>
      </div>
      <SearchResults
        searchResults={searchResults}
        addFavourite={addFavourite}
      />
      <FavouriteMovies
        favourites={favourites}
        removeFavourite={removeFavourite} />
    </div>
  )
}

export default SearchMovie;