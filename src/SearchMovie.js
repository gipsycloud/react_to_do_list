import { useState } from "react";

function SearchMovie() {
  const [movieTitle, setMovieTitle] = useState("");
  const SearchMovie = async (e) => {
    e.preventDefault();
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${movieTitle}`;
    // const url = `http://www.omdbapi.com/?i=tt3896198&apikey=9abb6e1a=${movieTitle}`;
    console.log("url:", url);
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log("error", error);
    }
  }
  return (
    <div>
      <div>SearchMovie</div>
      <div>
        <form onSubmit={SearchMovie}>
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
    </div>
  )
}

export default SearchMovie;