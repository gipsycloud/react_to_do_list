import MovieCard from "./MovieCard";
function SearchResults({ searchResults, addFavourite }) {
  return (
    <div>
      <h3>Results:</h3>
      {searchResults.length === 0 ? (
        <div>No search results</div>
      ) : (
        <div className="movie-grid">
          <ul>
            {searchResults.map((movie) => (
              <MovieCard key={movie.id} movie={movie}>
                <button onClick={() => addFavourite(movie)}>
                  Add to Favourites
                </button>
              </MovieCard>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default SearchResults;