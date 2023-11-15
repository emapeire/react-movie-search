import useMovies from '../hooks/useMovies'

export default function Movies() {
  const { movies } = useMovies()
  const hasMovies = movies?.length > 0

  if (!hasMovies) return <p>No movies found</p>

  return (
    <ul className='movies'>
      {movies.map((movie) => (
        <li className='movie' key={movie.id}>
          <h2>{movie.title}</h2>
          <p>{movie.year}</p>
          <img src={movie.poster} alt={movie.title} />
        </li>
      ))}
    </ul>
  )
}
