import responseMovies from '../mocks/with-results.json'

export default function Movies() {
  const movies = responseMovies.Search.filter((movie) => movie.Type === 'movie')
  const hasMovies = movies?.length > 0

  if (!hasMovies) return <p>No movies found</p>
  return (
    <il>
      {movies.map((movie) => (
        <lu key={movie.imdbID}>
          <h2>{movie.Title}</h2>
          <p>{movie.Year}</p>
          <img src={movie.Poster} alt={movie.Title} />
        </lu>
      ))}
    </il>
  )
}
