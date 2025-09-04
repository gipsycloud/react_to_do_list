function FavouriteList({ searchResults, addFavourite }) {
  return (
    <div>
      <h3>Results:</h3>
      <ul>
        {searchResults.map((movie) => (
          <li key={movie.id}>
            {movie.original_title}
            <button onClick={() => addFavourite(movie)}>Add to Favourites</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FavouriteList;