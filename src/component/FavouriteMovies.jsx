import MovieCard from "./MovieCard";
function FavouriteMovies({ favourites, removeFavourite }) {
  const handleRemove = (e, movie) => {
    e.stopPropagation();
    removeFavourite(movie);
  };

  return (
    <div>
      <h3>Favourites:</h3>
      {favourites.length === 0 ? (
        <div>No favourites yet.</div>
      ) : (
        <div className="movie-grid">
          <ul>
            {favourites.map((movie) => (
              <MovieCard key={movie.id} movie={movie}>
                <button onClick={(e) => handleRemove(e, movie)}>
                  Remove from Favourites
                </button>
              </MovieCard>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default FavouriteMovies;