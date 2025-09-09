function MovieCard({ movie, children }) {
  const base_url = "https://image.tmdb.org/t/p/w500";
  const placeholder_image = "https://image.tmdb.org/t/p/w300/9Rj8l6gElLpRL7Kj17iZhrT5Zuw.jpg";

  return (
    <li style={{ border: '1px solid #eee', padding: '10px', borderRadius: '5px', textAlign: 'center' }}>
      <img
        src={movie.poster_path ? `${base_url}${movie.poster_path}` : placeholder_image}
        alt={movie.title || movie.original_title}
        style={{ width: "100%", height: "auto", objectFit: "cover", borderRadius: "3px", marginBottom: '10px' }}
      />
      <div>
        <h4>{movie.title || movie.original_title}</h4>
        <p>ID: {movie.id}</p>
      </div>
      <div style={{ marginTop: '10px' }}>
        {children} {/* This will render the specific button (add/remove) */}
      </div>
    </li>
  );
}

export default MovieCard;