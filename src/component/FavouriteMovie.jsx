function FavouriteMovie({ movie }) {
  return (
    <li key={movie.id}>
      <img src={movie.poster_path} />
      <div>
        <h3>{movie.original_title}</h3>
        <p>{movie.Year}</p>
      </div>
    </li>
  )
}

export default FavouriteMovie;