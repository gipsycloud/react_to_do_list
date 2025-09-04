import { useState } from "react";
import FavouriteList from "../src/component/FavouriteList";

function SearchMovie() {
  const [movieTitle, setMovieTitle] = useState("");
  const [favourites, setFavourites] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const addFavourite = (movie) => {
    setFavourites([...favourites, movie]);
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
    <div>
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
      <FavouriteList searchResults={searchResults} addFavourite={addFavourite} />
      {/* <FavouriteList favourites={favourites} /> */}
    </div>
  )
}

export default SearchMovie;