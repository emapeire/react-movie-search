/* eslint-disable react/prop-types */
export default function Movies({ movies }) {
  const hasMovies = movies?.length > 0
  if (!hasMovies) return <p>No movies found</p>

  return (
    <ul className='movies'>
      {movies.map((movie) => (
        <li className='movie' key={movie.id}>
          <h3>{movie.title}</h3>
          <p>{movie.year}</p>
          <img src={movie.poster} alt={movie.title} />
        </li>
      ))}
    </ul>
  )
}
